import React from 'react';

const SearchBox = ({ search, onchange }) => {
  let divStyle = { width: '70%', height: '200px' };
  return (
    <div className='pa1'>
      <input
        onChange={onchange}
        className='pa3 ba'
        style={divStyle}
        id='searchBox'
        type='search'
        defaultValue={search}
      />
    </div>
  );
}

export default SearchBox;