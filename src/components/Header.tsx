import React from "react";
import { AppBar, Toolbar, Typography, Switch } from "@mui/material";

interface HeaderProps {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, setIsAdmin }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#161718" }}>
      <Toolbar sx={{display: "flex", justifyContent: "flex-end"}}>
        <Typography>admin</Typography>
        <Switch
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
          color="success"
          size="small"
        />
        <Typography>user</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
