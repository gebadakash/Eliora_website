import "./TechnologyContractPage.css";

const TechnologiesSection = () => {

    const technologies = [
        {
            name: 'Java',
            imageSrc: './images/java1.png',
            description: 'Ensure scalability and reliability with our Java based website development, integrating MySQL for efficient structured data storage, enhancing website performance and user experience.'
        },
        {
            name: '.Net',
            imageSrc: './images/net.png',
            description: 'Our seasoned .NET developers craft Visually captivating, seamlessly blending colors, typography, layouts, and animations to align with your brand identity.'
        },

        {
            name: 'Python',
            imageSrc: './images/python.png',
            description: 'Our seasoned .NET developers craft Visually captivating, seamlessly blending colors, typography, layouts, and animations to align with your brand identity.'
        },

        {
            name: 'Mongo DB',
            imageSrc: './images/mongo.png',
            description: 'Our seasoned .NET developers craft Visually captivating, seamlessly blending colors, typography, layouts, and animations to align with your brand identity.'
        },

        {
            name: 'Salesforce',
            imageSrc: './images/salesforce.png',
            description: 'Our seasoned .NET developers craft Visually captivating, seamlessly blending colors, typography, layouts, and animations to align with your brand identity.'
        },

        {
            name: 'React',
            imageSrc: './images/react.png',
            description: 'Our seasoned .NET developers craft Visually captivating, seamlessly blending colors, typography, layouts, and animations to align with your brand identity.'
        },

        {
            name: 'AWS',
            imageSrc: './images/AWS1.png',
            description: 'Our seasoned .NET developers craft Visually captivating, seamlessly blending colors, typography, layouts, and animations to align with your brand identity.'
        },

        {
            name: 'Android',
            imageSrc: './images/android1.png',
            description: 'Our seasoned .NET developers craft Visually captivating, seamlessly blending colors, typography, layouts, and animations to align with your brand identity.'
        },


        {
            name: 'IOS',
            imageSrc: './images/ios.png',
            description: 'Our seasoned .NET developers craft Visually captivating, seamlessly blending colors, typography, layouts, and animations to align with your brand identity.'
        },

    ];


  return (
   
    <section className="we-offer-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5 mb-5">
                        <div className="site-heading text-center">
                            <h2 className="sec-title text-danger"> Technologies We Use</h2>
                            <h4 className="text-dark">Your IT Solution Partner for Success</h4>
                        </div>
                    </div>
                </div>
                <div className="row px-3 our-offer-items less-carousel">
                    {technologies.map((tech, index) => (
                        <div key={index} className="col-md-6 col-lg-4 col-sm-6 equal-height">
                            <div className="item">
                                <img alt={tech.name} className="TechnolgyImage" src={tech.imageSrc} style={{ height: '100px', width: '100px', marginTop: '-50px'}} />
                                <br /> <br /> <h4>{tech.name}</h4>
                                <p style={{ textAlign: 'justify', wordSpacing: '-4px' }}>{tech.description}</p>
                                <br />
                            </div>
                        </div>
                    ))}
                    <div className="col-md-12 col-sm-6 ">
                        <div>
                            <br />
                            <br />
                            <div className="btn-box">
                                <a href="" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn" style={{ height: '80px', width: '230px', fontSize: '15px' }}>Many More technologies...</a>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default TechnologiesSection
