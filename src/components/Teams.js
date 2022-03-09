import React from "react";
import { Link } from "react-router-dom";

const teams = [
  {
    id: 1,
    name: "Project",
    member_count: 2
  },
  {
    id: 2,
    name: "Engineering",
    member_count: 4
  },
  {
    id: 3,
    name: "Design",
    member_count: 2
  },
  {
    id: 4,
    name: "QA",
    member_count: 2
  }
];

const Teams = () => (
  <div>
    <h2>Teams</h2>
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th className="text-start">Name</th>
          <th className="text-start">Member count</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((item) => (
          <tr key={item.id}>
            <td>
              <Link to={`/teams/${item.id}`}>{item.name}</Link>
            </td>
            <td>{item.member_count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Teams;
