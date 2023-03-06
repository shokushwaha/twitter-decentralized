import './App.css';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { useState, useEffect } from 'react';
import Feed from './components/Feed';
function App() {
  const [currentAccount, setCurrentAccount] = useState('');
  const [correctNetwork, setCorrectNetwork] = useState(false);

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        alert("Metamask not detected")
        return
      }
      let chainId = await ethereum.request({ method: 'eth_chainId' })

      const goerliChainId = '0x5'

      if (chainId !== goerliChainId) {
        alert('You are not connected to the Goerli Testnet!')
        return
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Found account', accounts[0])
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log("Error connecting to Metamask")
    }
  }

  // Checks if wallet is connected to the correct network
  const checkCorrectNetwork = async () => {
    const { ethereum } = window
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + chainId)

    const goerliChainId = '0x5'

    if (chainId !== goerliChainId) {
      setCorrectNetwork(false)
    } else {
      setCorrectNetwork(true)
    }
  }


  useEffect(() => {
    connectWallet();
    checkCorrectNetwork();
  });
  return (
    < >
      {currentAccount === '' ? (
        <button

          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      ) : correctNetwork ? (
        <div className="mainBox">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      ) : (
        <div>
          <div>********</div>
          Please connect to the Goerli Testnet and reload the page
          <div>********</div>
        </div>
      )
      }
    </>
  );
}

export default App;
