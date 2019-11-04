import React from "react";
// import './Hooks.scss';

const Hooks = () => {
  return (
    <>
      <div className={`concept-details`}>
        <h3>React Concepts</h3>
        <pre>
        {`
useEffect(() => {
  console.log("Runs after component render and on subsequent re-renders");
  return function cleanup() { 
    console.log("cleanup after effect")
  }
});
        `}
        </pre>
      </div>
    </>
  );
};

export default Hooks;
