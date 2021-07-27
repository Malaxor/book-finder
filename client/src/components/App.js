import React, { useState, Fragment } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import getBooksByAuthor from '../api/googleBooks';

const App = () => {
   const [books, setBooks] = useState([]);

   const onSubmit = async term => {
      const response = await getBooksByAuthor(term);
      setBooks(response);
   }
   console.log(books)
   return (
      <Fragment>
         <div className='container'>
            <Header />
            <SearchBar onSubmit={onSubmit} />
         </div>
      </Fragment>
   )
}
export default App;
