import React from 'react';
import {RecoilRoot} from 'recoil'
import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders input box", () => {
  render(<RecoilRoot>
    <App/>
    </RecoilRoot>);
  const getelement = screen.getByTitle("input_box");
  expect(getelement).toBeInTheDocument();
});

