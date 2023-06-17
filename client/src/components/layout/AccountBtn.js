import React, { Fragment, useState } from "react";
import { Button, Popover, Divider, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import arrow_down from "../images/Arrow_drop_down_big.png";
import avatar from "../images/avatar.png";

const AccountBtn = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Fragment>
      <Button
        className="account-btn"
        aria-describedby={id}
        variant="text"
        onClick={handleClick}
      >
        <Avatar
          alt="Remy Sharp"
          sx={{ height: "2rem", width: "2rem" }}
          src={avatar}
        />
        <p className=" text-secondary bold">Johandi</p>
        <img height={"24px"} alt="#" src={arrow_down} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Link
          to="/register"
          className="flex-container text-secondary flex-row flex-align"
          style={{
            textDecoration: "none",
            height: "2rem",
            width: "10rem",
            paddingLeft: "1rem",
          }}
        >
          <p>Help</p>
        </Link>
        <Divider />
        <Link
          to="/"
          className="flex-container text-secondary flex-row flex-align"
          style={{
            textDecoration: "none",
            height: "2rem",
            width: "10rem",
            paddingLeft: "1rem",
          }}
        >
          <p>Setting</p>
        </Link>
        <Divider />
        <Link
          to="/login"
          className="flex-container text-secondary flex-row flex-align"
          style={{
            textDecoration: "none",
            height: "2rem",
            width: "10rem",
            paddingLeft: "1rem",
          }}
        >
          <p>Logout</p>
        </Link>
      </Popover>
    </Fragment>
  );
};

export default AccountBtn;
