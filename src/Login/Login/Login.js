import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import login from "../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {user,loginUser,signInWithGoogle,isLoading,authError} = useAuth();

  let location = useLocation();
  let navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email,loginData.password);

    if (user) {
      navigate(from, { replace: true });
    }
    e.preventDefault();
  };
  const handleGoogleSignIn =()=>{
    signInWithGoogle(location);
    navigate('/');
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />
           
            <Button
              type="submit"
              sx={{ width: "75%", m: 1 }}
              variant="contained"
            >
              Login
            </Button>
            <Link to="/register" style={{textDecoration:'none'}}>
              <Button variant="text">New User? Please Register</Button>
            </Link>
            {isLoading && <CircularProgress color="success" />}
          {user?.email && 
            <Alert severity="success">
              <AlertTitle>Congratulations</AlertTitle>User Login 
              <strong> Successfully!</strong>
            </Alert>
          }
          {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>-------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img syle={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
