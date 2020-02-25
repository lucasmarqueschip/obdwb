//Capa
nomeCarga = `Manual Carga -  OBD0070<br />Renault Calculador 1 93C56 (senha e chaves)`;
revCarga = `Rev. 2`;
dataManual = `Fevereiro 2011`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Ler a senha de 4 dígitos que se encontra na memória 93C56 do calculador.`,
` Resetar o calculador. `,
` Programar uma nova chave no veículo.  `,
`<obs>`,
`Observações:`,
`- O calculador 1 NOVO (com memória 93C56) vem a substituir o calculador 1 antigo (com memória 93C46) nos casos de necessidade de troca, pois o calculador antigo apresenta alguns problemas. Os veículos Kangoo e Master a partir do ano de 2008 já saem equipados de fábrica com o calculador 1 93C56. `,
`- Originalmente o transponder vem incluso no interior do telecomando e dedicado ao telecomando, ou seja, assim que são programadas as chaves o telecomando automaticamente já estará habilitado aquele veículo. `,
`- Esta função programa apenas uma chave no veículo. Para adicionar mais chaves é necessário fazer clones da chave válida utilizando a carga básica do módulo de transponder do OBDMap.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Renault`,
model: `Clio I 1.0`,
years: `1999 a 2002`
},
{
manufacturer: `Renault`,
model: `Clio I 1.0 16V`,
years: `1999 a 2002`
},
{
manufacturer: `Renault`,
model: `Kangoo 1.0`,
years: `2008 a 2011`
},
{
manufacturer: `Renault`,
model: `Kangoo 1.6`,
years: `2008 a 2011`
},
{
manufacturer: `Renault`,
model: `Master 2.5`,
years: `2008 a 2011`
},
{
manufacturer: `Renault`,
model: `Twingo 1.0`,
years: `1999 a 2002`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize o transponder T33 dedicado a Renault.`, 
image: `/images/Transponders/T33 - Dedicado Renault.jpg`},

{title: ``, 
description: ``, 
ballon: `Telecomando do calculador 93C46. Dedicado ao transponder.`, 
image: `/images/Chaves e Telecomandos/Telecomando do calculador 93C46.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize o cabo Universal + adaptador A1.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `Identificando e desmontando o calculador 1 93C56:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0070 Renault calculador 1 93C56/Calculador 1.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0070 Renault calculador 1 93C56/Calculador 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Com auxílio de uma chave de fenda remova a placa da caixa do calculador.`, 
image: `/images/Funções Específicas/OBD0070 Renault calculador 1 93C56/Removendo Placa.jpg`},

{title: ``, 
description: ``, 
ballon: `Placa removida da caixa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0070 Renault calculador 1 93C56/Placa fora do imobilizador.jpg`},

{title: `Identificando a memória 93C56:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0070 Renault calculador 1 93C56/Identificando Memoria.jpg`},

{title: `Conectando a pinça soic na memória 93C56`, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0070 Renault calculador 1 93C56/Conectando Pinça.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada.`, 
image: `/images/Funções Específicas/OBD0070 Renault calculador 1 93C56/Pinca Conectada.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção:<br />É importante seguir rigorosamente a etapa de primeiro ler a senha do calculador e depois fazer o reset. Caso seja feito primeiro o reset do calculador, a senha será perdida não sendo possível obtê-la novamente. <br />1º => Leitura da senha, <br />2º => Reset do calculador, <br />3º => programação da chave. <br /><br /><br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0070 Renault calculador 1 93C56/Todos os Equipamentos conectados.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de dignóstico do veículo Master está localiza na posição A4.<br />A tomada de dignóstico dos veículos Clio, Kangoo e Twingo está localizada na posição F6.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4 - F6.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a leitura da senha no calculador 1 93C56:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>Calc 1 93c56`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Calc 1 93c56`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Conecte&nbsp;a&nbsp;pinca&nbsp;`,
`na&nbsp;memoria&nbsp;93C56`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`segundo&nbsp;o&nbsp;manual`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Anote a senha.`
},
]
}, {title: `Realizando reset do calculador 1 93C56:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>Calc 1 93c56`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Calc 1 93c56`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Conecte&nbsp;a&nbsp;pinca&nbsp;`,
`na&nbsp;memoria&nbsp;93C56`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`segundo&nbsp;o&nbsp;manual`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
]
}, {title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`, `>Calc 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Calc 1`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha lida anteriormente e tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`&nbsp;&nbsp;Chave`,
`&nbsp;&nbsp;&nbsp;Programada!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato na pinça com o calculador, `,`Mau contato na pinça com o OBDMap, `,`Calculador com problema ou arquivo corrompido. `,],
solutions: [
`Conferir a correta posição da pinça na memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos. `,]
},
{ label: `Curto!`,
screens: [
`&nbsp;`,
`Curto!`,
`<br />`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Calculador ou memória com problema,`,`A pinça foi conectada em outro componente.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Caso a memória já tenha sido ressoldada, conferir se existe excesso de solda em seus terminais. `,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, `,`Memória ou calculador com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Verificar a correta posição da pinça na memória. `,]
},
{ label: `O calculador esta resetado!`,
screens: [
`&nbsp;`,
`O&nbsp;calculador`,
`&nbsp;&nbsp;esta&nbsp;resetado!`,
`<br />`,
],
causes: [
`O calculador é virgem ou já foi executado o procedimento de reset neste calculador. `,``,],
solutions: [
]
},
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mau contato na pinça com o calculador, `,`Mau contato na pinça com o OBDMap, `,`Calculador com problema. `,],
solutions: [
`Conferir a correta posição da pinça na memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos. `,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
