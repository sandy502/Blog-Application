import React, { useState } from "react";

export const Addblog = ({addBlog}) => {
    const [title, setTitle] = useState(" ");
    const [desc, setDesc] = useState(" ");

    const Submit = (e) =>{

        e.preventDefault();

        if (title==" " || desc==" ") {
            alert("something is missing!!!");
        }
        else{
            addBlog(title, desc);
            setTitle(" ");
            setDesc(" ");
        }
       
    }

  return (
    <div className="container-fluid py-2 row">
              <hr/>
              <h3 className="text-center bg-white">Write a Blog.</h3>
              <hr/>
          <div className="col">
                  <form onSubmit={Submit}>
                <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  onChange={(e)=>{setTitle(e.target.value)}}
                  value={title}
                  placeholder="add title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                  Add Body
                </label>
                <textarea
                  className="form-control"
                  id="desc"
                  onChange={(e)=>{setDesc(e.target.value)}}
                  value={desc}
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary col">Create</button>
                </form>
          </div>
        </div>  
  );
};
