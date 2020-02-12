//Capa
const nomeCarga = "Leitura de Senha e Programação de Chaves VW Gol, Saveiro e Voyage 2009-2012";
const revCarga = "Rev. 4";
const dataManual = "Julho 2017";
const imgTopPath = "/images/obd.png";
const imgObdPath = "/images/obdEquip.png";
const imgChipPath = "/images/chip.png";

// introdução
const introTitle = `Introdução`;
const introSubtitle = `Esta carga realiza as seguintes funções:`;
const lstFunc = [
	`Leitura de senha nas centrais: IAW 4GV e ME7.5.30.`,
	`Programação de até 8 chaves: É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas. Caso as chaves que já funcionavam no veículo não sejam programadas, elas não funcionarão mais, necessitando fazer a programação novamente.`,
	`Adição de novas chaves: Adiciona novas chaves sem apagar as que já estão programadas no veículo.`,
	``,
	`Observações:`,
	`- ECU IAW 4GV são utilizadas nos veículos que vem equipado com o motor 1.0.`,
	`- ECU ME7.5.30 são utilizadas nos veículos que vem equipado com o motor 1.6.`,

];
const introObs = createObs();


// aplicação 
const applicationTitle = "Aplicação";
const applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
const models = [
	{
		manufacturer: "VW",
		model: "Gol 1.0",
		years: "2009 a 2012"
	},
	{
		manufacturer: "VW",
		model: "Gol 1.6",
		years: "2009 a 2012"
	},
	{
		manufacturer: "VW",
		model: "Saveiro 1.0",
		years: "2009 a 2012"
	},
	{
		manufacturer: "VW",
		model: "Saveiro 1.6",
		years: "2009 a 2012"
	},
	{
		manufacturer: "VW",
		model: "Voyage 1.0",
		years: "2009 a 2012"
	},
	{
		manufacturer: "VW",
		model: "Voyage 1.6",
		years: "2009 a 2012"
	},
];
const applicationObs = createObs(undefined, undefined, undefined)



const resources = [
	{
		title: "Acessórios utilizados:",
		description: "",
		ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.",
		image: "/images/Acessórios/Fonte de Alimentacao.jpg"
	},

	{
		title: "",
		description: "",
		ballon: "Pinça soic 8, para conectar a memória ao OBDMap",
		image: "/images/Acessórios/Pinça SOIC8.jpg"
	},

	{
		title: "",
		description: "",
		ballon: "Utilize o cabo Universal + adaptador A1.",
		image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"
	},

	{
		title: "",
		description: "",
		ballon: "Todos os acessórios conectados no OBDMap.",
		image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"
	},

	{
		title: "Identificando e desmontando a ECU IAW 4GV:",
		description: "",
		ballon: "",
		image: "/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU.jpg"
	},

	{
		title: "",
		description: "",
		ballon: "Utilize uma chave torx T15 para retirar os parafusos fixadores que prendem a tampa da ECU.",
		image: "/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU 2.jpg"
	},

	{
		title: "",
		description: "",
		ballon: "Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.",
		image: "/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU 3.jpg"
	},

	{
		title: "Localizando e conectando a pinça na memória 95320:",
		description: "",
		ballon: "",
		image: "/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Localizando e conectando a pinça na memória 95320.jpg"
	},

	{
		title: "",
		description: "",
		ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.",
		image: "/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Conectando a pinça na memória.jpg"
	},

	{
		title: "",
		description: "",
		ballon: "Pinça conectada na memória 95320.",
		image: "/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Pinça conectada na memória.jpg"
	},

	{
		title: "Todos os acessórios conectados:",
		description: "Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos a mesma e nem a ECU.<br />",
		ballon: "",
		image: "/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Todos os acessórios conectados.jpg"
	},

	{
		title: "Identificando e desmontando a ECU ME7.5.30:",
		description: "",
		ballon: "",
		image: "/images/Funções Específicas/OBD0001 Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30.jpg"
	},

	{
		title: "",
		description: "",
		ballon: "Utilize uma chave torx T15 para retirar os parafusos fixadores que prendem a tampa da ECU.",
		image: "/images/Funções Específicas/OBD0001 Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30 2.jpg"
	},

	{
		title: "",
		description: "",
		ballon: "Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.",
		image: "/images/Funções Específicas/OBD0001 Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30 3.jpg"
	},

	{
		title: "Localizando e conectando a pinça na memória 95040:",
		description: "",
		ballon: "",
		image: "/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Localizando e conectando a pinça na memória 95040.jpg"
	},

	{
		title: "",
		description: "",
		ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.",
		image: "/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Conectando a pinça na memória 95040.jpg"
	},

	{
		title: "",
		description: "",
		ballon: "Pinça conectada na memória 95040.",
		image: "/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Conectando a pinça na memória 95040 2.jpg"
	},

	{
		title: "Todos os acessorios conectados:",
		description: "Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos a mesma e nem a ECU.<br />",
		ballon: "",
		image: "/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Todos os acessórios conectados.jpg"
	},

	{
		title: "Localizando a tomada de diagnóstico no veículo:",
		description: "A tomada de diagnóstico dos veículos está localizada na posição A4.",
		ballon: "",
		image: "/images/Tomada de Diagnostico/Carro/A4.jpg"
	},
];
const instruction = [];
const obdmap = true;
const services = [{
	title: `Realizando Leitura da senha da ECU IAW 4GV:`,
	description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
	screens: [
		{ lines: [`Pinca`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
		{ lines: [`VW`, `>IAW 4GV.GR`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
		{ lines: [`IAW 4GV.GR`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },

	]
}, {
	title: `Realizando leitura da senha da ECU ME7.5.10/20/30`,
	description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
	screens: [
		{ lines: [`Pinca`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
		{ lines: [`VW`, `>ME7.5.10/20/30`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
		{ lines: [`ME7.5.10/20/30`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },

	]
}, {
	title: `Realizando a programação de chaves:`,
	description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
	screens: [
		{ lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
		{ lines: [`VW`, `>Painel Gol G5`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
		{ lines: [`Painel Gol G5`, `>Nova chave?`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },

	]
}, {
	title: `Realizando a adição de novas chaves:`,
	description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
	screens: [
		{ lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
		{ lines: [`VW`, `>Painel Gol G5`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
		{ lines: [`Painel Gol G5`, `>Add chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },

	]
},
];
//Outras mensagens
const othersMessageTitle = `Outras Mensagens`;
const othersMessage = [{
	label: 'Acesso Negado',
	screens: [
		`Acesso Negado!`,
		`**`,
		`Tecle (OK)`],
	causes: [],
	solutions: []
},
{
	label: 'Erro de comunicação',
	screens: [
		`Erro comunicacao`,
		`ou veiculo`,
		`incompativel!`,
		`Tecle(OK)`,
		`Tecle(OK)`,
		`Tecle(OK)`,
		`Tecle (OK)`
	],
	causes: [],
	solutions: []
}
];
//Last Message
const lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
