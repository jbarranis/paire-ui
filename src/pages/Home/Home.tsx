import React from "react";
import { Card } from '@paire/card';

import { useAuth } from "../../contexts";

export function Home() {
  const auth = useAuth();

  const logoutClick = async () => {
    await auth.signout();
  };

  return (
    <div className="App">
      <Card text={`card from paire bit components! Welcome ${auth.user?.first_name}`} />
      <button onClick={logoutClick}>Logout</button>
    </div>
  )
}
