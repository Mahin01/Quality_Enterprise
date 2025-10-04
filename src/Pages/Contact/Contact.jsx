import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row lg:items-center justify-center">
                <div className="card">
                    <div class="card-body">
                        <div className="max-w-sm mx-auto p-4 py-20 bg-white border border-gray-200 shadow-lg rounded-lg">
                        {/* Phone Section */}
                        <div className="flex items-start space-x-4 mb-6">
                            {/* Phone Icon */}
                            <div className="flex-shrink-0 bg-red-500 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.93-.27 10.864 10.864 0 003.4.55 1 1 0 011 1v3.4a1 1 0 01-1 1A17.052 17.052 0 013 5a1 1 0 011-1h3.4a1 1 0 011 1c0 1.14.19 2.25.55 3.4a1 1 0 01-.27.93l-2.2 2.2a1 1 0 00-.26.26z"/>
                            </svg>
                            </div>
                            <div className="text-gray-700">
                            <p className="font-medium mb-1">We are available 24/7, 7 days a week.</p>
                            <p className="font-medium mb-5">Phone: +880-1851705517, +880-1313032754</p>
                            </div>
                        </div>

                        {/* Divider Line */}
                        <hr className="border-gray-300 mb-6" />

                        {/* Email Section */}
                        <div className="flex items-start space-x-4 py-5">
                            {/* Email Icon */}
                            <div className="flex-shrink-0 bg-red-500 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h15a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 19.5v-15zM4.5 4.5v.42l7.5 5.28 7.5-5.28V4.5h-15zm15 15v-10.4l-7.5 5.28-7.5-5.28V19.5h15z"/>
                            </svg>
                            </div>
                            <div className="text-gray-700">
                            <p className="font-medium mb-2">Fill out our form and we will contact you within 24 hours.</p>
                            <p className='mb-2'>Mail Us: <a href="mailto:info@quality-ent.com">info@quality-ent.com</a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-white border border-gray-200 shadow-lg rounded-lg">
                        <form className='card-body'>
                            <div className="flex items-center">
                                <div className="form-control mb-5 mr-4">
                                    <label className="input bg-base-200 flex items-center gap-2">
                                        <input type="text" className="grow" placeholder="Your Name *" />
                                    </label>
                                </div>
                                <div className="form-control mb-5 mr-4">
                                    <label className="input bg-base-200 flex items-center gap-2">
                                        <input type="text" className="grow" placeholder="Your Email *" />
                                    </label>
                                </div>
                                <div className="form-control mb-5 space-x-4">
                                    <label className="input bg-base-200 flex items-center gap-2">
                                        <input type="text" className="grow" placeholder="Your Phone *" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mb-5">
                                <textarea className="textarea bg-base-200" placeholder="Your Message" rows={5}></textarea>
                            </div>
                            <div className="align-right">
                                <button className='btn btn-primary text-white'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    );
};

export default Contact;