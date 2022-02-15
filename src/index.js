import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return (
    <h1>
      It's {props.day}, I'm in love! ... with {props.name}
    </h1>
  );
};

const Login = props => {
  return (
    <div>
      <p>Please login!</p>
      <button onClick={() => props.onClick()}>Sign In</button>
    </div>
  );
};

const Signout = props => {
  return <button onClick={() => props.onClick()}>Sign Out</button>;
};

const Layout = props => {
  return (
    <div
      style={{
        width: "50%",
        color: "white",
        backgroundColor: "skyblue",
        padding: "10px",
        margin: "10px",
      }}
    >
      {props.children}
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const onClick = () => {
    setIsAuthenticated(prev => !prev);
  };
  return (
    <div>
      <Layout>
        <Header day="Friday" name="Kim" />
      </Layout>
      <Layout>
        <h1>I want you!</h1>
        {isAuthenticated && (
          <>
            <h1>Welcome Back!</h1>
            <Signout onClick={onClick} />
          </>
        )}
        {!isAuthenticated && <Login onClick={onClick} />}
      </Layout>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
