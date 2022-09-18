import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";

const drawerWidth = 240;

export default function JournalLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
