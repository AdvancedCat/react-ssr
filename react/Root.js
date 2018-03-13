import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as AppInfoActions from "./actions/appinfo";

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //onsole.log("组件被重新挂载了");
  }

  render() {
    const { appinfo } = this.props;
    return [
      <div>
        <h1>这是一场伟大的革命, 你好{appinfo.userName}</h1>
        <div>{this.props.children}</div>
      </div>,
      <div>
        <h1>第二段内容</h1>
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    appinfo: state.appinfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppInfoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
