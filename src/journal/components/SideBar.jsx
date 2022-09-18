import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
  Grid,
  ListItemText,
} from "@mui/material";
import React from "react";

export default function ({ drawerWidth }) {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Nestor Vargas
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {["Enero", "Enero", "Enero", "Enero", "Enero", "Enero"].map(
            (text) => (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText
                      secondary={"gfdsgdsfdsfdsfdsfds fdsf ds fdsfd fsf ds fds"}
                    />
                  </Grid>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
}
