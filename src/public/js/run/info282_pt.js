//Capa
nomeCarga = "Programação de chave de presença Jeep Grand Cherokee Fobik 10-12";
revCarga = "Rev. 2";
dataManual = "Julho 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Testa a compatibilidade do sistema`,
`Apaga chaves antigas`,
`Adiciona novas chaves`,
`A programação do telecomando é automática, desde que compatível com o carro`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Jeep",
model: "Grand Cherokee 3.6",
years: "2010 a 2012"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Chave utilizada:", 
description: "", 
ballon: "", 
image: "/images/Chaves e Telecomandos/Chave jeep Cherokee.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4 - A5.jpg"},
];
instruction = [];
obdmap = true;
services = [{title: `Realizando a adição de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Diagnostico`, `>Jeep`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Jeep`, `>Grand Cherokee`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Grand Cherokee`, `>Fobik 10-12`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fobik 10-12`, `>Prog Proximity`, `<br /><br />`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Diagnostico`, `>Jeep`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Jeep`, `>Grand Cherokee`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Grand Cherokee`, `>Fobik 10-12`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fobik 10-12`, `>Prog Proximity`, `<br /><br />`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Diagnostico`, `>Jeep`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Jeep`, `>Grand Cherokee`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Grand Cherokee`, `>Fobik 10-12`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fobik 10-12`, `>Prog Proximity`, `<br /><br />`], help: `Tecle OK`, menu: 1000},

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
