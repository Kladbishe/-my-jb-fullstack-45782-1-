import "./App.css";
import Layout from "../layout/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import { Provider as Redux } from "react-redux";
import Auth from "../auth/auth/auth";

function App() {
  return (
    <BrowserRouter>
    <Auth>
      <Redux store={store}>
      <Layout />
      </Redux>
    </Auth>
    </BrowserRouter>
  );
}

export default App;
