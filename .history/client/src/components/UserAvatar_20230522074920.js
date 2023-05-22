import { Avatar } from "@mui/material";
import React from "react";

const UserAvatar = ({ username, height, width }) => {
  return (
    <Avatar
      sx={{
        height: height,
        width: width,
        backgroundColor: "lightblue",
        boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.25)",
      }}
      src={"https://robohash.org/" + username}
    />
  );
};

export default UserAvatar;
