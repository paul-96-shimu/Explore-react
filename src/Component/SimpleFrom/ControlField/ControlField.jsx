import React, { useState } from 'react';

const ControlField = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('submited')
    }

    const handlePasswordOnChange = e => {
        console.log(e.target.value)
        setPassword(e.target.value);
        if (password.length < 6) {
            setError('password mustbe added 6 digit')

        } else {
            setError('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='email' required />
                <br />
                <input type="password" name="password" placeholder='password' onChange={handlePasswordOnChange}
                    defaultValue={password}
                    required />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlField;