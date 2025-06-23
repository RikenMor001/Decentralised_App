import { createInitializeMint2Instruction, getMinimumBalanceForRentExemptMint, MINT_SIZE, TOKEN_PROGRAM_ID} from '@solana/spl-token'
import { useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';

export function TokenLaunchpad() {
    const wallet = useWallet();

    async function creatToken(){
        const name = document.getElementById("name").value;
        const imageUrl = document.getElementById("imageUrl").value;
        const symbol = document.getElementById("symbol").value;
        const totalSupply = document.getElementById("totalSupply").value;

        console.log({
            name, imageUrl, symbol, totalSupply
        })
        // createMint();
        const lamports = await getMinimumBalanceForRentExemptMint(connection);
        const keypair = Keypair.generate();
        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: keypair.publicKey,
                space: MINT_SIZE,
                lamports,
                programId: TOKEN_PROGRAM_ID,
            }),
            createInitializeMint2Instruction(keypair.publicKey, 6, wallet.publicKey, wallet.publicKey, TOKEN_PROGRAM_ID),
        );

        transaction.partialSign(keypair);
        wallet.sendTransaction(transaction);
    }   
    
    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input id = "name" className='inputText' type='text' placeholder='Name'></input> <br />
        <input id = "symbol" className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input id = "imageUrl" className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input id = "totalSupply" className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button onClick={creatToken} className='btn'>Create a token</button>
    </div>
}
