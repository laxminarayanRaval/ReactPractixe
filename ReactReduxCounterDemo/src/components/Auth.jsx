import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Auth = () => {
    const [uname, setUname] = useState('');
    const [upass, setUpass] = useState('');

    const dispatch = useDispatch();

    const checkAuth = (e) => {
        e.preventDefault();
        // console.log('check')
        if ((uname === 'admin' && upass === 'admin123')) {
            dispatch(authActions.login());
            // console.log('login')
        }
    }
    return (
        <div className='auth'>
            <h1>User Authentication</h1>
            <form className='auth-form' autoComplete='off' onSubmit={checkAuth}>
                <input type="text" name="uname" placeholder='user name' onChange={(e) => { setUname(e.target.value) }} required /><br />
                <input type="password" name="upass" autoComplete='off' placeholder='password' onChange={(e) => { setUpass(e.target.value) }} required /><br />
                <input type="submit" value="Authenticate" />
            </form>
        </div>
    )
}

export default Auth