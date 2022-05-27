import React from 'react'

export const Blog = ({blogitems, onUpdate, onDelete}) => {
  return (
      <div className='container-fluid col bg-white'>
          <hr/>
      <div className='col text-center'>
        <h3>{blogitems.title}</h3>
        <p>{blogitems.desc}</p>
        </div>
        <div className='col text-center '>
          <button className="btn btn-primary mx-2" onClick={()=>{onUpdate(blogitems)}}>Update</button>
          <button className="btn btn-danger mx-2" onClick={()=>{onDelete(blogitems)}}>Delete</button>
          <hr />
        </div>

      </div>
          
         
        /* <h3>{blogitems.title}</h3>
        <p>{blogitems.desc}</p>
        <button className="btn btn-primary" onClick={()=>{onUpdate(blogitems)}}>Update</button>
        <button className="btn btn-danger" onClick={()=>{onDelete(blogitems)}}>Delete</button> */
  )
}
