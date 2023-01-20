import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import axios from "axios";
import './Deletebook.css';
function Deletebook() {
    const location = useLocation();
    const  book = location.state;
    const navigate = useNavigate();
    let bookid = book.id    
    
    async function handleDelete() {
        let deleteurl = 'http://127.0.0.1:3002/book/' + bookid
        console.log(deleteurl)
        let res = await axios.delete(deleteurl);
        alert(res.data);
        navigate("/")
        
  
    }
    
    return (
        <div className='deletecontainer'>
            <p>Delete Book Details</p>                         
            <h4>Book Name: {book.bookName}</h4>                                            
            <h4>Book Author: {book.bookAuthor}</h4>                                        
            <h4>Book Quantity: {book.bookQuantity}</h4>                     
           <button type="submit" onClick={handleDelete}>Delete Book</button>
         
        </div>
    )
}

export default Deletebook;