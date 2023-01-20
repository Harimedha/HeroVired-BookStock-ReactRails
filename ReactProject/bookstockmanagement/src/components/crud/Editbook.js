import React from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState } from 'react';
import './Editbook.css'

function Editbook() {

    const location = useLocation();
    const book = location.state;

    let bookid = book.id
    const bookName = book.bookName
    const bookAuthor = book.bookAuthor
    const bookQuantity = book.bookQuantity
    let [data, setData] = useState({ bookName, bookAuthor, bookQuantity });
    const navigate = useNavigate();

    const handleChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        });

    }

    async function sendData() {
        // console.log(bookid);
        let updateurl = 'http://127.0.0.1:3002/book/' + bookid
        // console.log(updateurl)
        let res = await axios.put(updateurl, data);
        alert(res.data);
        navigate("/");

    }

    return (
        <div className='editcontainer'>
            <p>Edit Book Details</p>
            <div>
                <input type="text" placeholder={bookName} name="bookName" onChange={handleChange} />
            </div>
            <div>
                <input type="text" placeholder={bookAuthor} name="bookAuthor" onChange={handleChange} />
            </div>
            <div>
                <input type="text" placeholder={bookQuantity} name="bookQuantity" onChange={handleChange} />
            </div>
            <div>
                <button onClick={sendData}> Edit Book</button>
            </div>
        </div>
    )
}

export default Editbook