import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e =>{
        setEmail(e.target.value);    }
    const handleAdminSubmit = e =>{
        const user = {email}
        fetch('https://frozen-waters-54579.herokuapp.com/users/admin',{
            method: 'PUT',
            headers:{
                'authorization': `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.modifiedCount){
                setSuccess(true)
            }
           
        })
        e.preventDefault();

    }
    return (
        <div>
            <h1>Make A Admin</h1>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            sx={{width:"50%"}}
            label="Email"
            variant="standard" 
            type="email"
            onBlur={handleOnBlur}
             />
            <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && 
            <Alert severity="success">
              <AlertTitle>Congratulations</AlertTitle>Make Admin
              <strong> Successfully!</strong>
            </Alert>}
        </div>
    );
};

export default MakeAdmin;