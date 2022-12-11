import React from 'react';
import Skill from './Skill';

const Skills = () => {
    const skills = [
        {
            "id": 1,
            "title": "React",
            "img": "https://i.ibb.co/5kjQ6kV/React-1.png",
            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id": 2,
            "title": "Node.Js",
            "img": "https://i.ibb.co/qWBZ9KR/node.png",
            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id": 3,
            "title": "Express.Js",
            "img": "https://i.ibb.co/4Zy4GfF/express-1.png",
            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id": 4,
            "title": "MongoDB",
            "img": "https://i.ibb.co/M7cnwp9/mongoDB.png",
            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
    ]

    return (
        <div className='container mx-auto' id='skills'>
            <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight text-center md:text-5xl dark:text-gray-50 border-b-8 border-blue-500 pb-5">My Skills</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {
                    skills.map(skill => <Skill key={skill.id} skill={skill}></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;