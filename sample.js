let item1 = "Sooper Dooper Triple Snooker!";
const output = document.querySelector('.output');
output.innerHTML = item1.fontsize(9);


function rancolor() {
    let col = Math.random().toString(16).substr(-6);
    return '#'+col;
}

const butt = document.querySelector('button');

butt.addEventListener('click', (e)=> {
    output.style.backgroundColor = rancolor();
} )


rancolor(); //?