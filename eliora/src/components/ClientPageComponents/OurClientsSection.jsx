
const OurClientsSection = () => {

    const clients = [
        "c1.png", "c2.png", "c3.png", "c4.png", "c5.png",
        "c6.png", "c7.png", "c8.png", "c9.png", "c10.png",
        "c11.png", "c12.png", "c13.png"
    ];


    return (
        <div className="container-fluid py-5 wow fadeInUp mt-c mt-2" data-wow-delay="0.1s" style={{ marginTop: '-70px' }}>
            <div className="container py-5" style={{ backgroundColor: 'white' }}>
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    <h1 className="mb-0">Our Clients</h1>
                </div>
                <div className="row g-5">
                    {clients.map((client, index) => (
                        <div key={index} className="col-lg-2 mar col-6 col-md-3 wow zoomIn" data-wow-delay="0.3s">
                            <img alt="Website Designer in Nagpur" src={`images/${client}`} style={{ width: '-webkit-fill-available' }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurClientsSection
