import React from 'react';

const Tag = ({ text, children }) => {
  return (
    <>
      <span className='E63946'>{"<"}</span>
      <span className='A8DADC'>{text}</span>
      <span className='E63946'>{">"}</span>
      {children}
      <span className='E63946'>{"</"}</span>
      <span className='A8DADC'>{text}</span>
      <span className='E63946'>{">"}</span>
    </>
  );
};

export default Tag;