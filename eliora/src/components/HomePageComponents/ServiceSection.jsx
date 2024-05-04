import styles from "../../style/ServiceSection.module.css";

const serviceCards = [
  {
    icon: "bi-people-fill",
    title: "Happy Clients",
    number: 103,

  },
  {
    icon: "bi bi-check2-circle",
    title: "Projects Done",
    number: 135,
  },
  {
    icon: "bi-building-fill ",
    title: "Years of Experience",
    number: 3,

  }
];

const ServiceSection = () => {
  return (
    <div className={`container-fluid py-5 pt-lg-0 ${styles.facts} ${styles.service}`}>
      <div className="container  py-5 pt-lg-0">
        <div className="row gx-0">
          {serviceCards.map((card, index) => (
            <div key={index} className={`col-lg-4 wow zoomIn`} data-wow-delay={`${index * 0.3}s`}>
              <div className={`shadow d-flex align-items-center justify-content-center p-4 ${styles.card}`} style={{ height: '150px',borderRadius:"5px" }}>
                <div className={`d-flex align-items-center justify-content-center rounded mb-2 ${styles.IconSec}`} style={{ width: '60px', height: '60px', fontSize: '2.5rem' }}>
                  <i className={`bi ${card.icon}`}></i>
                </div>
                <div className={`ps-4 ${styles.content}`}>
                  <h5 className={`mb-0`}>{card.title}</h5>
                  <h1 className="mb-0" data-toggle="counter-up" style={{ display: 'inline' }}>{card.number}</h1> <h1 style={{ display: 'inline' }}> +</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
