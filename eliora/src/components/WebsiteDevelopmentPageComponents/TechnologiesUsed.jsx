import "./Technologies.css";

const TechnologiesUsed = () => {
    const technologies = [
        {
            imgSrc: 'images/js.png',
            title: 'JavaScript',
            description: 'JavaScript is an indispensable tool in our web development arsenal. Its widespread adoption is due to a multitude of advantages it brings to both front-end and back-end development.'
        },
        {
            imgSrc: 'images/bootstrapIcon.png',
            title: 'Bootstrap',
            description: 'Embracing the potential of Bootstrap, a free and open-source front-end web framework, we equip our web developers with a powerful set of tools and components to build responsive, mobile-first websites.'
        },
        {
            imgSrc: 'images/js.png',
            title: 'jQuery',
            description: 'Our skilled developers leverage this versatile programming language to create dynamic and engaging user experiences, including interactive forms, responsive navigation, and seamless content updates.'
        },
        {
            imgSrc: 'images/phpIcon.png',
            title: 'PHP',
            description: 'Create stunning, mobile-friendly websites with our website development service powered by Bootstrap. Benefit from pre-built design components and responsive layouts for a sleek and professional online presence.'
        },
        {
            imgSrc: 'images/ajax.png',
            title: 'Ajax',
            description: 'Elevate user engagement with our website development service using Ajax technology. Seamlessly update web content without page reloads, providing a smooth and immersive user experience.'
        },
        {
            imgSrc: 'images/sqlIcon.png',
            title: 'MySQL',
            description: 'Transform your online presence with our website development service built on React. Deliver highly responsive and interactive user interfaces that handle complex tasks and ensure exceptional performance.'
        }
    ];

    return (
        <div className="container-fluid py-5 wow fadeInUp mt-l" data-wow-delay="0.1s" style={{ marginTop: '-60px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
            <div className="container py-5 mt-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h5 className="fw-bold text-danger text-uppercase">Our Services</h5>
                    <h1 className="mb-0">Technologies We Use</h1>
                </div>
                <div className="row g-5">
                    {technologies.map((tech, index) => (
                        <div key={index} className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay={`${0.3 + index * 0.3}s`} style={{ visibility: 'visible', animationDelay: `${0.3 + index * 0.3}s`, animationName: 'zoomIn' }}>
                            <div className="service-item bg-white bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div>
                                    <img alt="Web Development" src={tech.imgSrc} style={{ width: '130px' }} />
                                </div>
                                <h4 className="mb-3">{tech.title}</h4>
                                <p className="m-0" style={{ textAlign: 'justify', wordSpacing: '-2px' }}>{tech.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TechnologiesUsed;
