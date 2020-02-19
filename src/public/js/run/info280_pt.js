//Capa
nomeCarga = "Leitura de senha GM BC Imob5 via OBD (2013-2019)";
revCarga = "Rev. 3";
dataManual = "Julho 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Testa a compatibilidade do sistema`,
`Realiza a leitura de senha via OBD para os modelos da aplicação`,
`<obs>`,
`Observação:`,
` Esta função não deve ser utilizada em veículos Camaro e em veículos com o sistema`,
`Keyless (chave de presença)`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Cobalt 1.4",
years: "2011 a 2018"
},
{
manufacturer: "GM",
model: "Cobalt 1.8",
years: "2013 a 2018"
},
{
manufacturer: "GM",
model: "Cruze 1.8",
years: "2012 a 2018"
},
{
manufacturer: "GM",
model: "Onix 1.0",
years: "2013 a 2019"
},
{
manufacturer: "GM",
model: "Onix 1.4",
years: "2013 a 2019"
},
{
manufacturer: "GM",
model: "Prisma 1.0",
years: "2013 a 2018"
},
{
manufacturer: "GM",
model: "Prisma 1.4",
years: "2013 a 2018"
},
{
manufacturer: "GM",
model: "S10 2.4 Flex",
years: "2013 a 2018"
},
{
manufacturer: "GM",
model: "S10 2.8 Diesel",
years: "2013 a 2018"
},
{
manufacturer: "GM",
model: "Sonic 1.6",
years: "2012 a 2014"
},
{
manufacturer: "GM",
model: "Spin 1.8",
years: "2013 a 2018"
},
{
manufacturer: "GM",
model: "Tracker 1.8",
years: "2014 a 2018"
},
];
applicationObs = createObs("Atenção!", "Realize o teste de compatibilidade para comprovar a aplicação, visto que podem existir BCM com hardware e software diferentes, e, nesse caso, a leitura de senha não será possível", undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos Cobalt, Cruze, Onix, Spin, Sonic e Tracker está localizada na área A5.<br />A tomada de diagnóstico dos veículos S10 e TrailBlazer está localizada na área C5.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5-C5.jpg"},
];
instruction = [];
obdmap = true;
services = [{title: `Realizando a leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`, `>Leitura BCM?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},

]},
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{
	label: 'Acesso Negado',
	screen: `
		Acesso Negado!<br />
		     **<br />
		<br />
		Tecle (OK)`,
	cause: `
		<li>BCM não compatível com a aplicação, </li>
		<li>OBDMAP desatualizado</li>`,
	solution: `
		<li>Verificar aplicação (isso implica nos modelos, anos, sistemas e hardware)</li>
		<li>Verificar com suporte técnico uma possível atualização</li>`
},
{
	label: 'Erro de comunicação',
	screen: `
		Erro comunicacao <br/> 
		ou veiculo <br/> 
		incompativel! <br/>
		Tecle (OK) <br/>
		Tecle (OK) <br/>
		Tecle (OK) <br/>
		Tecle (OK)`,
	cause: `
		<li>Defeito no veículo, parte elétrica, </li>
		<li>Software do OBDMap desatualizado</li>`,
	solution: `
		<li>Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,
</li>
		<li>Conferir parte elétrica do veículo, fusíveis, etc,</li>
		<li>Caso não esteja, fique atento as próximas atualizações </li>`
}
];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
