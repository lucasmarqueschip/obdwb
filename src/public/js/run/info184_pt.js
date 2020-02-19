//Capa
nomeCarga = "Geração de chaves Fiat Code 2 Painel Marelli Tipo 2";
revCarga = "Rev. 4";
dataManual = "Janeiro 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`É necessária a leitura completa desse manual antes de utilizar a carga.`,
`Geração e programação de até 5 transponders em veículos que utilizam sistema Code 2 com painel Magneti Marelli Tipo 2, como mostrado na Página 13.`,
`Esta função é feita via pinça e utiliza o Módulo de Transponder conectado ao OBDMap.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Uno 1.0 EVO",
years: "2013 a 2014"
},
{
manufacturer: "Fiat",
model: "Uno 1.4 EVO",
years: "2013 a 2014"
},
{
manufacturer: "Fiat",
model: "Fiorino 1.4 EVO",
years: "2014 a "
},
];
applicationObs = createObs("Observação: Esses mesmos veículos podem ter Painel Continental, consultar carga Painel Continental via diagnose do OBDmapou desmontar e verificar se o hardware é igual ao mostrado na Página XX.", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder Megamos ID48 NOVO! <br />Se não for utilizado um<br />transponder novo o<br />procedimento pode não ser<br />bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "Passos para desmontar o painel:", 
description: "", 
ballon: "Passo 1: Remover o rádio do veículo.<br />Remova osRemova o rádio.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Passos para desmontar o painel.jpg"},

{title: "", 
description: "", 
ballon: "Remova os conectores do rádio.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Removendo os conectores.jpg"},

{title: "", 
description: "", 
ballon: "Remova a gaveta do rádio.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Removendo a gaveta.jpg"},

{title: "", 
description: "", 
ballon: "Remova os dois parafusos fixadores.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Removendo a gaveta 2.jpg"},

{title: "", 
description: "", 
ballon: "Passo 2: Remover os difusores de ar do veículo.<br />Existem quatro travas em cada difusor de ar, as setas indicam onde fica cada trava.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover os difusores de ar do veículo.jpg"},

{title: "", 
description: "", 
ballon: "Remova os dois difusores de ar do veículo.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover os difusores de ar do veículo 2.jpg"},

{title: "", 
description: "", 
ballon: "Passo 3: Remover os dutos de ar do veículo.<br />Depois de removido os difusores de ar, remova os dutos de ar.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover os dutos de ar do veículo.jpg"},

{title: "", 
description: "", 
ballon: "Faça a alavanca nos pontos indicados, forçando o duto de ar para fora até que desprenda do painel.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover os dutos de ar do veículo 2.jpg"},

{title: "", 
description: "", 
ballon: "Posição dos parafusos que fixam o console.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover os dutos de ar do veículo 4.jpg"},

{title: "", 
description: "", 
ballon: "Remova os dois parafusos fixadores.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover os dutos de ar do veículo 5.jpg"},

{title: "", 
description: "", 
ballon: "Passo 4: Remover a capa protetora da coluna de direção.<br />Remova os três parafusos fixadores.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover 3 parafusos.jpg"},

{title: "", 
description: "", 
ballon: "Remova a parte inferior da capa protetora.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover parte inferior do painel.jpg"},

{title: "", 
description: "", 
ballon: "Removas os dois parafusos fixadores. Neste caso os parafusos ficam em um lugar de difícil visualização.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover parte inferior 2.jpg"},

{title: "", 
description: "", 
ballon: "Remova a parte superior da capa protetora.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover parte superior.jpg"},

{title: "", 
description: "", 
ballon: "Remova o único parafuso que fica na parte superior do painel.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover o unico parafuso.jpg"},

{title: "", 
description: "", 
ballon: "Passo 5: Remover a moldura do painel do veículo.<br />Depois de todos os parafusos fixadores já removidos, retirar a moldura do painel com as mãos, a moldura está fixa por travas.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover a moldura do painel.jpg"},

{title: "", 
description: "", 
ballon: "Moldura do painel removida.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover a moldura do painel 2.jpg"},

{title: "", 
description: "", 
ballon: "Passo 6: Remover o painel do veículo.<br />Remova os dois parafusos fixadores do painel.", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Remover a moldura do painel 3.jpg"},

{title: "Identificando os painéis", 
description: "", 
ballon: "Modelo 1: Sem ponteiro ECO", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Identificando os painéis Sem ponteiro ECO.jpg"},

{title: "", 
description: "", 
ballon: "Modelo 2: Com ponteiro ECO", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Identificando os painéis Com ponteiro ECO.jpg"},

{title: "Localizando a memória 95160", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0184 Geração de chaves Fiat Code 2 Painel Marelli Tipo 2/Localizando a memória 95160.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a geração de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>FIAT`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`FIAT`, `>Code 2 Fase 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Code 2 Fase 3`, `>Painel MM T2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel MM T2`, `>Gerar TPD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`&nbsp;Painel&nbsp;Lotado!`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave&nbsp;ja&nbsp;esta`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;programada!`,
`<br />`,
],
help: ``
},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinca`,
`na&nbsp;memoria&nbsp;95160&nbsp;`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Conecte a pinça na memória. Tecle
OK.`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Aguarde.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;PIN:&nbsp;*****`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Embora o código eletrônico não seja
necessário neste procedimento,
aconselha-se anotá-lo.`
},
{lines: [
`&nbsp;`,
`Chaves&nbsp;Prog.&nbsp;*/5&nbsp;`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra a quantidade de chaves ja programadas. Tecle OK!`
},
{lines: [
`Deseja&nbsp;manter&nbsp;as`,
`&nbsp;&nbsp;&nbsp;chaves&nbsp;ja`,
`&nbsp;&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Se deseja manter as chaves antigas tecle
OK e vá para o passo 13. Se deseja
apagar as chaves já programadas tecle (X)VOLTA.`
},
{lines: [
`&nbsp;Quer&nbsp;realmente`,
`apagar&nbsp;as&nbsp;chaves`,
`ja&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Se deseja realmente apagar as chaves já
programadas tecle OK. Se deseja manter
as chaves já programadas tecle (X)
VOLTA e vá para o passo 13.`
},
{lines: [
`&nbsp;`,
`Apagando&nbsp;Chaves!`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: `Aguarde enquanto o OBDMap apaga as chaves antigas do veículo.`
},
{lines: [
`&nbsp;Insira&nbsp;Transp.&nbsp;&nbsp;`,
`ID48&nbsp;virgem&nbsp;no`,
`&nbsp;modulo&nbsp;e&nbsp;tecle`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Posicione o transponder no módulo de
transponder e tecle OK.`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Aguarde enquanto o OBDMAP dedica o
transponder, NÃO o retire até que termine
o procedimento.`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;Painel.&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: `Gravando chave no Painel. Aguarde!`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Painel Invalido!`,
screens: [
`&nbsp;`,
`Painel&nbsp;Invalido!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,]
},

{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder Megamos ID48 virgem.`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é um Megamos ID48 Virgem.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Verifique o transponder que está sendo utilizado,`,`Pode-se utilizar a carga básica do módulo de transponder para identificar o transponder.`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
