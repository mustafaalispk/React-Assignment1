import React, { useState } from 'react'

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState();
    const [newLastName, setNewLastName] = useState();

    const inputEventForFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const inputEventForLastName = (event) => {
        setLastName(event.target.value);
    }
    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(firstName);
        setNewLastName(lastName);
    }
    return (
        <>
            <form onSubmit={onSubmits}>
                <div className="contact_form">
                    <h1>{fullName} {newLastName}</h1>
                    <input type="text" placeholder="Enter your first name"
                        onChange={inputEventForFirstName}
                        value={firstName} />
                    <input type="text" placeholder="Enter your last name"
                        onChange={inputEventForLastName}
                        value={lastName} />
                    <button type="submit"> Click Me</button>
                </div>
            </form>

        </>

    )
}
export default Contact;