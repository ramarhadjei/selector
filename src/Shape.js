import React from 'react'

const Shape = (props) => {
  const { shape, selectShape } = props;
  
  return (
    <div
      className={shape}
      onClick={(evt) => {
        selectShape(shape);

      }}
    ></div>
    );
};

export default Shape;​

