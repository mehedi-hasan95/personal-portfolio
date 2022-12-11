import React from 'react';
import SingleProject from './SingleProject';

const Projects = () => {
    const project = [
        {
            "id": 1,
            "title": "Bike Hat",
            "img": "https://i.ibb.co/HFpzzK1/bike.png",
            "build": ["React", 'Express.Js', 'Node.Js', 'MongoDB'],
            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id": 2,
            "title": "Perfect Click",
            "img": "https://i.ibb.co/1T55Ptc/perfect-click.png",
            "build": ["React", 'Express.Js', 'Node.Js', 'MongoDB'],
            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "id": 3,
            "title": "Tech School",
            "img": "https://i.ibb.co/Tq2dkR9/learning.png",
            "build": ["React", 'Express.Js', 'Node.Js'],
            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
    ]
    return (
        <div className='container mx-auto mt-20' id='projects'>
            <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50 border-b-8 border-blue-500 pb-5">My Project</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    project.map(prjt => <SingleProject key={prjt.id} prjt={prjt}></SingleProject>)
                }
            </div>
        </div>
    );
};

export default Projects;