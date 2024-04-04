import "./GalleryImages.css";

const GalleryImages = () => {

    const images = [
        { src: "images/g13.jpeg", className: "" },
        { src: "images/g2.jpeg", className: "wide" },
        { src: "images/g3.jpeg", className: "" },
        { src: "images/g8.jpg", className: "xl-wide" },
        { src: "images/g5.jpg", className: "tall" },
        { src: "images/g6.jpg", className: "" },
        { src: "images/g7.jpg", className: "big" },
        { src: "images/g1.jpeg", className: "xl-big" },
        { src: "images/g10.jpg", className: "" },
        { src: "images/g16.jpeg", className: "" },
        { src: "images/g15.jpeg", className: "tall" },
        { src: "images/g11.png", className: "" },
        { src: "images/g14.jpeg", className: "" },
        { src: "images/g10.jpg", className: "tall" },
        { src: "images/g9.jpg", className: "wide" },
        { src: "images/g13.jpeg", className: "" }
    ];


  return (
        <div>
            <div className="gallery">
                <div className="gallery-wrapper">
                    {images.map((image, index) => (
                        <div key={index} className={image.className}>
                            <img alt="Web Design Services in Nagpur" src={image.src} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GalleryImages
