import React from "react";
// import './Hocs.scss';

const Hocs = () => {

  return (
    <>
      <div className={`concept-details`}>
        <h3>React Concepts</h3>
        <pre>
        {`
function higherOrderFunction (callback) {
  return function () {
    return callback()
  }
}
        `}
        </pre>
      </div>
    </>
  );
};

export default Hocs;