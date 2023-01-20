import React from 'react'
import Axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addbook.css'

function Addbook() {

    let [data, setData] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    }


    async function sendData() {
        try {
             let res = await Axios.post('http://127.0.0.1:3002/book', data);
            res.data ? alert(res.data.message) : alert("Book Addition failed")
            navigate("/")
            } catch (error) {
                alert("Book Addition failed")
                navigate("/")
            }
        }

return (
    <div className='addcontainer'>Add Book Details
        <div>
            <input type="text" placeholder="Book Name" name="bookName" onChange={handleChange} required="true" />
        </div>
        <div>
            <input type="text" placeholder="Book Author" name="bookAuthor" onChange={handleChange} required="true"/>
        </div>
        <div>
            <input type="text" placeholder="Quantity" name="bookQuantity" onChange={handleChange} required="true"/>
        </div>
        <div>
            <button onClick={sendData}>Add Book</button>
        </div>
    </div>
)
}

export default Addbook;