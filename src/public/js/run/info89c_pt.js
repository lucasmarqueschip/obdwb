//Capa
nomeCarga = `Manual Carga -  OBD0089<br />Leitura da Senha do Painel VDO Crypto G4 / G5`;
revCarga = `Rev. 2`;
dataManual = `Junho 2014`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha nos veículos que possuem painel VDO,`,
`Identifica o modelo do painel, para isso, utilize a carga ID Gol G5.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `VW`,
model: `Gol 1.0 (G4, G5)`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Gol 1.6 (G4, G5)`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro 1.0 (G5)`,
years: `2010 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro 1.6 (G5)`,
years: `2010 a 2012`
},
{
manufacturer: `VW`,
model: `Voyage 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Voyage 1.6`,
years: `2009 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do veículo está localizada na área A5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
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
{title: `Realizando identificação do modelo do painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Identificação`], help: `Tecle OK`, menu: 1000},
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
`PAINEL:&nbsp;VDO`,
`**************`,
`**`,
`<br />`,
],
help: `Painel Identificado.`
},
]
}, {title: `Realizando Leitura da senha do painel VDO Crypto G4/G5`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
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
`Senha:&nbsp;****`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Anote a senha.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},
{ label: `Tempo de espera!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;de&nbsp;espera!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Quando já foi digitada senha errada na hora de programar chaves,`,`Não foi encontrada a senha no painel ou painel invalido,`,`Painel com arquivo corrompido.`,],
solutions: [
` Deixar o painel ligado por 10 minutos e tentar fazer o procedimento sem desligar,`,` Deixar o painel ligado por 1 hora e tentar fazer o procedimento sem desligar,`,` Deixar o painel ligado por 1 dia e tentar fazer o procedimento sem desligar.`,]
},
{ label: `Painel invalido!`,
screens: [
`&nbsp;`,
`Painel&nbsp;Inválido!`,
`<br />`,
`<br />`,
],
causes: [
`O painel deste veículo não é VDO.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
