//Capa
nomeCarga = "Gravação de Chaves HONDA (Hornet 2005 a 2007) via Pinça";
revCarga = "Rev. 3";
dataManual = "Dezembro 2011";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programar chave.`,
`Programa até duas chaves ao sistema de imobilizador. As chaves que forem programadas ficarão dedicadas para essa motocicleta, elas não funcionarão em outra motocicleta.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Honda",
model: "Hornet",
years: "2005 a 2007"
},
];
applicationObs = createObs("Observação: Nem todas as motos relacionadas aos anos citados acima possuem sistema de imobilizador (para identificar qual possui imobilizador, verifique se ela possui a luz do code).", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Luz do code.", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Luz code.jpg"},

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
ballon: "Estação de solda. Utilizada para aquecer a borracha de vedação que protege a placa do imobilizador.", 
image: "/images/Acessórios/Estação de solda.jpg"},

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
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/MT - Chave Honda CERTO.jpg"},

{title: "Localizando o módulo:", 
description: "", 
ballon: "Com o auxílio da chave de ignição, destrave o banco da motocicleta.", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Destravando o banco.jpg"},

{title: "", 
description: "", 
ballon: "Retire o banco da motocicleta.", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Retirando o banco.jpg"},

{title: "", 
description: "", 
ballon: "O módulo da motocicleta fica localizado abaixo do banco.", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Módulo no banco.jpg"},

{title: "Identificando o módulo:", 
description: "Atenção: Para ter acesso a memória 93C46A, deve-se fazer um corte quadrado no módulo. Tenha o cuidado para não atingir a memória, a profundidade do corte deve ter no máximo 3mm.", 
ballon: "Tipo 1", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Imob Tipo1.jpg"},

{title: "", 
description: "Atenção: Para ter acesso a memória 93C46A, deve-se fazer um corte quadrado no módulo. Tenha o cuidado para não atingir a memória, a profundidade do corte deve ter no máximo 3mm.", 
ballon: "Tipo 2", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Imob Tipo2.jpg"},

{title: "Abrindo o módulo da Hornet:", 
description: "", 
ballon: "Passo 1: Identifique o local onde será cortada a caixa do módulo.<br />Passo 2: Utilize um ferro de solda para cortar a parte superior da caixa do módulo.", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Abrindo o módulo 1.jpg"},

{title: "", 
description: "", 
ballon: "Passo 3: Aqueça a resina que protege a memória da placa e em seguida utilize uma espátula de plástico para remover a mesma.<br />Observação: Utilize a estação de solda apenas na parte superior da resina para que não danifique os componentes da placa.<br />Passo 4: Utilize uma espátula de plástico para remover o restante da resina, e assim evitando danos aos componentes da placa.", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Abrindo o módulo 2.jpg"},

{title: "Localizando a memória 93C46A:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Localizando a memória 1.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Localizando a memória 2.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada na memória.", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Localizando a memória 3.jpg"},

{title: "Todos os acessórios conectados:", 
description: "1. Conecte o módulo de transponder ao OBDMap,<br />2. Conecte a fonte de alimentação ao módulo de transponder,<br />3. Conecte a pinça na memória do módulo.<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Todos os acessórios conectados.jpg"},

{title: "Vedando o módulo:", 
description: "Para vedar a abertura feita no módulo utilize um silicone de alta temperatura:<br />", 
ballon: "Insira o silicone de alta temperatura na abertura do módulo. É aconselhável que ele seja colocado em camadas para uma secagem adequada.", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Vedando 1.jpg"},

{title: "", 
description: "Para vedar a abertura feita no módulo utilize um silicone de alta temperatura:<br />", 
ballon: "Após totalmente vedado, insira a parte cortada anteriormente.", 
image: "/images/Funções Específicas/OBD0107 - Gravação de chaves HONDA (Hornet 2005 a 2007) via pinça/Vedando 2.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a Geração e Programação de Chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Honda`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Honda`, `>Hornet CDI`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Hornet CDI`, `>Gerar TPD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Conecte&nbsp;pinca&nbsp;na&nbsp;`,
`&nbsp;memoria&nbsp;93C46A`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;segundo&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder`,
`&nbsp;PCF7936&nbsp;virgem!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`N.&nbsp;de&nbsp;chaves:&nbsp;2`,
`<br />`,
`<br />`,
],
help: `Escolha o número de chaves a ser programada.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;chave&nbsp;1`,
`e&nbsp;Tecle&nbsp;OK!`,
`<br />`,
],
help: `Insira o transponder PCF7936 virgem no
módulo de transponder. Tecle OK!`
},
{lines: [
`&nbsp;`,
`OK&nbsp;-&nbsp;Programar?`,
`Volta&nbsp;-&nbsp;Sair?`,
`<br />`,
],
help: `Tecle OK para programar as chaves ou VOLTA para retornar ao menu anterior.`
},
{lines: [
`&nbsp;`,
`Aguarde...&nbsp;&nbsp;&nbsp;1/3`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguarde...&nbsp;&nbsp;&nbsp;2/3`,
`<br />`,
`<br />`,
],
help: `A programação foi iniciada, durante as três etapas não retire o transponder do módulo. O tempo do processo é de
aproximadamente 1 minuto.`
},
{lines: [
`&nbsp;`,
`Aguarde...&nbsp;&nbsp;&nbsp;3/3`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;chave&nbsp;2`,
`e&nbsp;Tecle&nbsp;OK!`,
`<br />`,
],
help: `Insira o transponder PCF7936 virgem no
módulo de transponder.`
},
{lines: [
`&nbsp;`,
`OK&nbsp;-&nbsp;Programar?`,
`Volta&nbsp;-&nbsp;Sair?`,
`<br />`,
],
help: `Tecle OK para programar as chaves ou VOLTA para retornar ao menu anterior.`
},
{lines: [
`&nbsp;`,
`Aguarde...&nbsp;&nbsp;&nbsp;1/3`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguarde...&nbsp;&nbsp;&nbsp;2/3`,
`<br />`,
`<br />`,
],
help: `A programação foi iniciada, durante as três etapas não retire o transponder do módulo. O tempo do processo é de
aproximadamente 1 minuto.`
},
{lines: [
`&nbsp;`,
`Aguarde...&nbsp;&nbsp;&nbsp;3/3`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Programacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `A geração e programação dos transponders foram realizadas com sucesso.`
},
]}
];
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
`Mau contato na pinça com a memória,`,`Módulo ou memória com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
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
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
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
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
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
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mal contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
