//Capa
nomeCarga = "Geração de Chaves e Telecomando Code 2 BC 95160 ID46 via OBD (Bravo)";
revCarga = "Rev. 6";
dataManual = "Novembro 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração e programação de até 8 transponders com ou sem telecomando via OBD em veículos que utilizam o Body Computer Marelli 95160 ID46 (BC 95160 ID46).`,
`   Esta função é feita por diagnose e utiliza o Módulo de Transponder conectado ao OBDMap.`,
`<obs>`,
`   Obs 1: `,
` O transponder / telecomando ficará dedicado ao veículo, não podendo ser utilizado em outro veículo. (É possível desbloquear o  transponder para reutilizá-lo em outro veículo usando a função de desbloqueio conforme a Pág. 14).`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Bravo T-Jet 1.4",
years: "2011 a 2014"
},
{
manufacturer: "Fiat",
model: "Bravo 1.8",
years: "2011 a 2014"
},
];
applicationObs = createObs("Obs 2: O veículo deve utilizar o BC 95160 ID46. Utilize a função de identificação dos BCs FIAT para identificar o sistema conforme descrito na Página 13.", undefined, undefined)



resources = [
{title: "Identificando os transponders e telecomandos:", 
description: "Pode-se utilizar na programação:<br /><br />Chave seca com PCF7936 virgem <br />Chave com telecomando com PCF7946 virgem:<br />   Com CI de 8 pinos<br />   Com CI de 10 pinos<br />   Com CI de 16 pinos<br />", 
ballon: "Chave com telecomando montada.", 
image: "/images/Chaves e Telecomandos/Chave Bravo.jpg"},

{title: "", 
description: "Pode-se utilizar na programação:<br /><br />Chave seca com PCF7936 virgem <br />Chave com telecomando com PCF7946 virgem:<br />   Com CI de 8 pinos<br />   Com CI de 10 pinos<br />   Com CI de 16 pinos<br />", 
ballon: "PCF7936 (ID46) (Virgem).", 
image: "/images/Funções Específicas/OBD0183 Bc Bravo/PCF7936 (ID46) virgem.jpg"},

{title: "", 
description: "Pode-se utilizar na programação:<br /><br />Chave seca com PCF7936 virgem <br />Chave com telecomando com PCF7946 virgem:<br />   Com CI de 8 pinos<br />   Com CI de 10 pinos<br />   Com CI de 16 pinos<br />", 
ballon: "PCF7946 (ID46) (Virgem).", 
image: "/images/Funções Específicas/OBD0183 Bc Bravo/PCF7946 (ID 46) Chip.jpg"},

{title: "", 
description: "Pode-se utilizar na programação:<br /><br />Chave seca com PCF7936 virgem <br />Chave com telecomando com PCF7946 virgem:<br />   Com CI de 8 pinos<br />   Com CI de 10 pinos<br />   Com CI de 16 pinos<br />", 
ballon: "Telecomando com PCF7946 virgem e com CI de 8 pinos.", 
image: "/images/Funções Específicas/OBD0183 Bc Bravo/Telecomando 8 Pinos.jpg"},

{title: "", 
description: "Pode-se utilizar na programação:<br /><br />Chave seca com PCF7936 virgem <br />Chave com telecomando com PCF7946 virgem:<br />   Com CI de 8 pinos<br />   Com CI de 10 pinos<br />   Com CI de 16 pinos<br />", 
ballon: "Telecomando com PCF7946 virgem e com CI de 10 pinos.", 
image: "/images/Funções Específicas/OBD0183 Bc Bravo/Telecomando 10 Pinos.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Conecte o cabo universal ao adaptador A3.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para<br />utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Cabo Fiat.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnose do veículo fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Conectando os acessórios", 
description: "", 
ballon: "Retire o porta objetos do veículo.", 
image: "/images/Funções Específicas/OBD0183 Bc Bravo/Conectando os acessórios 1.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN na tomada de diagnose do veículo.", 
image: "/images/Funções Específicas/OBD0183 Bc Bravo/Conectando os acessórios 2.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN no OBDMap.", 
image: "/images/Funções Específicas/OBD0183 Bc Bravo/Conectando os acessórios 3.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o módulo de transponder no OBDMap.", 
image: "/images/Funções Específicas/OBD0183 Bc Bravo/Conectando os acessórios 4.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo Fiat ou a fonte de alimentação no módulo de transponder.", 
image: "/images/Funções Específicas/OBD0183 Bc Bravo/Conectando os acessórios 5.jpg"},

{title: "", 
description: "", 
ballon: "Caso utilize o cabo Fiat, conecte o jacaré vermelho no pólo positivo da bateria.", 
image: "/images/Funções Específicas/OBD0183 Bc Bravo/Conectando os acessórios 6.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Funções Específicas/OBD0183 Bc Bravo/Todos os acessorios.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{lines: [
`Use&nbsp;Mod.&nbsp;Transp.`,
`+&nbsp;Cabo&nbsp;Fiat&nbsp;+&nbsp;A3`,
`Segundo&nbsp;o&nbsp;Manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Conecte todos os acessórios segundo
descrito na Página 8.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;e&nbsp;desligue`,
`&nbsp;a&nbsp;ignicao&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Ligue a ignição e volte a desligá-la,
e tecle OK.`
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
`Cod.&nbsp;Eletronico:&nbsp;`,
`*****`,
`<br />`,
],
help: `Embora o código eletrônico não é
necessário neste procedimento,
aconselha-se anotá-lo.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;CH&nbsp;*/8`,
`&lt;OK&gt;&nbsp;p/&nbsp;prosseg.`,
`<br />`,
],
help: `Exibe o número de chaves programadas.`
},
{lines: [
`Deseja&nbsp;manter&nbsp;as`,
`&nbsp;&nbsp;&nbsp;chaves&nbsp;ja`,
`&nbsp;&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Se deseja manter as chaves antigas tecle
OK e vá para o passo 15. Se deseja
apagar as chaves já programadas tecle (X) VOLTA.`
},
{lines: [
`&nbsp;Quer&nbsp;realmente`,
`apagar&nbsp;as&nbsp;chaves`,
`ja&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Se deseja realmente apagar as chaves já
programadas tecle OK. Se deseja manter
as chaves já programadas tecle (X)
VOLTA e vá para o passo 15.`
},
{lines: [
`&nbsp;`,
`Apagando&nbsp;Chaves!`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: `Aguarde enquanto o OBDMap apaga as chaves antigas do veículo.`
},
{lines: [
`&nbsp;`,
`Selecione:`,
`PCF7936`,
`<br />`,
],
help: `Selecione o transponder / telecomando a
ser programado:
- PCF7936
- PCF7946 e CI 8p (CI com 8 pinos)
- PCF7946 e CI 10p (CI com 10 pinos)
- PCF7946 e CI 16p (CI com 16 pinos)
Certifique-se de que foi selecionado o
correto, senão pode não funcionar
corretamente. Veja Página 4.`
},
{lines: [
`Insira&nbsp;TPD&nbsp;ID46`,
`&nbsp;&nbsp;&nbsp;virgem&nbsp;no`,
`&nbsp;modulo&nbsp;e&nbsp;tecle`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Posicione o transponder / telecomando no módulo de transponder e tecle OK.`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Aguarde enquanto o OBDMAP dedica o
transponder, NÃO o retire até que termine
o procedimento.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;CH&nbsp;*/8`,
`&lt;OK&gt;&nbsp;p/&nbsp;prosseg.`,
`<br />`,
],
help: `Exibe o número de chaves programadas.`
},
{lines: [
`&nbsp;`,
`Gerar&nbsp;outro&nbsp;ID46`,
`(X)Nao&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Se deseja programar uma nova chave
tecle OK e vá ao passo 15. Se não, tecle
VOLTA.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: `Chave programada.`
},
{lines: [
`&nbsp;&nbsp;Desconecte&nbsp;o`,
`OBDMap,&nbsp;desligue`,
`&nbsp;&nbsp;&nbsp;e&nbsp;ligue&nbsp;a`,
`&nbsp;&nbsp;&nbsp;&nbsp;bateria!`,
],
help: `Desconecte o OBDMap do conector OBD, em seguida desligue e ligue a bateria ou a alimentação do BC para concluir o procedimento.`
},
{lines: [
`Use&nbsp;Mod.&nbsp;Transp.`,
`+&nbsp;Cabo&nbsp;Fiat&nbsp;+&nbsp;A3`,
`Segundo&nbsp;o&nbsp;Manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Utilize o Modulo de transponder ligado na
bateria com o cabo Fiat, mais o A3 com o
Universal ligado no conector OBD do veículo.`
},
{lines: [
`Apenas&nbsp;as&nbsp;chaves`,
`prog&nbsp;pelo&nbsp;OBDMap`,
`&nbsp;neste&nbsp;veiculo`,
`&nbsp;serao&nbsp;desbloq.`,
],
help: `O OBDMap só consegue desbloquear
um transponder programado por ele mesmo pela função de programação via
OBD. Para desbloquear é necessário
estar conectado no carro em que foi
programado, caso contrário, também
não será possível desbloquear.`
},
{lines: [
`&nbsp;`,
`Selecione:`,
`PCF7946`,
`<br />`,
],
help: `Selecione entre PCF7936 ou PCF7946.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;e&nbsp;desligue`,
`&nbsp;a&nbsp;ignicao&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Ligue a ignição e volte a desligá-la, e tecle OK.`
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
`Posicione&nbsp;o&nbsp;TPD`,
`ID46&nbsp;programado`,
`&nbsp;&nbsp;no&nbsp;modulo&nbsp;e`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Posicione o transponder conforme
indicado na Pág. 6.`
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
`Transponder&nbsp;&nbsp;&nbsp;&nbsp;`,
`desbloqueado!`,
`<br />`,
],
help: `O transponder voltou ao estado de
virgem, você pode reutilizá-lo.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
