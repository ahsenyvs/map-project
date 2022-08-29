import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import Styles from "./index.module.scss";

// import { users } from "../../../dummy/users";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { users } = useContext(UserContext);
  console.log(name, password);

  const handleLogin = () => {
    const user = users.find((_user) => _user.name === name);
    if (!user || user.password !== password) {
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
        label='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
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
          <p>Please check your name or password !</p>
        </div>
      )}
    </Box>
  );
};

export default Login;
