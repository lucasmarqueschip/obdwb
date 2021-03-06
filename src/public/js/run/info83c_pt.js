//Capa
nomeCarga = `Manual Carga -  OBD0083<br />Programação de Chaves Toyota Imob3`;
revCarga = `Rev. 3`;
dataManual = `Março 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Adicionar chaves.`,
`Para adicionar chaves é necessário ter uma chave válida no veículo. É possível adicionar até 5 chaves no sistema.`,
``,
`Apagar chaves.`,
`Cancelam todas as chaves, deixando válida apenas a chave que está na ignição, é necessário ter uma chave válida no veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Toyota`,
model: `Hilux (ID67G) 2.7`,
years: `2009 a 2015`
},
{
manufacturer: `Toyota`,
model: `Rav4 (ID67G) 2.0`,
years: `2010 a 2015`
},
{
manufacturer: `Toyota`,
model: `Rav4 (ID67G) 2.5`,
years: `2010 a 2015`
},
{
manufacturer: `Toyota`,
model: `Corolla (ID70) 2.0`,
years: `2012 a 2014`
},
{
manufacturer: `Toyota`,
model: `Corolla (Toyota H 128-Bits) 1.8`,
years: `2015 a 2018`
},
{
manufacturer: `Toyota`,
model: `Corolla (Toyota H 128-Bits) 2.0`,
years: `2015 a 2018`
},
{
manufacturer: `Toyota`,
model: `Etios (ID67) 1.3`,
years: `2013 a 2018`
},
{
manufacturer: `Toyota`,
model: `Etios (ID67) 1.5`,
years: `2013 a 2018`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize o transponder ID4D dedicado como:<br />- ID67G para Hilux, RAV4 e SW4.<br />- ID70 para Corolla 2012-2014<br />- ID67 para Etios.<br />Utilize o transponder Toyota H 128-Bits para Corolla 2015-2016.`, 
image: `/images/Transponders/ID4D TOYOTA.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos fica localizada na área B5 ou A5.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-B5.jpg`},
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
{title: `Realizando o apagamento de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Toyota`], help: `Tecle OK`, menu: 1000},
{lines: [`Hilux`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`Insira&nbsp;uma&nbsp;chave`,
`válida&nbsp;na`,
`ignição&nbsp;e&nbsp;tecle`,
`&lt;OK&gt;`,
],
help: `Tecle OK!`
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
`Reinsira&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Remova&nbsp;a&nbsp;chave&nbsp;e`,
`tecle&nbsp;OK&nbsp;em&nbsp;10&nbsp;`,
`segundos`,
`<br />`,
],
help: `Remova a chave em no máximo 10 segundos e Tecle OK.`
},
{lines: [
`&nbsp;`,
`Apagamento`,
`Concluído!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Toyota`], help: `Tecle OK`, menu: 1000},
{lines: [`Hilux`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Adição de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder`,
`4D67G&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Será solicitado o transponder
correspondente ao modelo escolhido
no Passo 5. Veja Pagina 3.`
},
{lines: [
`Insira&nbsp;uma&nbsp;chave`,
`válida&nbsp;na`,
`ignição&nbsp;e&nbsp;tecle`,
`&lt;OK&gt;`,
],
help: `Tecle OK!`
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
`Reinsira&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Remova&nbsp;a&nbsp;chave&nbsp;e`,
`tecle&nbsp;OK&nbsp;em&nbsp;20&nbsp;`,
`segundos`,
`<br />`,
],
help: `Remova a chave e Tecle OK em até 20 segundos.`
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
`Insira&nbsp;a&nbsp;nova&nbsp;chave&nbsp;e`,
`tecle&nbsp;OK&nbsp;em&nbsp;10&nbsp;`,
`segundos`,
`<br />`,
],
help: `Insira a nova chave e Tecle OK em até 10 segundos.`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`Tempo:&nbsp;00&nbsp;s.`,
`<br />`,
],
help: `Aguarde 60 segundos ou mais.`
},
{lines: [
`&nbsp;`,
`Programacao`,
`Concluida!`,
`<br />`,
],
help: `Programação concluída com sucesso.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Chave invalida!`,
screens: [
`&nbsp;`,
`Chave&nbsp;inválida!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`A chave utilizada é incompatível com o veículo.`,],
solutions: [
`Verifique transponder correto segundo aplicação na Pagina 3.`,]
},
{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;Excedido!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Indica que o tempo para ligar ou desligar a ignição foi excedido.`,],
solutions: [
`Repita o procedimento.`,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
