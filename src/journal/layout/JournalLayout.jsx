import { Box, Toolbar } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import JournalPage from "../pages/JournalPage";

const drawerWidth = 240;

export default function JournalLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
