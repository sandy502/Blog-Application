// import logo from './logo.svg';
// import './App.css';
import { Blogitem } from "./components/Bodymain";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Addblog } from "./components/Addblog";
import React, { useState, useEffect } from "react";

function App() {
  let initBlog;
  if(localStorage.getItem("blogitems")===null){
    initBlog = [];
  }
  else{
    initBlog = JSON.parse(localStorage.getItem("blogitems"));
  }
  const onUpdate = (blogitems) => {
    console.log('Updated Item.', blogitems);
  }
  const onDelete = (blogitem) => {
    console.log('Deleted Item.', blogitem);

    setBlogitems(blogitems.filter((e)=>{
      return e !== blogitem
    }));
    localStorage.setItem("blogitems", JSON.stringify(blogitems)); 
  }

  const addBlog = (title, desc) => {
    console.log("added new item.", title, desc);
    let sno;
    if(blogitems.length == 0){
      sno = 0;
    }
    else{
      sno = blogitems[blogitems.length-1].sno + 1;
    }
    const myBlogs = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setBlogitems([...blogitems, myBlogs]);
    console.log(myBlogs);

  }

  const [blogitems, setBlogitems] = useState(initBlog)
  useEffect(() => {
    
    localStorage.setItem("blogitems", JSON.stringify(blogitems));

  }, [blogitems])
  
  return (
    <div className="p-0 m-0">
      {/* <h3>my app</h3>
      <p>something cool and wonderful here.</p> */}
      
      <div className="container-fluid">
          <Header />
          <div className="row">
          <div className="col-2 bg-dark"> 
            </div>
            <div className="col-8">
            <Addblog addBlog={addBlog}/>
            
            <Blogitem blogitems={blogitems} onUpdate={onUpdate} onDelete={onDelete} />
             
            </div>
            <div className="col-2 bg-dark">

            </div>
            
                 
          </div>

          <Footer />
      </div>
    </div> 
       )
}

export default App;
