console.log('ed e alefe os barões da pisadinha')

//script do lefoso
const imp = document.querySelector('#imp');
const inpro = document.querySelector('#inpro');
const oncall = document.querySelector('#oncall');
const attempt = document.querySelector('#attempt');
const inactive = document.querySelector('#inactive');
const gtmBtn = document.querySelector('#gtmBtn');
const tasksBtn = document.querySelector('#tasksBtn');
const fogoNoBuracobtn = document.querySelector('#fogonoburaco');
let Status;
let educatiOnly;
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

                educatiOnly = 1;

            };

            Status = 1;
    });
    inpro.addEventListener('click', (event) => {
        inpro.src = 'images/inProgressBtnAtv.svg'
        imp.src = 'images/implementedBtn.svg'
        attempt.src = 'images/attemptContactBtn.svg'
        inactive.src = 'images/inactiveBtn.svg'

            Status = 2;
    });
    attempt.addEventListener('click', (event) => {
        attempt.src = 'images/attemptContactBtnAtv.svg'
        inpro.src = 'images/inProgressBtn.svg'
        inactive.src = 'images/inactiveBtn.svg'
        imp.src = 'images/implementedBtn.svg'

            Status = 3;
    });
    inactive.addEventListener('click', (event) => {
        inactive.src = 'images/inactiveBtnAtv.svg'
        imp.src = 'images/implementedBtn.svg'
        inpro.src = 'images/inProgressBtn.svg'
        attempt.src = 'images/attemptContactBtn.svg'

            Status = 4;
    });
    gtmBtn.addEventListener('click', () => {
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
   /* for (let i = 0; i < bolas.length; i++) {
        if (bolas[i].conteudo != '') {
            conteudoComentario = conteudoComentario + bolas[i].conteudo;
        };
    };

    if (conteudoComentario != '') {
    //click no campo de comments
    document.getElementById('00N3600000QISAH_ileinner').click();
    //atribuição na caixa de comentarios
    document.getElementById('00N3600000QISAH').value = conteudoComentario;
    // click no botão OK de comments
    document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click();

    //clear conteudo
    conteudoComentario ='';
    } */
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

    //setTimeout(salvar, 2000);
};


//Build de comentarios
