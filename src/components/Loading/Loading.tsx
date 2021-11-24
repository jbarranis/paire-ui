import React from "react";
import { Layout } from "../Layout";

// TODO - move to bit
interface LoadingProps {
  includeLayout?: boolean;
}

const centeringStyles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Loading = ({ includeLayout }: LoadingProps) => {
  if (includeLayout) {
    return (
      <Layout>
        <div
          data-testid="loading-layout"
          style={{ ...centeringStyles, height: "100%", width: "100%" }}
        >
          ...Loading
        </div>
      </Layout>
    );
  }

  return (
    <div data-testid="loading" style={centeringStyles}>
      ...Loading
    </div>
  );
};
