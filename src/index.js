import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return (
    <h1>
      It's {props.day}, I'm in love! ... with {props.name}
    </h1>
  );
};
const Layout = props => {
  return (
    <div
      style={{
        width: "50%",
        color: "white",
        backgroundColor: "skyblue",
        padding: "1px 20px 1px 40px",
        margin: "10px 20px 30px 40px",
      }}
    >
      {props.children}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Layout>
        <Header day="Friday" name="Kim" />
      </Layout>
      <Layout>
        <h1>I want you!</h1>
      </Layout>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
