import React, { useState, useEffect }from 'react'
import { Link, userParams, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

function UpdateBookInfo(props) {
  const [book, setBook] = useState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
  })

const { id } = useParams()
const navigate = useNavigate();

useEffect(() => {
  axios
  .get(`https://3000-ipsitak12-remgnt-a3f5ere5ao5.ws-us90.gitpod.io/api/books/${id}`)
  .then((res) => {
    setBook({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
    })
  })
  .catch((err) => {
    console.log("couldn't update the book")
  })

}, [id])

const onChange = (e) => {
  setBook({
     ...book, [e.target.name]: [e.target.value]
     })
}

const onSubmit =(e) => {
  e.preventDefault()
  const data = {
      title: book.title,
      isbn: book.isbn,
      author: book.author,
      description: book.description,
      published_date: book.published_date,
      publisher: book.publisher,

  };
  axios
  .put(`https://3000-ipsitak12-remgnt-a3f5ere5ao5.ws-us90.gitpod.io/api/books/${id}`, data)
  .then((res) =>{
    navigate(`/show-book/${id}`)
  })
  .catch((err) => {
    console.log("couldn't update the book")
  })
}


  return (
    <div className='UpdateBookInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className=''>ShowBookList</Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>edit book</h1>
          </div>
        </div>
      </div>
    </div>
    // <div><h1>this is UpdateBookInfo components</h1></div>
  )
}

export default UpdateBookInfo