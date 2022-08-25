import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { users } from "../../../dummy/users";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  console.log(name, password);

  const handleLogin = () => {
    const user = users.find((_user) => _user.name === name);
    if (!user || user.password !== password) {
      // reject(new Error("Please check your email and password"));
      return;
    } else console.log("login");
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
        label='name'
        // type='name'
        // variant='outlined'
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{ margin: "30px" }}
      />
      <TextField
        label='password'
        // type='password'
        // variant='outlined'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        sx={{ marginBottom: "30px" }}
      />

      <Button onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default Login;
