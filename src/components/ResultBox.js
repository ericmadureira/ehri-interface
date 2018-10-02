import React from 'react';

const ResultBox = ({ result }) => {
  return (
    <textarea
      id='resultBox'
      className='pa3 ba'
      style={{ width: '70%', height: '200px' }}
      value={result}
      readOnly>
    </textarea>
  );
}

export default ResultBox;