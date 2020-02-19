//Capa
nomeCarga = "Leitura de Senha e Programação de Chaves NATS 6 e NATS 6 CAN via OBD";
revCarga = "Rev. 6";
dataManual = "Novembro 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha via diagnóstico nos veículos que possuem sistema de imobilizador NATS 6 e NATS 6 CAN.`,
`Programa até 4 chaves nos veículos que possuem sistema de imobilizador NATS 6 e NATS 6 CAN.`,
`<obs>`,
`Observações: `,
``,
`- A leitura de senha é feita em todos os veículos da aplicação através da linha CAN utilizando a função LEITURA DE SENHA NATS 6 e o cabo universal + adaptador A3.`,
`- A programação de chaves em alguns veículos utiliza comunicação com linha K, e outros veículos utilizam comunicação com a linha CAN.`,
`- Para identificar qual linha de comunicação é a correta aconselha-se tentar realizar a programação utilizando a função programação Nats 6 CAN junto com o cabo universal + adaptador A3, caso de erro de comunicação tente novamente utilizando a função programação de chaves NATS 6 junto com o cabo universal + adaptador A1.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Nissan",
model: "Frontier 2.5",
years: "2006 a 2013"
},
{
manufacturer: "Nissan",
model: "Versa 1.6",
years: "2012 a 2017"
},
{
manufacturer: "Nissan",
model: "Tiida 1.8",
years: "2006 a 2013"
},
{
manufacturer: "Nissan",
model: "March 1.0",
years: "2016 a 2017"
},
{
manufacturer: "Nissan",
model: "March 1.6",
years: "2012 a 2017"
},
{
manufacturer: "Nissan",
model: "Livina 1.8",
years: "2009 a 2013"
},
{
manufacturer: "Nissan",
model: "Sentra 2.0",
years: "2005 a 2013"
},
{
manufacturer: "Nissan",
model: "Gran Livina",
years: "2009 a 2013"
},
];
applicationObs = createObs("- Essa carga não faz Livina 1.6, pois esse veículo utiliza sistema Renault.", "- Para realizar a programação de chaves do veículo March 1.0 2011 à 2015 com sistema Renault, utilize a carga OBD0224.", undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o Transponder PCF7936 - ID46 - Virgem!", 
image: "/images/Transponders/Transponder PCF7936 Carvão.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos Tiida, Versa, Sentra, Livina e Grand Livina fica localizada na área A5.<br />A tomada de diagnóstico do veículo Frontier fica localizada na área D6.<br />A tomada de diagnóstico do veículo March fica localizada na área C5.<br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5-C5-D6.jpg"},

{title: "", 
description: "", 
ballon: "COLOCAR IMAGEM EM OUTRAS MENSAGENS - ERRO DE COMUNICAÇÃO", 
image: "/images/Funções Específicas/OBD0133 Leitura de Senha e Programação de Chaves NATS 6 e NATS 6 CAN via OBD/OUTRAS MENSAGENS - ERRO DE COMUNICAÇÃO.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a leitura de senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Nissan`], help: `Tecle OK`, menu: 1000},
{lines: [`Versa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Nats 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura dos dados`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves Nats 6`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Nissan`], help: `Tecle OK`, menu: 1000},
{lines: [`Versa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Nats 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves Nats 6 CAN`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Nissan`], help: `Tecle OK`, menu: 1000},
{lines: [`Versa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Nats 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1 ou A3, dependendo da operação que realizará, consulte os acessórios utilizados,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações,`,`Desligue e ligue o interruptor de energia que se encontra na caixa de fusível no lado esquerdo do volante.`,]
},

{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`O adaptador A3 pode não estar conectado no OBDMap.`,],
solutions: [
`Verificar a conexão do adaptador A3 com o OBDMap.`,]
},

{ label: `Senha incorreta!`,
screens: [
`<br />`,
`Senha&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`A senha digitada é inválida. (Caso tenha digitado a senha incorreta a luz do code irá acender, porém não irá apagar as chaves válidas e não será possível programar nova chave)`,],
solutions: [
`Conferir a senha com o suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
