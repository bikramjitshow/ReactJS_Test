import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {

  const [users, setusers] = useState([]);

  useEffect(() => {
    console.log('from useeffect !!');
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:3004/users");
    console.log(res.data);
    setusers(res.data);
  }

  return (
    <div className="home">
      <h1 className="main-heading">ALL USERS</h1>
      <div className="table-responsive border-top bg-light-blue border-5 border-primary shadow rounded p-3 my-3">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
          <Link to="/user/add" type="button" className="btn btn-primary"><i className="fas fa-user-plus"></i> Add User</Link>
        </div>
        <table className="table table-bordered border-primary table-hover mb-0">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index + 1}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>
                    <button type="button" className="btn btn-outline-primary btn-sm me-2"><i className="far fa-eye"></i> View</button>
                    <button type="button" className="btn btn-outline-warning btn-sm me-2"><i className="far fa-edit"></i> Edit</button>
                    <button type="button" className="btn btn-outline-danger btn-sm"><i className="far fa-trash-alt"></i> Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
