console.log('Ed e Alefe os barões da pisadinha');

//para apresentação do dia 6/2
var estilED = document.createElement("link");
var fontED = document.createElement("link");
var jQLib = document.createElement("script");
estilED.setAttribute('rel', 'stylesheet');
estilED.setAttribute('type', 'text/css');
estilED.setAttribute('href', 'https://dantase.sandbox.msiteproject.com/EDstension/stylEDv2.css');
fontED.setAttribute('rel', 'stylesheet');
fontED.setAttribute('href', 'https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
jQLib.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
document.head.appendChild(estilED);
document.head.appendChild(fontED);
document.head.appendChild(jQLib);

$('body').append('<input type="image" name="miniED" src="https://dantase.sandbox.msiteproject.com/EDstension/images/miniBG.png" id="miniED" onclick="abrirCorpo();"><div id="corpo"><input type="image" name="xizinho" src="https://dantase.sandbox.msiteproject.com/EDstension/images/closeBtn.svg" id="xizinho" onclick="fecharCorpo();"><input type="image" name="logo" src="https://dantase.sandbox.msiteproject.com/EDstension/images/logoWebTech.svg" id="logo"><div id="botoesPrin">    <input type="image" src="https://dantase.sandbox.msiteproject.com/EDstension/images/implementedBtn.svg" id="imp">    <input type="image" src="https://dantase.sandbox.msiteproject.com/EDstension/images/inProgressBtn.svg" id="inpro">    <input type="image" src="https://dantase.sandbox.msiteproject.com/EDstension/images/onCallVAz.svg" id="oncall">    <input type="image" src="https://dantase.sandbox.msiteproject.com/EDstension/images/attemptContactBtn.svg" id="attempt">    <input type="image" src="https://dantase.sandbox.msiteproject.com/EDstension/images/inactiveBtn.svg" id="inactive"></div><div id="botoesSec">    <input type="image" src="https://dantase.sandbox.msiteproject.com/EDstension/images/gtmBtn.svg" id="gtmBtn"></div><div id="divcomentarios">    <textarea name="addComent" id="addComent" cols="30" rows="10"></textarea></div><div id="divprints">    <div id="printModal">        <p>printName</p>        <textarea name="addPrint" id="addPrint" cols="30" rows="10"></textarea>            </div>    <button class="addPrint">+</button></div><div id="printModalBG" class="modal"></div><div class="clearMan"></div><button type="button" id="fogonoburaco">Fill</button><div class="clearMan"></div><div id="sign">    <a id="danta" href="https://moma.corp.google.com/person/dantase@google.com" target="_blank">@dantase</a> <a id="ale" href="https://moma.corp.google.com/person/alefe@google.com" target="_blank">@alefe</a></div></div>');
//para apresentação do dia 6/2

var cmsED = 32;
var scshED = 1;
var cnftED = 1;

//script do lefoso
const imp = document.querySelector('#imp');
const inpro = document.querySelector('#inpro');
const oncall = document.querySelector('#oncall');
const attempt = document.querySelector('#attempt');
const inactive = document.querySelector('#inactive');
const gtmBtn = document.querySelector('#gtmBtn');
const fogoNoBuracobtn = document.querySelector('#fogonoburaco');
let Status;
let educatiOnly;
let gtmOn = false;
var conteudoComentario = '';
var conteudoPrint = '';
mudStatus = () =>  {
    let count = 0;
    imp.addEventListener('click', (event) => {
        count ++;
        imp.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/implementedBtnAtv.svg'
        inpro.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inProgressBtn.svg'
        attempt.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/attemptContactBtn.svg'
        inactive.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inactiveBtn.svg'
            if(count%2 == 0) {  
                imp.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/educationOnlyBtn.svg'
                inpro.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inProgressBtn.svg'
                attempt.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/attemptContactBtn.svg'
                inactive.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inactiveBtn.svg'

                educatiOnly = 1;

            };

            Status = 1;
    });
    inpro.addEventListener('click', (event) => {
        inpro.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inProgressBtnAtv.svg'
        imp.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/implementedBtn.svg'
        attempt.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/attemptContactBtn.svg'
        inactive.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inactiveBtn.svg'

            Status = 2;
    });
    attempt.addEventListener('click', (event) => {
        attempt.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/attemptContactBtnAtv.svg'
        inpro.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inProgressBtn.svg'
        inactive.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inactiveBtn.svg'
        imp.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/implementedBtn.svg'

            Status = 3;
    });
    inactive.addEventListener('click', (event) => {
        inactive.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inactiveBtnAtv.svg'
        imp.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/implementedBtn.svg'
        inpro.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inProgressBtn.svg'
        attempt.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/attemptContactBtn.svg'

            Status = 4;
    });
    gtmBtn.addEventListener('click', () => {
        count ++;
        gtmBtn.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/gtmBtnAtv.svg'
        gtmOn = true;
        if(count%2 == 0) {
            gtmBtn.src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/gtmBtn.svg'
            gtmOn = false;
        }
    //});
    /*tasksBtn.addEventListener('click', (event) => {
        count ++;
        tasksBtn.src = 'images/tasksBtnAtv.svg'
        //show modal
        $('#taskModal')[0].style.visibility = 'visible';
        //show modal
        if(count%2 == 0) {
            tasksBtn.src = 'images/tasksBtn.svg'
            fecharmodal();
        }
    });*/
        comments(gtmOn);
        prints(gtmOn);
    });
    
};

    fogoNoBuracobtn.addEventListener('click', (event) => {
        fogoNoBuraco(Status);
    }) 

mudStatus();

implementado = () => {
    console.log('entrou na função implementado !!')

    if(educatiOnly == 1){
        console.log('Educou agora')
        //Click no campo de education Only
        setTimeout(() => {document.getElementById('00N3600000R148r_ilecell').click();}, 1000);
        //Click no checkbox Education Only
        setTimeout(() => {document.getElementById('00N3600000R148r').click();}, 500);
    };
    //click no campo de status
    setTimeout(() => {document.getElementById('cas7_ileinner').click();}, 300);
    //seleção de status
    setTimeout(() => {document.getElementById('cas7').selectedIndex = 4;}, 1000);
    //clique no botão de ok da janelinha de seleção
    setTimeout(() => {document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click();}, 1250);
    //click no campo de calendario
    setTimeout(() => {document.getElementById('00N3600000QIS9O_ileinner').click();}, 1300);
    setTimeout(() => {document.getElementById('00N3600000QIS9O').click();}, 1400);
    //click no campo de seleção da data de hoje
    setTimeout(() => {document.querySelector('#datePicker > div.calBody > div > a').click();}, 1500);
    //click no campo campanha criada
    setTimeout(() => {document.getElementById('00N3600000QIS8U_ileinner').click();}, 1600);
    //seleção de status
    setTimeout(() => {document.getElementById('00N3600000QIS8U').selectedIndex = 1;}, 1700);
    //click no campo de cms
    setTimeout(() => {document.getElementById('00N3600000QISC9_ileinner').click();}, 1800);
    //seleção de cms
    setTimeout(() => {document.getElementById('00N3600000QISC9').selectedIndex = cmsED;}, 1900);
    //click no screenshare
    setTimeout(() => {document.getElementById('00N3600000QISDL_ileinner').click();}, 2000);
    //seleção screenshare
    setTimeout(() => {document.getElementById('00N3600000QISDL').selectedIndex = scshED;}, 2100);
    //click no mouse control
    setTimeout(() => {document.getElementById('00N3600000QISBa_ileinner').click();}, 2200);
    //seleção mouse control
    setTimeout(() => {document.getElementById('00N3600000QISBa').selectedIndex = 2;}, 2300);
    //click no ads CID
    setTimeout(() => {document.getElementById('00N3600000QIS7x_ileinner').click();}, 2400);
    //seleção ads CID
    setTimeout(() => {document.getElementById('00N3600000QIS7x').selectedIndex = 2;}, 2500);
    //click no confirmation
    setTimeout(() => {document.getElementById('00N3600000SMHzO_ileinner').click();}, 2600);
    //seleção do confirmation
    setTimeout(() => {document.getElementById('00N3600000SMHzO').selectedIndex = cnftED;}, 2700);
    //click call transfered
    setTimeout(() => {document.getElementById('00N3600000TPihX_ileinner').click();}, 2800);
    //seleção call transfered
    setTimeout(() => {document.getElementById('00N3600000TPihX').selectedIndex = 1;}, 2900);
    //click call transfered
    setTimeout(() => {document.getElementById('00N3600000TPihW_ileinner').click();}, 3000);
    //seleção call transfered
    setTimeout(() => {document.getElementById('00N3600000TPihW').selectedIndex = 2;}, 3100);


};

emProgresso = () => {
    console.log('entrou na função emProgresso !!')
    //click no campo de status
    setTimeout(() => {document.getElementById('cas7_ileinner').click();}, 300);
    //seleção de status
    setTimeout(() => {$('#cas7').val("In progress").change();}, 1300);
    //seleção de sub status
    setTimeout(() => {document.getElementById('00N3600000QISAX').selectedIndex = 1;}, 1400);
    //clique no botão de ok da janelinha de seleção
    setTimeout(() => {document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click();}, 1500);
    //click no campo campanha criada
    setTimeout(() => {document.getElementById('00N3600000QIS8U_ileinner').click();}, 1600);
    //seleção campo campanha criada
    setTimeout(() => {document.getElementById('00N3600000QIS8U').selectedIndex = 1;}, 1700);
    //click no campo de cms
    setTimeout(() => {document.getElementById('00N3600000QISC9_ileinner').click();}, 1800);
    //seleção de cms
    setTimeout(() => {document.getElementById('00N3600000QISC9').selectedIndex = cmsED;}, 1900);
    //click no mouse control
    setTimeout(() => {document.getElementById('00N3600000QISBa_ileinner').click();}, 2000);
    //seleção mouse control
    setTimeout(() => {document.getElementById('00N3600000QISBa').selectedIndex = 2;}, 2100);
    //click no ads CID
    setTimeout(() => {document.getElementById('00N3600000QIS7x_ileinner').click();}, 2200);
    //seleção ads CID
    setTimeout(() => {document.getElementById('00N3600000QIS7x').selectedIndex = 2;}, 2300);
    //click no confirmation
    setTimeout(() => {document.getElementById('00N3600000SMHzO_ileinner').click();}, 2400);
    //seleção do confirmation
    setTimeout(() => {document.getElementById('00N3600000SMHzO').selectedIndex = cnftED;}, 2500);
};

tentativaContato = () =>{
    console.log('entrou na função tentativaContato !!')
    //click no campo de status
    setTimeout(() => {document.getElementById('cas7_ileinner').click();}, 300);
    //seleção de status
    setTimeout(() => {$('#cas7').val("Attempting Contact").change();}, 1300);
    //seleção de sub status
    setTimeout(() => {document.getElementById('00N3600000QISAX').selectedIndex = 7;}, 1400);
    //clique no botão de ok da janelinha de seleção
    setTimeout(() => {document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click();}, 1500);
    //click no campo campanha criada
    setTimeout(() => {document.getElementById('00N3600000QIS8U_ileinner').click();}, 1600);
    //seleção campo campanha criada
    setTimeout(() => {document.getElementById('00N3600000QIS8U').selectedIndex = 1;}, 1700);
    //click no campo de cms
    setTimeout(() => {document.getElementById('00N3600000QISC9_ileinner').click();}, 1800);
    //seleção de cms
    setTimeout(() => {document.getElementById('00N3600000QISC9').selectedIndex = cmsED;}, 1900);
    //click no mouse control
    setTimeout(() => {document.getElementById('00N3600000QISBa_ileinner').click();}, 2000);
    //seleção mouse control
    setTimeout(() => {document.getElementById('00N3600000QISBa').selectedIndex = 2;}, 2100);
    //click no ads CID
    setTimeout(() => {document.getElementById('00N3600000QIS7x_ileinner').click();}, 2200);
    //seleção ads CID
    setTimeout(() => {document.getElementById('00N3600000QIS7x').selectedIndex = 2;}, 2300);
    //click no confirmation
    setTimeout(() => {document.getElementById('00N3600000SMHzO_ileinner').click();}, 2400);
    //seleção do confirmation
    setTimeout(() => {document.getElementById('00N3600000SMHzO').selectedIndex = cnftED;}, 2500);
};

inativo = () => {
    console.log('entrou na função Inativo !!')
    //click no campo de status
    setTimeout(() => {document.getElementById('cas7_ileinner').click();}, 300);
    //seleção de status
    setTimeout(() => {$('#cas7').val("Inactive").change();}, 1300);
    //seleção de sub status
    setTimeout(() => {document.getElementById('00N3600000QISAX').selectedIndex = 5;}, 1400);
    //click no campo de calendario
    setTimeout(() => {document.getElementById('00N3600000QIS9Q_ileinner').click();}, 1500);
    //click no campo de seleção da data de hoje
    setTimeout(() => {document.querySelector('#datePicker > div.calBody > div > a').click();}, 1600);
    //clique no botão de ok da janelinha de seleção
    setTimeout(() => {document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click();}, 1700);
    //click no campo campanha criada
    setTimeout(() => {document.getElementById('00N3600000QIS8U_ileinner').click();}, 1800);
    //seleção campo campanha criada
    setTimeout(() => {document.getElementById('00N3600000QIS8U').selectedIndex = 1;}, 1900);
    //click no campo de cms
    setTimeout(() => {document.getElementById('00N3600000QISC9_ileinner').click();}, 2000);
    //seleção de cms
    setTimeout(() => {document.getElementById('00N3600000QISC9').selectedIndex = cmsED;}, 2100);
    //click no mouse control
    setTimeout(() => {document.getElementById('00N3600000QISBa_ileinner').click();}, 2200);
    //seleção mouse control
    setTimeout(() => {document.getElementById('00N3600000QISBa').selectedIndex = 2;}, 2300);
    //click no ads CID
    setTimeout(() => {document.getElementById('00N3600000QIS7x_ileinner').click();}, 2400);
    //seleção ads CID
    setTimeout(() => {document.getElementById('00N3600000QIS7x').selectedIndex = 2;}, 2500);
    //click no confirmation
    setTimeout(() => {document.getElementById('00N3600000SMHzO_ileinner').click();}, 2600);
    //seleção do confirmation
    setTimeout(() => {document.getElementById('00N3600000SMHzO').selectedIndex = cnftED;}, 2700);
};


fogoNoBuraco = () => {
    geraComm();
    geraPrints();
    if (conteudoComentario != '') {
    //click no campo de comments
    document.getElementById('00N3600000QISAH_ileinner').click();
    //atribuição na caixa de comentarios
    document.getElementById('00N3600000QISAH').value = conteudoComentario;
    // click no botão OK de comments
    document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click();
    //clear conteudo
    conteudoComentario = '';
    } 
        if (Status == 1){  
            implementado(educatiOnly);
        }else if (Status == 2){
            emProgresso();
        }else if (Status == 3){
            tentativaContato();
        }else if (Status == 4){
            inativo();
        }
 
        // code block
    setTimeout(attPrints, 3500);
    //setTimeout(salvar, 2000);
};

//função para eliminar elementos repeditos de uma array
function clearArray(array) {
    //olha cada elemento da array
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        vaiMorrer = [];
        const indiceMacro = i;
        //verifica se já existe e adiciona o indice do elemento repetido a uma segunda array
        for (let e = 0; e < array.length; e++) {
            const elemento = array[e];
            indiceMicro = e;
            if (element == elemento && indiceMacro != indiceMicro) {
                vaiMorrer.push(e);
            };
            
        };
        //elimina da array todos os elementos repetidos baseados nos indices
        for (let a = vaiMorrer.length-1; a >= 0; a--) {
            const elementa = vaiMorrer[a];
            array.splice(elementa, 1);
        };
        
    }
}


/* build do campo task
    var taskString = [];
    var task = ["ads","analytics","Gtm"];//deletar no futuro
    //loop para pegar os textContent dos elementos span
    for (let i = 0; i < task.length; i++) {
        const element = task[i];
        taskString.push(element.textContent);
    }

    //loop para criar o conteudo da #taskModal
    const taskModal = document.getElementById('taskModal');
    for (let i = 0; i < taskString.length; i++) {
        const element = taskString[i];
        const div = document.createElement("div");
            const h5 = document.createElement("h5");
                h5.setAttribute('title', element);
                const h5Text = document.createTextNode(element);
                h5.appendChild(h5Text);
            const input = document.createElement("input");
                input.setAttribute('class', 'qualTask');
                input.setAttribute('placeholder', 'Tag de que?');
        div.appendChild(h5);
        div.appendChild(input);
        const clear = document.createElement("div");
            clear.setAttribute('class', 'clearDaTask');
        taskModal.appendChild(div);
    }*/


//Build de comentarios
cmnArray =[];
var divcomentarios = document.getElementById('divcomentarios');

var task = document.querySelectorAll('#tasksCase');

// build de comments
var cmArray = [];
comments = () => {
    cmArray = [];
    
    //var task = document.querySelectorAll('#tasksCase');
    var divcomentarios = document.getElementById('divcomentarios');

    botoes = document.querySelectorAll('#divcomentarios button');
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].remove();
        
    }
    
    for(let i = 0; i < task.length; i++){
        if(task[i].textContent == "Ads Conversion Code" || task[i].textContent == "Ads Event Tracking"){
                if(gtmOn == true){
                    cmArray.push('- Conversion tag created on Ads;','- Ads Conversion Tracking tag set via Google Tag Manager;','- Tested and checked via GTM Preview Mode;', '- Conversion linker tag has been also set in GTM;',
                    '- Attribution Model configured as asked by SR;','- Auto-tagging enabled;')
                }else if(gtmOn == false) {
                    cmArray.push('- Conversion tag created on Ads', '- Ads Conversion Tracking tag set code via Global Site Tag (gtag.js);', '- Attribution Model configured as asked by SR;', '- Auto-tagging enabled')
                }
        }
        if(task[i].textContent == "Ads Remarketing" || task[i].textContent == "Google Analytics Remarketing"){
            if(gtmOn == true){
                cmArray.push('- Remarketing tag set via Google Tag Manager;','- Tested and checked via GTM Preview Mode;','- Audience list set successfully;',
                '- Auto-tagging enabled;','- Informed and educated the client about remarketing lists;')
            }else if(gtmOn == false) {
                cmArray.push('- Remarketing tag set via Global Site Tag (gtag.js) code;','- Audience list set successfully;','- Auto-tagging enabled;','- Informed and educated the client about remarketing lists; ')
            }
        }
        if(task[i].textContent == "Analytics Destination Tracking" || task[i].textContent == "Analytics Event Tracking"){
            if(gtmOn == true){
                cmArray.push('- Event goal tag has been created on Analytics;', '- Event goal tag set via Google Tag Manager;', '- Tested and checked via GTM Preview Mode;', '- Tested and checked in Analytics Real-Time conversion tab;', '- Conversions have been imported to Google Ads and configured as asked by SR;', '- Auto-tagging has been enabled;')
            }else if(gtmOn == false) {
                cmArray.push('- Event goal tag has been created on Analytics;', '- Tested and checked in Analytics Real-Time conversion tab;', '- Conversions have been imported to Google Ads and configured as asked by SR;', '- Auto-tagging has been enabled;')
            }
        }
        if(task[i].textContent == "Cross Domain Tracking"){
            if(gtmOn == true){
                cmArray.push('- Tag Manager have been set up in both domains;', '- Analytics and cross-domain has been set up in GTM in the Universal Analytics tag;', '- Domain names have been added in the Referral Exclusion list;', '- Ads account have been set;', '- Auto-tagging enabled;', '- Cookie information is passing through both sites during same session;')
            }else if(gtmOn == false) {
                cmArray.push('- Analytics have been set up in both domains;', '- Cross-domain code has also been set up in both domains;', '- Domain names have been added in the Referral Exclusion list;', '- Ads account have been set;', '- Auto-tagging enabled;', '- Cookie information is passing through both sites during same session;')
            }
        }
        if(task[i].textContent == "Google Tag Manager Installation"){
            if(gtmOn == true){
                cmArray.push('- Google Tag Manager has been set successfully in all the pages of the website;')
            }
        }
        if(task[i].textContent == "Analytics E-Commerce Tracking" || task[i].textContent == "Analytics Enhanced E-Commerce Tracking"){
            if(gtmOn == true){
                cmArray.push('- Enhanced Commerce Tracking has been activated;', '- Step fields has been filled;', '- Currency field has been updated to the origin country;', '- Transactions has been imported to Ads;', '- Analytics has been set up via Google Tag Manager;', '- Test have been applied and GTM displayed the event Purchase;', '- Other events triggered have been showed on real-time Events tab;')
            }else if(gtmOn == false) {
                cmArray.push('- Enhanced Commerce Tracking has been activated;', '- Step fields has been filled;', '- Currency field has been updated to the origin country;', '- Transactions has been imported to Ads;', '- Tag has been set up via code/plugin;', '- Test have been applied and Tag Assistant displayed the event Purchase;', '- Other events triggered have also been showed on real-time Events tab;')
            }
        } 
        if(task[i].textContent == "Google Analytics Dynamic Remarketing (Retail)" || task[i].textContent == "Google Analytics Dynamic Remarketing (Non-Retail)"){
            if(gtmOn == true){
                cmArray.push('- Remarketing has been enabled in Analytics;', '- Audience list has been set up and imported to Ads;', '- Custom dimensions has been set up;', '- Products page is printing values according to Tag Assistant;', '- Codes and dimensions have been set via Google Tag Manager;')
            }else if(gtmOn == false) {
                cmArray.push('- Remarketing has been enabled in Analytics;', '- Audience list has been set up and imported to Ads;', '- Custom dimensions has been set up;', '- Products page is printing values according to Tag Assistant;')
            }
        }
        if(task[i].textContent == "Dynamic Remarketing - Retail" || task[i].textContent == "Dynamic Remarketing - X (Non-Retail)"){
            if(gtmOn == true){
                cmArray.push('- Remarketing has been set up via Google Tag Manager;', '- Audience list has been set successfully;', '- Data feed has been set up;', '- Products page is printing values according to Tag Assistant;')
            }else if(gtmOn == false) {
                cmArray.push('- Remarketing has been set up via Global Site Tag (gtag.js);', '- Audience list has been set successfully;', '- Data feed has been set up;', '- Products page is printing values according to Tag Assistant;')
            }
        }
        if(task[i].textContent == "Analytics"){
            if(gtmOn == true){
                cmArray.push('- Universal Analytics tag set via Google Tag Manager;', '- Tested and checked via GTM Preview Mode;', '- Google Ads account has been linked and metrics imported;', '- Auto-tagging enabled;', '- Real-time on Analytics tested successfully;','- Informed and educated the client about Analytics functionalities;')
            }else if(gtmOn == false) {
                cmArray.push('- Universal Analytics tag set via Global Site Tag (gtag.js) code;', '- Google Ads account has been linked and metrics imported;', '- Auto-tagging enabled;', '- Real-time on Analytics tested successfully;', '- Informed and educated the client about Analytics functionalities;')
            }            
        }
        if(task[i].textContent == "Website Call Conversion"){
            if(gtmOn == true){
                cmArray.push('- Ads Call Conversion created ;', '- Implemented the Webcall Conversion via Google Tag Manager;', '- Add and turn on the reporting for the call extensions on Ads;', '- Verificated GFN using the debug tool;')
            }else if(gtmOn == false) {
                cmArray.push('- Ads Call Conversion created ;', '- Implemented the Webcall Conversion via code by Global Site Tag (gtag.js);', '- Add and turn on the reporting for the call extensions on Ads;', '- Verificated GFN using the debug tool;')
            }            
        }
        if(task[i].textContent == "Offline Conversion Tracking"){
            if(gtmOn == true){
                cmArray.push('- Conversion has been set;', '- Cookie has been set in the Google Tag Manager;', '- Hidden field has been set to retrieve GCLID data;', '- Auto-tagging is enabled;', '- Data is imported to the sheet;', '- Advertiser has been informed that conversions must be uploaded within 90 days of the click;')
            }else if(gtmOn == false) {
                cmArray.push('- Conversion has been set;', '- Cookie has been set in the code/GTM;', '- Hidden field has been set to retrieve GCLID data;', '- Auto-tagging is enabled;', '- Data is imported to the sheet;', '- Advertiser has been informed that conversions must be uploaded within 90 days of the click;')
            }            
        }
        if(task[i].textContent == "Site Wide Tag - Conversion Tracking Fix"){
            if(gtmOn == true){
                cmArray.push('- Conversion Linker has been tag set up in Google Tag Manager;', '- Cookies have been tested successfully by emulating Gclid access;', '- Site crawl has been applied in order to check if the whole site contains the updates;')
            }else if(gtmOn == false) {
                cmArray.push('- Analytics.js has been updated to Global Site Tag (gtag.js);', '- Cookies have been tested successfully by emulating Gclid access;', '- Conversions have been updated to Global Site Tag (gtag.js);', '- Site crawl has been applied in order to check if the whole site contains the updates;')
            }            
        }
        if(task[i].textContent == "Google Analytics Health Check"){
            if(gtmOn == true){
                cmArray.push('- Analytics goals have been checked/reviewed;', '- Remarketing has been enabled;', '- Accesses has been guaranteed to trusted users;', '- Referal exclusion list has been set;', '- Default URL has been updated to https://',
                '- Three views per property has been recommeded as good practicies;','- View time zone and currency has been checked/review;','- Account is linked and metrics/goals were imported;','- Analytics have been imported from code to Google Tag Manager;', '- Conversions have been imported from code to Google Tag Manager;')
            }else if(gtmOn == false) {
                cmArray.push('- Analytics goals have been checked/reviewed;', '- Remarketing has been enabled;', '- Accesses has been guaranteed to trusted users;', '- Referal exclusion list has been set;', '- Default URL has been updated to https://', '- Three views per property has been recommeded as good practicies;', '- View time zone and currency has been checked/review;', 
                '- Account is linked and metrics/goals were imported;')
            }            
        }
    }
    clearArray(cmArray);

    //build de comentarios obrigatórios
    for (let i = 0; i < cmArray.length; i++) {
        const element = cmArray[i];
        const button = document.createElement("button");
        button.setAttribute('class', 'comentario');
        button.setAttribute('title', element);
        const btnText = document.createTextNode(element);
        divcomentarios.insertBefore(button, divcomentarios.childNodes[i]);
        button.appendChild(btnText);
        //button.style.opacity = 1;
        conteudoComentario = conteudoComentario + element + '\n';
    }

    let comentbtns = document.querySelectorAll('#divcomentarios button');
    comentbtns.forEach(function(e){ e.addEventListener("click", capsulaDCP)});
}

comments();

function geraComm() {
    conteudoComentario = '';
    let btnsActv = $('.comentario');
    for (let i = 0; i < btnsActv.length; i++) {
        const element = btnsActv[i].textContent;
        conteudoComentario = conteudoComentario + element + '\n';
    }
    conteudoComentario = conteudoComentario + $('#addComent')[0].value;
}

// build de prints
var prtArray = [];
prints = () => {
    prtArray = [];
    
    /*var task = document.querySelectorAll('#tasksCase');
    var task = []

    const teste = document.createElement("p");
    teste.textContent = "Ads Conversion Code";
    task.push(teste);

    const teste2 = document.createElement("p");
    teste2.textContent = "Analytics Destination Tracking";
    task.push(teste2);*/

    const divprints = document.getElementById('divprints');

    botoes = document.querySelectorAll('#divprints button');
    for (let i = 0; i < botoes.length; i++) {
        if (botoes[i].className != 'addPrint') {
            botoes[i].remove();
            
        }
    }
    
    for(let i = 0; i < task.length; i++){
        if(task[i].textContent == "Ads Conversion Code" || task[i].textContent == "Ads Event Tracking"){
                if(gtmOn == true){
                    prtArray.push('- Tag Assistant with Google Tag Manager and Google Analytics in green/blue;', '- Analytics tested in Real-Time;', '- Accounts linked;');
                }else if(gtmOn == false) {
                    prtArray.push('- Tag Assistant with Global Site Tag (gtag.js) with Google Analytics in green/blue:','- Analytics in Real-Time:','- Accounts linked:');
                }
        }
        if(task[i].textContent == "Ads Remarketing"){
            if(gtmOn == true){
                prtArray.push('- Tag Assistant with Google Tag Manager and Remarketing in green/blue:','- Audiences list:');
            }else if(gtmOn == false) {
                prtArray.push('- Tag Assistant with Global Site Tag (gtag.js) and Remarketing in green/blue:','- Audiences list:');
            }
        }
        if(task[i].textContent == "Google Analytics Remarketing"){
            if(gtmOn == true){
                prtArray.push('- Remarketing enabled:','- Code inserted on website:','- Ads and Analytics linked:','- All Users list imported to Ads:');
            }else if(gtmOn == false) {
                prtArray.push('- Remarketing enabled:','- Code inserted on website:','- Ads and Analytics linked:','- All Users list imported to Ads:');
            }
        }
        if(task[i].textContent == "Analytics Destination Tracking" || task[i].textContent == "Analytics Event Tracking"){
            if(gtmOn == true){
                prtArray.push('- Tag Assistant with Google Tag Manager and Google Analytics in green/blue:','- Analytics in Real-Time:','- Conversion imported to Ads:')
            }else if(gtmOn == false) {
                prtArray.push('- Event goal tag has been created on Analytics:','- Tested and checked in Analytics Real-Time conversion tab:','- Conversions have been imported to Google Ads and configured as asked by SR:','- Auto-tagging has been enabled:')
            }
        }
        if(task[i].textContent == "Cross Domain Tracking"){
            if(gtmOn == true){
                prtArray.push('- Universal Analytics tag in GTM:','- Same cookie information passing through both sites in same session:','- Accounts linked:','- Referral exclusion list:')
            }else if(gtmOn == false) {
                prtArray.push('- Tag Assistant with Global Site Tag (gtag.js) with Analytics block in green/blue in both domains:','- Same cookie information passing through both sites in same session:','- Accounts linked:','- Referral exclusion list:')
            }
        }
        if(task[i].textContent == "Google Tag Manager Installation"){
            if(gtmOn == true){
                prtArray.push('- Tag assistant with Google Tag Manager in green/blue:')
            }else if(gtmOn == false) {
                prtArray.push('- Tag assistant with Google Tag Manager in green/blue:')
            }
        }
        if(task[i].textContent == "Analytics E-Commerce Tracking"){
            if(gtmOn == true){
                prtArray.push('- Tag Assistant displaying Analytics and Google Tag Manager block in green/blue:','- Tag Assistant displaying the Analytics event Transaction, with data including product name and value:','- Tag imported to Ads, with the specific data attribution model:','- Currency fixed:')
            }else if(gtmOn == false) {
                prtArray.push('- Tag Assistant with Global Site Tag (gtag.js) with Analytics block in green/blue:','- Tag Assistant displaying the Analytics event Transaction, with data including product name and value:','- Tag imported to Ads, with the specific data attribution model:','- Currency fixed:')
            }
        } 
        if(task[i].textContent == "Analytics Enhanced E-Commerce Tracking"){
            if(gtmOn == true){
                prtArray.push('- Tag Assistant displaying Analytics and Google Tag Manager block in green/blue:','- Tag Assistant displaying the Analytics event Purchase, with data including product name and value:','- Analytics real-time events tab with some of the others events related to Enhanced Commerce (view_list, view_item_list, _add_to_cart, begin_checkout, etc.../):','- Tag imported to Ads, with the specific data attribution model:')
            }else if(gtmOn == false) {
                prtArray.push('- Tag Assistant displaying Analytics block in green/blue:','- Tag Assistant displaying the Analytics event Purchase, with data including product name and value:','- Analytics real-time events tab with some of the others events related to Enhanced Commerce (view_list, view_item_list, _add_to_cart, begin_checkout, etc.../):','- Tag imported to Ads, with the specific data attribution model:')
            }
        } 
        if(task[i].textContent == "Google Analytics Dynamic Remarketing (Retail)" || task[i].textContent == "Google Analytics Dynamic Remarketing (Non-Retail)"){
            if(gtmOn == true){
                prtArray.push('- Tag Assistant displaying Google Tag Manager block in green/blue:','- Tag Assistant displaying Analytics block in green/blue:','- Tag Assistant displaying the Analytics custom metrics:','- Audience created and imported to Ads:')
            }else if(gtmOn == false) {
                prtArray.push('- Tag Assistant displaying Analytics block in green/blue:','- Tag Assistant displaying the Analytics custom metrics:','- Audience created and imported to Ads:')
            }
        }
        if(task[i].textContent == "Dynamic Remarketing - Retail" || task[i].textContent == "Dynamic Remarketing - X (Non-Retail)"){
            if(gtmOn == true){
                prtArray.push('- Tag Assistant displaying Google Tag Manager block in green/blue:','- Tag Assistant displaying Remarketing block in green/blue:','- Tag Assistant displaying the Remarketing products data:','- Audience lists set up in Ads:')
            }else if(gtmOn == false) {
                prtArray.push('- Tag Assistant displaying Remarketing block in green/blue:','- Tag Assistant displaying the Remarketing products data:','- Audience lists set up in Ads:')
            }
        }
        if(task[i].textContent == "Analytics"){
            if(gtmOn == true){
                prtArray.push('- Tag Assistant with Google Tag Manager and Google Analytics in green/blue:','- Analytics in Real-Time:','- Accounts linked:')
            }else if(gtmOn == false) {
                prtArray.push('- Tag Assistant with Global Site Tag (gtag.js) with Google Analytics in green/blue:','- Analytics in Real-Time:','- Accounts linked:')
            }            
        }
        if(task[i].textContent == "Website Call Conversion"){
            if(gtmOn == true){
                prtArray.push('- Tag assistant with Google Tag Manager block in green/blue:','- Page test with #google-wcc-debug loaded and phone numbers switched to (99) 9999-9999:')
            }else if(gtmOn == false) {
                prtArray.push('- Tag Assistant with Global Site Tag (gtag.js) with Website Call Conversion block in green/blue:','- Page test with #google-wcc-debug loaded and phone numbers switched to (99) 9999-9999:')
            }            
        }
        if(task[i].textContent == "Offline Conversion Tracking"){
            if(gtmOn == true){
                prtArray.push('- Tag Assistant with Ads Conversion Tracking block in green/blue:','- Trix data set up with the main fields to be fullfiled:','- Custom HTML tags set up in Google Tag Manager:')
            }else if(gtmOn == false) {
                prtArray.push('- Tag Assistant with Ads Conversion Tracking block in green/blue:','- Trix data set up with the main fields to be fullfiled:','- Custom HTML tags set up in Google Tag Manager:')
            }            
        }
        if(task[i].textContent == "Site Wide Tag - Conversion Tracking Fix"){
            if(gtmOn == true){
                prtArray.push('- Chrome DevTools opened with the cookie set:','- Conversion link set up in Google Tag Manager:','- Site crawl page screen test:','- Conversions (if applicable) visible on Google Tag Assistant or Real-Time Conversions tab in Analytics:')
            }else if(gtmOn == false) {
                prtArray.push('- Tag assistant with Global Site Tag (gtag.js):','- Chrome DevTools opened with the cookie set:','- Site crawl page screen test:','- Conversions (if applicable) visible on Google Tag Assistant or Real-Time Conversions tab on Analytics:')
            }            
        }
        if(task[i].textContent == "Google Analytics Health Check"){
            if(gtmOn == true){
                prtArray.push('- Tag Assistant with Google Tag Manager in green/bluee:','- Tag list with Conversion Linker set:','- Remarketing enabled and imported to Ads:','- Referal exclusion list:','- View settings updated:','- Real-time conversions screen:','- Google Tag Manager with tags imported + Conversion Linker:')
            }else if(gtmOn == false) {
                prtArray.push('- Tag Assistant with Anayltics Global Site Tag (gtag.js) in green/bluee:','- Remarketing enabled and imported to Ads:','- Referal exclusion list:','- View settings updated:','- Real-time conversions screen:')
            }            
        }
    }
    clearArray(prtArray);

        //build de prints obrigatórios
    for (let i = 0; i < prtArray.length; i++) {
        const element = prtArray[i];
        const button = document.createElement("button");
        const input = document.createElement("input");
        button.setAttribute('class', 'print');
        button.setAttribute('title', element);
        button.setAttribute('printCont', '');
        input.setAttribute('class', 'editBtn');
        input.setAttribute('type', 'image');
        input.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/editBtn.svg');
        input.setAttribute('prints', '');
        input.addEventListener('click', function(){showModal(i, true)})
        const btnText = document.createTextNode(element);
        divprints.insertBefore(button, divprints.childNodes[i]);
        button.appendChild(input);
        button.appendChild(btnText);
        //button.style.opacity = 1;
    }

    let printbtns = document.querySelectorAll('#divprints button');
    printbtns.forEach(function(e){ e.addEventListener("click", capsulaDCP)});
    document.querySelector('.addPrint').removeEventListener("click", capsulaDCP);
}

prints();

function geraPrints() {
    conteudoPrint = '';
    let btnsActv2 = $('.print');
    for (let i = 0; i < btnsActv2.length; i++) {
        const element = btnsActv2[i].title;
        const element2 = btnsActv2[i].getAttribute('printCont');
        conteudoPrint = conteudoPrint + element + '<br>' + element2 + '<br>';
    }
}

/*
    //build de comentarios não obrigatórios
for (let i = 0; i < cmnArray.length; i++) {
    const element = cmnArray[i];
    const button = document.createElement("button");
    button.setAttribute('class', 'nObrigatorio');
    const btnText = document.createTextNode(element);
    divcomentarios.insertBefore(button, divcomentarios.childNodes[i]);
    button.appendChild(btnText);
    button.style.opacity = 1;
} */

//Build de prints
prtnArray = [];

    //build de prints não obrigatórios
/*for (let i = 0; i < prtnArray.length; i++) {
    const element = prtnArray[i];
    const button = document.createElement("button");
    const input = document.createElement("input");
    button.setAttribute('class', 'nObrigatorio');
    button.setAttribute('title', element);
    input.setAttribute('class', 'editBtn');
    input.setAttribute('type', 'image');
    input.setAttribute('src', 'images/editBtn.svg');
    input.addEventListener('click', function(){showModal(i, false)})
    const btnText = document.createTextNode(element);
    divprints.insertBefore(button, divprints.childNodes[i]);
    button.appendChild(input);
    button.appendChild(btnText);
    button.style.opacity = 1;
}*/

// adicionando prints
document.querySelector('.addPrint').addEventListener("click", function () { 
    const button = document.createElement("button");
    const input = document.createElement("input");
    button.setAttribute('class', 'nObrigatorio');
    input.setAttribute('class', 'editBtn');
    input.setAttribute('type', 'image');
    input.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/editBtn.svg');
    input.addEventListener('click', function(){showModal(document.querySelectorAll('#divprints .nObrigatorio').length-1, false)})
    const btnText = document.createTextNode("Novo Print");
    divprints.insertBefore(button, document.querySelector('.addPrint'));
    button.appendChild(input);
    button.appendChild(btnText);
    //button.style.opacity = 1;
    button.addEventListener("click", capsulaDCP);
});

//desativando botões de comentario e prints
function capsulaDCP() {desativarCP(this)};
function desativarCP(b) {
    if (b.className == 'comentario' || b.className == 'nComentario') {
        if (b.className == 'comentario' && $('#printModal')[0].style.visibility == "hidden") {
            b.classList.add('nComentario');
            b.classList.remove('comentario');
            geraComm();
        }
        else{
            b.classList.add('comentario');
            b.classList.remove('nComentario');
            geraComm();
        }
    }
    if (b.className == 'print' || b.className == 'nPrint') {
        if (b.className == 'print' && $('#printModal')[0].style.visibility == "hidden") {
            b.classList.add('nPrint');
            b.classList.remove('print');
            geraPrints();
        }
        else{
            b.classList.add('print');
            b.classList.remove('nPrint');
            geraPrints();
        }
    }
};

/*let comentbtns = document.querySelectorAll('#divcomentarios button');
let printbtns = document.querySelectorAll('#divprints button');
comentbtns.forEach(function(e){ e.addEventListener("click", capsulaDCP)});
printbtns.forEach(function(e){ e.addEventListener("click", capsulaDCP)});
document.querySelector('.addPrint').removeEventListener("click", capsulaDCP);*/

//Modal dos prints
$('#printModal')[0].style.visibility = "hidden";
let modalVisivel;

//document.querySelector('#printXis').addEventListener('click', function(){showModal(0)});
document.querySelector('#printModalBG').addEventListener('click', function(){showModal(0)});

//abrir e fechar modar
function showModal(i, obr){

    modalVisivel = $('#printModal')[0].style.visibility == "hidden";


    //exibir modal em um print obrigatório
    if(modalVisivel && obr){
        $('.print')[i].appendChild($('#printModal')[0]);
        $('#printModal')[0].style.visibility = "visible";
        $('#printModalBG')[0].style.visibility = "visible";
        $('#printModal > p')[0].textContent = document.querySelector('#addPrint').parentElement.parentElement.getAttribute('title');
        document.querySelector('#addPrint').value = document.querySelector('#addPrint').parentElement.parentElement.getAttribute('printCont');
    }
    //hide em um print obrigatório
    else if(obr){
        $('#printModal')[0].style.visibility = "hidden";
        $('#printModalBG')[0].style.visibility = "hidden";
    };

    //exibir modal em um print ñ obrigatório
    if(modalVisivel && !obr){
        $('#divprints .nObrigatorio')[i].appendChild($('#printModal')[0]);
        $('#printModal')[0].style.visibility = "visible";
        $('#printModalBG')[0].style.visibility = "visible";
    }
    //hide em um print ñ obrigatório
    else if(!obr){
        document.querySelector('#addPrint').parentElement.parentElement.setAttribute('printCont', document.querySelector('#addPrint').value);
        geraPrints();
        $('#printModal')[0].style.visibility = "hidden";
        $('#printModalBG')[0].style.visibility = "hidden";
    };

};

/*function fecharmodal() {
    $('#taskModal')[0].style.visibility = 'hidden';
}*/

//função para colocar os prints no campo de comentário
function attPrints(){
    document.querySelector('#publisherAttachTextPost').click();
    setTimeout(() => {
    document.querySelector('iframe').contentWindow.document.body.classList.remove('placeholder');
    document.querySelector('iframe').contentWindow.document.body.innerHTML = conteudoPrint;
    }, 1000);
}

function abrirCorpo(){
    document.getElementById('miniED').style.visibility = 'hidden';
    document.getElementById('corpo').style.visibility = 'visible';
}

function fecharCorpo(){
    document.getElementById('corpo').style.visibility = 'hidden';
    document.getElementById('miniED').style.visibility = 'visible'; 

    /*fechar bad lead também
    const bgbl = document.getElementById('bLBG').style;
    const iconeBgbl = document.getElementById('leadmau').style;
    bgbl.opacity = 0;
    bgbl.right = '0px';
    iconeBgbl.opacity = 0.5;
    document.getElementById('leadmau').onmouseover = function() 
    {
        this.style.opacity = 1;
    }
    document.getElementById('leadmau').onmouseout = function() 
    {
        this.style.opacity = 0.5;
    }
    bgbl.zIndex = -3;
    document.getElementById('leadmau').disabled = false;*/
}