import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {  WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';
import { useMemo } from 'react';
import {
    PhantomWalletAdapter,  
} from '@solana/wallet-adapter-wallets';

export default function App() {
    const endpoint = useMemo(() => 'https://solana-devnet.g.alchemy.com/v2/i9WpXCP_SX2QikFfKnXFmZT--rjRGo65', []);

    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton></WalletMultiButton>
                  <WalletDisconnectButton></WalletDisconnectButton>
                    <Airdrop />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}
