import one from "/images/Analytics.png";
import SEO from "/images/SEO.png";
import Designer from "/images/Designer.png";
import Launch from "/images/Launch.png";
import support from "/images/Customer-support.png";
import Planning from "/images/Planning.png";

const cards = [
  {
    title: "Meeting & Research",
    text: "Expert Assistance, Efficient Operations, Latest Technology, Effective Workflows",
    imageSrc: one,
  },
  {
    title: "Design & Development",
    text: "Start Design with Client, List Required Content Submission Content & Photo, Home Pages Design & Home Page Review & Feedback, Pages Design & Inner Pages Review & Feedback, Frontend & Backend Coding, Content Uploading",
    imageSrc: Designer
  },
  {
    title: "QA Testing",
    text: "Cross Browser & Device testing, Code Validation Testing, Testing Review & Feedback, Refinement Final Approval",
    imageSrc: Planning
  },
  {
    title: "SEO Friendly Update",
    text: "Webpages Speed Optimization, On page SEO Optimization, Generate Sitemap",
    imageSrc: SEO
  },
  {
    title: "Launch",
    text: "Upload On Server, Testing On Live Environment, Backend Training",
    imageSrc: Launch
  },
  {
    title: "24/7 Services",
    text: "Round-the-Clock Availability, Rapid Response Time, Expert Assistance, Flexibility and Convenience.",
    imageSrc: support
  }
];

const AboutCards = () => {
  return (
    <div className="container">
      <h1 className="text-center">Our Process</h1>
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-lg-6 mb-2">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-2 mx-3">{card.title}</h3>
                <ul className="card-text" >
                  {card.text.split(',').map((item, idx) => (
                    <li key={idx}><p>{item.trim()}</p></li>
                  ))}
                </ul>
              </div>
              <img src={card.imageSrc} alt={`Image ${index}`} className="card-img-top img-fluid" style={{ maxWidth: '200px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;
