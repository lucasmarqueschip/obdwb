//Capa
nomeCarga = `Manual Carga -  OBD0119<br />Geração de Transponders OPEL 1`;
revCarga = `Rev. 4`;
dataManual = `Julho 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de transponders para veículos da marca GM que utilizam o imobilizador OPEL 1.`,
``,
`<obs>`,
`Observação: Para realizar a geração de transponders será necessário retirar o imobilizador do veículo e levá-lo para bancada e utilizar o módulo de transponder para realizar a geração de transponders.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Corsa 1.0`,
years: `1997 a 2003`
},
{
manufacturer: `GM`,
model: `Corsa 1.6`,
years: `1997 a 2003`
},
{
manufacturer: `GM`,
model: `Corsa 1.6 16V`,
years: `1997 a 1999`
},
{
manufacturer: `GM`,
model: `Corsa Pickup 1.6`,
years: `1997 a 1999`
},
{
manufacturer: `GM`,
model: `Omega 2.2 E020`,
years: `1995 a 1999`
},
{
manufacturer: `GM`,
model: `Omega 2.2 IMMO`,
years: `1995 a 1999`
},
{
manufacturer: `GM`,
model: `Omega 4.1`,
years: `1995 a 1999`
},
{
manufacturer: `GM`,
model: `Vectra B 2.0`,
years: `1996 a 1999`
},
{
manufacturer: `GM`,
model: `Vectra B 2.0 16V`,
years: `1997 a 1999`
},
{
manufacturer: `GM`,
model: `Vectra B 2.2`,
years: `1997 a 1999`
},
{
manufacturer: `GM`,
model: `Vectra B 2.2 16V`,
years: `1997 a 1999`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize o transponder PCF 7935 virgem.`, 
image: `/images/Transponders/PCF7935.jpg`},

{title: `Chave utilizada:`, 
description: ``, 
ballon: `Chave GM já montada com o transponder.`, 
image: `/images/Chaves e Telecomandos/Chave GM.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: ``, 
description: ``, 
ballon: `Soquete S1. Realiza leitura de senha em microcontroladores.`, 
image: `/images/Acessórios/Soquete S1.jpg`},

{title: ``, 
description: ``, 
ballon: `Sugador e soldador. Necessários para soldar e remover componentes da placa.`, 
image: `/images/Acessórios/Sugador e soldador.jpg`},

{title: ``, 
description: ``, 
ballon: `Estilete. Utilizado para limpar a resina sobre os pinos da memória.`, 
image: `/images/Acessórios/Estilete.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg`},

{title: ``, 
description: ``, 
ballon: `Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Chave GM.jpg`},

{title: `Identificando e desmontando o imobilizador Opel 1:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Identificando Imob Opel 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para soltar as travas do imobilizador.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Soltando as travas.jpg`},

{title: ``, 
description: ``, 
ballon: `Tampa do imobilizador desmontada.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Tampa desmontada.jpg`},

{title: `Retirando a antena do imobilizador:`, 
description: ``, 
ballon: `Localizando os terminais que prendem a antena na placa.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Retirando a antena.jpg`},

{title: ``, 
description: ``, 
ballon: `Esquente os terminais da antena com o ferro de solda.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Esquentando os terminais.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize o sugador para remover a solda.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Utilizando o sugador.jpg`},

{title: ``, 
description: ``, 
ballon: `Solda retirada dos terminais da antena. Retire a antena do imobilizador.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Retire a antena.jpg`},

{title: `Retirando o cristal da placa:`, 
description: ``, 
ballon: `Identificando o cristal na placa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Identificando o cristal.jpg`},

{title: ``, 
description: ``, 
ballon: `Esquente os dois terminais do cristal até que o mesmo se solte.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Esquentando os terminais do cristal.jpg`},

{title: ``, 
description: ``, 
ballon: `Cristal retirado da placa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Cristal retirado.jpg`},

{title: `Cortando o pino 11 do microcontrolador:`, 
description: ``, 
ballon: `Identificando os pinos do microcontrolador. Em detalhe o pino 11 que deverá ser cortado.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Cortando o pino 11.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize o estilete para cortar o pino 11 do microcontrolador.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Usando o estilete.jpg`},

{title: ``, 
description: ``, 
ballon: `Pino 11 cortado do microcontrolador.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Pino 11 cortado.jpg`},

{title: `Cortando a trilha da placa do imobilizador:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Cortando a trilha 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Faça um corte na trilha com o estilete inclinado na diagonal, de modo a levantar um lado da trilha. A parte levantada será utilizada para facilitar a soldagem após o procedimento.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Cortando a trilha 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Trilha da placa do imobilizador cortada.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Trilha cortada.jpg`},

{title: `Conectando o Soquete S1 no microcontrolador:`, 
description: ``, 
ballon: `Conecte o soquete S1 no microcontrolador conforme mostra a foto.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Conectando o soquete 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Se necessário apoie o dedo sobre o soquete S1 para evitar um possível mau contato.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Conectando o soquete 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Todos os acessórios conectados.jpg`},

{title: `Ressoldando o imobilizador Opel 1:`, 
description: ``, 
ballon: `Passe o estilete sobre a trilha cortada para voltá-la na posição original, retire o verniz do local para permitir a soldagem.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Ressoldando o imobilizador 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Solde a trilha cortada utilizando um soldador e um pouco de solda.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Ressoldando o imobilizador 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Trilha do imobilizador ressoldada.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Ressoldando o imobilizador 3.jpg`},

{title: ``, 
description: ``, 
ballon: `Solde o pino cortado (pino 11) com o pino ao lado (pino 12).`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Ressoldando o imobilizador 4.jpg`},

{title: ``, 
description: ``, 
ballon: `Pino 11 soldado junto ao pino 12.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Ressoldando o imobilizador 5.jpg`},

{title: ``, 
description: ``, 
ballon: `Ressolde o cristal na placa.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Ressoldando o imobilizador 6.jpg`},

{title: ``, 
description: ``, 
ballon: `Solde a antena na placa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0119 Geração de transponders OPEL 1/Ressoldando o imobilizador 7.jpg`},
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
{title: `Realizando a geração de transponders:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},
{lines: [
`Utilize&nbsp;o&nbsp;modulo`,
`de&nbsp;transponder&nbsp;e`,
`Soquete&nbsp;S1&nbsp;neste`,
`procedimento`,
],
help: `Tecle OK!`
},
{lines: [
`Conecte&nbsp;o&nbsp;Soquete&nbsp;S1&nbsp;`,
`no&nbsp;Imobilizador`,
`segundo&nbsp;manual`,
`<br />`,
],
help: `Conecte o soquete S1 no microcontrolador como mostra na página 11.`
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;Imobilizador`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Insira&nbsp;o&nbsp;transponder`,
`PCF7935&nbsp;no`,
`módulo&nbsp;de&nbsp;transponder`,
`segundo&nbsp;manual`,
],
help: `Insira o transponder no módulo como mostra na página 5.`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;PCF7935`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Transponder&nbsp;Gravado!`,
`&lt;OK&gt;&nbsp;para&nbsp;outro.`,
`<br />`,
],
help: `Geração do transponder PCF7935 realizado com sucesso. Tecle OK para gravar mais transponders ou VOLTA para finalizar.`
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
`Mau contato do soquete S1 com o imobilizador,`,`Mau contato no soquete S1 com o OBDMap,`,`Imobilizador com problema.`,],
solutions: [
`Verificar se os parafusos que prendem o soquete S1 no OBDMap estão bem fixos,`,`Verificar a conexão do soquete S1 com o imobilizador,`,`Verificar procedimentos na placa do imobilizador.`,]
},
{ label: `Imobilizador Resetado!`,
screens: [
`&nbsp;`,
`Imobilizador`,
`Resetado!`,
`<br />`,
],
causes: [
`Imobilizador possivelmente resetado.`,``,],
solutions: [
]
},
{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravação`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder,`,`O transponder utilizado não é PCF 7935 virgem,`,`Transponder locado.`,],
solutions: [
`Verificar a correta posição do transponder no módulo de transponder,`,`Pode-se utilizar a carga do módulo de transponder para identificar o transponder.`,]
},
{ label: `Arquivo do Imobil. invalido`,
screens: [
`&nbsp;`,
`Arquivo&nbsp;do&nbsp;Imobilizador&nbsp;`,
`inválido`,
`<br />`,
],
causes: [
`O imobilizador está com o arquivo corrompido.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
