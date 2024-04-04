import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();


const initialState ={

    title:"",
    subTitle:"",
    AgumentedTitle:"",
    AgumentedContent1:``,
    AgumentedContent2:``,
    AgumentedImage:"",
    
};

const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const updatePlacementPage = () => {

        return dispatch({
            type:"PLACEMENT_PAGE",
            payload:{
                title:"Placement and Recruitment",
                subTitle:"Placement and Recruitment",
                AgumentedTitle:"Augment your Team with Placement and Recruitment Solution",
                AgumentedContent1:`In the dynamic realm of talent acquisition and placement, Eliora emerges as a beacon of expertise and innovation, specializing in IT recruitment, IT placement, BPO recruitment consultant, banking and financial services recruitment and logistics and marketing placement. With a team of dedicated individuals, we expertly bridge the divide between exceptional individuals and industry-leading enterprises across diverse sectors. Our primary motto centers on accuracy, matching elite individuals with suited opportunities and creating synergistic relationships in the constantly changing placement and recruiting scene.`,
                AgumentedContent2:`Our holistic approach extends beyond mere placement. Eliora's Recruitment and Placement service functions as your strategic compass, ensuring that the right individuals occupy the right positions. This commitment to precision provides a rock-solid foundation for your projects, ensuring continuity and undeviating stability. By choosing Eliora as your ally, you gain access to an exceptional talent reservoir. These individuals not only possess the requisite skills but also have a thorough understanding of the values and goals of your business.`,
                AgumentedImage:"images/ft.png",

            },
        });

    }

    const updateContractPage = () =>{

        return dispatch({
            type:"CONTRACT_PAGE",
            payload:{
                title:"Contract to Contract Staffing",
                subTitle:"Contract to Contract Staffing",
                AgumentedTitle:"Optimize Your Talent Acquisition with IT Contracting Staffing Solutions",
                AgumentedContent1:`In today's fiercely competitive business landscape, Staffing services have become a strategic imperative for companies seeking long-term success. Eliora, a trailblazer in the field, provides Contract services that surpasses traditional models, delivering operational accuracy and efficiency unmatched in the industry. We don't just combine skills; we coordinate synergies between candidates who share similar, synchronized career trajectories. By cultivating synergistic connections between individuals with aligned career goals, we facilitate the building of cohesive, mission-driven teams, seamlessly integrated with our philosophy and your company's principles.`,
                AgumentedContent2:`Our resume enhancement service uses advanced and AI-based analytics to ensure that candidates' qualifications not only shine through but are also perfectly matched to the talent needs of your organization. At the same time, our Interview Skills sessions equip candidates with the cognitive agility and emotional intelligence needed to excel at interviews, streamlining and accelerating your hiring process. By partnering with us, you gain access to an elite talent pool that not only possesses exceptional technical capabilities but also fits your company's culture and strategic imperatives. It's time to revolutionize your company's talent acquisition strategy with our contract staffing services expertise and gain a decisive advantage in the competitive market.`,
                AgumentedImage:"images/ft1.png",

            },
        });
    }

    const updateClientPage = () =>{

        return dispatch({
            type:"CLIENT_PAGE",
            payload:{
                title:"Our Clients",
                subTitle:"Our Client"
            }
        })
    }


    const updateGalleryPage = () =>{

        return dispatch({
            type:"GALLERY_PAGE",
            payload:{
                title:"Our Gallery",
                subTitle:"Gallery"
            }
        })
    }


    const updateBlogPostPage = () => {

        return dispatch({
            type:"BLOG_PAGE",
            payload:{
                title:"Blog",
                subTitle:"Blog"
            }
        })
    }


    const updateCareerPage = () => {

        return dispatch({
            type:"CAREER_PAGE",
            payload:{
                title:"career",
                subTitle:"career"
            }
        })

    }

    const updateWebDevelopmentPage = () => {

        return dispatch({
            type:"WEB_DEVELOPMENT_PAGE",
            payload:{
                title:"Website Development",
                subTitle:"Website Development"
            }
        })
    }


        return (
            <AppContext.Provider
            value={{...state, updatePlacementPage,updateContractPage,updateClientPage,
            updateGalleryPage,updateBlogPostPage,updateCareerPage,updateWebDevelopmentPage}}>
                {children}
            </AppContext.Provider>
        );


};


const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
// eslint-disable-next-line react-refresh/only-export-components
  export { AppContext, AppProvider, useGlobalContext };
