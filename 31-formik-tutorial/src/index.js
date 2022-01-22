import ReactDOM from "react-dom";
// import SignupFormFormikCustomComponentsBonus from "./SignupFormFormikCustomComponentsBonus";
import SignupFormFormikCustomComponentsSessionStorage from "./SignupFormFormikCustomComponentsSessionStorage";
// import SignupFormFormikComponents from "./SignupFormFormikComponents";
// import SignupFormFormikVerbose from "./SignupFormFormikVerbose";
// import SignupFormFormikCustomComponents from "./SignupFormFormikCustomComponents";

function App() {
  return <SignupFormFormikCustomComponentsSessionStorage />;
  // return (
  //   <SignupFormFormikCustomComponentsBonus
  //     firstName="Jeffrey"
  //     lastName="Xie"
  //     email="jeffrey.xie@love.code.com"
  //     jobType="development"
  //   />
  // );
  // return <SignupFormFormikCustomComponents />;
  // return <SignupFormFormikComponents />;
  // return <SignupFormFormikValidationSchemaAndGetFieldProps />;
  // return <SignupFormFormikVerbose />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
