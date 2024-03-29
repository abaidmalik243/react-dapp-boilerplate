import { useMetaMask } from './context';

function App() {

  const { status, connect, account, chainId, ethereum } = useMetaMask();
  // console.log('chainId :: ', chainId, ethereum, window.ethereum);

  if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

  if (status === "unavailable") return <div>MetaMask not available :(</div>

  if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

  if (status === "connecting") return <div>Connecting...</div>

  if (status === "connected") return <div>Connected account: {account}</div>

  return null;
}

export default App;
