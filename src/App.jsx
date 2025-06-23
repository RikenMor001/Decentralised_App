
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'

function App() {

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint='https://api.devnet.solana.com'>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 20
          }}>
            <WalletMultiButton/>
            <WalletDisconnectButton/>
          </div>
          <TokenLaunchpad></TokenLaunchpad>
        </WalletModalProvider>
      </WalletProvider>      
    </ConnectionProvider>
  )
}

export default App
