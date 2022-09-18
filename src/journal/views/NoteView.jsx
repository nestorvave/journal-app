import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import ImageGallery from "../components/ImageGallery";

export default function NoteView() {
  return (
    <Grid
      container
      justifyContent="space-between"
      direction="row"
      sx={{ mb: 1 }}
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h1" fontSize={39} fontWeight="light">
          {" "}
          28 Agosto,2023
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio en el dia de hoy?"
          minRows={5}
        />
      </Grid>
      <ImageGallery/>
    </Grid>
  );
}
