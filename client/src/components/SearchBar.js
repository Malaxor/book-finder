import React, { Fragment, useState, useEffect } from 'react';

const SearchBar = ({ onSubmit }) => {
   const [ term, setTerm ] = useState('');
   const termSubmit = e => {
      e.preventDefault();
      onSubmit(term);
   }
   return (
      <Fragment>
         <form className='form' onSubmit={termSubmit}>
            <input
               className='input'
               type="text" 
               placeholder='Author' 
               value={term}
               onChange={e => setTerm(e.target.value)}
            />
         </form>
      </Fragment>
   );
}
export default SearchBar;
