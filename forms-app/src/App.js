import './App.css';
import {useState, useEffect} from 'react'
import {useForm} from "react-hook-form";

function App() {

    const [db, setDb] = useState([])
    const [isUpdating, setIsUpdating] = useState(null)
    const {handleSubmit, register, reset, setValue} = useForm()

    useEffect(() =>{
        if(isUpdating){
            const findValue = db.find((value) => value.userID === isUpdating)
            setValue('userName', findValue.userName)
        }
    },[isUpdating, setValue, db])

    const onSubmit = values =>{
        const {userID, userName} = values
        if(isUpdating){
          setDb(
              db.map(value =>{
                  if (value.userID === isUpdating){
                      return{
                      ...value,
                      userName
                    }
                  }
                return value
              })
          )
            setIsUpdating(null)
            reset()
            return
        }
        const number = Number(userID)

        setDb((prev)=>{
            if(prev.some(elem => elem.userID === number)){
                return[...db]
            }
            return [...db, {userID: number, userName}]
        })
    }

    const handleDelete = (id) =>{
        const copy = [...db]
        setDb(copy.filter((val) => val.userID !== id))
    }

    const handleUpdate = (id) =>{
        setIsUpdating(id)
    }

    const list = db.map((value) =>{
        return (
            <div key={value.userID}>
                User Id: {value.userID}
                User Name: {value.userName} -
                <button  onClick={() =>handleDelete(value.userID)} >x</button>
                <button onClick={()=> handleUpdate(value.userID)}>Update</button>
            </div>
        )
    });

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    !isUpdating &&                ( <div>
                        <label  htmlFor="userID">User ID</label>
                        <input type="number" id='userID' {...register('userID')}/>
                    </div>)
                }
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id='userName' {...register('userName')}/>
                </div>
                <button>{isUpdating? 'Update value': 'create'}</button>
            </form>
            <div>{list}</div>
        </div>
    );
}

export default App;
