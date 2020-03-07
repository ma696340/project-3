import React from "react";


function NoMatch() {

  let styles = {
    textAlign: 'center'
  };

  return (
    <div>
      <h1 style={styles}>404 Page Not Found</h1>
      <h1 style={styles}>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
        </span>
      </h1>
    </div>
  );
}

export default NoMatch;
