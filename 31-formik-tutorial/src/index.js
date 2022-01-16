import ReactDOM from "react-dom";
// import SignupFormFormikComponents from "./SignupFormFormikComponents";
// import SignupFormFormikVerbose from "./SignupFormFormikVerbose";
import SignupFormFormikComponents from "./SignupFormFormikCustomComponents";

function App() {
  return <SignupFormFormikComponents />;
  // return <SignupFormFormikComponents />;
  // return <SignupFormFormikValidationSchemaAndGetFieldProps />;
  // return <SignupFormFormikVerbose />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
