import './App.css';
import React, { Component, useEffect, useState } from 'react';
import Posts from './components/posts'
import Pagi from './components/pagination'
import Search from "./components/search";


function App() {

  const [posts, setposts] = useState([]);
  const [currentPage, setcurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    setposts(data);
  }


  const paginate = (num) => {
    setcurrentPage(num)
  }



  const Sort = () => {
    let arr = [...posts]
    arr.sort((a, b) => {
      if (a.title[0] > b.title[0])
        return 1
      return -1
    })
    setposts(arr)
  }


  const changeSearch =(e)=>{
    let value = e.target.value
    let arr = [...posts]
    arr.filter((post) => {
      if(post.title[0]===value)
      return post
    })
    setposts(arr)
    console.log(value)
  
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="main">
      <button onClick={Sort}>Sort</button>
      <Search changeSearch={changeSearch}/>
      <Posts currentPosts={currentPosts} />
      <Pagi postsCount={posts.length} postsPerPage={postsPerPage} paginate={paginate} />
    </div>
  );

}
export default App;