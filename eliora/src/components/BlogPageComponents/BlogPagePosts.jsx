import { NavLink } from "react-router-dom";
import "./BlogPagePost.css";


const BlogPagePosts = () => {
    const rows = [
        {
          image: "../images/AdminBlog.jpg",
          Blogdate: "2023-11-11",
          subtitle: "Recruitment and Placement",
          title: "How Augmentation Is Different From Recruitment And Placement.",
          content:
            "Placement is the official assignment of a chosen applicant to a particular post; augmentation is the...",
          Button: "Read More ",
        },
    
        {
          image: "../images/Advantage.jpg",
          Blogdate: "2023-11-11",
          subtitle: "Contract to Contract Staffing",
          title: "The Advantages of Workforce Sourcing for Businesses",
          content:
            "Businesses may now access talent like never before thanks to workforce sourcing. It provides access ...",
          Button: "Read More ",
        },
    
        {
          image: "../images/Optimising.jpg",
          Blogdate: "2023-11-11",
          subtitle: "Contract to Contract Staffing",
          title: "Optimising Your Workforce with Technology-Driven Staffing Solutions",
          content:
            "In our most recent blog, we discuss how technology-driven staffing solutions are redefining workforc...",
          Button: "Read More ",
        },

        {
            image: "../images/Recruters.jpg",
            Blogdate: "2023-10-26",
            subtitle: "Recruitment and Placement",
            title: "What Recruiters Look for in Your Resume",
            content:
              "A well-structured CV that highlights your accomplishments, experience, and applicable abilities is w...",
              Button: "Read More ",
          },


          {
            image: "../images/staffing.jpg",
            Blogdate: "2023-10-25",
            subtitle: "Staffing",
            title: "How Staffing Differs from Recruitment",
            content:
              "... ",
              Button: "Read More ",
          },


          {
            image: "../images/Solar.jpg",
            Blogdate: "2023-10-23",
            subtitle: "New Technologies And Trends",
            title: "Solar Power and Beyond - Renewable Energy's Bright Future",
            content:
              "Discover about sustainable energy sources that go beyond solar energy. In this blog, we examine the ...",
              Button: "Read More",
          },


          {
            image: "../images/TopTips.jpg",
            Blogdate: "2023-10-21",
            subtitle: "Recruitment and Placement",
            title: "Top Tips for Working with a Recruiter",
            content:
              "Your job search or career progress may benefit from working with a recruiter. Here are some importan...",
              Button: "Read More",
          },


          {
            image: "../images/BlockChain.jpg",
            Blogdate: "2023-10-18",
            subtitle: "New Technologies And Trends",
            title: "Blockchain Demystification � From Cryptocurrencies to Real-World Applications",
            content:
              "Beyond Cryptocurrency, study the fascinating world of blockchain technology. This blog will clarify ... ",
              Button: "Read More",
          },

          {
            image: "../images/Artificial.jpg",
            Blogdate: "2023-10-17",
            subtitle: "New Technologies And Trends",
            title: "Saving Lives and Changing Diagnostics - Artificial Intelligence's Role in Healthcare",
            content:
              "Healthcare is being revolutionized by artificial intelligence, which is advancing diagnostics, provi...",
              Button: "Read More",
          },


          {
            image: "../images/Future.jpg",
            Blogdate: "2023-10-16",
            subtitle: "New Technologies And Trends",
            title: "Exploring the Future - The Growth of Wireless Communication to 6G",
            content:
              "Due to its amazing speed, low latency, hyper-connectivity, and virtual reality capabilities, 6G tech... ",
              Button: "Read More",
          },


          {
            image: "../images/Strategies.jpg",
            Blogdate: "2023-10-12",
            subtitle: "Digital Marketing",
            title: "Effective Strategies for Social Media Marketing in 2023",
            content:
              "The evolving landscape of social media marketing has transformed the way businesses connect with the...",
              Button: "Read More",
          },

          {
            image: "../images/Discover.png",
            Blogdate: "2023-10-09",
            subtitle: "Website Design",
            title: "Discover The 5 Essential Reason For A Website",
            content:
              "Having a website is crucial for establishing and maintaining an online presence. It serves as a digi...",
              Button: "Read More",
          },

          {
            image: "../images/Redisgn.png",
            Blogdate: "2023-10-07",
            subtitle: "Web Designing",
            title: "How to Redesign Your Website for Increased Traffic and Sales",
            content:
              "In today's world where everything is done online, maintaining an effective online presence is crucia...",
              Button: "Read More",
          },

          {
            image: "../images/WebDevelopment.png",
            Blogdate: "2023-09-06",
            subtitle: "Web Designing",
            title: "What Distinguishes Web Designing from Web Development?",
            content:
              "Web designing and web development are two different but interconnected disciplines pertaining to web...",
              Button: "Read More",
          },

          {
            image: "../images/Industry.jpeg",
            Blogdate: "2023-08-22",
            subtitle: "INDUSTRY WEBSITE",
            title: "Crafting an Industry-Tailored Website",
            content:
              "Crafting an industry-tailored website involves designing and developing a digital platform that is s...",
              Button: "Read More",
          },

          {
            image: "../images/Mobilepng.png",
            Blogdate: "2023-08-18",
            subtitle: "App Development",
            title: "Exploring the Contrast: Mobile App vs. Web App",
            content:
              "Mobile apps and web apps serve distinct purposes in the digital landscape. While mobile apps are spe...r",
              Button: "Read More",
          },
      ];


      return (
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row">
              {rows.map((row, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                  <div className="blog-item bg-light bg-white rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        alt="staffing services, recruitment, staffing company, staffing agency"
                        className="img-fluid"
                        src={row.image}
                      />
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="bi bi-person text-warning me-2"></i>
                          {row.Blogdate}
                        </small>
                        <small>
                          <i className="bi bi-calendar-check text-warning me-2"></i>
                          {row.subtitle}
                        </small>
                      </div>
                      <h4
                        className="mb-3"
                        style={{ fontFamily: "sans-serif", fontWeight: "700" }}
                      >
                        {row.title}
                      </h4>
                      <p
                        style={{
                          textAlign: "justify",
                          wordSpacing: "-2px",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {row.content}
                      </p>
                      <NavLink
                        className="text-uppercase btn btn-danger py-2 px-4"
                        to="/blogDetails"
                        style={{ textDecoration: "none" }}
                      >
                        {row.Button}
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default BlogPagePosts
