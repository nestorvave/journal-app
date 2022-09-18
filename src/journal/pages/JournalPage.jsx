import { AddOutlined, MailOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import JournalLayout from "../layout/JournalLayout";
import NoteView from "../views/NoteView";
import NothingSelectedView from "../views/NothingSelectedView";

export default function JournalPage() {
  return (
    <JournalLayout>
      {/*  <NoteView /> */}
      <NothingSelectedView />
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />{" "}
      </IconButton>
    </JournalLayout>
  );
}
