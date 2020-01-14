console.log('ed e alefe os barões da pisadinha');

//script do lefoso
const imp = document.querySelector('#imp');
const inpro = document.querySelector('#inpro');
const oncall = document.querySelector('#oncall');
const attempt = document.querySelector('#attempt');
const inactive = document.querySelector('#inactive');
const gtmBtn = document.querySelector('#gtmBtn');
const tasksBtn = document.querySelector('#tasksBtn');
mudStatus = () =>  {
    let count = 0;
    imp.addEventListener('click', (event) => {
        count ++;
        imp.src = 'images/implementedBtnAtv.svg'
        inpro.src = 'images/inProgressBtn.svg'
        attempt.src = 'images/attemptContactBtn.svg'
        inactive.src = 'images/inactiveBtn.svg'
            if(count%2 == 0) {  
                imp.src = 'images/educationOnlyBtn.svg'
                inpro.src = 'images/inProgressBtn.svg'
                attempt.src = 'images/attemptContactBtn.svg'
                inactive.src = 'images/inactiveBtn.svg'
            };
    });
    inpro.addEventListener('click', (event) => {
        inpro.src = 'images/inProgressBtnAtv.svg'
        imp.src = 'images/implementedBtn.svg'
        attempt.src = 'images/attemptContactBtn.svg'
        inactive.src = 'images/inactiveBtn.svg'
    });
    attempt.addEventListener('click', (event) => {
        attempt.src = 'images/attemptContactBtnAtv.svg'
        inpro.src = 'images/inProgressBtn.svg'
        inactive.src = 'images/inactiveBtn.svg'
        imp.src = 'images/implementedBtn.svg'
    });
    inactive.addEventListener('click', (event) => {
        inactive.src = 'images/inactiveBtnAtv.svg'
        imp.src = 'images/implementedBtn.svg'
        inpro.src = 'images/inProgressBtn.svg'
        attempt.src = 'images/attemptContactBtn.svg'
    });
    gtmBtn.addEventListener('click', (event) => {
        count ++;
        gtmBtn.src = 'images/gtmBtnAtv.svg'
        if(count%2 == 0) {
            gtmBtn.src = 'images/gtmBtn.svg'
        }
    });
    tasksBtn.addEventListener('click', (event) => {
        count ++;
        tasksBtn.src = 'images/tasksBtnAtv.svg'
        if(count%2 == 0) {
            tasksBtn.src = 'images/tasksBtn.svg'
        }
    });
};
mudStatus();

//Build de comentarios
cmArray = ["Universal Analytics tag created on GTM", "Tested with GTM Preview and Tag fired", "Checked/ Linked Analytics with Ads and Imported site metrics", "Checked Auto Tagging on Ads", "Checked Real time on Analytics to validate"];
cmnArray = ["Attribution Model for the New Conversion asked for the AM configured"];

var divcomentarios = document.getElementById('divcomentarios');

    //build de comentarios não obrigatórios
for (let i = 0; i < cmnArray.length; i++) {
    const element = cmnArray[i];
    const button = document.createElement("button");
    button.setAttribute('class', 'nObrigatorio');
    const btnText = document.createTextNode(element);
    divcomentarios.insertBefore(button, divcomentarios.childNodes[i]);
    button.appendChild(btnText);
    button.style.opacity = 1;
}
    //build de comentarios obrigatórios
for (let i = 0; i < cmArray.length; i++) {
    const element = cmArray[i];
    const button = document.createElement("button");
    button.setAttribute('class', 'comentario');
    const btnText = document.createTextNode(element);
    divcomentarios.insertBefore(button, divcomentarios.childNodes[i]);
    button.appendChild(btnText);
    button.style.opacity = 1;
}

//Build de prints
prtArray = ["Tag created:", "GA linked and metrics imported:", "GTM Preview:", "Auto Tagging:", "GA Real Time:"];
prtnArray = ["Attribution Model for the New Conversion asked for the AM:"];

var divprints = document.getElementById('divprints');

    //build de prints não obrigatórios
for (let i = 0; i < prtnArray.length; i++) {
    const element = prtnArray[i];
    const button = document.createElement("button");
    const input = document.createElement("input");
    button.setAttribute('class', 'nObrigatorio');
    input.setAttribute('class', 'editBtn');
    input.setAttribute('type', 'image');
    input.setAttribute('src', 'images/editBtn.svg');
    input.addEventListener('click', function(){showModal(i, false)})
    const btnText = document.createTextNode(element);
    divprints.insertBefore(button, divprints.childNodes[i]);
    button.appendChild(input);
    button.appendChild(btnText);
    button.style.opacity = 1;
}
    //build de prints obrigatórios
for (let i = 0; i < prtArray.length; i++) {
    const element = prtArray[i];
    const button = document.createElement("button");
    const input = document.createElement("input");
    button.setAttribute('class', 'print');
    input.setAttribute('class', 'editBtn');
    input.setAttribute('type', 'image');
    input.setAttribute('src', 'images/editBtn.svg');
    input.addEventListener('click', function(){showModal(i, true)})
    const btnText = document.createTextNode(element);
    divprints.insertBefore(button, divprints.childNodes[i]);
    button.appendChild(input);
    button.appendChild(btnText);
    button.style.opacity = 1;
}

// adicionando comentaios
document.querySelector('.addPrint').addEventListener("click", function () { 
    const button = document.createElement("button");
    const input = document.createElement("input");
    button.setAttribute('class', 'nObrigatorio');
    input.setAttribute('class', 'editBtn');
    input.setAttribute('type', 'image');
    input.setAttribute('src', 'images/editBtn.svg');
    input.addEventListener('click', function(){showModal(document.querySelectorAll('#divprints .nObrigatorio').length-1, false)})
    const btnText = document.createTextNode("Novo Print");
    divprints.insertBefore(button, document.querySelector('.addPrint'));
    button.appendChild(input);
    button.appendChild(btnText);
    button.style.opacity = 1;
    button.addEventListener("click", capsulaDCP);
});

//desativando botões de comentario e prints
function capsulaDCP() {desativarCP(this)};
function desativarCP(b) {
    if (b.style.opacity == 1 && $('#printModal')[0].style.visibility == "hidden") {
        b.style.opacity = 0.5;
    }
    else{
        b.style.opacity = 1;
    }
};

let comentbtns = document.querySelectorAll('#divcomentarios button');
let printbtns = document.querySelectorAll('#divprints button');
comentbtns.forEach(function(e){ e.addEventListener("click", capsulaDCP)});
printbtns.forEach(function(e){ e.addEventListener("click", capsulaDCP)});
document.querySelector('.addPrint').removeEventListener("click", capsulaDCP);

//Modal dos prints
$('#printModal')[0].style.visibility = "hidden";
let modalVisivel;

//document.querySelector('#printXis').addEventListener('click', function(){showModal(0)});
document.querySelector('#modalBG').addEventListener('click', function(){showModal(0)});

function showModal(i, obr){
    console.log(i);
    modalVisivel = $('#printModal')[0].style.visibility == "hidden";
    if(modalVisivel && obr){
        $('.print')[i].appendChild($('#printModal')[0]);
        $('#printModal')[0].style.visibility = "visible";
        $('#modalBG')[0].style.visibility = "visible";
    }
    else if(obr){
        $('#printModal')[0].style.visibility = "hidden";
        $('#modalBG')[0].style.visibility = "hidden";
    };

    if(modalVisivel && !obr){
        $('#divprints .nObrigatorio')[i].appendChild($('#printModal')[0]);
        $('#printModal')[0].style.visibility = "visible";
        $('#modalBG')[0].style.visibility = "visible";
    }
    else if(!obr){
        $('#printModal')[0].style.visibility = "hidden";
        $('#modalBG')[0].style.visibility = "hidden";
    };

};