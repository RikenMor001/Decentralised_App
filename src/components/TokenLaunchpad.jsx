import { createInitializeMint2Instruction, createMint, getMinimumBalanceForRentExemptMint } from '@solana/spl-token';
import { useWallet } from '@solana/wallet-adapter-react';
import { Transaction, SystemProgram } from '@solana/web3.js';

export function TokenLaunchpad() {
    const wallet = useWallet();
    async function createMint(){
        const lamports = await getMinimumBalanceForRentExemptMint(connection); 

            const transaction = new Transaction().add(
                SystemProgram.createAccount({
                    fromPubkey: payer.publicKey,
                    newAccountPubkey: keypair.publicKey,
                    space: MINT_SIZE,
                    lamports,
                    programId,
                }),
                createInitializeMint2Instruction(keypair.publicKey, decimals, mintAuthority, freezeAuthority, programId),
            );
            transaction.partialSign(keypair);
            wallet.signTransaction(transaction); 
    }

    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input className='inputText' type='text' placeholder='Name'></input> <br />
        <input className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button className='btn' onClick={createMint}>Create a token</button>
    </div>
}
