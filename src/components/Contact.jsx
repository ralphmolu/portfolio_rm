import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFromData] = useState({
        name: 'What is your name?',
        email: 'What is your email?',
        message: 'Leave me a message here..'
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFromData({ ...formData, [e.target.name]: e.target.value })
    };

    // validate user input and ensure all fields are filled out
    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        const regexCheck = /\S+@\S+\.\S+/;
        if (!regexCheck.test(formData.email)) errors.email = 'Email address is invalid';
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };


    //to be added later: logic to have an email sent to my email address
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setErrors(errors);
            return;
        }
        alert('Form submitted');
    };

    return (
        <section>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type='text' name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                    {errors.message && <span>{errors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
};

export default Contact;