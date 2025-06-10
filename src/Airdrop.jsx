
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
export function Airdrop(){

    const wallet = useWallet();
    const { connection } = useConnection();

    async function SendAirdop(){
        await connection.requestAirdrop(wallet.publicKey, 10);
        alert("Airdrop Sent");
    }

    return <div>
        <input input="text" placeholder="Amount"></input>
        <button onClick={SendAirdop}>
            Send Airdrop
        </button>        
    </div>
}
