const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

//Inspirasjon av Legodudes kode fra forelesning 20 jan - oppgave 4.
//Inspirasjon min eksamensinnlevering i innprog - minstekrav 2
//Hjelp av studass


//Ville ha main på forsiden tom når siden oppdateres!

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