import React from "react";

import members from "./members.json";
import MemberList from "./MemberList";

const Members = () => (
  <div>
    <h2>Members</h2>
    <MemberList members={members} />
  </div>
);

export default Members;
