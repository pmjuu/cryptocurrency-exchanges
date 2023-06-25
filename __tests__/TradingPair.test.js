import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import TradingPair from "../src/components/TradingPair";

jest.mock("axios");

describe("TradingPair component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("displays trading pairs after fetching data", async () => {
    const mockTradingPairs = [
      { base: "BTC", target: "ETH" },
      { base: "BTC", target: "LTC" },
    ];
    axios.get.mockResolvedValueOnce({ data: { tickers: mockTradingPairs } });
    render(<TradingPair exchange="Test Exchange" exchangeId="test-exchange" />);

    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        "https://api.coingecko.com/api/v3/exchanges/test-exchange"
      )
    );

    expect(screen.getByText(/거래쌍 목록/)).toBeInTheDocument();
    expect(screen.queryByText(/Request Failed/)).not.toBeInTheDocument();

    const tradingPairItems = screen.getAllByRole("listitem");
    expect(tradingPairItems).toHaveLength(2);
    expect(tradingPairItems[0]).toHaveTextContent("01. BTC/ETH");
    expect(tradingPairItems[1]).toHaveTextContent("02. BTC/LTC");
  });

  test("displays error message if request fails", async () => {
    axios.get.mockRejectedValueOnce({
      response: { data: { error: "Error Message" } },
    });

    render(
      <TradingPair exchange="Test Exchange" exchangeId="invalid-exchange" />
    );

    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        "https://api.coingecko.com/api/v3/exchanges/invalid-exchange"
      )
    );

    expect(screen.getByText(/거래쌍 목록/)).toBeInTheDocument();
    expect(screen.queryByText(/Request Failed/)).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
