import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Modal from "../Modal";

describe("Modal Component", () => {
  test("renders modal content when open", () => {
    render(
      <Modal isOpen={true} title="Test Modal" onClose={() => {}}>
        <p>Modal Content</p>
      </Modal>
    );
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  test("does not render modal content when closed", () => {
    render(
      <Modal isOpen={false} title="Test Modal" onClose={() => {}}>
        <p>Modal Content</p>
      </Modal>
    );
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  test("calls onClose when X button is clicked", async () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} title="Test Modal" onClose={onClose}>
        <p>Modal Content</p>
      </Modal>
    );

    await userEvent.click(screen.getByText("X"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
