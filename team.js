let team = [
    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        image : "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela Caroll",
        role : "Chief Editor",
        image : "./img/angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter Gordon",
        role : "Office Manager",
        image : "./img/walter-gordon-office-manager.jpg"
    },
    {
        name : "Angela Lopez",
        role : "Social Media Manager",
        image : "./img/angela-lopez-social-media-manager.jpg"
    },
    {
        name : "Scott Estrada",
        role : "Developer",
        image : "./img/scott-estrada-developer.jpg"
    },
    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        image : "./img/barbara-ramos-graphic-designer.jpg"
    }
];

printArray(team);
printDOM(team);

function printArray(array) {
    let object;
    for(let i = 0; i < array.length; i++) {
        object = array[i];
        for(let key in object) {
            console.log(`${key}: ${object[key]}`);
        }
    }
}

function printDOM(array) {
    let teamDiv = document.getElementById('teamDiv');
    let object;
    for(let i = 0; i < array.length; i++) {
        object = array[i];
        for(let key in object) {
            if(key === 'image') {
                teamDiv.innerHTML += `<div><img src=${object[key]}></div>`;
            } else {
                teamDiv.innerHTML += `<div>${key}: ${object[key]}</div>`;
            }
        }
    }
}