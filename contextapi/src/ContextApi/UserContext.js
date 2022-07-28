import React from "react";

const userContext = React.createContext(undefined);

function UserProvider({ children }) {
  const [userData, setUserData] = React.useState({
    name: "Nouman",
  });

  return <UserProvider>{children}</UserProvider>;
}
