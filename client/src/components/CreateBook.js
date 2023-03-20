import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const CreateBook = (props) => {
  const navigate = useNavigate();
  const [book, setbook] = useState( {
  title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
} )

const onChange = (e) => {
  setbook({
    ...book, [e.target.name]: e.target.value
  })
}
const onSubmit = (e) => {
  e.preventDefault()

  axios
  .post('https://3000-ipsitak12-remgnt-a3f5ere5ao5.ws-us90.gitpod.io/api/book',book)
   .then(() => {
    setbook({
      title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
    })
    navigate('/');

  })
  .catch((err) =>{
    console.log('Failed to create a new book')
    console.log(err)

  })
 }

 return (
  <div className='CreateBook'>
    <div className='container'>
      <div className='row'>
        
        {/*show all books*/}
        <div className='col-md-8 m-auto'>
          <br />
          <Link to='/' className='btn btn-outline-warning float-left'>
            Show All Books 
            </Link>
            <Link to='/' className='btn btn-outline-warning float-left'>
            HomePage 
            </Link>

        </div>

        {/*create book from*/}
        <div className='col-md-8 m-auto'>
          <h1 className='display-4 text-center'>Add New Book</h1>
          <p className='lead text-center'>Create A New Book</p>

          <form noValidate onSubmit={onSubmit}>

            <div className='from-group'>
              <input
              type='text'
              placeholder='Title of the book'
              name='title'
              className='from-control'
              value={book.title}
              onChange={onChange} 
              
              />
            </div>
            <br />
            {/* tittle*/}
            
            <div className='from-group'>
              <input type='text'placeholder='ISBN'
                  name='isbn'
                  className='form-control'
                  value={book.isbn}
                  onChange={onChange}
                  />
            </div>
            <br />
            {/* isbn*/ }

            <div className='form-group'>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={book.author}
                  onChange={onChange}
                />
              </div>
              <br />
              {/* Author */ }

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this book'
                  name='description'
                  className='form-control'
                  value={book.description}
                  onChange={onChange}
                />
              </div>
              <br />
              {/* Describe */ }
              <div className='form-group'>
                <input
                  type='date'
                  placeholder='published_date'
                  name='published_date'
                  className='form-control'
                  value={book.published_date}
                  onChange={onChange}
                />
              </div>
              <br />
              {/* published */ }
              
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Publisher of this Book'
                  name='publisher'
                  className='form-control'
                  value={book.publisher}
                  onChange={onChange}
                />
              </div>
              <br />
              {/* publisher */ }
              {/* submit */}
        <input
        type='submit'
        className='btn btn-outline-warning btn-block mt-4'
      />

          </form>
        </div>

        {/* submit */}
       
      </div>
    </div>
  </div>
 )
}
// function CreateBook() {
//   return (
//     <div><h1>This is the CreateBook </h1></div>
//   )
// }

export default CreateBook