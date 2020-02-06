//Capa
const nomeCarga = "Programação de chaves Renault UCH-4 Kwid (2017-2020)";
const revCarga = "Rev. 1";
const dataManual = "Setembro 2019";
const imgTopPath = "../public/images/obd.png";
const imgObdPath = "../public/images/conEquip.png";
const imgChipPath = "../public/images/chip.png";

// introdução
const introTitle = `Introdução`;
const introSubtitle = `Esta carga realiza as seguintes funções:`;
const lstFunc = [
`Testa a compatibilidade do sistema`,
`Apaga falhas passadas do calculador`,
`Leitura de senha (É necessario ter uma chave válida)`,
`Apaga chaves antigas`,
`Realiza cópia de chaves`,
`Programação de telecomando automatico`,

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplicação";
const applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
const models = [
{
manufacturer: "Renault",
model: "Kwid 1.0",
years: "2017 a 2020"
},
];
const applicationObs = createObs("teste1", "teste2", "teste3")createObs("fsdfsdfsdfsdfsd", "fsdfdsf", "fsdfsdfsd")createObs("fsdfsdf", "sdffsd", "fsdfsdfsdfsdfsd")



const resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "Chave original do Kwid", 
image: "../../Imagens/Chaves e Telecomandos/Chave kwid edit.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal connect", 
image: "../../Imagens/Connect/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "../../Imagens/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo fica localizada na área I4.<br /><br />", 
ballon: "", 
image: "../../Imagens/Tomada de Diagnostico/Carro/I4.jpg"},
];
const instruction = [];
const obdmap = false;
const services = [
{title: `Realizando o teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Diagnostico`], help: `Tecle OK`, menu: 1000},
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH - Kwid`], help: `Tecle OK`, menu: 1000},
{lines: [`Compativel?`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a leitura de senha e programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Renault`], help: `Tecle OK`, menu: 1000},
{lines: [`Kwid`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`UCH-4 Jonhson`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},
];
//Outras mensagens
const othersMessageTitle = `Outras Mensagens`;
const othersMessage = [{
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
const lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
