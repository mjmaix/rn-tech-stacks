import React from "react";
import "react-native";
import App from "../src/App";

// Note: test renderer must be required after react-native.
import reactTestRenderer from "react-test-renderer";

it("renders correctly", () => {
  reactTestRenderer.create(<App />);
});
