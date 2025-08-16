import React from 'react';

const ComponentContainerLast = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app-cont app-cont-bottom ${classNames}`}>
        <div className='app-wrapper flex'>
          <Component />
        </div>
      </div>
    );
  };

export default ComponentContainerLast;
