import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

function LoginPage(props) {
  const [id, setId] = useState("sample");
  const [name, setName] = useState("EJ");
  const [code, setCode] = useState(0);
  const [q1Rating, setQ1Rating] = useState(4);
  const [q2Rating, setQ2Rating] = useState(4);
  return (
    <>
      <TextField
        id="login"
        label="Prolific ID"
        variant="outlined"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      {/* <TextField
        id="name"
        label="Name or username"
        variant="outlined"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      /> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={code}
        label="Code"
        onChange={(e) => {
          setCode(e.target.value);
        }}
      >
        <MenuItem value={0}>97W2X</MenuItem>
        <MenuItem value={1}>YU28Z</MenuItem>
        <MenuItem value={2}>Q528D</MenuItem>
        <MenuItem value={3}>VV</MenuItem>
      </Select>
      <Button onClick={() => props.handleLogin(id, name, code)}>Login</Button>
    </>
  );
}

export default LoginPage;
