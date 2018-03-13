import _ from "lodash";

const initialState = {
  userName: "hongxin"
};

function receiveUserInfo(state, data) {
  return _.extend({}, state, data);
}

export default function appinfo(state = initialState, action) {
  switch (action.type) {
    case "userinfo":
      return receiveUserInfo(state, action.data);
    default:
      return state;
  }
}
