import { render, screen } from "@testing-library/react";
import AppProviders from "../AppProviders/AppProviders";

import { Loading } from "./Loading";

const renderer = (props = {}) => {
  return render(
    <AppProviders>
      <Loading {...props} />
    </AppProviders>
  );
};

describe("<Loading />", () => {
  it("should render the component", () => {
    renderer();

    expect(screen.queryByTestId("loading")).toBeInTheDocument();
  });

  it("should render the component with the layout", () => {
    renderer({ includeLayout: true });

    expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    expect(screen.queryByTestId("loading-layout")).toBeInTheDocument();
  });
});
