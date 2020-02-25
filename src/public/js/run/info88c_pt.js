//Capa
nomeCarga = `Manual Carga -  OBD0088<br />Leitura de Senha e Programação de Chaves do Audi Painel 932M Crypto`;
revCarga = `Rev. 3`;
dataManual = `Janeiro 2020`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha.`,
`Realiza a leitura da senha do painel criptografado de 4 dígitos através da tomada de diagnóstico.`,
``,
`Programação de chaves.`,
`Permite programar até 8 chaves no mesmo veículo. As chaves que não forem apresentadas e já estavam programadas não funcionarão neste veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Audi`,
model: `A3 1.6`,
years: `2002 a 2004`
},
{
manufacturer: `Audi`,
model: `A3 1.8`,
years: `2002 a 2004`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize o transponder ID48 (T42) crypto.`, 
image: `/images/Funções Específicas/OBD0088 - Leitura de senha e programação de chaves do Audi painel 932M crypto/Transponder ID48.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico do veículo:`, 
description: `A tomada de diagnóstico do veículo está localizada na posição A5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 1: Remova o pólo negativo da bateria por 10 segundos.`, 
image: `/images/Funções Específicas/OBD0088 - Leitura de senha e programação de chaves do Audi painel 932M crypto/Solução erro na leitura 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Passo 2: Volte o pólo negativo da bateria e repita a função de leitura de senha.`, 
image: `/images/Funções Específicas/OBD0088 - Leitura de senha e programação de chaves do Audi painel 932M crypto/Solução erro na leitura 2.jpg`},
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
{title: `Identificando o modelo de painel:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Audi`], help: `Tecle OK`, menu: 1000},
{lines: [`A3`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO 932M`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
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
`ID:&nbsp;************`,
`COD:***********`,
`*`,
`<br />`,
],
help: `Painel identificado.`
},
]
}, {title: `Realizando a Leitura de Senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Audi`], help: `Tecle OK`, menu: 1000},
{lines: [`A3`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO 932M`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
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
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Anote a senha, pois a mesma será necessária para programação de chaves.`
},
{lines: [
`Erro&nbsp;na&nbsp;leitura!`,
`Desligue&nbsp;e&nbsp;ligue`,
`a&nbsp;bateria!`,
`<br />`,
],
help: `O OBDMap não conseguiu ler os dados do painel.`
},
{lines: [
`&nbsp;`,
`Painel&nbsp;Inválido!`,
`<br />`,
`<br />`,
],
help: `O arquivo do painel é inválido.`
},
{lines: [
`Painel&nbsp;Inválido!`,
`OK&nbsp;-&nbsp;Continua`,
`VOLTA&nbsp;-&nbsp;Sair`,
`<br />`,
],
help: `Tecle OK para realizar a leitura de senha ou tecle VOLTA para voltar para o menu anterior.`
},
]
}, {title: `Realizando a Programação de Chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Audi`], help: `Tecle OK`, menu: 1000},
{lines: [`A3`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO 932M`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Utilize&nbsp;o`,
`transponder&nbsp;ID48`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Utilize a senha lida anteriormente e Tecle OK!`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves:`,
`<br />`,
`<br />`,
],
help: `Escolha a quantidade de chaves a ser programada.`
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
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
help: `Insira a segunda chave. 
Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura!`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Desligue e ligue a bateria!`,
screens: [
`&nbsp;`,
`Desligue&nbsp;e&nbsp;ligue`,
`a&nbsp;bateria!`,
`<br />`,
],
causes: [
`O OBDMap não conseguiu ler os dados do painel.`,],
solutions: [
`ACRESCENTAR DUAS ÚLTIMAS IMAGENS (PASSO 1 E PASSO 2) BATERIA.`,]
},
{ label: `Painel Invalido!`,
screens: [
`&nbsp;`,
`Painel&nbsp;Inválido!`,
`<br />`,
`<br />`,
],
causes: [
` `,],
solutions: [
` `,]
},
{ label: `OK - Continuar VOLTA - Sair`,
screens: [
`&nbsp;`,
`OK&nbsp;-&nbsp;Continuar`,
`VOLTA&nbsp;-&nbsp;Sair`,
`<br />`,
],
causes: [
`O painel deste veículo não possui o processador com final 932M.`,],
solutions: [
` `,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
