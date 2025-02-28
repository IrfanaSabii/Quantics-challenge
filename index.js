import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import UserList from "./UserList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <UserList />
  </Provider>
);
