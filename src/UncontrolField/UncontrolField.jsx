import React, { useRef } from 'react';

const UncontrolField = () => {
    const emailRef = useRef('')
    const passref = useRef('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.
            current.value
        )

        const email = emailRef.current.value
        const password = passref.current.value
        console.log(email, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="" placeholder='email' />
                <br />
                <input ref={passref} type="password" name="" placeholder='password' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolField;