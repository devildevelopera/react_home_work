import React from "react";

import members from "./members.json";
import MemberList from "./MemberList";

const TeamDetail = ({ match }) => {
  const teamMembers = members.filter(
    (item) => item.team.id === Number(match.params.id)
  );

  return (
    <div>
      <h2>Team Detail</h2>
      <MemberList members={teamMembers} />
    </div>
  );
};

export default TeamDetail;
