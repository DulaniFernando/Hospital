import React from 'react'

const SignUp = () => {
    return(
        <>
            <div className="form">
            <h1>Sign Up</h1>
            <form>
                <div className='name'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' placeholder='name' required />
                </div>
                <div className='email'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' placeholder='email' />
                </div>
                <div className='username'>
                    <label htmlFor="username">Name:</label>
                    <input type="text" name='username' placeholder='user name' />
                </div>
                <div className='password'>
                    <label htmlFor="password">Name:</label>
                    <input type="password" name='password' placeholder='password' />
                </div>
            </form>
            </div>
        </>
    );
}
export default SignUp;
