import { render, fireEvent, screen } from "@testing-library/react";
import Modal from "../src/components/Modal";

describe("Modal", () => {
  it("renders the Modal component with children", () => {
    const closeModal = jest.fn();

    render(
      <Modal closeModal={closeModal}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("calls the closeModal function when the close button is clicked", () => {
    const closeModal = jest.fn();

    render(
      <Modal closeModal={closeModal}>
        <div>Modal Content</div>
      </Modal>
    );

    const closeButton = screen.getByText("X");
    fireEvent.click(closeButton);

    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  it("calls the closeModal function when clicking outside the modal box", () => {
    const closeModal = jest.fn();

    render(
      <Modal closeModal={closeModal}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    const modalOuter = screen.getByTestId("modal-outer");
    fireEvent.click(modalOuter);

    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
