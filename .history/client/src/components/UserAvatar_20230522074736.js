import { Avatar } from "@mui/material";
import React from "react";

const UserAvatar = ({ username, height, width }) => {
  return (
    <Avatar
      sx={{
        height: height,
        width: width,
        backgroundColor: "lightblue",
        border: "1px solid blue",
        boxShadow: "0px 10px 10px 0px rgba(0,0,0,0.25)",
      }}
      src={"https://robohash.org/" + username}
    />
  );
};

export default UserAvatar;
