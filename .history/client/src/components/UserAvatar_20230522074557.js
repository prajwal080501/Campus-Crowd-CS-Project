import { Avatar } from "@mui/material";
import React from "react";

const UserAvatar = ({ username, height, width }) => {
  return (
    <Avatar
      sx={{
        height: height,
        width: width,
        backgroundColor: "lightblue",
        border: "1px solid black",
      }}
      src={"https://robohash.org/" + username}
    />
  );
};

export default UserAvatar;
