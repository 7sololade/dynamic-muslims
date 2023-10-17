import React from 'react'
import '../styles/Newsletter.css'

export default function Newsletter() {


    const [inputValue, setInputValue] = React.useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClearButtonClick = () => {
        setInputValue("");
    };


  return (
    <div className="newsletter">

        <div className="news-content">
            <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.375 8.625L20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625L22 10l-.625-1.375ZM18.05 3.95L16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95L19 6l-.95-2.05ZM9 22q-.825 0-1.413-.588T7 20h4q0 .825-.588 1.413T9 22Zm-3-3q-.425 0-.713-.288T5 18q0-.425.288-.713T6 17h6q.425 0 .713.288T13 18q0 .425-.288.713T12 19H6Zm-.75-3q-1.725-1.025-2.738-2.75T1.5 9.5q0-3.125 2.188-5.313T9 2q3.125 0 5.313 2.188T16.5 9.5q0 2.025-1.012 3.75T12.75 16h-7.5Z"/></svg>
            </div>
            <div className="newsletter-content">
                <h1>Join our Newsletter</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias officiis architecto?</p>
            </div>
        </div>

        <div className="button-input">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Your email here!"
                />
            <button onClick={handleClearButtonClick}>Subscribe</button>
        </div>
    </div>
  )
}
