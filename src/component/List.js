import React from "react";
import { useSelector } from "react-redux";
import "./List.css";

const List = () => {
  const list = useSelector((state) => state.user.data);
  const userListOpen = useSelector((state) => state.user.listOpen);
  console.log(list);
  return (
    <div open={userListOpen}>
      <div>
        <h2>Users List</h2>
      </div>

      {list.map((item) => (
        <div className="container" key={item.id}>
          <div className="title_container">
            <h3>TITLE: {item.title}</h3>

            <div className="body_container">BODY: {item.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
