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
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
      }}
      src={"https://robohash.org/" + username}
    />
  );
};

export default UserAvatar;
