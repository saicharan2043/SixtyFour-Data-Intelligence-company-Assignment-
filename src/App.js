import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => (
  <ErrorBoundary>
    <Home />
  </ErrorBoundary>
);

export default App;
