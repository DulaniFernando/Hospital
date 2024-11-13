import React, { useState } from 'react'
import axios from 'axios';

const SignUp = () => {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        username:'',
        password:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:5000/api/signup', formData);
            console.log(response.data);
            alert('User created successfully!');
        }
        catch(error){
            console.error(error);
            alert("Error creating user");
        }
    };
    
    return(
        <>
            <div className="form">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className='name'>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            name='name' 
                            placeholder='name' 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='email'>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            name='email' 
                            placeholder='email' 
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='username'>
                        <label htmlFor="username">User Name:</label>
                        <input 
                            type="text" 
                            name='username' 
                            placeholder='user name' 
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name='password' 
                            placeholder='password' 
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='submit-btn'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default SignUp;
