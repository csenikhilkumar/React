import { useEffect } from "react";
import { useState } from "react";

function useFetch(URL) {
  const [post, setPosts] = useState({});
  const [loading, setLoading] = useState(true);

  async function getPosts() {
    setLoading(true);
    const response = await fetch(URL);
    const json = await response.json();
    setPosts(json);
    setLoading(false);
    console.log(URL);
  }

  useEffect(() => {
    getPosts();
  }, [URL]);
  return { post: post, loading: loading };
}

function SetPosts() {
  const [currentPost, setCurrentPost] = useState(1);
  const { post, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/" + currentPost
  );

  return (
    <>
      <div>
        {!loading ? JSON.stringify(post) : "loading"}
        <button onClick={() => setCurrentPost(1)}>1</button>
        <button onClick={() => setCurrentPost(2)}>2</button>
        <button onClick={() => setCurrentPost(3)}>3</button>
      </div>
    </>
  );
}

export default SetPosts;
