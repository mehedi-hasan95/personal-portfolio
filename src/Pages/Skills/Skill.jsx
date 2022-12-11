import React from 'react';
import { Link } from 'react-router-dom';

const Skill = ({ skill }) => {
    const { img, title } = skill;
    return (
        <Link to='' className="space-y-4 shadow-lg p-10 hover:border-dashed hover:border-2 hover:border-yellow-200">
            <div className="space-y-2">
                <img src={img} alt="" className=" min-h-[210px]" />
            </div>
            <div className="space-y-2 bg-gray-800">
                <div className="block">
                    <h3 className="text-xl text-white p-3 font-semibold dark:text-violet-400">{title}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Skill;