import React from "react";
import { AppBar, Toolbar, Typography, Switch } from "@mui/material";
import {Constant} from '../constants/constants.ts'

interface HeaderProps {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, setIsAdmin }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "var(--palette-background-dark)" }}>
      <Toolbar sx={{display: "flex", justifyContent: "flex-end"}}>
        <Typography>{Constant.ADMIN}</Typography>
        <Switch
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
          color="success"
          size="small"
        />
        <Typography>{Constant.USER}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
