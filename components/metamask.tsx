import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
const MetaMask = () => {
  const [address, setAddress] = useState<string>("");
  const [balance, setBalance] = useState<number | string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const connectWallet = async () => {
    // Check if metamask exists
    if (window.ethereum) {
      console.log("%c Metamask Detected", "color:green;");
      setIsLoading(true);
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accountBalance = await provider.getBalance(accounts[0]);
        const eth_balance = ethers.utils.formatEther(accountBalance);
        setBalance(eth_balance);
        alert("Metamask Wallet Connected Successfully.");
      } catch (e) {
        alert("Error connecting");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Metamask not detected");
    }
  };
  const showBalance = () => {
    alert(`
      Your Wallet Details:

      Address: ${address}
      Balance: ${balance} ETH
      `);
  };
  return balance === null ? (
    <button
      disabled={isLoading}
      onClick={connectWallet}
      className="SignUp text-[1.1rem] mx-[1rem] bg-[#485ED1] px-5 py-2 rounded-lg text-white  hover:bg-[#364aaf] shadow-lg"
    >
      {isLoading ? "Connecting..." : "MetaMask"}
    </button>
  ) : (
    <button
      onClick={showBalance}
      className="SignUp text-[1.1rem] mx-[1rem] bg-[#485ED1] px-5 py-2 rounded-lg text-white  hover:bg-[#364aaf] shadow-lg"
    >
      {balance} ETH
    </button>
  );
};

export default MetaMask;
