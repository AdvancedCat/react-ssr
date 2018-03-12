import React from "react";

import Banner from './components/Banner'

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Banner/>
        <h1>这是一场伟大的革命</h1>
      </div>
    );
  }
}
