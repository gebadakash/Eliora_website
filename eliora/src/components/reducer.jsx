
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
          subTitle:action.payload.subTitle
        }
      }
  
      return state;
}

export default reducer
