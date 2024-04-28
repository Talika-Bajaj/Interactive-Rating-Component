const buttons = document.getElementsByClassName('btn');
// console.log(buttons);

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];

    element.addEventListener("click", (e) => {
        Array.from(buttons).forEach((button) => button.classList.remove("active"));
        document.getElementById("submit").disabled = false;
        e.target.classList.add("active");
        // console.log(e.target);
        let text = e.target.innerText;
        document.getElementById("rate").innerHTML = `You selected ${text} out of 5`;
      });
    

   
    console.log(element);
}

submit.addEventListener('click', ()=> {
    document.getElementById('ask-rating').style.display = 'none';
    document.getElementById('show-rating').style.display = 'flex';   
});
