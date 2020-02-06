//Capa
const nomeCarga = "Programação de chaves Renault UCH-4 Kwid (2017-2020)";
const revCarga = "Rev. 1";
const dataManual = "Setembro 2019";
const imgTopPath = "/images/obd.png";
const imgObdPath = "/images/obdEquip.png";
const imgChipPath = "/images/chip.png";

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
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "../../Imagens/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "../../Imagens/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo fica localizada na área I4.<br /><br />", 
ballon: "", 
image: "../../Imagens/Tomada de Diagnostico/Carro/I4.jpg"},
];
const instruction = [];
const obdmap = true;
const services = [{
	obdMenu: "\Diagnostico\Renault\UCH - Kwid\Compativel?",
	webMenu: "\Web Service\Renault\UCH - Kwid\Compativel?",
	conMenu: "\Renault\Kwid\Chaves\UCH-4 Jonhson\Compatibilidade",
	title: 'Realizando teste de compatibilidade',
	description: 'Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap',
	screens: [{
		lines: [
			'Selecione',
			'>Web Service',
			'</br>',
			'</br>'
		],
		help: 'Selecione a montadora e <br> Tecle OK! <br> Tecle OK! <br> Tecle OK!'
	},
	{
		lines: [
			'Web Service',
			'>Ford',
			'</br>',
			'</br>'
		],
		help: 'Tecle OK!'
	},
	{
		lines: [
			'Ford',
			'>Ecosport',
			'</br>',
			'</br>'
		],
		help: 'Tecle OK!'
	}]
},
{
	title: 'Realizando programação de chaves',
	description: 'Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap',
	screens: [{
		lines: [
			'Selecione',
			'>Web Service',
			'</br>',
			'</br>'
		],
		help: 'Tecle OK!'
	},
	{
		lines: [
			'Web Service',
			'>Ford',
			'</br>',
			'</br>'
		],
		help: 'Tecle OK!'
	}]
}
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
