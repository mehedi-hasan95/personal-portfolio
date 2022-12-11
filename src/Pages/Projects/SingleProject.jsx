import React from 'react';
import { Link } from 'react-router-dom';

const SingleProject = ({ prjt }) => {
    const { img, title, build } = prjt;
    console.log(build);
    return (
        <Link to='' className="space-y-4 shadow-lg shadow-gray-500 p-5">
            <div className="space-y-2">
                <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            </div>
            <div className="space-y-2 bg-white">
                <div className="block">
                    <h3 className="text-xl font-semibold text-violet-400">{title}</h3>
                    <h4 className='mt-3'>Technology Used: {build?.map(bld => <p className=' bg-violet-400 cursor-default px-4 py-2 rounded-md inline-block mr-5'>{bld}</p>)}</h4>
                </div>
            </div>
        </Link>
    );
};

export default SingleProject;