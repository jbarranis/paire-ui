import React from "react";

import { Layout } from "../Layout";

// TODO - move to bit
interface ErrorBoundaryProps {
  children: any;
}

interface ErrorBoundaryState {
  error: string;
  hasError: boolean;
  stackTrace: string;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: "", stackTrace: "" };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: any, stackTrace: any) {
    // TODO: set up email errors
    this.setState({
      error: JSON.stringify(error),
      stackTrace: JSON.stringify(stackTrace),
    });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <div>
            <p>{this.state.error}</p>
            <p>{this.state.stackTrace}</p>
          </div>
        </Layout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
