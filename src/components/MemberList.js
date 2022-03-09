import React from "react";

const MemberList = ({ members }) => (
  <table style={{ width: "100%" }}>
    <thead>
      <tr>
        <th className="text-start">First name</th>
        <th className="text-start">Last name</th>
        <th className="text-start">Email</th>
        <th className="text-start">Team</th>
      </tr>
    </thead>
    <tbody>
      {members.map((item) => (
        <tr key={item.id}>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.team.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MemberList;
