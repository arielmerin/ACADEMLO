import React from 'react';
import  "../styles.css"
import Loading from "./Loading";

const RequireUbication = () => {
    return (
        <div className='require-ubication'>
            <p>Allow ubication to this website</p>
            <div>
                <Loading />
            </div>

        </div>
);
};

export default RequireUbication;
