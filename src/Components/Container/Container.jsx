import React, { Children } from 'react';

const Container = ({children}) => {
  return (
    <div className='container mx-auto px-5 md:px-10 lg:px-14 xl:px-20'>
      {children}
    </div>
  );
};

export default Container;