import './App.css';
import read from "./services/read";
import {useEffect, useState} from 'react';
import Quote from "./components/Quote";
import CreateQuote from "./components/CreateQuote";
import UpdateQuote from "./components/UptadeQuote";
import getOptions from "./services/getOptions";
import create from "./services/create";
import deleteMethod from "./services/deleteMethod";
import update from "./services/update";

function App() {

	const [data, setData] = useState([]);
	const [options, setOptions ] = useState([]);
	const [quoteToCreate, setQuoteToCreate] = useState(null);
	const [isLoading, setIsLoading] = useState(false)
	const [quoteToDelete, setQuoteToDelete] = useState(null);
	const [quoteToUpdate, setQuoteToUpdate] = useState(null)
	const [quoteIDToUpdate, setQuoteIDToUpdate] = useState(0)
	const [prevValues, setPrevValues] = useState(null)

	useEffect(()=>{
		read().then(data =>
			setData(data.quotes)
		)
		getOptions().then(data =>{
			setOptions(data.classOptions)
		})
	}, [])

	useEffect(() => {
		if(quoteToCreate){
			setIsLoading(true)
			create(quoteToCreate).then(data =>{
				setQuoteToCreate(null)
				read().then(data =>
					setData(data.quotes)
				)
				setIsLoading(false)

			}, error =>{
				console.log(error)
				setIsLoading(false)
			})
		}
	}, [quoteToCreate])

	useEffect(() => {
		if(quoteToDelete){
			setIsLoading(true)
			console.log('Este es id pa eliminar, ',quoteToDelete)
			deleteMethod(quoteToDelete).then(data => {
				setData((prevState => {
					return prevState.filter(item => item._id !== quoteToDelete)
				}))
				setIsLoading(false)
			}, error =>{console.log(error)})
		}
	},[quoteToDelete])

	useEffect(()=>{
		console.log('estamos desde useeffect y vamos a ver q es quote ', quoteToUpdate)

		if(quoteToUpdate){
			setIsLoading(true)
			console.log('esto es para actualizar ', quoteToUpdate)
			update(quoteIDToUpdate, quoteToUpdate).then(dat=>{
				setIsLoading(false)
				read().then(data =>
					setData(data.quotes)
				)
			})
		}
	}, [quoteToUpdate, quoteIDToUpdate])
	
	const handleCreate = (values)=>{
		setQuoteToCreate(values)
	}

	const handleDelete = (id)=>{
		setQuoteToDelete(id)

	}

	const handleUpdate = (id)=>{
		setQuoteIDToUpdate(id)
		const value = data.find(quote => quote._id === id )
		setPrevValues(value)
	}

	const list = data.map((singleQuote) => {
		return <Quote 
			key={singleQuote._id} 
			id={singleQuote._id} 
			classText={singleQuote.class} 
			text={singleQuote.quote} 
			handleDelete={handleDelete}
			handleUpdate={handleUpdate}
		/>
	})


	return (
		<div className="App">
			<header className="App-header" >
				{list}
				{isLoading ? 'loading': (
					<div>
						{
							quoteIDToUpdate ?
								< UpdateQuote options={options} handleUpdate={setQuoteToUpdate} prevValues={prevValues}  /> :
								< CreateQuote handleCreate={handleCreate} options={options} />
						}
					</div>
				) }
			</header>
		</div>
	);
}

export default App;
