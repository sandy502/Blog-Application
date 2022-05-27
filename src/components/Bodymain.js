import React from 'react'
import { Blog } from './Blog';

export const Blogitem = (props) => {
  return (
    <div className='container-fluid col'>
        <hr/>
        <h3 className='text-center bg-white mx-2 py-4'>Blog items</h3>
        <hr/>  
        {/* this map function is for the display of all blog items */}
        {props.blogitems.length===0? "no blogs to display.":
        props.blogitems.map((blogitems)=>{
            return <Blog blogitems={blogitems} key={blogitems.sno} onUpdate={props.onUpdate} onDelete={props.onDelete} />
        })
        }
        {/* <Blog blogitems = {props.blogitems[1]} /> */}
        
    </div>
  )
}

