import { useEffect } from "react";
import BlogPagePosts from "../components/BlogPageComponents/BlogPagePosts"
import { useGlobalContext } from "../components/context"
import PlacementHeader from "../components/PlacementPageComponents/PlacementHeader"

const Blog = () => {

  const {updateBlogPostPage} = useGlobalContext();

  useEffect(()=> updateBlogPostPage(), []);

  return (
    <>
    <PlacementHeader/>
    <BlogPagePosts/>
    </>
  )
}

export default Blog