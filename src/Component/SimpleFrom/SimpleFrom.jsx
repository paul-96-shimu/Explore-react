import React from 'react';

const SimpleFrom = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submit')

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Enter your Name' />
                <br />
                <input type="mail" name="Email" placeholder='Enter your Email' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;