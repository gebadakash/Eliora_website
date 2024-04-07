import { NavLink } from "react-router-dom";
import styles from "../../style/BlogPostSection.module.css";
import { useEffect } from "react";


const BlogPost = () => {

  useEffect(() => {

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const navLinks = document.querySelectorAll('.navlink');
    navLinks.forEach(link => {
      link.addEventListener('click', handleScrollToTop);
    });


    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleScrollToTop);
      });
    };
  }, []);

  const rows = [
    {
      image: "../images/AdminBlog.jpg",
      Blogdate: "2023-11-11",
      subtitle: "Recruitment and Placement",
      title: "How Augmentation Is Different From Recruitment And Placement.",
      content:
        "Placement is the official assignment of a chosen applicant to a particular post; augmentation is the...",
      link: "Read More ",
    },

    {
      image: "../images/Advantage.jpg",
      Blogdate: "2023-11-11",
      subtitle: "Contract to Contract Staffing",
      title: "The Advantages of Workforce Sourcing for Businesses",
      content:
        "Businesses may now access talent like never before thanks to workforce sourcing. It provides access ...",
      link: "Read More ",
    },

    {
      image: "../images/Optimising.jpg",
      Blogdate: "2023-11-11",
      subtitle: "Contract to Contract Staffing",
      title: "Optimising Your Workforce with Technology-Driven Staffing Solutions",
      content:
        "In our most recent blog, we discuss how technology-driven staffing solutions are redefining workforc...",
      link: "Read More ",
    },
  ];

  return (
    <div
      className={`${styles.BlogSection} container-fluid py-5 wow fadeInUp`}
      data-wow-delay="0.1s"
      style={{
        visibility: "visible;",
        animationDelay: "0.1s;",
        animationName: "fadeInUp;",
      }}
    >
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px;" }}
        >
          <h5 className="fw-bold text-uppercase" style={{fontFamily:"sans-serif"}}>Latest Blog</h5>
          <h1 className="mb-0 text-danger" style={{fontFamily:"sans-serif"}}>Read The Latest Articles from Our Blog Post</h1>
        </div>
        <div className="row g-5">
          {rows.map((row, index) => (
            <div
              className="col-lg-4 wow slideInUp"
              data-wow-delay="0.3s"
              key={index}
              style={{
                visibility: "visible;",
                animationDelay: "0.3s;",
                animationName: "slideInUp;",
              }}
            >
              <div className={`blog-item bg-light shadow rounded overflow-hidden ${styles.blogCard}`}>
                <div className="blog-img position-relative overflow-hidden">
                  <img
                    alt="staffing services,  recruitment, staffing company, staffing agency"
                    className="img-fluid"
                    src={row.image}
                  />
                </div>
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small className="me-3">
                    <i className="bi bi-person-fill me-2"></i>
                      {row.Blogdate}
                    </small>
                    <small>
                      <i className="bi bi-calendar-check me-2"></i>
                      {row.subtitle}
                    </small>
                  </div>
                  <h4 className="mb-3" style={{fontFamily:"sans-serif", fontWeight:"700"}}>
                   {row.title}
                  </h4>
                  <p style={{ textAlign: "justify;", wordSpacing: "-2px;", fontFamily:"sans-serif", }}>
                    {row.content}
                  </p>
                  <NavLink
                    className="text-uppercase navlink"
                    to="/blog"
                    style={{textDecoration:"none"}}
                  >
                    {row.link}<i className="bi bi-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
