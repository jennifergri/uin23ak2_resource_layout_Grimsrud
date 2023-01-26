//Inspirasjon av Legodudes kode fra forelesning 20 jan - oppgave 4.
//Inspirasjon min eksamensinnlevering i innprog - minstekrav 2
//Hjelp av studass

//Navigasjon:
let menu = ""

function addNav(){
    resources.map((info, index) => {
        menu += `<button class="btn" id=${index} onClick="addInfo(${index})">${info.category}</button>`
    })
}
addNav()
document.getElementById("nav").innerHTML = menu

//Informasjon i main:
function addInfo(index){
    categoryInfo = ""
    links = ""
    
        categoryInfo += `
        <h2>${resources[index].category}</h2>
        <p>${resources[index].text}</p>
        `
        
        resources[index].sources.map(element => {
            links += `<li><a href="${element.url}">${element.title}</a></li>`
        })
        
    document.getElementById("informasjon").innerHTML = categoryInfo
    document.getElementById("linker").innerHTML = links

}

//Button blir turkis ved klikk
    //Funker kun på HTML knapp og jeg fikk ikke til at knappen slutta å bli turkis igjen når jeg trykker på en ny knapp - men beholdt det jeg fikk til:

    const button = document.querySelector(".btn");

    button.addEventListener('click', function addNav() {
        button.style.backgroundColor = 'var(--aqua)';
        button.style.border = 'var(--aqua)';
        button.style.color = 'var(--white)';
    });
/*Kilde: <a href="https://bobbyhadz.com/blog/javascript-change-button-color-onclick"</a>*/