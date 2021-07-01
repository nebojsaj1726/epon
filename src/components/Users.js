import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      await axios
        .get("http://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => console.log(error));
    };
    fetchUsers();
  }, []);

  const renderTable = () => {
    return users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <Popup
            contentStyle={{ background: "#000", color: "#fff", padding: 10 }}
            trigger={
              <td>
                <button
                  style={{
                    border: "none",
                    background: "transparent",
                    outline: "none",
                  }}
                >
                  {user.address.street}
                </button>
              </td>
            }
            position="top center"
          >
            <div>
              <p>Suite: {user.address.suite}</p>
              <p>City: {user.address.city}</p>
              <p>Zipcode: {user.address.city}</p>
              <p>Geo-lat: {user.address.geo.lat}</p>
              <p>Geo-lng: {user.address.geo.lng}</p>
            </div>
          </Popup>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td>{user.company.name}</td>
          <td>{user.company.catchPhrase}</td>
          <td>{user.company.bs}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="text-center mb-5">Users</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company Name</th>
              <th>Company Catch Phrase</th>
              <th>Company BS</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
