import React from 'react';

const ResultBox = ({ resultfield }) => {
  let divStyle = { width: '70%', height: '200px' };
  return (
    <div className='pa1'>
      <input
        className='pa3 ba'
        style={divStyle}
        id='resultBox'
      />
    </div>
  );
}

export default ResultBox;