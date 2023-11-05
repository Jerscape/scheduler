import React from "react";

import { render, cleanup } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Application />);
});


it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
  const { container } = render(<Application />);

  await waitForElement(() => getByText(container, "Archie Cohen"));

  const appointments = getAllByTestId(container, "appointment");
  console.log(prettyDOM(appointments));

  const appointment = getAllByTestId(container, "appointment")[0];
  console.log(prettyDOM(appointment));

  console.log(prettyDOM(container));

  fireEvent.click(getByAltText(appointment, "Add"));

  fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
    target: { value: "Lydia Miller-Jones" }
  });
  fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

  fireEvent.click(getByText(appointment, "Save"));

});