import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { dataSliceActions } from "../reducer/dataSlice";

const Header = () => {
  const dispatch = useDispatch();

  const listOpenHandler = () => {
    dispatch(dataSliceActions.userListOpen());
  };
  const formOpenHandler = () => {
    dispatch(dataSliceActions.userFormOpen());
  };
  const widthMeasureHandler = () => {
    dispatch(dataSliceActions.userWindowOpen());
  };
  return (
    <div className="header">
      <h1 className="heading">TreeRoot Users</h1>
      <div className="button">
        <div className="button_1" onClick={listOpenHandler}>
          List
        </div>
        <div className="button_2" onClick={formOpenHandler}>
          Form
        </div>
        <div className="button_3" onClick={widthMeasureHandler}>
          Window-Width
        </div>
      </div>
    </div>
  );
};

export default Header;
