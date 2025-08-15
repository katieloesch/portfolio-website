import React from 'react';

const BottomContainer = (Component, idName, classNames) =>
  function HOC() {
    console.log(idName);
    return (
      <div id={idName} className={`app-cont app-cont-bottom ${classNames}`}>
        <div className='app-wrapper flex'>
          <Component />
        </div>
      </div>
    );
  };

export default BottomContainer;
