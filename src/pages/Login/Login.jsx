import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Lock from "../../assets/lock.png";

const Login = () => {
  // error state
  const [error, setError] = useState("");

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  // Logging in a user with email and password
  const handleLogin = (event) => {
    event.preventDefault();

    const email = loginInfo.email;
    const password = loginInfo.password;

    console.log(email, password);

    if (email !== "" || password !== "") {
    
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "60px auto",
        boxShadow: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        padding: "2rem",
      }}
    >
      <Stack width="400px" margin="auto">
        <Paper
          sx={{
            paddingTop: "1rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingBottom: "3rem",
          }}
        >
          <Stack justifyContent="center" alignItems="center">
            <img src={Lock} alt="" className="h-12 md:h-16 w-12 md:w-16 my-4" />
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              marginBottom="2rem"
              paddingBottom="1rem"
            >
              Log In
            </Typography>
          </Stack>

          <form required>
            <Stack spacing={3}>
              {/* {loading && (
                <ScaleLoader
                  color="#36d7b7"
                  size={100}
                  style={{ textAlign: "center" }}
                />
              )} */}
              <TextField
                id="email"
                type="email"
                label="Email"
                variant="standard"
                required
                size="small"
                onChange={(e) =>
                  setLoginInfo({ ...loginInfo, email: e.target.value })
                }
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                required
                variant="standard"
                size="small"
                onChange={(e) =>
                  setLoginInfo({ ...loginInfo, password: e.target.value })
                }
              />
              {error && (
                <Typography color="red" fontWeight="bold" fontSize="small">
                  {error}
                </Typography>
              )}
              <Button
                className="bg-purple-600"
                // disabled={loginInfo.email === ''  || loginInfo.password === ''}
                onClick={handleLogin}
                size="large"
                variant="contained"
                sx={{
                  backgroundColor: "#a855f7",
                  "&:hover": {
                    //   backgroundColor: "#2196f3",
                  },
                }}
              >
                Login
              </Button>

              <Divider
                sx={{ margin: "0px", padding: "0px", fontFamily: "railway" }}
              >
                OR
              </Divider>
            </Stack>
          </form>
          <Typography variant="subtitle2" textAlign="center" mt={2}>
            New Here ?
            <Link
              to="/register"
              style={{
                paddingLeft: "8px",
                textDecoration: "none",
                color: "red",
                fontWeight: "bold",
              }}
            >
              Register Now
            </Link>
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Login;
