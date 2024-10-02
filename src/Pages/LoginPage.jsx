import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B2611", // Yellow Green
    },
    secondary: {
      main: "#0A1E15", // Dark Green
    },
    background: {
      default: "#EDF4DF", // Beige background
    },
  },
});

export default function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1509813685-e7f0e4eaf3ee?q=80&w=1535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          padding={1}
          component={Paper}
          elevation={6}
          square
          sx={{
            backgroundColor: "#EDF4DF", // Beige
          }}
        >
          <Box
            sx={{
              my: 8,
              border: "1px solid",
              borderColor: "#0B2611", // Dark green border
              display: "flex",
              borderRadius: "1rem",
              flexDirection: "column",
              alignItems: "center",
              mx: 4,
              padding: "100px",
              backgroundColor: "#ADB8A6", // Ash gray background
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5" sx={{ color: "#0A1E15" }}>
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    sx={{
                      "& label": { color: "#0A1E15" }, // Dark green text
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#0A1E15" },
                        "&:hover fieldset": { borderColor: "#0B2611" }, // Yellow green on hover
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    sx={{
                      "& label": { color: "#0A1E15" }, // Dark green text
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#0A1E15" },
                        "&:hover fieldset": { borderColor: "#0B2611" }, // Yellow green on hover
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        sx={{
                          color: "#0B2611", // Yellow green
                          "&.Mui-checked": { color: "#0B2611" }, // Yellow green when checked
                        }}
                      />
                    }
                    label="Remember me...!"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "#0A1E15", // Dark green button
                  color: "white",
                  "&:hover": { bgcolor: "#0B2611" }, // Yellow green on hover
                }}
              >
                Login
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2" sx={{ color: "#0A1E15" }}>
                    Forget Password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
