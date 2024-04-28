const buttons = document.getElementsByClassName('btn');
// console.log(buttons);

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.addEventListener('click', (e)=> {

        document.getElementById('submit').disabled = false;
        element.classList.toggle('active');
        // console.log(buttons);

        let text = e.target.innerText;
        // console.log(e.target.innerText);
       
        document.getElementById('rate').innerHTML = `You selected ${text} out of 5`;
    })
    // console.log(element);
}

submit.addEventListener('click', ()=> {
    document.getElementById('ask-rating').style.display = 'none';
    document.getElementById('show-rating').style.display = 'flex';   
});
