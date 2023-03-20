// import React ,{ useState, useEffect }from 'react';
import'../App.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
// import BookCard from './BookCard';

function HomePage() {

  return (
    <div className='HomePage'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <nav class="navbar navbar-exapand-lg navbar-light bg-light">
              <a class="navbar-brand" >NavBar</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" >Link</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="navbarDropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        DropDown
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" >Action</a>
                        <a class="dropdown-item" >Another Action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" >Something else</a>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled">disabled </a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="search" aria-label="Search" />
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
           
          </div>

          
          </div>
        </div>
        
      </div>

    
  );
}

 export default HomePage;

