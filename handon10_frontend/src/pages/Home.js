import React from "react";
import usePosts from "../hooks/Usepost";
//import Post from "../components/Post";

function Home() {
  const { posts, isLoading } = usePosts()
  console.log(posts);
  const {data} = posts;
  console.log(data)

  if (isLoading) return <h1>Loading...</h1>

  return (
<div>
  <h1>I,m Confusing</h1>
  </div>
  )
}

export default Home;
