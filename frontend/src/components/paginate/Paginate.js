import React from 'react'
import {useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Pagination} from 'react-bootstrap'
import {Link,useLocation} from "react-router-dom";
import './paginate.css'


const Paginate = ({pages,page /*, isAdmin=false, keyword=''*/}) => {

const {pathname} = useLocation()

 


const list = pathname.substring(pathname.indexOf('/'),pathname.lastIndexOf('/'));
console.log(list)

        return pages > 1 && (
         
           
            <>
        <div className="pagination backgroundColor">
        <button className="btn backgroundColor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn--icon backgroundColor"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="pages backgroundColor">
         
        { list === '/admin/propertylist' &&
        
          [...Array(pages).keys()].map(x => (
               <Link key={x+1} to={`/admin/propertylist/${x+1}`} >
  
            <a className={`page ${x+1===page && "active"}`}>{x+1}</a>
  
               </Link>
             ))}


{  list === '/admin/userlist' &&
        
        [...Array(pages).keys()].map(x => (
             <Link key={x+1} to={`/admin/userlist/${x+1}`} >

          <a className={`page ${x+1===page && "active"}`}>{x+1}</a>

             </Link>
           ))}


        
  
  
  
        </div>
        <button className="btn backgroundColor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn--icon backgroundColor"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
       </>
          
        )
}

export default Paginate
