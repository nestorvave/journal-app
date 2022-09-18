import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
export default function RegisterPage() {
  return (
    <AuthLayout title="Register">
    <form>
      <Grid container>
      <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Nombre Completo"
            type="text"
            placeholder="Nestor Vargas"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@gmail"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseñaa"
            fullWidth
          />
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} >
            <Button variant="contained" fullWidth>
              Create account
            </Button>
          </Grid>
          
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Typography sx={{mr:1}}>Already have account?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            Cr
            <Link />
          </Link>
        </Grid>
      </Grid>
    </form>
  </AuthLayout>
  )
}
