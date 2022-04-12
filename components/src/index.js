import React from "react";
import ReactDOM from "react-dom";
import CommonDetails from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comment">
      <CommonDetails author = "sam" timeAgo = "Today at 4:00PM" content = "testing"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
