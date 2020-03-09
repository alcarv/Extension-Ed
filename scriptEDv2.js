if (isCasePage) {
    var checkMsos = setInterval(function () {
        if (document.querySelectorAll('#detailsbar').length) {
            clearInterval(checkMsos)

            chrome.runtime.sendMessage({
                from: 'msos',
                subject: 'commentResponses'
            });


            var estilED = document.createElement("link");
            var fontED = document.createElement("link");
            estilED.setAttribute('rel', 'stylesheet');
            estilED.setAttribute('type', 'text/css');
            estilED.setAttribute('href', 'https://dantase.sandbox.msiteproject.com/EDstension/stylEDv2.css');
            fontED.setAttribute('rel', 'stylesheet');
            fontED.setAttribute('href', 'https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
            document.head.appendChild(estilED);
            document.head.appendChild(fontED);
            var template = document.createElement('template');
            template.innerHTML = '<span><input type="image" name="miniED" src="https://dantase.sandbox.msiteproject.com/EDstension/images/miniBG.png" id="miniED"><div id="corpo"><input type="image" name="xizinho" src="https://dantase.sandbox.msiteproject.com/EDstension/images/closeBtn.svg" id="xizinho"><input type="image" name="logo" src="https://dantase.sandbox.msiteproject.com/EDstension/images/logoWebTech.svg" id="logo"><div id="botoesPrin">    <input type="image" src="https://dantase.sandbox.msiteproject.com/EDstension/images/implementedBtn.svg" id="imp">    <input type="image" src="https://dantase.sandbox.msiteproject.com/EDstension/images/inProgressBtn.svg" id="inpro">    <input type="image" src="https://dantase.sandbox.msiteproject.com/EDstension/images/onCallVAz.svg" id="oncall">    <input type="image" src="https://dantase.sandbox.msiteproject.com/EDstension/images/attemptContactBtn.svg" id="attempt">    <input type="image" src="https://dantase.sandbox.msiteproject.com/EDstension/images/inactiveBtn.svg" id="inactive"></div><div id="botoesSec">    <input type="image" src="https://dantase.sandbox.msiteproject.com/EDstension/images/gtmBtn.svg" id="gtmBtn"></div><div id="divcomentarios">    <textarea name="addComent" id="addComent" cols="30" rows="10"></textarea></div><div id="divprints">    <div id="printModal">        <p>printName</p>        <textarea name="addPrint" id="addPrint" cols="30" rows="10"></textarea>            </div>    <button class="addPrt">+</button></div><div id="printModalBG" class="modal"></div><div class="clearMan"></div><button type="button" id="fogonoburaco">Fill</button><div class="clearMan"></div><div id="sign">    <a id="danta" href="https://moma.corp.google.com/person/dantase@google.com" target="_blank">@dantase</a> <a id="ale" href="https://moma.corp.google.com/person/alefe@google.com" target="_blank">@alefe</a></div><div id="feedback"><a id="feed" href="https://docs.google.com/forms/d/1OpN7hElo6EdSj58WKvQHX-D-rkaSqQ5xIH1ISk2Nz3M/edit?ts=5e39ab22" target="_blank">Feedback</a> </div></div></span>';
            //var nodes = template.content.childNodes;
            //for (var i = 0; i < nodes.length; i++) {
            document.body.appendChild(template.content.firstChild);
            //}

            let clickFn = (selector) => {
                document.getElementById(selector).dispatchEvent(doubleclick);
            }

            var triggerEvent = (element, event) => {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent(event, false, true);
                element.dispatchEvent(evt);
            }

            var doubleclick = new MouseEvent('dblclick', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });

            var $ = (selector) => {
                return document.querySelectorAll(selector);
            }
            var $1 = (selector) => {
                return document.querySelector(selector);
            }
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

            $1('#miniED').addEventListener('click', (event) => {
                abrirCorpo();
            })

            $1('#xizinho').addEventListener('click', (event) => {
                fecharCorpo();
            })

            const buttons = {
                implemented: {
                    defaultState: 'inactive',
                    states: {
                        active: 'https://dantase.sandbox.msiteproject.com/EDstension/images/implementedBtnAtv.svg',
                        education: 'https://dantase.sandbox.msiteproject.com/EDstension/images/educationOnlyBtn.svg',
                        inactive: 'https://dantase.sandbox.msiteproject.com/EDstension/images/implementedBtn.svg'
                    }
                },

                inprogress: {
                    defaultState: 'inactive',
                    states: {
                        active: 'https://dantase.sandbox.msiteproject.com/EDstension/images/inProgressBtnAtv.svg',
                        inactive: 'https://dantase.sandbox.msiteproject.com/EDstension/images/inProgressBtn.svg'
                    }
                },

                attemptContact: {
                    defaultState: 'inactive',
                    states: {
                        active: 'https://dantase.sandbox.msiteproject.com/EDstension/images/attemptContactBtnAtv.svg',
                        inactive: 'https://dantase.sandbox.msiteproject.com/EDstension/images/attemptContactBtn.svg'
                    }
                },

                inactive: {
                    defaultState: 'inactive',
                    states: {
                        active: 'https://dantase.sandbox.msiteproject.com/EDstension/images/inactiveBtnAtv.svg',
                        inactive: 'https://dantase.sandbox.msiteproject.com/EDstension/images/inactiveBtn.svg'
                    }
                },

                inactive: {
                    defaultState: 'inactive',
                    states: {
                        active: 'https://dantase.sandbox.msiteproject.com/EDstension/images/inactiveBtnAtv.svg',
                        inactive: 'https://dantase.sandbox.msiteproject.com/EDstension/images/inactiveBtn.svg'
                    }
                },

                tagmanager: {
                    defaultState: 'inactive',
                    states: {
                        active: 'https://dantase.sandbox.msiteproject.com/EDstension/images/gtmBtnAtv.svg',
                        inactive: 'https://dantase.sandbox.msiteproject.com/EDstension/images/gtmBtn.svg'
                    }
                },

            };

            mudStatus = () => {
                let count = 0;
                imp.addEventListener('click', (event) => {
                    count++;
                    imp.src = buttons.implemented.states.active
                    inpro.src = buttons.inprogress.states[buttons.inprogress.defaultState]
                    attempt.src = buttons.attemptContact.states[buttons.attemptContact.defaultState]
                    inactive.src = buttons.inactive.states[buttons.inactive.defaultState]
                    if (count % 2 == 0) {
                        imp.src = buttons.implemented.states.education
                        inpro.src = buttons.inprogress.states[buttons.inprogress.defaultState]
                        attempt.src = buttons.attemptContact.states[buttons.attemptContact.defaultState]
                        inactive.src = buttons.inactive.states[buttons.inactive.defaultState]

                        educatiOnly = 1;

                    }
                    else {
                        educatiOnly = 0;
                    }

                    Status = 1;

                    if (count > 2) {
                        inpro.src = buttons.inprogress.states[buttons.inprogress.defaultState]
                        imp.src = buttons.implemented.states[buttons.implemented.defaultState]
                        attempt.src = buttons.attemptContact.states[buttons.attemptContact.defaultState]
                        inactive.src = buttons.inactive.states[buttons.inactive.defaultState]
                        buttons.Status
                        count = 0
                        Status = 0
                    }

                    comments(Status);
                    prints(Status);
                });
                inpro.addEventListener('click', (event) => {
                    count++;
                    inpro.src = buttons.inprogress.states.active
                    imp.src = buttons.implemented.states[buttons.implemented.defaultState]
                    attempt.src = buttons.attemptContact.states[buttons.attemptContact.defaultState]
                    inactive.src = buttons.inactive.states[buttons.inactive.defaultState]
                    if (count % 2 == 0) {
                        inpro.src = buttons.inprogress.states[buttons.inprogress.defaultState]
                        imp.src = buttons.implemented.states[buttons.implemented.defaultState]
                        attempt.src = buttons.attemptContact.states[buttons.attemptContact.defaultState]
                        inactive.src = buttons.inactive.states[buttons.inactive.defaultState]

                        Status = 0
                    }

                    Status = 2;
                });
                attempt.addEventListener('click', (event) => {
                    count++;
                    attempt.src = buttons.attemptContact.states.active
                    inpro.src = buttons.inprogress.states[buttons.inprogress.defaultState]
                    inactive.src = buttons.inactive.states[buttons.inactive.defaultState]
                    imp.src = buttons.implemented.states[buttons.implemented.defaultState]
                    if (count % 2 == 0) {
                        attempt.src = buttons.attemptContact.states[buttons.attemptContact.defaultState]
                        inpro.src = buttons.inprogress.states[buttons.inprogress.defaultState]
                        inactive.src = buttons.inactive.states[buttons.inactive.defaultState]
                        imp.src = buttons.implemented.states[buttons.implemented.defaultState]

                        Status = 0
                    }

                    Status = 3;
                });
                inactive.addEventListener('click', (event) => {
                    count++;
                    inactive.src = buttons.inactive.states.active
                    imp.src = buttons.implemented.states[buttons.implemented.defaultState]
                    inpro.src = buttons.inprogress.states[buttons.inprogress.defaultState]
                    attempt.src = buttons.attemptContact.states[buttons.attemptContact.defaultState]
                    if (count % 2 == 0) {
                        inactive.src = buttons.inactive.states[buttons.inactive.defaultState]
                        imp.src = buttons.implemented.states[buttons.implemented.defaultState]
                        inpro.src = buttons.inprogress.states[buttons.inprogress.defaultState]
                        attempt.src = buttons.attemptContact.states[buttons.attemptContact.defaultState]

                        Status = 0
                    }

                    Status = 4;
                });
                gtmBtn.addEventListener('click', () => {
                    count++;
                    gtmBtn.src = buttons.tagmanager.states.active
                    gtmOn = true;
                    if (count % 2 == 0) {
                        gtmBtn.src = buttons.tagmanager.states[buttons.tagmanager.defaultState]
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

                //click no campo de status
                setTimeout(() => { clickFn('cas7_ileinner'); }, 1000);
                //seleção de status
                //setTimeout(() => {document.getElementById('cas7').selectedIndex = 4;}, 1000);
                setTimeout(() => {
                    let el = $1('#cas7');
                    el.value = "Implemented";
                    triggerEvent(el, 'change');
                }, 1400);

                if (educatiOnly == 1) {
                    //Click no campo de education Only
                    setTimeout(() => { clickFn('00N3600000R148r_ileinner'); }, 500);
                    //Click no checkbox Education Only
                    setTimeout(() => { document.getElementById('00N3600000R148r').click(); }, 750);
                };
                //clique no botão de ok da janelinha de seleção
                setTimeout(() => { document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click(); }, 1500);
                //click no campo de calendario
                setTimeout(() => { clickFn('00N3600000QIS9O_ileinner'); }, 1700);
                //click no campo de seleção da data de hoje
                setTimeout(() => { document.querySelector('#datePicker > div.calBody > div > a').click(); }, 1900);
                //click no campo campanha criada
                setTimeout(() => { clickFn('00N3600000QIS8U_ileinner'); }, 2000);
                //seleção de status
                setTimeout(() => { document.getElementById('00N3600000QIS8U').selectedIndex = 1; }, 2100);
                //click no campo de cms
                setTimeout(() => { clickFn('00N3600000QISC9_ileinner'); }, 2200);
                //seleção de cms
                setTimeout(() => { document.getElementById('00N3600000QISC9').selectedIndex = cmsED; }, 2300);
                //click no screenshare
                setTimeout(() => { clickFn('00N3600000QISDL_ileinner'); }, 2400);
                //seleção screenshare
                setTimeout(() => { document.getElementById('00N3600000QISDL').selectedIndex = scshED; }, 2500);
                //click no mouse control
                setTimeout(() => { clickFn('00N1Q00000TV10V_ileinner'); }, 2600);
                //seleção mouse control
                setTimeout(() => { document.getElementById('00N1Q00000TV10v').selectedIndex = 2; }, 2700);
                //click no ads CID
                setTimeout(() => { clickFn('00N3600000QIS7x_ileinner'); }, 2800);
                //seleção ads CID
                setTimeout(() => { document.getElementById('00N3600000QIS7x').selectedIndex = 2; }, 2900);
                /*click no confirmation
                setTimeout(() => { document.getElementById('00N3600000SMHzO_ileinner').click(); }, 2600);
                //seleção do confirmation
                setTimeout(() => { document.getElementById('00N3600000SMHzO').selectedIndex = cnftED; }, 2700);*/
                //click call transfered
                setTimeout(() => { clickFn('00N3600000TPihX_ileinner'); }, 3000);
                //seleção call transfered
                setTimeout(() => { document.getElementById('00N3600000TPihX').selectedIndex = 1; }, 3100);
                //click call transfered
                setTimeout(() => { clickFn('00N3600000TPihW_ileinner'); }, 3200);
                //seleção call transfered
                setTimeout(() => { document.getElementById('00N3600000TPihW').selectedIndex = 2; }, 3350);


            };

            emProgresso = () => {
                //click no campo de status
                setTimeout(() => { clickFn('cas7_ileinner'); }, 300);
                //seleção de status
                setTimeout(() => {
                    let el = $1('#cas7');
                    el.value = "In progress";
                    triggerEvent(el, 'change');
                }, 1300);
                //seleção de sub status
                setTimeout(() => { document.getElementById('00N3600000QISAX').selectedIndex = 1; }, 1400);
                //clique no botão de ok da janelinha de seleção
                setTimeout(() => { clickFn('#InlineEditDialog_buttons > input:nth-child(1)').click(); }, 1500);
                //click no campo campanha criada
                setTimeout(() => { clickFn('00N3600000QIS8U_ileinner'); }, 1600);
                //seleção campo campanha criada
                setTimeout(() => { document.getElementById('00N3600000QIS8U').selectedIndex = 1; }, 1700);
                //click no campo de cms
                setTimeout(() => { clickFn('00N3600000QISC9_ileinner'); }, 1800);
                //seleção de cms
                setTimeout(() => { document.getElementById('00N3600000QISC9').selectedIndex = cmsED; }, 1900);
                //click no mouse control
                setTimeout(() => { clickFn('00N3600000QISBa_ileinner'); }, 2000);
                //seleção mouse control
                setTimeout(() => { document.getElementById('00N3600000QISBa').selectedIndex = 2; }, 2100);
                //click no ads CID
                setTimeout(() => { clickFn('00N3600000QIS7x_ileinner'); }, 2200);
                //seleção ads CID
                setTimeout(() => { document.getElementById('00N3600000QIS7x').selectedIndex = 2; }, 2300);
                /*click no confirmation
                setTimeout(() => { document.getElementById('00N3600000SMHzO_ileinner').click(); }, 2400);
                //seleção do confirmation
                setTimeout(() => { document.getElementById('00N3600000SMHzO').selectedIndex = cnftED; }, 2500);*/
            };

            tentativaContato = () => {
                //click no campo de status
                setTimeout(() => { clickFn('cas7_ileinner'); }, 300);
                //seleção de status
                setTimeout(() => {
                    let el = $1('#cas7');
                    el.value = "Attempting Contact";
                    triggerEvent(el, 'change');
                }, 1300);
                //seleção de sub status
                setTimeout(() => { document.getElementById('00N3600000QISAX').selectedIndex = 7; }, 1400);
                //clique no botão de ok da janelinha de seleção
                setTimeout(() => { document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click(); }, 1500);
                //click no campo campanha criada
                setTimeout(() => { clickFn('00N3600000QIS8U_ileinner'); }, 1600);
                //seleção campo campanha criada
                setTimeout(() => { document.getElementById('00N3600000QIS8U').selectedIndex = 1; }, 1700);
                //click no campo de cms
                setTimeout(() => { clickFn('00N3600000QISC9_ileinner'); }, 1800);
                //seleção de cms
                setTimeout(() => { document.getElementById('00N3600000QISC9').selectedIndex = cmsED; }, 1900);
                //click no mouse control
                setTimeout(() => { clickFn('00N3600000QISBa_ileinner'); }, 2000);
                //seleção mouse control
                setTimeout(() => { document.getElementById('00N3600000QISBa').selectedIndex = 2; }, 2100);
                //click no ads CID
                setTimeout(() => { clickFn('00N3600000QIS7x_ileinner'); }, 2200);
                //seleção ads CID
                setTimeout(() => { document.getElementById('00N3600000QIS7x').selectedIndex = 2; }, 2300);
                /*click no confirmation
                setTimeout(() => { document.getElementById('00N3600000SMHzO_ileinner').dispatchEvent(doubleclick); }, 2400);
                //seleção do confirmation
                setTimeout(() => { document.getElementById('00N3600000SMHzO').selectedIndex = cnftED; }, 2500);*/
            };

            inativo = () => {
                //click no campo de status
                setTimeout(() => { clickFn('cas7_ileinner'); }, 300);
                //seleção de status
                setTimeout(() => {
                    let el = $1('#cas7');
                    el.value = "Inactive";
                    triggerEvent(el, 'change');
                }, 1300);
                //seleção de sub status
                setTimeout(() => { document.getElementById('00N3600000QISAX').selectedIndex = 5; }, 1400);
                //clique no botão de ok da janelinha de seleção
                setTimeout(() => { document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click(); }, 1500);
                //click no campo de calendario
                setTimeout(() => { clickFn('00N3600000QIS9Q_ileinner'); }, 1600);
                //click no input
                setTimeout(() => { document.getElementById('00N3600000QIS9Q').click(); }, 1650);
                //click no campo de seleção da data de hoje
                setTimeout(() => { document.querySelector('#datePicker > div.calBody > div > a').click(); }, 1750);
                //click no campo campanha criada
                setTimeout(() => { clickFn('00N3600000QIS8U_ileinner'); }, 1800);
                //seleção campo campanha criada
                setTimeout(() => { document.getElementById('00N3600000QIS8U').selectedIndex = 1; }, 1900);
                /*click no campo de cms
                setTimeout(() => { document.getElementById('00N3600000QISC9_ileinner').dispatchEvent(doubleclick); }, 2100);
                //seleção de cms
                setTimeout(() => { document.getElementById('00N3600000QISC9').selectedIndex = cmsED; }, 2200);*/
                //click no mouse control
                setTimeout(() => { clickFn('00N3600000QISBa_ileinner'); }, 2300);
                //seleção mouse control
                setTimeout(() => { document.getElementById('00N3600000QISBa').selectedIndex = 2; }, 2400);
                //click no ads CID
                setTimeout(() => { clickFn('00N3600000QIS7x_ileinner'); }, 2500);
                //seleção ads CID
                setTimeout(() => { document.getElementById('00N3600000QIS7x').selectedIndex = 2; }, 2600);
                //click call transfered
                setTimeout(() => { clickFn('00N3600000TPihX_ileinner'); }, 2700);
                //seleção call transfered
                setTimeout(() => { document.getElementById('00N3600000TPihX').selectedIndex = 2; }, 2800);
                //click call transfered
                setTimeout(() => { clickFn('00N3600000TPihY_ileinner'); }, 2900);
                //seleção call transfered
                setTimeout(() => { document.getElementById('00N3600000TPihY').selectedIndex = 2; }, 3000);
                /*click no confirmation
                setTimeout(() => { document.getElementById('00N3600000SMHzO_ileinner').dispatchEvent(doubleclick); }, 2600);
                //seleção do confirmation
                setTimeout(() => { document.getElementById('00N3600000SMHzO').selectedIndex = cnftED; }, 2700);*/
            };


            fogoNoBuraco = () => {
                geraComm();
                geraPrints();
                if (conteudoComentario != '') {
                    //click no campo de comments
                    document.querySelector("#\\30 0N3600000QISAH_ilecell").dispatchEvent(doubleclick);
                    //atribuição na caixa de comentarios
                    document.getElementById('00N3600000QISAH').value = conteudoComentario;
                    // click no botão OK de comments
                    document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click();
                    //clear conteudo
                    conteudoComentario = '';
                }
                if (Status == 1) {
                    implementado(educatiOnly);
                } else if (Status == 2) {
                    emProgresso();
                } else if (Status == 3) {
                    tentativaContato();
                } else if (Status == 4) {
                    inativo();
                }

                // code block
                setTimeout(attPrints, 3500);
                //setTimeout(salvar, 2000);
            };

            //função para eliminar elementos repeditos de uma array
            clearArray = (array) => {
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
                    for (let a = vaiMorrer.length - 1; a >= 0; a--) {
                        const elementa = vaiMorrer[a];
                        array.splice(elementa, 1);
                    };

                }
            }


            var jTask;
            /*fetch("https://dantase.sandbox.msiteproject.com/task.php").then(response => {
                return response.json();
            }).then(task => {
                jTask = task;
                jTask = JSON.parse(jTask);
            });

            var jTask;
            function loadDoc() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        jTask = this.response;
                    }
                };
                xhttp.open("GET", "https://dantase.sandbox.msiteproject.com/task.json", true);
                xhttp.responseType = 'json';
                xhttp.setRequestHeader('accept', 'application/json');
                xhttp.setRequestHeader('Content-Type', 'application/json');
                xhttp.setRequestHeader('Access-Control-Allow-Headers', 'application/json');
                xhttp.send();
            }
            loadDoc();*/

            chrome.runtime.onMessage.addListener(async function (msg, sender) {
                if (msg.from === 'msos') {
                    // request to send options
                    if (msg.subject === 'commentResponsesObj') {
                        jTask = msg.obj;
                    }
                }
            });

            //Build de comentarios
            cmnArray = [];

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

                for (let i = 0; i < task.length; i++) {
                    if (task[i].textContent == 'Ads Conversion Code') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Ads Conversion Code']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Ads Conversion Code']);
                        }
                    }
                    else if (task[i].textContent == 'Ads Event Tracking') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Ads Event Tracking']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Ads Event Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Ads Remarketing') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Ads Remarketing']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Ads Remarketing']);
                        }
                    }
                    else if (task[i].textContent == 'Google Analytics Remarketing') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Google Analytics Remarketing']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Google Analytics Remarketing']);
                        }
                    }
                    else if (task[i].textContent == 'Analytics Destination Tracking') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Analytics Destination Tracking']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Analytics Destination Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Analytics Event Tracking') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Analytics Event Tracking']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Analytics Event Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Cross Domain Tracking') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Cross Domain Tracking']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Cross Domain Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Google Tag Manager Installation') {
                        cmArray.push('- Google Tag Manager has been set successfully in all the pages of the website;')
                    }
                    else if (task[i].textContent == 'Analytics E-Commerce Tracking') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Analytics E-Commerce Tracking']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Analytics E-Commerce Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Analytics Enhanced E-Commerce Tracking') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Analytics Enhanced E-Commerce Tracking']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Analytics Enhanced E-Commerce Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Google Analytics Dynamic Remarketing (Retail)') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Google Analytics Dynamic Remarketing (Retail)']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Google Analytics Dynamic Remarketing (Retail)']);
                        }
                    }
                    else if (task[i].textContent == 'Google Analytics Dynamic Remarketing (Non-Retail)') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Google Analytics Dynamic Remarketing (Non-Retail)']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Google Analytics Dynamic Remarketing (Non-Retail)']);
                        }
                    }
                    else if (task[i].textContent == 'Dynamic Remarketing - Retail') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Dynamic Remarketing - Retail']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Dynamic Remarketing - Retail']);
                        }
                    }
                    else if (task[i].textContent == 'Dynamic Remarketing - X (Non-Retail)') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Dynamic Remarketing - X (Non-Retail)']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Dynamic Remarketing - X (Non-Retail)']);
                        }
                    }
                    else if (task[i].textContent == 'Analytics') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Analytics']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Analytics']);
                        }
                    }
                    else if (task[i].textContent == 'Website Call Conversion') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Website Call Conversion']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Website Call Conversion']);
                        }
                    }
                    else if (task[i].textContent == 'Offline Conversion Tracking') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Offline Conversion Tracking']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Offline Conversion Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Site Wide Tag - Conversion Tracking Fix') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Site Wide Tag - Conversion Tracking Fix']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Site Wide Tag - Conversion Tracking Fix']);
                        }
                    }
                    else if (task[i].textContent == 'Google Analytics Health Check') {
                        if (gtmOn == true) {
                            cmArray.push(...jTask.comment.gtm['Google Analytics Health Check']);
                        } else if (gtmOn == false) {
                            cmArray.push(...jTask.comment.code['Google Analytics Health Check']);
                        }
                    }
                }
                clearArray(cmArray);


                if (Status === 0 || Status == undefined) {
                    cmArray = [];
                }

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
                comentbtns.forEach((e) => { e.addEventListener("click", capsulaDCP) });

            }


            geraComm = () => {
                conteudoComentario = '';
                let btnsActv = $('.comentario');
                for (let i = 0; i < btnsActv.length; i++) {
                    const element = btnsActv[i].textContent;
                    conteudoComentario = conteudoComentario + element + '\n';
                }
                conteudoComentario = conteudoComentario + $1('#addComent').value;
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
                    if (botoes[i].className != 'addPrt') {
                        botoes[i].remove();

                    }
                }

                for (let i = 0; i < task.length; i++) {
                    if (task[i].textContent == 'Ads Conversion Code') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Ads Conversion Code']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Ads Conversion Code']);
                        }
                    }
                    else if (task[i].textContent == 'Ads Event Tracking') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Ads Event Tracking']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Ads Event Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Ads Remarketing') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Ads Remarketing']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Ads Remarketing']);
                        }
                    }
                    else if (task[i].textContent == 'Google Analytics Remarketing') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Google Analytics Remarketing']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Google Analytics Remarketing']);
                        }
                    }
                    else if (task[i].textContent == 'Analytics Destination Tracking') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Analytics Destination Tracking']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Analytics Destination Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Analytics Event Tracking') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Analytics Event Tracking']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Analytics Event Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Cross Domain Tracking') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Cross Domain Tracking']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Cross Domain Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Google Tag Manager Installation') {
                        prtArray.push('- Google Tag Manager has been set successfully in all the pages of the website;')
                    }
                    else if (task[i].textContent == 'Analytics E-Commerce Tracking') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Analytics E-Commerce Tracking']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Analytics E-Commerce Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Analytics Enhanced E-Commerce Tracking') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Analytics Enhanced E-Commerce Tracking']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Analytics Enhanced E-Commerce Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Google Analytics Dynamic Remarketing (Retail)') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Google Analytics Dynamic Remarketing (Retail)']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Google Analytics Dynamic Remarketing (Retail)']);
                        }
                    }
                    else if (task[i].textContent == 'Google Analytics Dynamic Remarketing (Non-Retail)') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Google Analytics Dynamic Remarketing (Non-Retail)']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Google Analytics Dynamic Remarketing (Non-Retail)']);
                        }
                    }
                    else if (task[i].textContent == 'Dynamic Remarketing - Retail') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Dynamic Remarketing - Retail']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Dynamic Remarketing - Retail']);
                        }
                    }
                    else if (task[i].textContent == 'Dynamic Remarketing - X (Non-Retail)') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Dynamic Remarketing - X (Non-Retail)']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Dynamic Remarketing - X (Non-Retail)']);
                        }
                    }
                    else if (task[i].textContent == 'Analytics') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Analytics']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Analytics']);
                        }
                    }
                    else if (task[i].textContent == 'Website Call Conversion') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Website Call Conversion']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Website Call Conversion']);
                        }
                    }
                    else if (task[i].textContent == 'Offline Conversion Tracking') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Offline Conversion Tracking']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Offline Conversion Tracking']);
                        }
                    }
                    else if (task[i].textContent == 'Site Wide Tag - Conversion Tracking Fix') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Site Wide Tag - Conversion Tracking Fix']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Site Wide Tag - Conversion Tracking Fix']);
                        }
                    }
                    else if (task[i].textContent == 'Google Analytics Health Check') {
                        if (gtmOn == true) {
                            prtArray.push(...jTask.print.gtm['Google Analytics Health Check']);
                        } else if (gtmOn == false) {
                            prtArray.push(...jTask.print.code['Google Analytics Health Check']);
                        }
                    }
                }
                clearArray(prtArray);

                if (Status === 0 || Status == undefined) {
                    prtArray = [];
                }

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
                    input.addEventListener('click', () => { showModal(i, true) })
                    const btnText = document.createTextNode(element);
                    divprints.insertBefore(button, divprints.childNodes[i]);
                    button.appendChild(input);
                    button.appendChild(btnText);
                    //button.style.opacity = 1;
                }

                let printbtns = document.querySelectorAll('#divprints button');
                printbtns.forEach((e) => { e.addEventListener("click", capsulaDCP) });
                document.querySelector('.addPrt').removeEventListener("click", capsulaDCP);
            }


            geraPrints = () => {
                conteudoPrint = '';
                let btnsActv2 = $('.print');
                for (let i = 0; i < btnsActv2.length; i++) {
                    if (btnsActv2[i].classList[1] == 'nObrigatorio') {
                        btnsActv2[i].setAttribute('title', btnsActv2[i].childNodes[1].value);
                    }
                    const element = btnsActv2[i].title;
                    const element2 = btnsActv2[i].getAttribute('printCont');
                    conteudoPrint = conteudoPrint + '<p>' + element + '</p>' + '<p>' + element2 + '</p>';
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
            document.querySelector('.addPrt').addEventListener("click", () => {
                const button = document.createElement("button");
                const input = document.createElement("input");
                button.setAttribute('class', 'print');
                button.classList.add('nObrigatorio');
                button.setAttribute('printCont', '');
                input.setAttribute('class', 'editBtn');
                input.setAttribute('type', 'image');
                input.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/editBtn.svg');
                const btnText = document.createElement("input");
                btnText.setAttribute('type', 'text');
                btnText.setAttribute('class', 'printText');
                button.setAttribute('title', btnText.value);
                divprints.insertBefore(button, document.querySelector('.addPrt'));
                button.appendChild(input);
                button.appendChild(btnText);
                //button.style.opacity = 1;
                let index = document.querySelectorAll('#divprints .nObrigatorio').length - 1;
                input.addEventListener('click', () => { showModal(index, false) });
                button.addEventListener("click", capsulaDCP);
                btnText.addEventListener('click', e => e.stopPropagation());
            });

            //desativando botões de comentario e prints
            function capsulaDCP() { desativarCP(this) };
            desativarCP = (b) => {
                if (b.className == 'comentario' || b.className == 'nComentario') {
                    if (b.className == 'comentario' && $1('#printModal').style.visibility == "hidden") {
                        b.classList.add('nComentario');
                        b.classList.remove('comentario');
                        geraComm();
                    }
                    else {
                        b.classList.add('comentario');
                        b.classList.remove('nComentario');
                        geraComm();
                    }
                }
                else if (b.classList[1] == 'nObrigatorio' || b.classList[0] == 'iNObrigatorio') {
                    if (b.classList[1] == 'nObrigatorio' && $1('#printModal').style.visibility == "hidden") {
                        b.classList.remove('print');
                        b.classList.add('iNObrigatorio');
                        b.classList.remove('nObrigatorio');
                        geraPrints();
                    }
                    else {
                        b.classList.add('print');
                        b.classList.add('nObrigatorio');
                        b.classList.remove('iNObrigatorio');
                        geraPrints();
                    }
                }
                else if (b.className == 'print' || b.className == 'nPrint') {
                    if (b.className == 'print' && $1('#printModal').style.visibility == "hidden") {
                        b.classList.add('nPrint');
                        b.classList.remove('print');
                        geraPrints();
                    }
                    else {
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
            document.querySelector('.addPrt').removeEventListener("click", capsulaDCP);*/

            //Modal dos prints
            $1('#printModal').style.visibility = "hidden";
            let modalVisivel;

            //document.querySelector('#printXis').addEventListener('click', function(){showModal(0)});
            document.querySelector('#printModalBG').addEventListener('click', () => { showModal(0) });

            //abrir e fechar modar
            showModal = (i, obr) => {

                modalVisivel = $1('#printModal').style.visibility == "hidden";


                //exibir modal em um print obrigatório
                if (modalVisivel && obr) {
                    $('button[class*="rint"]')[i].appendChild($1('#printModal'));
                    $1('#printModal').style.visibility = "visible";
                    $1('#printModalBG').style.visibility = "visible";
                    $1('#printModal > p').textContent = document.querySelector('#addPrint').parentElement.parentElement.getAttribute('title');
                    $1('#addPrint').value = $1('#addPrint').parentElement.parentElement.getAttribute('printCont');
                }
                //hide em um print obrigatório
                else if (obr) {
                    document.querySelector('#addPrint').parentElement.parentElement.setAttribute('printCont', document.querySelector('#addPrint').value);
                    geraPrints();
                    $1('#printModal').style.visibility = "hidden";
                    $1('#printModalBG').style.visibility = "hidden";
                    document.body.appendChild($1('#printModal'));
                };

                //exibir modal em um print ñ obrigatório
                if (modalVisivel && !obr) {
                    $('#divprints .nObrigatorio')[i].appendChild($1('#printModal'));
                    $('#divprints .nObrigatorio')[i].setAttribute('title', $('#divprints .nObrigatorio')[i].childNodes[1].value);
                    $1('#printModal').style.visibility = "visible";
                    $1('#printModalBG').style.visibility = "visible";
                    $1('#printModal > p').textContent = document.querySelector('#addPrint').parentElement.parentElement.getAttribute('title');
                    $1('#addPrint').value = $1('#addPrint').parentElement.parentElement.getAttribute('printCont');
                }
                //hide em um print ñ obrigatório
                else if (!obr) {
                    document.querySelector('#addPrint').parentElement.parentElement.setAttribute('printCont', document.querySelector('#addPrint').value);
                    geraPrints();
                    $1('#printModal').style.visibility = "hidden";
                    $1('#printModalBG').style.visibility = "hidden";
                    document.body.appendChild($1('#printModal'));
                };

            };

            /*function fecharmodal() {
                $1('#taskModal').style.visibility = 'hidden';
            }*/

            //função para colocar os prints no campo de comentário
            attPrints = () => {
                if (conteudoPrint != '') {
                    document.querySelector('#publisherAttachTextPost').click();
                    setTimeout(() => {
                        document.querySelector('iframe').contentWindow.document.body.classList.remove('placeholder');
                        document.querySelector('iframe').contentWindow.document.body.innerHTML = conteudoPrint;
                        document.getElementById('publishersharebutton').click()
                    }, 1000);
                }
            }

            abrirCorpo = () => {
                document.getElementById('miniED').style.visibility = 'hidden';
                document.getElementById('corpo').style.visibility = 'visible';
            }

            fecharCorpo = () => {
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

        }
    }, 100)

}