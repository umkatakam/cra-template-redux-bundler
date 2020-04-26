import React, { useEffect, useState, Fragment } from "react";
import { connect } from "redux-bundler-react";

export default connect(
  "doFetchFacts",
  "selectFacts",
  "selectLoading",
  ({ doFetchFacts, facts, loading }) => {
    const [animal, setAnimal] = useState("cat");
    useEffect(() => {
      doFetchFacts();
    }, []);
    return (
      <Fragment>
        <div className="header">
          <h1>{animal.toUpperCase()}</h1>
          <p>Random facts</p>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div id="Facts-container" className="facts">
            <div id="Action-container" className="actions">
              <select
                value={animal}
                onChange={(e) => {
                  setAnimal(e.target.value);
                  doFetchFacts(e.target.value);
                }}
              >
                <option value="cat"> Cat </option>
                <option value="dog"> Dog </option>
              </select>
            </div>
            <ul id="Facts-list">
              {facts &&
                facts.map((fact) => <li key={fact._id}>{fact.text}</li>)}
            </ul>
          </div>
        )}
      </Fragment>
    );
  }
);
