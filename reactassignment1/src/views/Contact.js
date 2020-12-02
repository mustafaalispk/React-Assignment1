import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("");
    const [formName, setFullName] = useState();
    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    };
    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(name);
    }
    return (
        <>
            <form onSubmit={onSubmits}>
                <div className="contact_form">
                    <h1>{formName}</h1>
                    <input type="text" placeholder="Enter your name and click on Click Me button"
                        onChange={inputEvent}
                        value={name} />
                    <button type="submit"> Click Me</button>
                </div>
            </form>

        </>

    )
}
export default Contact;