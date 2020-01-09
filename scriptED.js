"use strict";
console.log('Versão brasileira HerbED richED');

window.optTxt = {};

    /* TAMPERMONKEY/GREASEMONKEY /

    function functED(){
        var tabs =[];
        var tabID;

        for (let i = 0; i < 6; i++) {
            tabs.push(document.querySelector('#scc-pt-'+i+' iframe').contentWindow.document.body);
        };
        for (let i = 0; i < tabs.length; i++) {
            const element = tabs[i];
            var EDstensionScrpt = document.createElement("script");
            EDstensionScrpt.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/scriptED.js');
            element.appendChild(EDstensionScrpt);
        };
    };
    setTimeout(functED, 1000);*/


    /* !!!HTML BUILD!!! A IDENTAÇÃO NÃO REPRESENTA LOCAL SCOPE, A INDENTAÇÃO
    É PRA SIMULAR UMA ARVORE DE PARENT E CHILD DE HTML !!!HTML BUILD!!! */

    // link css e font
    var estilED = document.createElement("link");
    var fontED = document.createElement("link");
    var jQLib = document.createElement("script");
    estilED.setAttribute('rel', 'stylesheet');
    estilED.setAttribute('type', 'text/css');
    estilED.setAttribute('href', 'https://dantase.sandbox.msiteproject.com/EDstension/stylED.css');
    fontED.setAttribute('rel', 'stylesheet');
    fontED.setAttribute('href', 'https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    jQLib.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
    document.head.appendChild(estilED);
    document.head.appendChild(fontED);
    document.head.appendChild(jQLib);

    // <!-- MiniBG -->
    var miniTag = document.createElement("input");
    miniTag.setAttribute('type', 'image');
    miniTag.setAttribute('name', 'miniED');
    miniTag.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/miniBG.png');
    miniTag.setAttribute('id', 'miniED');
    miniTag.setAttribute('onclick', 'abrirCorpo();');
    document.body.appendChild(miniTag);

    // <!-- main div -->
    var corpoTag = document.createElement("div");
    corpoTag.setAttribute('id', 'corpo');

        // <!-- cabeçalho -->
        var cabecalhoTag = document.createElement("div");
        cabecalhoTag.setAttribute('id', 'cabecalho');
            //cabecalho content
            var edzinhoTag = document.createElement("input");
            edzinhoTag.setAttribute('type', 'image');
            edzinhoTag.setAttribute('name', 'edzinho');
            edzinhoTag.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/ed.png');
            edzinhoTag.setAttribute('id', 'edzinho');

            var tituloTag = document.createElement("h1");
            var conteudoTitulo = document.createTextNode("EDstension");
            tituloTag.appendChild(conteudoTitulo);

            var xizinhoTag = document.createElement("input");
            xizinhoTag.setAttribute('type', 'image');
            xizinhoTag.setAttribute('name', 'xizinho');
            xizinhoTag.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/closeBt.png');
            xizinhoTag.setAttribute('id', 'xizinho');
            xizinhoTag.setAttribute('onclick', 'fecharCorpo();');

        cabecalhoTag.appendChild(edzinhoTag);
        cabecalhoTag.appendChild(tituloTag);
        cabecalhoTag.appendChild(xizinhoTag);
        corpoTag.appendChild(cabecalhoTag);

        // <!-- campo dos botoes -->
        var conteudoTag = document.createElement("div");
        conteudoTag.setAttribute('id', 'conteudo');
            // <!-- fundo branco -->
            var fundoBrTag = document.createElement("p");
            fundoBrTag.setAttribute('id', 'bgConteudo');
            conteudoTag.appendChild(fundoBrTag);
            // <!-- /fundo branco -->
            // <!-- status -->
            var implementadoTag = document.createElement("input"); //implemented
            implementadoTag.setAttribute('type', 'image');
            implementadoTag.setAttribute('name', 'implementado');
            implementadoTag.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/impl.png');
            implementadoTag.setAttribute('id', 'implementado');
            implementadoTag.setAttribute('onclick', 'statusBtn(1);');

            var emProgressoTag = document.createElement("input"); //emProgresso
            emProgressoTag.setAttribute('type', 'image');
            emProgressoTag.setAttribute('name', 'emProgresso');
            emProgressoTag.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/inPr.png');
            emProgressoTag.setAttribute('id', 'emProgresso');
            emProgressoTag.setAttribute('onclick', 'statusBtn(2);');

            var emLigacaoTag = document.createElement("input"); //emLigacao
            emLigacaoTag.setAttribute('type', 'image');
            emLigacaoTag.setAttribute('name', 'emLigacao');
            emLigacaoTag.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/onCa.png');
            emLigacaoTag.setAttribute('id', 'emLigacao');
            emLigacaoTag.setAttribute('onclick', 'emLigacao();');

            var tentativaContatoTag = document.createElement("input"); //tentativaContato
            tentativaContatoTag.setAttribute('type', 'image');
            tentativaContatoTag.setAttribute('name', 'tentativaContato');
            tentativaContatoTag.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/atCn.png');
            tentativaContatoTag.setAttribute('id', 'tentativaContato');
            tentativaContatoTag.setAttribute('onclick', 'statusBtn(3);');

            var inativoTag = document.createElement("input"); //inativo
            inativoTag.setAttribute('type', 'image');
            inativoTag.setAttribute('name', 'inativo');
            inativoTag.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/inct.png');
            inativoTag.setAttribute('id', 'inativo');
            inativoTag.setAttribute('onclick', 'statusBtn(4);');

            conteudoTag.appendChild(implementadoTag);
            conteudoTag.appendChild(emProgressoTag);
            conteudoTag.appendChild(emLigacaoTag);
            conteudoTag.appendChild(tentativaContatoTag);
            conteudoTag.appendChild(inativoTag);
            // <!-- /status -->
            //<!-- CAIXA DE FRASES -->

            var phBox = document.createElement("select");
            phBox.setAttribute('id', 'caixadefrases');
            phBox.setAttribute('onchange', 'caixaFrases(value)');

            var optnUm = document.createElement("option");
            optnUm.setAttribute('value', 'n');
            var optnUmC = document.createTextNode("Escolha suas frases");
            optnUm.appendChild(optnUmC);
            phBox.appendChild(optnUm);

            var task = document.querySelectorAll('#tasksCase');

            for(let i = 0; i < task.length; i++){
                if(task[i].textContent == "Ads Conversion Code" || task[i].textContent == "Ads Event Tracking"){
                    var optnDois = document.createElement("option");
                    optnDois.setAttribute('value', '0');
                    var optnDoisC = document.createTextNode("GTM account was created and code was inserted in the website. ");
                    optnDois.appendChild(optnDoisC);
                    phBox.appendChild(optnDois);

                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '0');
                    var optnTresC = document.createTextNode("Conversion was created in Ads. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);

                    var optnQuatro = document.createElement("option");
                    optnQuatro.setAttribute('value', '0');
                    var optnQuatroC = document.createTextNode("Tag was created for Form Submit.  Tested with advertiser in Real time Analytics and Tag Assistant Chrome extension. ");
                    optnQuatro.appendChild(optnQuatroC);
                    phBox.appendChild(optnQuatro);

                    var optnCinco = document.createElement("option");
                    optnCinco.setAttribute('value', '0');
                    var optnCincoC = document.createTextNode( "The Gtag.js was inserted. ");
                    optnCinco.appendChild(optnCincoC);
                    phBox.appendChild(optnCinco);

                    var optnSeis = document.createElement("option");
                    optnSeis.setAttribute('value', '0');
                    var optnSeisC = document.createTextNode("Conversion was created in Ads. ");
                    optnSeis.appendChild(optnSeisC);
                    phBox.appendChild(optnSeis);

                    var optnSete = document.createElement("option");
                    optnSete.setAttribute('value', '0');
                    var optnSeteC = document.createTextNode( "I sent a event code for Form Submit. ");
                    optnSete.appendChild(optnSeteC);
                    phBox.appendChild(optnSete);

                    var optnOito = document.createElement("option");
                    optnOito.setAttribute('value', '0');
                    var optnOitoC = document.createTextNode( "Tested with advertiser in Analytics Real Time and Tag Assistant extension. ");
                    optnOito.appendChild(optnOitoC);
                    phBox.appendChild(optnOito);
                }

                else if(task[i].textContent == "Ads Remarketing" || task[i].textContent == "Google Analytics Remarketing"){
                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '0');
                    var optnTresC = document.createTextNode("GTM account was created and code was inserted in the website. Created the tag for Remarketing in GTM. Tested in Tag Assistant. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);

                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '1');
                    var optnTresC = document.createTextNode("Inserted remarketing (gtag.js) code in website's head. Tested with Tag Assistant. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);
                }

                else if(task[i].textContent == "Analytics Destination Tracking" || task[i].textContent == "Analytics Event Tracking"){
                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '0');
                    var optnTresC = document.createTextNode("GTM account was created and the code was inserted in the website. We created the tag for Google analytics page view. Created the Goal tag in Google Analytics and in Google tag Manager. Tested in Analytics Real Time, GTM Preview and Tag Assistant Chrome Exension. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);

                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '1');
                    var optnTresC = document.createTextNode("The analytics tag code was inserted in the website. Created the Goal tag in Google Analytics and inserted the code for this. Tested in Analytics Real Time and Tag Assistant Chrome Exension. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);
                }

                else if(task[i].textContent == "Cross Domain Tracking"){
                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '0');
                    var optnTresC = document.createTextNode("Ajusted the Analytics and Remarketing to receive anothers URLs datas. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);
                }

                else if(task[i].textContent == "Google Tag Manager Installation"){
                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '0');
                    var optnTresC = document.createTextNode("Created account in Google Tag Manager inserted GTM code in website. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);
                }

                else if(task[i].textContent == "Analytics E-Commerce Tracking" || task[i].textContent == "Analytics Enhanced E-Commerce Tracking"){
                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '0');
                    var optnTresC = document.createTextNode("We inserted the GTM code in the website. We set up in Google Analytics and client Google Ads to receive Ecommerce transaction information.  Set up GTM to receive information from Data Layer custom events. We tested everything with the real time analytics, preview gtm and the assistant tag. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);

                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '1');
                    var optnTresC = document.createTextNode("We inserted the analytics code in the webiste. We set up in Google Analytics and client Google Ads to receive Ecommerce transaction information. We tested everything with the analytics real time and the assistant tag. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);
                }

                else if(task[i].textContent == "Google Analytics Dynamic Remarketing (Retail)" || task[i].textContent == "Google Analytics Dynamic Remarketing (Non-Retail)"){
                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '0');
                    var optnTresC = document.createTextNode("We inserted the GTM code in the website. We set up in Google Analytics and client Google Ads to receive Dynamic Remarketing information. Set up GTM to receive information from Data Layer custom events. We tested everything with the real time analytics, preview gtm and the assistant tag. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);

                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '1');
                    var optnTresC = document.createTextNode("We inserted the analytics code in the webiste. We set up in Google Analytics and client Google Ads to receive Dynamic Remarketing information. Set up to receive information from analytics code. We tested everything with the real time analytics and the assistant tag. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);
                }

                else if(task[i].textContent == "Dynamic Remarketing - Retail" || task[i].textContent == "Dynamic Remarketing - X (Non-Retail)"){
                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '0');
                    var optnTresC = document.createTextNode("We inserted the GTM code in the website. We set up in Google Analytics and client Google Ads to receive Dynamic Remarketing information. Set up GTM to receive information from Data Layer custom events. We tested everything with the real time analytics, preview gtm and the assistant tag. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);

                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '1');
                    var optnTresC = document.createTextNode("We inserted the analytics code in the webiste. We set up in client Google Ads to receive Dynamic Remarketing information. Set up to receive information from analytics code. We tested everything with the real time analytics and the assistant tag. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);
                }
                
                else if(task[i].textContent == "Google Shopping Setup"){
                    var optnTres = document.createElement("option");
                    optnTres.setAttribute('value', '0');
                    var optnTresC = document.createTextNode("Create the account in Google Merchant Center. Created the product feed with costumer products Linked Google MC with Google Ads. We will wait the products approbation. ");
                    optnTres.appendChild(optnTresC);
                    phBox.appendChild(optnTres);
                }
            }

            conteudoTag.appendChild(phBox);

            //<!-- /caixa de frases -->
            //<!-- div das bolinhas -->
            var bolinhasTag = document.createElement("div");
            bolinhasTag.setAttribute('id', 'bolinhas');

                var bolinhaUm = document.createElement("button");
                bolinhaUm.setAttribute('type', 'button');
                bolinhaUm.setAttribute('id', 'bola0');
                bolinhaUm.setAttribute('onclick', 'clearBtn(0)');
                var bolinhaUmC = document.createTextNode("n");
                bolinhaUm.appendChild(bolinhaUmC);

                var bolinhaDois = document.createElement("button");
                bolinhaDois.setAttribute('type', 'button');
                bolinhaDois.setAttribute('id', 'bola1');
                bolinhaDois.setAttribute('onclick', 'clearBtn(1)');
                var bolinhaDoisC = document.createTextNode("n");
                bolinhaDois.appendChild(bolinhaDoisC);

                var bolinhaTres = document.createElement("button");
                bolinhaTres.setAttribute('type', 'button');
                bolinhaTres.setAttribute('id', 'bola2');
                bolinhaTres.setAttribute('onclick', 'clearBtn(2)');
                var bolinhaTresC = document.createTextNode("n");
                bolinhaTres.appendChild(bolinhaTresC);

                var bolinhaQuatro = document.createElement("button");
                bolinhaQuatro.setAttribute('type', 'button');
                bolinhaQuatro.setAttribute('id', 'bola3');
                bolinhaQuatro.setAttribute('onclick', 'clearBtn(3)');
                var bolinhaQuatroC = document.createTextNode("n");
                bolinhaQuatro.appendChild(bolinhaQuatroC);

                var bolinhaCinco = document.createElement("button");
                bolinhaCinco.setAttribute('type', 'button');
                bolinhaCinco.setAttribute('id', 'bola4');
                bolinhaCinco.setAttribute('onclick', 'clearBtn(4)');
                var bolinhaCincoC = document.createTextNode("n");
                bolinhaCinco.appendChild(bolinhaCincoC);

                var bolinhaSeis = document.createElement("button");
                bolinhaSeis.setAttribute('type', 'button');
                bolinhaSeis.setAttribute('id', 'bola5');
                bolinhaSeis.setAttribute('onclick', 'clearBtn(5)');
                var bolinhaSeisC = document.createTextNode("n");
                bolinhaSeis.appendChild(bolinhaSeisC);

                var bolinhaSete = document.createElement("button");
                bolinhaSete.setAttribute('type', 'button');
                bolinhaSete.setAttribute('id', 'bola6');
                bolinhaSete.setAttribute('onclick', 'clearBtn(6)');
                var bolinhaSeteC = document.createTextNode("n");
                bolinhaSete.appendChild(bolinhaSeteC);

            bolinhasTag.appendChild(bolinhaUm);
            bolinhasTag.appendChild(bolinhaDois);
            bolinhasTag.appendChild(bolinhaTres);
            bolinhasTag.appendChild(bolinhaQuatro);
            bolinhasTag.appendChild(bolinhaCinco);
            bolinhasTag.appendChild(bolinhaSeis);
            bolinhasTag.appendChild(bolinhaSete);

            conteudoTag.appendChild(bolinhasTag);
            //<!-- /div das bolinhas -->
        corpoTag.appendChild(conteudoTag);
        // <!-- /campo dos botoes -->
        // <!-- fogo no buraco -->
        var fogonoburacoTag = document.createElement("button");
        fogonoburacoTag.setAttribute('type', 'button');
        fogonoburacoTag.setAttribute('id', 'fogonoburaco');
        fogonoburacoTag.setAttribute('onclick', 'fogoNoBuraco()');
        var fogonoburacoTagC = document.createTextNode("FIRE IN THE HOLE!");
        fogonoburacoTag.appendChild(fogonoburacoTagC);

        corpoTag.appendChild(fogonoburacoTag);
        // <!-- /fogo no buraco -->
        //<!-- botão bl do corpo principal -->
        var leadmauTag = document.createElement("input");
        leadmauTag.setAttribute('type', 'image');
        leadmauTag.setAttribute('name', 'bl');
        leadmauTag.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/BL.png');
        leadmauTag.setAttribute('id', 'leadmau');
        leadmauTag.setAttribute('onclick', 'menuBL();');

        corpoTag.appendChild(leadmauTag);
        //<!-- /botão bl do corpo principal -->
    document.body.appendChild(corpoTag);
    // <!-- /main div -->
    //<!-- blMenu -->
    var bLBGTag = document.createElement("div");
    bLBGTag.setAttribute('id', 'bLBG');
        //<!-- botão bl do blMenu -->
        var leadmau2Tag = document.createElement("input");
        leadmau2Tag.setAttribute('type', 'image');
        leadmau2Tag.setAttribute('name', 'leadmau2');
        leadmau2Tag.setAttribute('src', 'https://dantase.sandbox.msiteproject.com/EDstension/images/BL.png');
        leadmau2Tag.setAttribute('id', 'leadmau2');
        leadmau2Tag.setAttribute('onclick', 'menuBL();');

        bLBGTag.appendChild(leadmau2Tag);
        //<!-- /botão bl do blMenu -->
        //<!-- botões de bl -->
        var botoesBl1 = document.createElement("button");
        botoesBl1.setAttribute('type', 'button');
        botoesBl1.setAttribute('id', 'bl0');
        botoesBl1.setAttribute('value', '0');
        botoesBl1.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl1C = document.createTextNode("Informações de contato erradas");
        botoesBl1.appendChild(botoesBl1C);
        bLBGTag.appendChild(botoesBl1);

        var botoesBl2 = document.createElement("button");
        botoesBl2.setAttribute('type', 'button');
        botoesBl2.setAttribute('id', 'bl1');
        botoesBl2.setAttribute('value', '1');
        botoesBl2.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl2C = document.createTextNode("Informações de contato ausentes");
        botoesBl2.appendChild(botoesBl2C);
        bLBGTag.appendChild(botoesBl2);

        var botoesBl3 = document.createElement("button");
        botoesBl3.setAttribute('type', 'button');
        botoesBl3.setAttribute('id', 'bl2');
        botoesBl3.setAttribute('value', '2');
        botoesBl3.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl3C = document.createTextNode("Task incorreta");
        botoesBl3.appendChild(botoesBl3C);
        bLBGTag.appendChild(botoesBl3);

        var botoesBl4 = document.createElement("button");
        botoesBl4.setAttribute('type', 'button');
        botoesBl4.setAttribute('id', 'bl3');
        botoesBl4.setAttribute('value', '3');
        botoesBl4.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl4C = document.createTextNode("Cliente não estava ciente da consultoria");
        botoesBl4.appendChild(botoesBl4C);
        bLBGTag.appendChild(botoesBl4);

        var botoesBl5 = document.createElement("button");
        botoesBl5.setAttribute('type', 'button');
        botoesBl5.setAttribute('id', 'bl4');
        botoesBl5.setAttribute('value', '4');
        botoesBl5.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl5C = document.createTextNode("URL incorreta");
        botoesBl5.appendChild(botoesBl5C);
        bLBGTag.appendChild(botoesBl5);

        var botoesBl6 = document.createElement("button");
        botoesBl6.setAttribute('type', 'button');
        botoesBl6.setAttribute('id', 'bl5');
        botoesBl6.setAttribute('value', '5');
        botoesBl6.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl6C = document.createTextNode("URL ausente");
        botoesBl6.appendChild(botoesBl6C);
        bLBGTag.appendChild(botoesBl6);

        var botoesBl7 = document.createElement("button");
        botoesBl7.setAttribute('type', 'button');
        botoesBl7.setAttribute('id', 'bl6');
        botoesBl7.setAttribute('value', '6');
        botoesBl7.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl7C = document.createTextNode("Nome do cliente errado");
        botoesBl7.appendChild(botoesBl7C);
        bLBGTag.appendChild(botoesBl7);

        var botoesBl8 = document.createElement("button");
        botoesBl8.setAttribute('type', 'button');
        botoesBl8.setAttribute('id', 'bl7');
        botoesBl8.setAttribute('value', '7');
        botoesBl8.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl8C = document.createTextNode("Cliente não está interessado na consultoria");
        botoesBl8.appendChild(botoesBl8C);
        bLBGTag.appendChild(botoesBl8);

        var botoesBl9 = document.createElement("button");
        botoesBl9.setAttribute('type', 'button');
        botoesBl9.setAttribute('id', 'bl8');
        botoesBl9.setAttribute('value', '8');
        botoesBl9.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl9C = document.createTextNode("Cliente não possui acessos administrativos");
        botoesBl9.appendChild(botoesBl9C);
        bLBGTag.appendChild(botoesBl9);

        var botoesBl10 = document.createElement("button");
        botoesBl10.setAttribute('type', 'button');
        botoesBl10.setAttribute('id', 'bl9');
        botoesBl10.setAttribute('value', '9');
        botoesBl10.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl10C = document.createTextNode("Task sem detalhes necessários para a implementação");
        botoesBl10.appendChild(botoesBl10C);
        bLBGTag.appendChild(botoesBl10);

        var botoesBl11 = document.createElement("button");
        botoesBl11.setAttribute('type', 'button');
        botoesBl1.setAttribute('id', 'bl10');
        botoesBl11.setAttribute('value', '10');
        botoesBl1.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl11C = document.createTextNode("Conta suspensa por política");
        botoesBl11.appendChild(botoesBl11C);
        bLBGTag.appendChild(botoesBl11);

        var botoesBl12 = document.createElement("button");
        botoesBl12.setAttribute('type', 'button');
        botoesBl12.setAttribute('id', 'bl11');
        botoesBl12.setAttribute('value', '11');
        botoesBl12.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl12C = document.createTextNode("CID Errado");
        botoesBl12.appendChild(botoesBl12C);
        bLBGTag.appendChild(botoesBl12);

        var botoesBl13 = document.createElement("button");
        botoesBl13.setAttribute('type', 'button');
        botoesBl13.setAttribute('id', 'bl12');
        botoesBl13.setAttribute('value', '12');
        botoesBl13.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl13C = document.createTextNode("Pedido fora de escopo");
        botoesBl13.appendChild(botoesBl13C);
        bLBGTag.appendChild(botoesBl13);

        var botoesBl14 = document.createElement("button");
        botoesBl14.setAttribute('type', 'button');
        botoesBl14.setAttribute('id', 'bl13');
        botoesBl14.setAttribute('value', '13');
        botoesBl14.setAttribute('onclick', 'blAtrb(value);');
        var botoesBl14C = document.createTextNode("AM não explicou a importância da nossa consultoria");
        botoesBl14.appendChild(botoesBl14C);
        bLBGTag.appendChild(botoesBl14);

        bLBGTag.appendChild(botoesBl1);
        bLBGTag.appendChild(botoesBl2);
        bLBGTag.appendChild(botoesBl3);
        bLBGTag.appendChild(botoesBl4);
        bLBGTag.appendChild(botoesBl5);
        bLBGTag.appendChild(botoesBl6);
        bLBGTag.appendChild(botoesBl7);
        bLBGTag.appendChild(botoesBl8);
        bLBGTag.appendChild(botoesBl9);
        bLBGTag.appendChild(botoesBl10);
        bLBGTag.appendChild(botoesBl11);
        bLBGTag.appendChild(botoesBl12);
        bLBGTag.appendChild(botoesBl13);
        bLBGTag.appendChild(botoesBl14);
        //<!-- /botões de bl -->

    document.body.appendChild(bLBGTag);
    //<!-- blMenu -->

// /!!!HTML BUILD!!! //
        function atrVal(){
            //atribuição de valor e adicionando valores aos opts
            var options = document.querySelectorAll("#caixadefrases option");
            if(options){
                for (let i = 0; i < options.length; i++) {
                    window.optTxt[i] = options[i].textContent;
                    if(i < 10 && options[i].value != "n"){
                        options[i].textContent = "0" + i + " - " + options[i].textContent;
                    }
                    else if(options[i].value != "n") {options[i].textContent = i + " - " + options[i].textContent;}
                    options[i].value = i;
                }
            }else{
                setTimeout(atrVal,1000);
            }
        }
        setTimeout(atrVal,1000);

var cmsED = 32;
var scshED = 1;
var cnftED = 1;

var bola0 = {objeto: document.getElementById('bola0'), ativa: false, conteudo: ''};
var bola1 = {objeto: document.getElementById('bola1'), ativa: false, conteudo: ''};
var bola2 = {objeto: document.getElementById('bola2'), ativa: false, conteudo: ''};
var bola3 = {objeto: document.getElementById('bola3'), ativa: false, conteudo: ''};
var bola4 = {objeto: document.getElementById('bola4'), ativa: false, conteudo: ''};
var bola5 = {objeto: document.getElementById('bola5'), ativa: false, conteudo: ''};
var bola6 = {objeto: document.getElementById('bola6'), ativa: false, conteudo: ''};

var bolas = [bola0, bola1, bola2, bola3, bola4, bola5, bola6];

var conteudoComentario = "";

var btnAct;

// botao on call
function emLigacao(){
    //click no campo de status
    setTimeout(function(){document.getElementById('cas7_ileinner').click();}, 300);
    //seleção de status
    setTimeout(function(){document.getElementById('cas7').selectedIndex = 0;}, 1300);
    //clique no botão de ok da janelinha de seleção
    setTimeout(function(){document.getElementById('cas7').selectedIndex = 0;}, 1400);
    //clique em save
    //document.querySelector('#topButtonRow > input:nth-child(1)').click();
};

//Status de botão ativo
function statusBtn(btnNbr){
    btnAct = btnNbr

    switch(btnNbr) {
        case 1:
            document.getElementById('implementado').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/implA.png';
            document.getElementById('emProgresso').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inPr.png';
            document.getElementById('tentativaContato').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/atCn.png';
            document.getElementById('inativo').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inct.png';
        break;
        case 2:
            document.getElementById('implementado').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/impl.png';
            document.getElementById('emProgresso').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inPrA.png';
            document.getElementById('tentativaContato').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/atCn.png';
            document.getElementById('inativo').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inct.png';
        break;
        case 3:
            document.getElementById('implementado').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/impl.png';
            document.getElementById('emProgresso').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inPr.png';
            document.getElementById('tentativaContato').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/atCnA.png';
            document.getElementById('inativo').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inct.png';
        break;
        case 4:
            document.getElementById('implementado').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/impl.png';
            document.getElementById('emProgresso').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inPr.png';
            document.getElementById('tentativaContato').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/atCn.png';
            document.getElementById('inativo').src = 'https://dantase.sandbox.msiteproject.com/EDstension/images/inctA.png';
        break;
        default:
        // code block
    };
}

// botao implemented
function implementado(){
    //click no campo de status
    setTimeout(function(){document.getElementById('cas7_ileinner').click();}, 300);
    //seleção de status
    setTimeout(function(){document.getElementById('cas7').selectedIndex = 4;}, 1000);
    //clique no botão de ok da janelinha de seleção
    setTimeout(function(){document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click();}, 1250);
    //click no campo de calendario
    setTimeout(function(){document.getElementById('00N3600000QIS9O_ileinner').click();}, 1300);
    setTimeout(function(){document.getElementById('00N3600000QIS9O').click();}, 1400);
    //click no campo de seleção da data de hoje
    setTimeout(function(){document.querySelector('#datePicker > div.calBody > div > a').click();}, 1500);
    //click no campo campanha criada
    setTimeout(function(){document.getElementById('00N3600000QIS8U_ileinner').click();}, 1600);
    //seleção de status
    setTimeout(function(){document.getElementById('00N3600000QIS8U').selectedIndex = 1;}, 1700);
    //click no campo de cms
    setTimeout(function(){document.getElementById('00N3600000QISC9_ileinner').click();}, 1800);
    //seleção de cms
    setTimeout(function(){document.getElementById('00N3600000QISC9').selectedIndex = cmsED;}, 1900);
    //click no screenshare
    setTimeout(function(){document.getElementById('00N3600000QISDL_ileinner').click();}, 2000);
    //seleção screenshare
    setTimeout(function(){document.getElementById('00N3600000QISDL').selectedIndex = scshED;}, 2100);
    //click no mouse control
    setTimeout(function(){document.getElementById('00N3600000QISBa_ileinner').click();}, 2200);
    //seleção mouse control
    setTimeout(function(){document.getElementById('00N3600000QISBa').selectedIndex = 2;}, 2300);
    //click no ads CID
    setTimeout(function(){document.getElementById('00N3600000QIS7x_ileinner').click();}, 2400);
    //seleção ads CID
    setTimeout(function(){document.getElementById('00N3600000QIS7x').selectedIndex = 2;}, 2500);
    //click no confirmation
    setTimeout(function(){document.getElementById('00N3600000SMHzO_ileinner').click();}, 2600);
    //seleção do confirmation
    setTimeout(function(){document.getElementById('00N3600000SMHzO').selectedIndex = cnftED;}, 2700);
    //click call transfered
    setTimeout(function(){document.getElementById('00N3600000TPihX_ileinner').click();}, 2800);
    //seleção call transfered
    setTimeout(function(){document.getElementById('00N3600000TPihX').selectedIndex = 1;}, 2900);
    //click call transfered
    setTimeout(function(){document.getElementById('00N3600000TPihW_ileinner').click();}, 3000);
    //seleção call transfered
    setTimeout(function(){document.getElementById('00N3600000TPihW').selectedIndex = 2;}, 3100);
};

// botao em progresso
function emProgresso(){
    //click no campo de status
    setTimeout(function(){document.getElementById('cas7_ileinner').click();}, 300);
    //seleção de status
    setTimeout(function(){$('#cas7').val("In progress").change();}, 1300);
    //seleção de sub status
    setTimeout(function(){document.getElementById('00N3600000QISAX').selectedIndex = 1;}, 1400);
    //clique no botão de ok da janelinha de seleção
    setTimeout(function(){document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click();}, 1500);
    //click no campo campanha criada
    setTimeout(function(){document.getElementById('00N3600000QIS8U_ileinner').click();}, 1600);
    //seleção campo campanha criada
    setTimeout(function(){document.getElementById('00N3600000QIS8U').selectedIndex = 1;}, 1700);
    //click no campo de cms
    setTimeout(function(){document.getElementById('00N3600000QISC9_ileinner').click();}, 1800);
    //seleção de cms
    setTimeout(function(){document.getElementById('00N3600000QISC9').selectedIndex = cmsED;}, 1900);
    //click no mouse control
    setTimeout(function(){document.getElementById('00N3600000QISBa_ileinner').click();}, 2000);
    //seleção mouse control
    setTimeout(function(){document.getElementById('00N3600000QISBa').selectedIndex = 2;}, 2100);
    //click no ads CID
    setTimeout(function(){document.getElementById('00N3600000QIS7x_ileinner').click();}, 2200);
    //seleção ads CID
    setTimeout(function(){document.getElementById('00N3600000QIS7x').selectedIndex = 2;}, 2300);
    //click no confirmation
    setTimeout(function(){document.getElementById('00N3600000SMHzO_ileinner').click();}, 2400);
    //seleção do confirmation
    setTimeout(function(){document.getElementById('00N3600000SMHzO').selectedIndex = cnftED;}, 2500);
};

// botao em att cont
function tentativaContato(){
    //click no campo de status
    setTimeout(function(){document.getElementById('cas7_ileinner').click();}, 300);
    //seleção de status
    setTimeout(function(){$('#cas7').val("Attempting Contact").change();}, 1300);
    //seleção de sub status
    setTimeout(function(){document.getElementById('00N3600000QISAX').selectedIndex = 7;}, 1400);
    //clique no botão de ok da janelinha de seleção
    setTimeout(function(){document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click();}, 1500);
    //click no campo campanha criada
    setTimeout(function(){document.getElementById('00N3600000QIS8U_ileinner').click();}, 1600);
    //seleção campo campanha criada
    setTimeout(function(){document.getElementById('00N3600000QIS8U').selectedIndex = 1;}, 1700);
    //click no campo de cms
    setTimeout(function(){document.getElementById('00N3600000QISC9_ileinner').click();}, 1800);
    //seleção de cms
    setTimeout(function(){document.getElementById('00N3600000QISC9').selectedIndex = cmsED;}, 1900);
    //click no mouse control
    setTimeout(function(){document.getElementById('00N3600000QISBa_ileinner').click();}, 2000);
    //seleção mouse control
    setTimeout(function(){document.getElementById('00N3600000QISBa').selectedIndex = 2;}, 2100);
    //click no ads CID
    setTimeout(function(){document.getElementById('00N3600000QIS7x_ileinner').click();}, 2200);
    //seleção ads CID
    setTimeout(function(){document.getElementById('00N3600000QIS7x').selectedIndex = 2;}, 2300);
    //click no confirmation
    setTimeout(function(){document.getElementById('00N3600000SMHzO_ileinner').click();}, 2400);
    //seleção do confirmation
    setTimeout(function(){document.getElementById('00N3600000SMHzO').selectedIndex = cnftED;}, 2500);
};

// botao em inativo
function inativo(){
    //click no campo de status
    setTimeout(function(){document.getElementById('cas7_ileinner').click();}, 300);
    //seleção de status
    setTimeout(function(){$('#cas7').val("Inactive").change();}, 1300);
    //seleção de sub status
    setTimeout(function(){document.getElementById('00N3600000QISAX').selectedIndex = 5;}, 1400);
    //click no campo de calendario
    setTimeout(function(){document.getElementById('00N3600000QIS9Q_ileinner').click();}, 1500);
    //click no campo de seleção da data de hoje
    setTimeout(function(){document.querySelector('#datePicker > div.calBody > div > a').click();}, 1600);
    //clique no botão de ok da janelinha de seleção
    setTimeout(function(){document.querySelector('#InlineEditDialog_buttons > input:nth-child(1)').click();}, 1700);
    //click no campo campanha criada
    setTimeout(function(){document.getElementById('00N3600000QIS8U_ileinner').click();}, 1800);
    //seleção campo campanha criada
    setTimeout(function(){document.getElementById('00N3600000QIS8U').selectedIndex = 1;}, 1900);
    //click no campo de cms
    setTimeout(function(){document.getElementById('00N3600000QISC9_ileinner').click();}, 2000);
    //seleção de cms
    setTimeout(function(){document.getElementById('00N3600000QISC9').selectedIndex = cmsED;}, 2100);
    //click no mouse control
    setTimeout(function(){document.getElementById('00N3600000QISBa_ileinner').click();}, 2200);
    //seleção mouse control
    setTimeout(function(){document.getElementById('00N3600000QISBa').selectedIndex = 2;}, 2300);
    //click no ads CID
    setTimeout(function(){document.getElementById('00N3600000QIS7x_ileinner').click();}, 2400);
    //seleção ads CID
    setTimeout(function(){document.getElementById('00N3600000QIS7x').selectedIndex = 2;}, 2500);
    //click no confirmation
    setTimeout(function(){document.getElementById('00N3600000SMHzO_ileinner').click();}, 2600);
    //seleção do confirmation
    setTimeout(function(){document.getElementById('00N3600000SMHzO').selectedIndex = cnftED;}, 2700);
};

// seleção de frases
function caixaFrases(idED){
    for (let i = 0; i < bolas.length; i++) {
        if(bolas[i].ativa == false){
            if (idED == "n") {
                break;
            };
            bolas[i].ativa = true;
            bolas[i].objeto.style.backgroundColor = "rgb(65, 230, 147)";
            bolas[i].objeto.textContent = idED;
            /*switch(idED) {
                case "0":
                    bolas[i].conteudo = 'conversions created and imported to ads. ';
                break;
                case "1":
                    bolas[i].conteudo = 'Implemented. ';
                break;
                case "2":
                    bolas[i].conteudo = 'we did half of the task, and will complete the other half in the next call. ';
                break;
                case "3":
                    bolas[i].conteudo = 'testetesteteste ';
                break;
                default:
                // code block
            };
            break;*/
            //atribuição de texto de comentario
            bolas[i].conteudo = window.optTxt[idED];
            break;
        };
    };
};

//clear no btn de frases
function clearBtn(i){
    bolas[i].conteudo = '';
    bolas[i].ativa = false;
    bolas[i].objeto.style.backgroundColor = "white";
    bolas[i].objeto.textContent = "n";
}

//Fire in the hole
function fogoNoBuraco(){
    for (let i = 0; i < bolas.length; i++) {
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
    }

    switch(btnAct) {
        case 1:
            implementado();
        break;
        case 2:
            emProgresso();
        break;
        case 3:
            tentativaContato();
        break;
        case 4:
            inativo();
        break;
        default:
        // code block
    };

    //setTimeout(salvar, 2000);
};

////clique em save
function salvar(){
    //botão save
    document.querySelector('#topButtonRow > input:nth-child(1)').click();
}

function abrirCorpo(){
    document.getElementById('miniED').style.visibility = 'hidden';
    document.getElementById('corpo').style.visibility = 'visible';
}

function fecharCorpo(){
    document.getElementById('corpo').style.visibility = 'hidden';
    document.getElementById('miniED').style.visibility = 'visible';

    //fechar bad lead também
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
    document.getElementById('leadmau').disabled = false;
}

//menu bad lead
function menuBL(){
    const bgbl = document.getElementById('bLBG').style;
    const iconeBgbl = document.getElementById('leadmau').style;
    if (bgbl.opacity == 0) {
        bgbl.opacity = 1;
        bgbl.right = '294px';
        bgbl.zIndex = 3;
        iconeBgbl.opacity = 0;
        document.getElementById('leadmau').onmouseover = function()
        {
            this.style.opacity = 0;
        }
        document.getElementById('leadmau').onmouseout = function()
        {
            this.style.opacity = 0;
        }
        document.getElementById('leadmau').disabled = true;
    }
    else{
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
        document.getElementById('leadmau').disabled = false;
    }
};

//atribuição de bad lead ao campo vendor chat
function blAtrb(id){
    var conteudo = "BAD LEAD - ";;

    //click no vendor chat coments
    document.getElementById('00N3600000QISE6_ileinner').click();

    switch(id) {
        case "0":
            conteudo = "BAD LEAD - Wrong contact information";
            break;
        case "1":
                conteudo = "BAD LEAD - Missing contact information";
            break;
        case "2":
                conteudo = "BAD LEAD - Wrong task";
            break;
        case "3":
                conteudo = "BAD LEAD - Client wasn't aware of the appointment";
            break;
        case "4":
                conteudo = "BAD LEAD - Wrong URL";
            break;
        case "5":
                conteudo = "BAD LEAD - URL not provided";
            break;
        case "6":
                conteudo = "BAD LEAD - Wrong client's name";
            break;
        case "7":
                conteudo = "BAD LEAD - Client is not interested";
            break;
        case "8":
                conteudo = "BAD LEAD - No admin access";
            break;
        case "9":
                conteudo = "BAD LEAD - Task without details/instructions";
            break;
        case "10":
                conteudo = "BAD LEAD - Account suspended";
            break;
        case "11":
                conteudo = "BAD LEAD - Wrong CID";
            break;
        case "12":
                conteudo = "BAD LEAD - Solicitation Out of Scope";
            break;
        case "13":
                conteudo = "BAD LEAD - Account manager didn't explain the importance of the service";
            break;
        default:
                conteudo = "BAD LEAD - ";
      }

    //atribuição no vendor chat coments textbox
    document.getElementById('00N3600000QISE6').value = conteudo;
}
