import React, { useEffect, useState } from 'react'
import './Showbook.css';
import { Link } from 'react-router-dom'
import axios from "axios";
import Searchbox from '../Searchbox/Searchbox';


export default function Showbook() {

  let [bookdata, setBookData] = useState([]);
  let [inputValue, setinputValue] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      let bookresult = await axios.get("http://127.0.0.1:3002/book");
      setBookData(bookresult.data)
    }
    fetchData();
  }, [])

  let filterData = bookdata.filter((bookVal) => bookVal.bookAuthor.toLowerCase() == inputValue.toLowerCase() || bookVal.bookName.toLowerCase() == inputValue.toLowerCase());
  return (
    <div>
      <div className='searchcontainer'>
        <Searchbox setinputValue={setinputValue} />
        <Link to="/addbook" >
          <button className='add-btn'>Add Book</button>
        </Link>
      </div>
      <div className='bookcontainer'>
       <div className='headingcontainer'>
        <h5>Book Name</h5> <h5>Book Author</h5> <h5>Book Quantity</h5>
       </div>
        
        {filterData.length ? filterData.map((ele) => (
                          
          < div className="card" key={ele.id}>
            <h3>{ele.bookName}</h3>
            <h4>{ele.bookAuthor}</h4>
            <h5>[{ele.bookQuantity}]</h5>
            <Link to="/editbook" state={ele}>
              <button className='edit-btn'>Edit Book</button>
            </Link>
            <Link to="/deletebook" >
              <button className='del-btn'>Delete Book</button>
            </Link>
          </div>
        ))
          :

          bookdata.length && bookdata.map((bookObj) => (
            < div class="card" key={bookObj.id}>
              <h4>{bookObj.bookName} </h4>
              <h5>{bookObj.bookAuthor}</h5>
              <h5> [{bookObj.bookQuantity}]</h5>
              <Link to="/editbook" state={bookObj}>
                <button className='edit-btn'>Edit Book</button>
              </Link>
              <Link to="/deletebook" state={bookObj}>
                <button className='del-btn'>Delete Book</button>
              </Link>

            </div>
           
          ))
        }
        </div>
      </div>
      )
}