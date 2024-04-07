import React from "react";
import "./about.css";

const processSteps = [
  {
    title: "Meeting & Research",
    points: [
      "Expert Assistance",
      "Efficient Operations",
      "Latest Technology",
      "Effective Workflows",
    ],
  },
  {
    title: "Design & Development",
    points: [
      "Start Design with Client",
      "List Required Content Submission Content & Photo",
      "Home Pages Design & Home Page Review & Feedback",
      "Pages Design & Inner Pages Review & Feedback",
      "Frontend & Backend Coding",
      "Content Uploading",
    ],
  },
  {
    title: "QA Testing",
    points: [
      "Cross Browser & Device testing",
      "Code Validation Testing",
      "Testing Review & Feedback",
      "Refinement Final Approval",
    ],
  },
  {
    title: "SEO Friendly Update",
    points: [
      "Webpages Speed Optimization",
      "Onpage SEO Optimization",
      "Generate Sitemap",
    ],
  },
  {
    title: "Launch",
    points: [
      "Upload On Server",
      "Testing On Live Environment",
      "Backend Training",
    ],
  },
  {
    title: "24/7 Services",
    points: [
      "Round-the-Clock Availability",
      "Rapid Response Time",
      "Expert Assistance",
      "Flexibility and Convenience.",
    ],
  },
];

const AboutCards = () => {
  return (
    <>
      <h1 className="mb-0">
        <center>Our Processes</center>{" "}
      </h1>

      <div className="tl">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className={`tl-container tl-${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="tl-content">
              <h4 className="text-center">{step.title}</h4>
              <p>
                {step.points.map((point, i) => (
                  <React.Fragment key={i}>
                    {i + 1}. {point}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutCards;
