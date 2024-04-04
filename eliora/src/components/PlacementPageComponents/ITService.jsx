import "./ITServices.css";

const IndustryCard = ({ iconClass, title, description }) => {
    return (
        <div className={`col-md-3 my-2`}>
            <div className="px-3">
                <div className="Icons circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                >
                    <i className={iconClass} aria-hidden="true" style={{ fontSize: '34px' }}></i>
                </div>
                <div className="px-3 text-center pb-3">
                    <h4 className="headings">{title}</h4>
                    <p className="font-weight-light my-3">{description}</p>
                </div>
            </div>
        </div>
    );
};


const ITService = () => {

    const industries = [
        { iconClass: "bi bi-bank", title: "Banking", description: "Talent sourcing for banks, ensuring skilled professionals match financial sector needs." },
        { iconClass: "bi bi-mortarboard-fill", title: "Education", description: "Matching educators and support staff to educational institutions efficiently." },
        { iconClass: "bi bi-telephone-fill", title: "BPO", description: "Placing BPO experts to optimize customer service and operational excellence." },
        { iconClass: "bi bi-megaphone-fill", title: "Sales", description: "Connecting sales experts with companies to drive revenue and growth." },
        { iconClass: "bi bi-truck", title: "Logistics", description: "Staffing logistics roles to enhance supply chain performance." },
        { iconClass: "bi bi-coin", title: "Finance", description: "Identifying financial talents to support robust fiscal management." },
        { iconClass: "bi bi-buildings-fill", title: "Manufacturing", description: "Providing skilled labor for manufacturing industries, boosting production." },
        { iconClass: "bi bi-bar-chart-line-fill", title: "Marketing", description: "Aligning marketing professionals with businesses to boost brand success." }
    ];


  return (
        <div className="container mt-c" style={{ marginTop: "-30px" }}>
            <section style={{ fontSize: '15px' }}>
                <div className="section-title position-relative pb-3 mb-5 text-center">
                    <h1 className="mb-0 text-danger">IT and Non IT Industries</h1>
                </div>
                <div className="row">
                    {industries.map((industry, index) => (
                        <IndustryCard key={index} iconClass={industry.iconClass} title={industry.title} description={industry.description} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ITService
