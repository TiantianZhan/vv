import "./styles/App.css";
import ChatWindow from "./components/ChatWindow";
import LoginPage from "./components/LoginPage";
import { useState } from "react";
import { AuthContext } from "./contexts/contexts";
import { getLinearProgressUtilityClass } from "@mui/material";

export default function App() {
  const [auth, setAuth] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState(-1);

  function handleLogin(id, name, code) {
    setAuth(id);
    setName(name);
    setCode(code);
  }

  return (
    <AuthContext.Provider value={auth}>
      <div className="App">
        <h2 className="title">Try out the chat window below!</h2>

        {auth === "" ? (
          <LoginPage handleLogin={handleLogin} />
        ) : (
          <ChatWindow
            userId={auth}
            name={name}
            code={code}
            logoutHandler={() => setAuth("")}
          />
        )}
        {/* <ChatWindow logoutHandler={() => setAuth("")} /> */}
      </div>
    </AuthContext.Provider>
  );
}
