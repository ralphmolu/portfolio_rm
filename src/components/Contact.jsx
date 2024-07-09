import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formState.name) newErrors.name = 'Name is required';
        if (!formState.email) newErrors.email = 'Email is required';
        if (!formState.message) newErrors.message = 'Message is required';
        if (formState.email && !/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Email is invalid';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit the form
            console.log('Form submitted', formState);
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact - My Portfolio</title>
            </Helmet>
            <section>
                <h2>Contact Me</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}

                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formState.message}
                        onChange={handleChange}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}

                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    );
};

export default Contact;
