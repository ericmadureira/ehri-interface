import React from 'react';

const SearchBox = ({ searchfield }) => {
  let divStyle = { width: '70%', height: '200px' };
  return (
    <div className='pa1'>
      <input
        className='pa3 ba'
        style={divStyle}
        id='searchBox'
        type='search'
        value='query { Country(id: "it") { name situation } }'
      />
    </div>
  );
}

export default SearchBox;