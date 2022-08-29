import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import Styles from "./index.module.scss";

const Login = () => {
  const { users } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [register, setRegister] = useState(false);

  const handleLogin = () => {
    const user = users.find((_user) => _user.email === email);
    if (user.status === false) {
      setRegister(true);
    } else if (!user || user.password !== password) {
      setError(true);
      return;
    } else {
      window.location.href = "/map";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        label='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ margin: "30px", width: "40vw" }}
      />
      <TextField
        label='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        sx={{ marginBottom: "30px", width: "40vw" }}
      />

      <Button onClick={handleLogin}>Login</Button>

      {error && (
        <div className={Styles.error}>
          <p>Please check your email or password !</p>
        </div>
      )}

      {register && (
        <div className={Styles.error}>
          <p>Please sign up !</p>
        </div>
      )}
    </Box>
  );
};

export default Login;
