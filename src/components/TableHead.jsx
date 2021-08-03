import React from "react";

export default function TebleHead(params) {
  return (
    <thead>
      <tr>
        <th colSpan="6">
          <h2>Data Base</h2>
        </th>
      </tr>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Phone</th>
        <th>E-mail</th>
        <th>Actions</th>
        <th>
          <button>New User</button>
        </th>
      </tr>
    </thead>
  );
}
