function dark(){
    const bodyElements = document.querySelectorAll('.body');
    const liElements = document.querySelectorAll('li');
    document.querySelector('body').classList.toggle('black');
    liElements.forEach((element) => {
    element.classList.toggle('corn');
    });
    bodyElements.forEach((element) => {
    element.classList.toggle('darkmode');
    });
};
function dontwork(){
    alert("Funzione ancora in fase di sviluppo, torna a controllare più tardi");
};
