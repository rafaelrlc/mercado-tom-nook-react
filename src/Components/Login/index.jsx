import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { key } from "../../services/userApi";
import UserApi from "../../services/userApi";
import AuthContext from "../../store/authContext";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import tom_nook_icon_green from "../UI/images/tom_green_bg.jpg";

function Copyright(props) {
  return (
    <Typography
      sx={{
        margin: 2,
      }}
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/rafaelrlc">
        Rafael Lima
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const BtnTheme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ffffff",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffffff",
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: "#ffa726",
      main: "#f57c00",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const Login = (props) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  let createAccount = true;
  if (props.type == "login") {
    createAccount = false;
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const data_get = new FormData(event.currentTarget);

    const params = {
      email: data_get.get("email"),
      password: data_get.get("password"),
      returnSecureToken: true,
    };

    let url = `accounts:signInWithPassword?key=${key}`;

    if (createAccount == true) {
      url = `accounts:signUp?key=${key}`;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await UserApi.post(url, params, config);
      console.log(response);
      authCtx.login(response.data.idToken);
      navigate("/items");
    } catch (e) {
      console.log(e.response.data.error);
    }
  };

  const redirectPage = () => {
    if (createAccount) {
      navigate("/login");
    } else {
      navigate("/create");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "white", borderRadius: "8px" }}>
          <img
            src={tom_nook_icon_green}
            width="45px"
            height="45px"
            alt="tom_nook_icon"
          />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          fontFamily={"FinkHeavy"}
          fontSize={"30px"}
        >
          {createAccount ? "Sing Up" : "Sing In"}
        </Typography>
        <Box
          component="form"
          onSubmit={submitHandler}
          noValidate
          sx={{ mt: 1 }}
        >
          {createAccount && (
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Nome"
              name="name"
              autoComplete="name"
              autoFocus
            />
          )}

          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          {invalidCredentials && <p>Credencial Inválida</p>}
          <ThemeProvider theme={BtnTheme}>
            <Button
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1.5, mb: 2 }}
              fontFamily={"FinkHeavy"}
            >
              {createAccount ? "Criar Conta" : "Fazer Login"}
            </Button>
          </ThemeProvider>

          <Grid container>
            <Grid item xs>
              {createAccount && (
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              )}
            </Grid>
            <Grid item>
              <Link variant="body2" onClick={redirectPage} relative="path">
                {createAccount
                  ? "Já possui uma conta?"
                  : "Não possui uma conta?"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Login;
