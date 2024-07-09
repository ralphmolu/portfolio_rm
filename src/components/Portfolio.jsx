import React from 'react';
import Project from './Project';
import { Card, CardDeck } from 'react-bootstrap';
import exerciseBuddy from '../assets/Exercise_Buddy.jpg';
import workdayScheduler from '../assets/workday-scheduler.jpg';
import weatherDashboard from '../assets/weatherDashboard.jpg';
import employeeManager from '../assets/employeeManagerDemo.gif'

const Portfolio = () => {
    const projects = [
        {
            title: 'Exercise Buddy',
            description: 'Exercise Buddy is a user-friendly web application designed to help individuals find exercises tailored to their specific needs',
            image: exerciseBuddy,
            deployedLink: 'https://ralphmolu.github.io/exercise_buddy/index.html',
            githubLink: 'https://github.com/ralphmolu/exercise_buddy',
            technologies: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Employee Manager (DataBase)',
            description: 'The Employee Manager is a command-line application that helps track departments, roles and employees within a business.',
            image: employeeManager,
            githubLink: 'https://github.com/ralphmolu/employee_manager?tab=readme-ov-file',
            technologies: ['Node.js', 'MySQL', 'inquirer', 'console.table']
        },
        {
            title: 'Workday Scheduler',
            description: 'This simple scheduler adds clarity to you daily timeboxing.',
            image: workdayScheduler,
            deployedLink: 'https://ralphmolu.github.io/workday_scheduler/',
            githubLink: 'https://github.com/ralphmolu/workday_scheduler',
            technologies: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Weather Dashboard',
            description: 'This weather app offers real-time weather updates and a five-day forecast for cities across the US.',
            image: weatherDashboard,
            deployedLink: 'https://ralphmolu.github.io/weather_dashboard/',
            githubLink: 'https://github.com/ralphmolu/weather_dashboard?tab=readme-ov-file',
            technologies: ['HTML', 'CSS', 'JavaScript']
        }
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <CardDeck>
                {projects.map((project, index) => (
                    <Card key={index} className="mb-3">
                        <Card.Img variant="top" src={project.image} />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a><br />
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardDeck>
        </section>
    );
};


export default Portfolio;