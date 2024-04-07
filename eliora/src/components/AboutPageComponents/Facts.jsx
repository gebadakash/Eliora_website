import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

const FactItem = ({ iconClass, bgColor, textColor, title, count }) => (
    <div className={`col-lg-3 wow zoomIn`} style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'zoomIn' }}>
        <div className={`bg-${bgColor} shadow d-flex align-items-center justify-content-center p-4`} style={{ height: '150px' }}>
            <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
                <i className={iconClass} style={{fontSize:"30px"}}></i> {/* Use the class directly */}
            </div>
            <div className="ps-4">
                <h5 className={`text-${textColor} mb-0`}>{title}</h5>
                <h1 className="mb-0" data-toggle="counter-up" style={{ display: 'inline' }}>{count}</h1><h1 style={{ display: 'inline' }}> +</h1>
            </div>
        </div>
    </div>
);

const factsData = [
    { iconClass: 'bi bi-people-fill', bgColor: 'danger', textColor: 'white', title: 'Years Of Experience', count: 3 },
    { iconClass: 'bi bi-check', bgColor: 'light', textColor: 'dark', title: 'Professional Experts', count: 15 }, // Bootstrap icon class changed
    { iconClass: 'bi bi-award', bgColor: 'danger', textColor: 'white', title: 'Satisfied Clients', count: 135 }, // Bootstrap icon class changed
    { iconClass: 'bi bi-check', bgColor: 'light', textColor: 'dark', title: 'Custom Software & App Built', count: 103 } // Bootstrap icon class changed
];

const Facts = () => (
    <div className="container-fluid facts py-5 pt-lg-0 mt-c mt-in" style={{ marginTop: '40px' }}>
        <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
                {factsData.map((fact, index) => (
                    <FactItem key={index} {...fact} />
                ))}
            </div>
        </div>
    </div>
);

export default Facts;
