import React from 'react';

const SearchButton = ({ fetchData }) => {
  return (
    <div className='pa2'>
      <button
        className='pa3 ba b--gray'
        onClick={fetchData}
      >Search</button>
    </div>
  );
}

export default SearchButton;