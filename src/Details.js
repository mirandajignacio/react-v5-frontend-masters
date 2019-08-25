import React from 'react';

const Details = props => {
  return (
    <div>
      <h1>hi lol</h1>
      <pre>
        <code>{JSON.stringify(props, null, 4)}</code>
      </pre>
    </div>
  );
};

export default Details;
