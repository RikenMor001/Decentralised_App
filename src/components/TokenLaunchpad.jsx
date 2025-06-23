
export function TokenLaunchpad() {

    function creatToken(){
        const name = document.getElementById("name").value;
        const imageUrl = document.getElementById("imageUrl").value;
        const symbol = document.getElementById("symbol").value;
        const totalSupply = document.getElementById("totalSupply").value;

        console.log({
            name,
            symbol,
            imageUrl,
            totalSupply
        })
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
