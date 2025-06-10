import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';
import { useMemo } from 'react';
import {
    PhantomWalletAdapter,
} from '@solana/wallet-adapter-wallets';

export default function App() {
    const endpoint = useMemo(() => 'https://api.mainnet-beta.solana.com', []);

    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <Airdrop />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}
