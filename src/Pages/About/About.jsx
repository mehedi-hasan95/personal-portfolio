import React from 'react';

const About = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">About Mehedi</h2>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <div className="mt-12 space-y-12">
                                <div className='flex'>
                                    <p>I’m Mehedi Md. Mehedi Hasan. I am a person who loves programming. I have been working on MERN Stack development since last year and learning daily. I have proven experience creating websites using HTML, CSS, React, ExpressJs, MongoDB, Jquery, and JavaScript. I usually like to work on MERN Stack development because I love it. I am strategic and goal-oriented and always work with an end goal. I pride myself on quality work and maintain excellent communication. I’ve completed the Cisco certification exam requirements and am recognized as a Cisco Certified Network Associate Routing and Switching. My Certificate Verification No. 425964170463IQXL. </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src="https://i.ibb.co/JmPMCtN/daniel-korpai-p-KRNx-Egu-Rg-M-unsplash.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;