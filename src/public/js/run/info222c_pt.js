//Capa
nomeCarga = `Manual Carga -  OBD0222<br />Programação de chaves GM Imob6 Tipo 2 (Malibu 10-11)`;
revCarga = `Rev. 2`;
dataManual = `Outubro 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 4 chaves para o veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Malibu 2.4`,
years: `2010 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Identificação do transponder`, 
description: ``, 
ballon: `Utilize o transponder PCF7936 (ID46) Crypto 2 (Virgem).`, 
image: `/images/Transponders/Utilize o transponder PCF7936 (ID46) Crypto 2 (Virgem)..jpg`},

{title: `Observação`, 
description: `O cilindro de ignição do veículo Malibu, possui quatro posições. Durante os procedimentos de desligar e ligar a chave, a chave deverá ser girada nas posições 0 e I respectivamente.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0222 Programação de chaves Malibu/Cilindro ignição.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Utilize o cabo universal Connect`, 
image: `/images/Connect/Acessórios/Adaptador A8.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A8 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnose do veículo fica localizada na área C5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/C5.jpg`},
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
{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Malibu`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`O&nbsp;procedimento`,
`leva&nbsp;aproximadamente`,
`15&nbsp;minutos.&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Atenção!&nbsp;`,
`A&nbsp;bateria&nbsp;deve&nbsp;estar&nbsp;carregada.`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Cuidado, se a bateria estiver fraca pode causar problemas no veículo. Tecle OK.`
},
{lines: [
`Utilize&nbsp;cabo`,
`universal&nbsp;+&nbsp;A8`,
`segundo&nbsp;manual`,
`&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`Atenção!`,
`Reapresente&nbsp;todas`,
`as&nbsp;chaves&nbsp;neste`,
`procedimento`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;0*/04`,
`chaves`,
`<br />`,
],
help: `Selecione o numero de chaves a ser programadas. Tecle OK!`
},
{lines: [
`Ligue&nbsp;a&nbsp;chave&nbsp;na`,
`posição&nbsp;I&nbsp;e`,
`tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguarde&nbsp;**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`minutos...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Ligue&nbsp;a&nbsp;chave&nbsp;na`,
`posição&nbsp;I&nbsp;e`,
`tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde&nbsp;*&nbsp;seg...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde&nbsp;*&nbsp;seg...`,
`<br />`,
`<br />`,
],
help: `Se for a última chave, vá para o passo 23.
Senão, vá para o passo 19.`
},
{lines: [
`Ligue&nbsp;a&nbsp;ignição&nbsp;com`,
`próxima&nbsp;chave&nbsp;na`,
`posição&nbsp;I&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde&nbsp;*&nbsp;seg...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde&nbsp;*&nbsp;seg...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`**&nbsp;seg.`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Desconecte&nbsp;o&nbsp;OBDMap!!`,
`<br />`,
`<br />`,
],
help: `Depois de desconectar o OBDMap, testes todas as chaves programadas.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Comunicação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A8,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Acesso Negado!`,
screens: [
`Acesso&nbsp;Negado!`,
`**`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Veículo não compatível com a aplicação. `,],
solutions: [
`Verificar aplicação.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
