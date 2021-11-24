import React from "react";

import { useAuth } from "../../contexts";
import { ErrorModal } from "../ErrorModal";

import "./Layout.css";

export const Layout = ({ children }: any) => {
  const auth = useAuth();

  const content = auth.user?.id ? (
    <div className="layoutContainer">
      <div
        style={{
          height: "100%",
          flex: 1,
          padding: 30,
          overflow: "auto",
          marginLeft: "255px",
        }}
      >
        {children}
      </div>
    </div>
  ) : (
    <div className="loggedOut">{children}</div>
  );

  return (
    <React.Fragment>
      {content}
      <ErrorModal />
    </React.Fragment>
  );
};
