import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Column, Row } from "simple-flexbox";

import ConceptList from "../partial-components/react-learning/ConceptList";
import Hocs from "../partial-components/react-learning/concepts/Hocs";
import Hooks from "../partial-components/react-learning/concepts/Hooks";
import Default from "../partial-components/react-learning/concepts/Default";

const Concepts = () => {
  useEffect(() => {
    document.title = `React Concepts`;
  });

  return (
    <Row horizontal="spaced">
      <Column flexGrow={1} style={{ width: "45%", padding: 5 }}>
        <ConceptList />
      </Column>
      <Column flexGrow={1} style={{ width: "55%", padding: 5 }}>
        <Switch>
          <Route exact path="/concepts/" component={Default} />
          <Route exact path="/concepts/hocs" component={Hocs} />
          <Route exact path="/concepts/hooks" component={Hooks} />
          <Route render={() => <h2>404 Page Not Found</h2>} />
        </Switch>
      </Column>
    </Row>
  );
};

export default Concepts;
