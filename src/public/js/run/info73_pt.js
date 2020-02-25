//Capa
nomeCarga = `Manual Carga -  OBD0073<br />Opel 2 (senha)`;
revCarga = `Rev. 4`;
dataManual = `Maio 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha no imobilizador Opel 2 via soquete S2.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Astra 1.8`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Astra 2.0`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Astra 2.0 16V`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Blazer 2.4 Flex`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Celta 1.0`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Celta 1.4`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Corsa 1.0`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Corsa 1.8`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Meriva 1.8`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Meriva 1.8 16V`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Montana 1.4`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Montana 1.8`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Prisma 1.4`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `S10 2.4 Flex`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Vectra C 2.0`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Vectra C 2.4`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Zafira 2.0`,
years: `1999 a 2006`
},
{
manufacturer: `GM`,
model: `Zafira 2.0 16V`,
years: `1999 a 2006`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Ferro de Solda. Será necessário para remoção da solda que prende a antena do imobilizador.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Acessórios utilizados/Ferro de Solda.jpg`},

{title: ``, 
description: ``, 
ballon: `Soquete S2. Realiza leitura da senha do imobilizador Opel 2.`, 
image: `/images/Acessórios/Soquete S2.jpg`},

{title: ``, 
description: ``, 
ballon: `Sugador de Solda. Será necessário para remoção de excesso de solda.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Acessórios utilizados/SUGADOR.jpg`},

{title: ``, 
description: ``, 
ballon: `Estilete. Será utilizado para cortar o pino 19 do microcontrolador.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Acessórios utilizados/estilete.jpg`},

{title: `Identificando e desmontando o imobilizador`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Identificando e desmontando o imobilizador/Identificando o Imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: `Com auxilio de uma chave de fenda de tamanho médio, remova as travas que prendem a capa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Identificando e desmontando o imobilizador/Remova a trava do Imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: `Tampa do imobilizador removida.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Identificando e desmontando o imobilizador/Tampa do Imob Removida.jpg`},

{title: `Retirando a placa da antena`, 
description: ``, 
ballon: `Identificando os pontos que serão necessários retirar a solda para que possa remover a placa da antena.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Retirando a placa da antena/Identificando os Pontos.jpg`},

{title: ``, 
description: ``, 
ballon: `Apoiar o imobilizador para facilitar o procedimento (Na foto foi utilizada uma 3ª mão). Derreta a solda utilizando o ferro de solda e com o auxílio do sugador remova a solda dos terminais da antena.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Retirando a placa da antena/Apoiar Imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: `Observe que os terminais estão livres, sem nenhum excesso de solda.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Retirando a placa da antena/Observar Terminais.jpg`},

{title: ``, 
description: ``, 
ballon: `Retirando a placa da antena.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Retirando a placa da antena/Retirando a placa da antena.jpg`},

{title: `Localizando o microcontrolador`, 
description: `Localizando o microcontrolador.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Localizando o microcontrolador/Localizando o microcontrolador.jpg`},

{title: ``, 
description: `Localizando o microcontrolador.<br />`, 
ballon: `Localizando o pino 19 do microcontrolador.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Localizando o microcontrolador/localizando o pino 19 do microcontrolador.jpg`},

{title: ``, 
description: `Localizando o microcontrolador.<br />`, 
ballon: `A foto ao lado mostra o pino 19 do microcontrolador, que deve ser obrigatoriamente cortado.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Localizando o microcontrolador/pino 19 do microcontrolador.jpg`},

{title: `Cortando o pino 19 do microcontrolador`, 
description: ``, 
ballon: `Com auxílio de um estilete corte o pino 19 do microcontrolador, como mostra a foto.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Localizando o microcontrolador/Cortando o pino 19 do microcontrolador.jpg`},

{title: ``, 
description: ``, 
ballon: `Detalhe do pino 19 já cortado.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Localizando o microcontrolador/Detalhe do pino 19 já cortado.jpg`},

{title: `Conectando o soquete S2 no microcontrolador`, 
description: ``, 
ballon: `A indicação do pino 1 do microcontrolador deve coincidir com o pino 1 do soquete S2.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Conectando o soquete S2 no microcontrolador/Indicação do pino 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Soquete S2 conectado. É necessário, apoiar o dedo sobre o soquete para evitar mal contato.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Conectando o soquete S2 no microcontrolador/Soquete S2 conectado.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Conectando o soquete S2 no microcontrolador/Todos os acessórios conectados.jpg`},

{title: ``, 
description: ``, 
ballon: `Após realizar a leitura da senha não se esquecer de ressoldar o pino 19 do microcontrolador.`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Localizando o microcontrolador/Ressoldando Pino 19.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a leitura de senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Opel 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`&nbsp;Use&nbsp;o`,
`&nbsp;&nbsp;&nbsp;Soquete&nbsp;S2!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;Senha`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Anote a senha.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura do imobilizador`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura&nbsp;`,
`do&nbsp;imobilizador`,
`<br />`,
],
causes: [
`Mau contato ao encaixar o soquete S2 no microcontrolador, `,`Posição incorreta ao encaixar o soquete S2 no microcontrolador. `,],
solutions: [
`Apóie o dedo na base do soquete S2 para evitar o mau contato, como mostra a foto na Página 9.`,`Verificar se o pino 1 do soquete S2 coincide com o pino 1 do microcontrolador.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
