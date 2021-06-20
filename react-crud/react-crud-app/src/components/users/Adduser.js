import React from 'react'

export default function Adduser() {
  return (
    <div>
      <h1 className="main-heading">Add User</h1>

      <form className="row g-3 add-user-form shadow bg-light-blue p-3 mx-auto w-50 mt-4">
        <div className="col-md-12">
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingName" placeholder="Name" />
            <label htmlFor="floatingName">Name</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingPhone" placeholder="Phone Number" />
            <label htmlFor="floatingPhone">Phone Number</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingEmail" placeholder="Email address" />
            <label htmlFor="floatingEmail">Email address</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingAddress" placeholder="Address" />
            <label htmlFor="floatingAddress">Address</label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success my-3"><i className="fas fa-plus"></i> Add User</button>
        </div>
      </form>

    </div>
  )
}
