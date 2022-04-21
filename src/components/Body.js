import React, { useState } from 'react'

export default function Body() {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue([e.target.value])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var input = document.getElementsByClassName('search-input');
        const data = input[0].defaultValue;
        window.location.href = `https://www.google.com/search?q=${data}`;
        setInputValue('');

        // console.log('submit hecho')
    }

    const doodle = () =>{
        const lucky = "https://www.google.com/doodles";
        window.location.href = lucky;
    }

    return (

        <div className="box">
            <img className="image" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height="92" width="272"></img>
            <div className='input-box'>
                <form onSubmit={handleSubmit}>
                    <input
                        className="search-input"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange} >
                    </input>
                </form>
            </div>
            <div className='buttons'>
                <button onClick={handleSubmit} className='btn1'>Buscar con Google</button>
                <button onClick={doodle} className='btn2'>Me siento con suerte</button>
            </div>
        </div>

    );
}