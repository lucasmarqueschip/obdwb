//Capa
nomeCarga = `Manual Carga -  OBD0064<br />Imobilizador Delphi 93LC56 Code 2 (chaves)`;
revCarga = `Rev. 3`;
dataManual = `Julho 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar e adicionar chaves automaticamente ao imobilizador.`,
`<obs>`,
`Observações: `,
`- Podem ser programadas no máximo 8 chaves. `,
`- Para realizar este procedimento é necessário retirar o imobilizador do veículo e levar para bancada.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Citroen`,
model: `Jumper 2.0`,
years: `1999 a `
},
{
manufacturer: `Citroen`,
model: `Jumper 2.2`,
years: `2002 a `
},
{
manufacturer: `Citroen`,
model: `Jumper 2.8`,
years: `2001 a `
},
{
manufacturer: `Fiat`,
model: `Ducato 1.8`,
years: `2001 a 2008`
},
{
manufacturer: `Fiat`,
model: `Ducato 2.8`,
years: `2001 a 2008`
},
{
manufacturer: `Peugeot`,
model: `Boxer 2.0`,
years: `2001 a 2011`
},
{
manufacturer: `Peugeot`,
model: `Boxer 2.8`,
years: `2001 a 2011`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `O Transponder utilizado é o Megamos Crypto 48, tratado neste manual por T48.`, 
image: `/images/Transponders/Megamus T48.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg`},

{title: `Identificando e desmontando o imobilizador`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0064 Ducato Cx Delph vans/Identificando o imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: `Abra a caixa do imobilizador para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0064 Ducato Cx Delph vans/Desmontando o imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda com a ponta fina para remover os pinos fixadores.`, 
image: `/images/Funções Específicas/OBD0064 Ducato Cx Delph vans/Retirando os pinos fixadores 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Placa do imobilizador solta da caixa.`, 
image: `/images/Funções Específicas/OBD0064 Ducato Cx Delph vans/Retirando os pinos fixadores 2.jpg`},

{title: `Identificando a memória 93LC56B:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0064 Ducato Cx Delph vans/Identificando a memória 93LC56B.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU: <br />1 => Fio Azul <br />2 => Fio Verde <br />3 => Fio Roxo <br />4 => Fio Vermelho <br />5 => Fio Preto<br />6 => Fio Cinza`, 
image: `/images/Funções Específicas/OBD0064 Ducato Cx Delph vans/Localizando os pontos para soldagem.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: <br />Não trocar as posições dos fios. Primeiro solde os fios no imobilizador, depois ligue o cabo MCU no OBDMAP. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o imobilizador e assim evitando danos ao imobilizador e ao OBDMAP.`, 
image: `/images/Funções Específicas/OBD0064 Ducato Cx Delph vans/Soldando o cabo MCU no imobilizador.jpg`},

{title: `Conectando os acessórios`, 
description: ``, 
ballon: `1º: Conecte o módulo de transponder no OBDMAP.`, 
image: `/images/Funções Específicas/OBD0064 Ducato Cx Delph vans/Conectando os Acessórios/1.jpg`},

{title: ``, 
description: ``, 
ballon: `2º: Conecte o cabo MCU com o imobilizador no OBDMAP.`, 
image: `/images/Funções Específicas/OBD0064 Ducato Cx Delph vans/Conectando os Acessórios/2.jpg`},

{title: ``, 
description: ``, 
ballon: `3º: Conecte a fonte de alimentação no módulo de transponder.`, 
image: `/images/Funções Específicas/OBD0064 Ducato Cx Delph vans/Conectando os Acessórios/3.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = false;
services = 
[
{title: `Realizando a Geração de Chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Ducato`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob Delphi`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;o&nbsp;imobilizador`,
`através&nbsp;do`,
`adaptador&nbsp;MCU`,
`segundo&nbsp;o&nbsp;manual`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`PIN:&nbsp;*****`,
`OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Anote o PIN e tecle OK!`
},
{lines: [
`&nbsp;`,
`Chaves&nbsp;Programadas:&nbsp;`,
`*/*&nbsp;OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra a quantidade de chaves já programadas. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Apresentar`,
`Automaticamente?`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Deseja&nbsp;manter&nbsp;as`,
`chaves&nbsp;já`,
`programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Tecle (OK) SIM para manter as chaves já programadas no imobilizador, ou tecle (X) NAO para apagar as chaves já programadas.`
},
{lines: [
`&nbsp;`,
`Posicione&nbsp;transponder`,
`ID48&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Posicione o transponder ou chave no Módulo de transponder. Tecle OK!`
},
{lines: [
`&nbsp;`,
`GRAVANDO&nbsp;T48`,
`AGUARDE.`,
`<br />`,
],
help: `Neste momento esta sendo feita a gravação “dedicando” o transponder.`
},
{lines: [
`&nbsp;`,
`Gravar&nbsp;nova&nbsp;chave`,
`<br />`,
`<br />`,
],
help: `Neste momento esta sendo feita a programação do transponder no imobilizador.`
},
{lines: [
`&nbsp;`,
`Chaves&nbsp;Programadas:&nbsp;`,
`*/*&nbsp;OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Tecle (OK) para programar outra chave e volte ao Passo 12, ou tecle (VOLTA) para finalizar o procedimento.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro na leitura do Imobilizador`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;Imobilizador`,
`<br />`,
],
causes: [
`Mau contato no Cabo MCU com o Imobilizador, `,`Mau contato no cabo MCU com o OBDMap, `,`Imobilizador com problema ou arquivo corrompido.`,],
solutions: [
`Conferir a correta posição dos fios no Imobilizador,`,`Conferir se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos. `,``,]
},
{ label: `ERRO na gravacao do imobilizador!`,
screens: [
`&nbsp;`,
`ERRO&nbsp;na&nbsp;gravação&nbsp;do&nbsp;`,
`imobilizador!`,
`<br />`,
],
causes: [
`Mau contato no Cabo MCU com o Imobilizador, `,`Mau contato no cabo MCU com o OBDMap, `,`Imobilizador com problema ou arquivo corrompido. `,``,],
solutions: [
`Conferir a correta posição dos fios no Imobilizador,`,`Conferir se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos. `,]
},
{ label: `REPETIDO!`,
screens: [
`&nbsp;`,
`REPETIDO!`,
`<br />`,
`<br />`,
],
causes: [
`O transponder apresentado já se encontra válido no imobilizador. `,],
solutions: [
]
},
{ label: `Imob. Lotado! OK p/ prosseguir`,
screens: [
`&nbsp;`,
`Imobilizador&nbsp;Lotado!`,
`OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
causes: [
`O imobilizador atingiu o numero máximo de 8 chaves programadas.`,``,],
solutions: [
`Apagar as chaves antigas do imobilizador`,]
},
{ label: `Apagar as chaves ja programadas ao imobilizador? (X)NAO (OK)SIM`,
screens: [
`Apagar&nbsp;as&nbsp;chaves`,
`já&nbsp;programadas`,
`ao&nbsp;imobilizador?`,
`(X)NÃO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`O imobilizador está com o numero máximo de chaves. O imobilizador está com o numero máximo de chaves. Para apagar as chaves e assim permitir a edição de novas chaves tecle (OK) SIM, ou tecle (X) NAO. `,],
solutions: [
]
},
{ label: `Quer realmente apagar as chaves ja programadas? (X)NAO (OK)SIM`,
screens: [
`Quer&nbsp;realmente`,
`apagar&nbsp;as&nbsp;chaves`,
`já&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`Pede confirmação para apagar todas as chaves programadas, para apagar tecle (OK) SIM, ou tecle (X) NAO. `,],
solutions: [
]
},
{ label: `Apagando Chaves! Aguarde...`,
screens: [
`&nbsp;`,
`Apagando&nbsp;Chaves!`,
`Aguarde...`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos do imobilizador,`,`Cabo MCU ou imobilizador com problema. `,],
solutions: [
`Conferir a correta posição dos fios no imobilizador`,`Imobilizador ou o cabo MCU com problema.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
