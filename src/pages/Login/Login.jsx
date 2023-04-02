import {
  Button,
  Divider,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext, useState } from "react";
//   import Textarea from "@mui/joy/Textarea";
import GoogleIcon from "@mui/icons-material/Google";
//   import { GoogleAuthProvider } from "firebase/auth";
//   import { AuthContext } from "@/contexts/AuthProvider";
import { ScaleLoader } from "react-spinners";
import { Link } from "react-router-dom";

//   const googleProvider = new GoogleAuthProvider();

const Login = () => {
  // Context values
  // const {setUser,logIn,googleLogIn} = useContext(AuthContext)

  // loading state
  const [loading, setLoading] = useState(false);

  // error state
  const [error, setError] = useState("");

  // Router hook
  // const router = useRouter();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  // Logging in a user with email and password
  const handleLogin = (event) => {
    event.preventDefault();

    const email = loginInfo.email;
    const password = loginInfo.password;

    if (email !== "" || password !== "") {
      setLoading(true);
      logIn(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          setLoading(false);

          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setLoading(false);
        });
    }
  };

  // User Login with google Account
  const handleGoogleLogIn = () => {
    setLoading(true);

    googleLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "80px auto",
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
              {loading && (
                <ScaleLoader
                  color="#36d7b7"
                  size={100}
                  style={{ textAlign: "center" }}
                />
              )}
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
              <Button
                onClick={handleGoogleLogIn}
                size="large"
                variant="outlined"
                color="success"
                sx={{
                  "&:hover": {
                    backgroundColor: "#2E7D32",
                    color: "white",
                  },
                }}
              >
                <GoogleIcon sx={{ marginRight: "10px" }} />
                <Typography variant="subtitle2">
                  Continue With Google
                </Typography>
              </Button>
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
