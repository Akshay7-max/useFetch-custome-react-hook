import React from 'react';
import useFetch from "./useFetch";

const User = () => {
    const {loading, data, error} = useFetch(`https://jsonplaceholder.typicode.com/users`);

    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Error: Something Went Wrong</h1>
    }

    return (
        <div>
            <h1>Fetch Hook Example</h1>
            {
                data.map((user)=>{
                    return <p key={user.id}>{user.name}</p>
                })
            }
        </div>
    )
}

export default User
