import React from 'react';

const Container = props => {

  return (
    <div className="container"  >
      
        <div className="col-lg-8 col-md-10 col-sm-8 mt-4 mx-auto">{props.children}</div>
      
    </div>
  );
};

export default Container;
