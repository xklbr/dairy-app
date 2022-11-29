import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";

import { useForm } from "common/hooks";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../store";

const formData = {
  email: "",
  password: "",
};

export function LoginAuthForm() {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const { email, password, onInputChange } = useForm(formData);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <form
      onSubmit={onSubmit}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Email"
            type="email"
            placeholder="email@mail.com"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Password"
            type="password"
            placeholder="Password"
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </Grid>

        <Grid container display={!!errorMessage ? "" : "none"} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button
              disabled={isAuthenticating}
              type="submit"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              disabled={isAuthenticating}
              variant="contained"
              fullWidth
              onClick={onGoogleSignIn}
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} color="inherit" to="/auth/register">
            Create new account
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}
