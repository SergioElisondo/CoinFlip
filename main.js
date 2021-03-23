document.querySelector('#buttonClick').addEventListener('click', flipCoin)

function flipCoin(){
    let headsOrTails = Math.ceil (Math.random() * 2)
    // let heads = document.getElementById('results').innerText = "heads"
    // let tails = document.getElementById('results').innerText = "tails"
    if(headsOrTails > 1){
        document.getElementById('results').innerText = "heads"
        // console.log('heads')  <--- so you can use it in a browser, do it for both heads and tails
    }else{
        document.getElementById('results').innerText = "tails"
        // console.log('tails')
    } 
}