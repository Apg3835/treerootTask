import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import List from "./component/List";
import { useEffect } from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Header from "./component/Header";
import Form from "./component/Form";

import WindowDisplay from "./component/WindowDisplay";

export const fetchUserData = createAsyncThunk("user", async () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  const response = await axios.get(apiUrl);
  return response.data;
});
function App() {
  const userListOpen = useSelector((state) => state.user.listOpen);
  const windowOpen = useSelector((state) => state.user.windowWidth);
  const userFormOpen = useSelector((state) => state.user.formOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {/* conditional rendering to connect the pages onClick handler from the components */}
      {userListOpen && <List />}
      {windowOpen && <WindowDisplay />}
      {userFormOpen && <Form />}
    </div>
  );
}

export default App;
