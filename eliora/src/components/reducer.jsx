
const reducer = (state, action) => {
    if (action.type === "PLACEMENT_PAGE") {
        return {
          ...state,
          title: action.payload.title,
          subTitle:action.payload.subTitle,
          AgumentedTitle:action.payload.AgumentedTitle,
          AgumentedContent1:action.payload.AgumentedContent1,
          AgumentedContent2:action.payload.AgumentedContent2,
          AgumentedImage:action.payload.AgumentedImage,
        };
      }
    
      if (action.type === "CONTRACT_PAGE") {
        return {
          ...state,
          title: action.payload.title,
          subTitle:action.payload.subTitle,
          AgumentedTitle:action.payload.AgumentedTitle,
          AgumentedContent1:action.payload.AgumentedContent1,
          AgumentedContent2:action.payload.AgumentedContent2,
          AgumentedImage:action.payload.AgumentedImage,
        };
      }

      if(action.type === "CLIENT_PAGE"){

        return {
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle
        };
      }


      if(action.type === "GALLERY_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle
        };
      }


      if(action.type === "BLOG_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle
        }
      }


      if(action.type === "CAREER_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle
        }
      }

      if(action.type === "WEB_DEVELOPMENT_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle,
          DiscoverSectionTitle:action.payload.DiscoverSectionTitle,
          DiscoverSectionSubTitle:action.payload.DiscoverSectionSubTitle,
          DiscoverSectionParagraph:action.payload.DiscoverSectionParagraph,
          DiscoverSectionImage:action.payload.DiscoverSectionImage,
          DiscoverSectionButton:action.payload.DiscoverSectionButton,
          ServiceTitle:action.payload.ServiceTitle,
          ServiceContent:action.payload.ServiceContent,
          ExcellenceSectionTitle:action.payload.ExcellenceSectionTitle,
          ExcellenceSectionContent:action.payload.ExcellenceSectionContent,
          ExcellenceSectionImage:action.payload.ExcellenceSectionImage,
          ExcellenceSectionButton:action.payload.ExcellenceSectionButton,
        }
      }

      if(action.type === "ABOUT_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle
        }
      }

      if(action.type === "WEB_DESIGNING_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle,
          DiscoverSectionTitle:action.payload.DiscoverSectionTitle,
          DiscoverSectionSubTitle:action.payload.DiscoverSectionSubTitle,
          DiscoverSectionParagraph:action.payload.DiscoverSectionParagraph,
          DiscoverSectionImage:action.payload.DiscoverSectionImage,
          DiscoverSectionButton:action.payload.DiscoverSectionButton,
          ServiceTitle:action.payload.ServiceTitle,
          ServiceContent:action.payload.ServiceContent,
          ExcellenceSectionTitle:action.payload.ExcellenceSectionTitle,
          ExcellenceSectionSubTitle:action.payload.ExcellenceSectionSubTitle,
          ExcellenceSectionContent:action.payload.ExcellenceSectionContent,
          ExcellenceSectionImage:action.payload.ExcellenceSectionImage,
          ExcellenceSectionButton:action.payload.ExcellenceSectionButton,
        }
      }
      if(action.type === "WORDPRESS_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle,
          DiscoverSectionTitle:action.payload.DiscoverSectionTitle,
          DiscoverSectionSubTitle:action.payload.DiscoverSectionSubTitle,
          DiscoverSectionParagraph:action.payload.DiscoverSectionParagraph,
          DiscoverSectionImage:action.payload.DiscoverSectionImage,
          DiscoverSectionButton:action.payload.DiscoverSectionButton,
          ServiceTitle:action.payload.ServiceTitle,
          ServiceContent:action.payload.ServiceContent,
          ExcellenceSectionTitle:action.payload.ExcellenceSectionTitle,
          ExcellenceSectionContent:action.payload.ExcellenceSectionContent,
          ExcellenceSectionImage:action.payload.ExcellenceSectionImage,
          ExcellenceSectionButton:action.payload.ExcellenceSectionButton,
        }
      }
      if(action.type === "APPDEVELOPMENT_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle,
          DiscoverSectionTitle:action.payload.DiscoverSectionTitle,
          DiscoverSectionSubTitle:action.payload.DiscoverSectionSubTitle,
          DiscoverSectionParagraph:action.payload.DiscoverSectionParagraph,
          DiscoverSectionImage:action.payload.DiscoverSectionImage,
          DiscoverSectionButton:action.payload.DiscoverSectionButton,
          ServiceTitle:action.payload.ServiceTitle,
          ServiceContent:action.payload.ServiceContent,
          ExcellenceSectionTitle:action.payload.ExcellenceSectionTitle,
          ExcellenceSectionContent:action.payload.ExcellenceSectionContent,
          ExcellenceSectionImage:action.payload.ExcellenceSectionImage,
          ExcellenceSectionButton:action.payload.ExcellenceSectionButton,
        }
      }
      if(action.type === "Ecommerce_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle,
          DiscoverSectionTitle:action.payload.DiscoverSectionTitle,
          DiscoverSectionSubTitle:action.payload.DiscoverSectionSubTitle,
          DiscoverSectionParagraph:action.payload.DiscoverSectionParagraph,
          DiscoverSectionImage:action.payload.DiscoverSectionImage,
          DiscoverSectionButton:action.payload.DiscoverSectionButton,
          ServiceTitle:action.payload.ServiceTitle,
          ServiceContent:action.payload.ServiceContent,
          ExcellenceSectionTitle:action.payload.ExcellenceSectionTitle,
          ExcellenceSectionContent:action.payload.ExcellenceSectionContent,
          ExcellenceSectionImage:action.payload.ExcellenceSectionImage,
          ExcellenceSectionButton:action.payload.ExcellenceSectionButton,
        }
      }
      if(action.type === "Graphics_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle,
          DiscoverSectionTitle:action.payload.DiscoverSectionTitle,
          DiscoverSectionSubTitle:action.payload.DiscoverSectionSubTitle,
          DiscoverSectionParagraph:action.payload.DiscoverSectionParagraph,
          DiscoverSectionImage:action.payload.DiscoverSectionImage,
          DiscoverSectionButton:action.payload.DiscoverSectionButton,
          ServiceTitle:action.payload.ServiceTitle,
          ServiceContent:action.payload.ServiceContent,
          ExcellenceSectionTitle:action.payload.ExcellenceSectionTitle,
          ExcellenceSectionContent:action.payload.ExcellenceSectionContent,
          ExcellenceSectionImage:action.payload.ExcellenceSectionImage,
          ExcellenceSectionButton:action.payload.ExcellenceSectionButton,
        }
      }

      if(action.type === "DigitialMarketing_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle,
          DiscoverSectionTitle:action.payload.DiscoverSectionTitle,
          DiscoverSectionSubTitle:action.payload.DiscoverSectionSubTitle,
          DiscoverSectionParagraph:action.payload.DiscoverSectionParagraph,
          DiscoverSectionImage:action.payload.DiscoverSectionImage,
          DiscoverSectionButton:action.payload.DiscoverSectionButton,
          ServiceTitle:action.payload.ServiceTitle,
          ServiceContent:action.payload.ServiceContent,
          ExcellenceSectionTitle:action.payload.ExcellenceSectionTitle,
          ExcellenceSectionContent:action.payload.ExcellenceSectionContent,
          ExcellenceSectionImage:action.payload.ExcellenceSectionImage,
          ExcellenceSectionButton:action.payload.ExcellenceSectionButton,
        }
      }

      if(action.type === "UIAndUX_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle,
          DiscoverSectionTitle:action.payload.DiscoverSectionTitle,
          DiscoverSectionSubTitle:action.payload.DiscoverSectionSubTitle,
          DiscoverSectionParagraph:action.payload.DiscoverSectionParagraph,
          DiscoverSectionImage:action.payload.DiscoverSectionImage,
          DiscoverSectionButton:action.payload.DiscoverSectionButton,
          ServiceTitle:action.payload.ServiceTitle,
          ServiceContent:action.payload.ServiceContent,
          ExcellenceSectionTitle:action.payload.ExcellenceSectionTitle,
          ExcellenceSectionContent:action.payload.ExcellenceSectionContent,
          ExcellenceSectionImage:action.payload.ExcellenceSectionImage,
          ExcellenceSectionButton:action.payload.ExcellenceSectionButton,
        }
      }

      if(action.type === "PORTFOLIO_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle
        }
      }

      if(action.type === "CONTACT_PAGE"){

        return{
          ...state,
          title:action.payload.title,
          subTitle:action.payload.subTitle
        }
      }

      return state;
}

export default reducer
