import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: 100 }}>
        <div className="row">
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Users</h5>
                <Link to="/users" className="btn btn-info">
                  Go To Users
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Todos</h5>
                <Link to="/todos" className="btn btn-info">
                  Go To Todos
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Posts</h5>
                <Link to="/posts" className="btn btn-info">
                  Go To Posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
