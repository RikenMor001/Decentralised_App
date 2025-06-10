import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

// <ConnectionProvier endpoint={endpoint}>    
  {/* <WalletPorvider wallets = {wallets} autoConnect>
      <WalletModelProvider>
      </WalletModelProvider>
  </WalletPorvider> */}
// </ConnectionProvier>


function App() {
  // Endpoint over here is the RPC url that will be devnet
  return <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={{}} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    <div>
                      Decentralised App
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
}

export default App
