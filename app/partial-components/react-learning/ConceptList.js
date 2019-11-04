import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import "./ConceptList.scss";

const ConceptList = () => {
  let match = useRouteMatch();
  console.log(match);
  return (
    <>
      <div className={`concept-list`}>
        <h3>React Concepts</h3>
        <ul className="concept-list">
          <li><Link className="text_link" to={`/concepts/hocs/`}>Higher Order Components</Link></li>
          <li><Link className="text_link" to={`/concepts/hooks/`}>Hooks</Link></li>
        </ul>
      </div>
    </>
  );
};

export default ConceptList;
