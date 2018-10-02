import React from 'react';

const ResultBox = ({ result }) => {
  return (
    <div id='resultBox' className='pa3 ba' style={{ width: '70%', height: '200px' }}>
      {result}
    </div>
  );
}

export default ResultBox;