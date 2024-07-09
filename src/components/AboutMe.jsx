import React from 'react ';
import avatar from '../assets/avatar.jpg';

const AboutMe = () => {
    return (
        <section>
            <h2> About Me</h2>
            <div className='about-me content'>
                <img src={avatar} alt="Ralph Molu" />
                <p>
                    I am Ralph Molu, a full-stack developer with a passion for creating responsive web applications.
                    I am proficient in JavaScript, React, Node.js, and MongoDB. I am currently looking for new opportunities
                    to grow my skills and create engaging web applications.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;