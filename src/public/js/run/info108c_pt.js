//Capa
nomeCarga = "Programação de Chaves da Hornet ECM via Pinça e Módulo de Transponder";
revCarga = "Rev. 3";
dataManual = "Junho 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programar chave.`,
`Programa até duas chaves ao sistema de imobilizador. `,
`<obs>`,
`Observação: As chaves que forem programadas ficarão dedicadas para essa motocicleta, elas não funcionarão em outra motocicleta.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Honda",
model: "Hornet CB 600F",
years: "2008 a 2011"
},
{
manufacturer: "Honda",
model: "CBR 600 RR",
years: "2008 a 2010"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "PCF7936 (ID46) com lock<br />dedicado a Jeep, este<br />transponder pode ser preparado<br />com a carga OBD0192.", 
image: "/images/Transponders/PCF7936 (ID46) dedicado.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Ferro de solda.", 
image: "/images/Acessórios/ferro_de_Solda2.jpg"},

{title: "", 
description: "", 
ballon: "Espátula plástica. Utilizada para retirar a borracha de vedação da placa.", 
image: "/images/Acessórios/Espátula plástica.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "", 
description: "", 
ballon: "Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.", 
image: "/images/Instrucao Modulo de Transponder/MT - Chave Honda CERTO.jpg"},

{title: "Localizando o ECM da motocicleta:", 
description: "", 
ballon: "Retire a carenagem na lateral direita da motocicleta.", 
image: "/images/Funções Específicas/OBD0108 Programação de chaves da Hornet ECM via pinça e módulo de transponder/Localizando o ECM 1.jpg"},

{title: "", 
description: "", 
ballon: "Retire a ECM da motocicleta.", 
image: "/images/Funções Específicas/OBD0108 Programação de chaves da Hornet ECM via pinça e módulo de transponder/Localizando o ECM 2.jpg"},

{title: "Identificando o módulo:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0108 Programação de chaves da Hornet ECM via pinça e módulo de transponder/Identificando o módulo 1.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0108 Programação de chaves da Hornet ECM via pinça e módulo de transponder/Identificando o módulo 2.jpg"},

{title: "Abrindo o módulo da Hornet:", 
description: "Atenção: Para ter acesso a memória 93A66, deve-se fazer um corte quadrado no módulo. Tenha o cuidado para não atingir a memória, a profundidade do corte deve ter no máximo 3mm.<br /><br />Passo 1: Identifique o local onde será cortada a caixa do módulo.<br />Passo 2: Utilize um ferro de solda para cortar a parte superior da caixa do módulo.<br />Passo 3: Retire a parte cortada do módulo.<br />Passo 4: Utilize uma espátula de plástico para remover a borracha de vedação, com cuidado para evitar danos aos componentes da placa.<br /><br /><br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0108 Programação de chaves da Hornet ECM via pinça e módulo de transponder/Abrindo o módulo 1.jpg"},

{title: "", 
description: "Atenção: Para ter acesso a memória 93A66, deve-se fazer um corte quadrado no módulo. Tenha o cuidado para não atingir a memória, a profundidade do corte deve ter no máximo 3mm.<br /><br />Passo 1: Identifique o local onde será cortada a caixa do módulo.<br />Passo 2: Utilize um ferro de solda para cortar a parte superior da caixa do módulo.<br />Passo 3: Retire a parte cortada do módulo.<br />Passo 4: Utilize uma espátula de plástico para remover a borracha de vedação, com cuidado para evitar danos aos componentes da placa.<br /><br /><br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0108 Programação de chaves da Hornet ECM via pinça e módulo de transponder/Abrindo o módulo 2.jpg"},

{title: "Localizando a memória 93A66:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0108 Programação de chaves da Hornet ECM via pinça e módulo de transponder/Localizando a memória 93A66 1.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0108 Programação de chaves da Hornet ECM via pinça e módulo de transponder/Conectando a pinça.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada na memória.", 
image: "/images/Funções Específicas/OBD0108 Programação de chaves da Hornet ECM via pinça e módulo de transponder/Pinça conectada.jpg"},

{title: "Todos os acessórios conectados:", 
description: "1. Conecte o módulo de transponder ao OBDMap,<br />2. Conecte a fonte de alimentação ao módulo de transponder,<br />3. Conecte a pinça no OBDMap,<br />4. Conecte a pinça na memória do módulo.<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0108 Programação de chaves da Hornet ECM via pinça e módulo de transponder/Todos os acessórios conectados.jpg"},

{title: "Vedando o módulo:", 
description: "Para vedar a abertura feita no módulo utilize um silicone de alta temperatura:<br />", 
ballon: "Insira o silicone de alta temperatura na abertura do módulo.", 
image: "/images/Funções Específicas/OBD0108 Programação de chaves da Hornet ECM via pinça e módulo de transponder/Vedando o módulo 1.jpg"},

{title: "", 
description: "Para vedar a abertura feita no módulo utilize um silicone de alta temperatura:<br />", 
ballon: "Após totalmente vedado, insira a parte cortada anteriormente.", 
image: "/images/Funções Específicas/OBD0108 Programação de chaves da Hornet ECM via pinça e módulo de transponder/Vedando o módulo 2.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Geração e programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Honda Motocicletas`], help: `Tecle OK`, menu: 1000},
{lines: [`Hornet`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`ECM KEIHIN`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Memória com problema.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,``,]
},

{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},

{ label: `Erro na leitura da memoria!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;da&nbsp;memoria!`,
`<br />`,
],
causes: [
`A pinça não está conectada corretamente na memória.`,],
solutions: [
`Verifique a conexão da pinça com a memória.`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder,`,`O transponder utilizado não é PCF7936.`,],
solutions: [
`Verifique o transponder que está sendo utilizado,`,`Insira o transponder na posição correta no módulo e repita a operação. Caso tenha alguma dúvida, vá ao tópico Posicionamento do transponder no módulo de transponder na pagina 6.`,``,]
},

{ label: `Erro! O transp. pode estar em modo crypto ou em modo password`,
screens: [
`Erro!&nbsp;O&nbsp;transp.&nbsp;`,
`pode&nbsp;estar&nbsp;em&nbsp;&nbsp;&nbsp;`,
`modo&nbsp;crypto&nbsp;ou&nbsp;`,
`em&nbsp;modo&nbsp;password`,
],
causes: [
`O transponder não pode ser programado, pois se encontra bloqueado ou em uma codificação diferente.`,],
solutions: [
`Insira o transponder PCF7936 virgem e reinicie o procedimento.`,]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;nao`,
`Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder, caso tenha alguma dúvida, vá ao tópico Posicionamento do transponder no módulo de transponder na pagina 6.`,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder.`,`Verifique o transponder que está sendo utilizado.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
