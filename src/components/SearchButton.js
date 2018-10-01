import React from 'react';

const SearchButton = ({ searchfield, fetchData }) => {
  return (
    <div className='pa2'>
      <button
        className='pa3 ba b--gray'        
        value='Buscar'
        onClick={fetchData}
      >Search</button>
    </div>
  );
}

export default SearchButton;