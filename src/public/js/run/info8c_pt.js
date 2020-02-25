//Capa
nomeCarga = `Manual Carga -  OBD0008<br />Clio II, Duster, Logan, Master e Sandero / Soic 93C66`;
revCarga = `Rev. 4`;
dataManual = `Abril 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha do calculador 2 via pinça.`,
`Programação de chaves via diagnóstico.`,
`<obs>`,
`Observações:`,
`- Para o veículo Master, esta carga realiza somente a programação de chaves. Para realizar a leitura de`,
`senha deste veículo, utilize a carga OBD0121.`,
`- Para os demais veículos da aplicação, é possível ler e programar chaves utilizando somente esta carga.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Renault`,
model: `Clio II 1.0 16v`,
years: `2004 a 2011`
},
{
manufacturer: `Renault`,
model: `Clio II 1.6 16v`,
years: `2004 a 2011`
},
{
manufacturer: `Renault`,
model: `Duster`,
years: `2012 a 2012`
},
{
manufacturer: `Renault`,
model: `Logan 1.0 16v`,
years: `2007 a 2011`
},
{
manufacturer: `Renault`,
model: `Logan 1.6 16v`,
years: `2007 a 2013`
},
{
manufacturer: `Renault`,
model: `Master 2.8`,
years: `2010 a 2012`
},
{
manufacturer: `Renault`,
model: `Sandero 1.6`,
years: `2007 a 2011`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
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
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Identificação do Transponder:`, 
description: ``, 
ballon: ``, 
image: ``},

{title: `Identificando o calculador do veículo`, 
description: `É necessário retirar o calculador do veículo para se fazer o procedimento de leitura em bancada via pinça.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0008  Clio2, Sandero e Logan/Retirar o Calculador.jpg`},

{title: `Identificando a memória 93C66:`, 
description: `Após localizar a memória, conecte a pinça.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0008  Clio2, Sandero e Logan/localizar a memória soic de numeração 93C66.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do veículo Master está localizada na área A4.<br />A tomada de diagnóistico dos veículos Clio II e Duster está localizada na área F6.<br />A tomada de diagnóstico dos veículos Logan e Sandero está localizada na área I5. <br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4 - F6 - I5.jpg`},
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
{title: `Realizando a Leitura de senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Clio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-2`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
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
`Senha:`,
`************`,
`<br />`,
],
help: `Anote a senha.`
},
]
}, {title: `Realizando a Programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Clio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-2`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha de 12 digitos lida anteriormente e tecle OK!`
},
{lines: [
`&nbsp;`,
`Remova&nbsp;a&nbsp;chave&nbsp;da&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
`Insira&nbsp;a&nbsp;Chave`,
`e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
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
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Chave`,
`Programada!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;`,
`mais&nbsp;chaves?`,
`<br />`,
],
help: `Tecle OK para mais chaves ou VOLTA  para sair.`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro de Leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Leitura!`,
`<br />`,
`<br />`,
],
causes: [
`Mal contato da pinça com a memória,`,`Mal contato da pinça com o OBDMap,`,`Defeito na pinça.`,],
solutions: [
`Conferir conexão da pinça com a memória,`,`Conferir conexão da pinça com o OBDmap,`,`Conferir bom estado da pinça.`,]
},
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
{ label: `Senha Incorreta!`,
screens: [
`Senha&nbsp;`,
`Incorreta!`,
`Tecle&nbsp;OK&nbsp;para&nbsp;continuar!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta.`,],
solutions: [
`Insira a senha correta.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
