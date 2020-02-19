//Capa
nomeCarga = "Leitura do Código Eletrônico e Geração de Transponder Fiat Bravo";
revCarga = "Rev. 4";
dataManual = "Janeiro 2020";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar até 8 chaves para veículos Fiat Bravo que utilizam BC Magneti Marelli com memória EEPROM ST95160.`,
``,
`<obs>`,
`Observações:`,
``,
`1 - Os módulos podem ser tratados como BC ou BCM, porém em todo o manual será tratado como BC.`,
`2 - Nesta função pode-se apresentar o transponder para o BC automaticamente, ou somente gerar o transponder, neste caso necessita de posterior apresentação por equipamento de diagnose.`,
`3 - O BC do Bravo utiliza a mesma placa do BC do Stilo/Linea/Punto, porém essa função abrange somente o BC do Bravo. Veja na manual como diferenciar os dois modelos de BC.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Bravo 1.4",
years: "2010 a 2011"
},
{
manufacturer: "Fiat",
model: "Bravo 1.8",
years: "2010 a 2011"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o Transponder PCF7936 - ID46 - Virgem!", 
image: "/images/Transponders/Transponder PCF7936 Carvão.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

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

{title: "Identificando o BC Magneti Marelli Fiat Bravo:", 
description: "Diferenças entre o BC Fiat Bravo e BC Stilo/Linea/Punto:<br />BC do Bravo tem como sua principal diferença possuir suporte dos parafusos nas duas laterais e um na parte superior como indica a foto.<br />BC do Stilo/Linea/Punto possui somente dois suportes na sua parte superior.<br /><br /><br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0120 Leitura do código eletrônico e geração de transponder Fiat Bravo/Identificando o BC Magneti Marelli Fiat Bravo.jpg"},

{title: "", 
description: "Diferenças entre o BC Fiat Bravo e BC Stilo/Linea/Punto:<br />BC do Bravo tem como sua principal diferença possuir suporte dos parafusos nas duas laterais e um na parte superior como indica a foto.<br />BC do Stilo/Linea/Punto possui somente dois suportes na sua parte superior.<br /><br /><br /><br />", 
ballon: "Para esta aplicação consulte a carga Fiat Code 2 BC (BC 95160).", 
image: "/images/Funções Específicas/OBD0120 Leitura do código eletrônico e geração de transponder Fiat Bravo/Identificando o BC Magneti Marelli Fiat Bravo 2.jpg"},

{title: "Identificando a placa do BC:", 
description: "", 
ballon: "Identificando a posição da memória na placa.", 
image: "/images/Funções Específicas/OBD0120 Leitura do código eletrônico e geração de transponder Fiat Bravo/Identificando a placa do BC.jpg"},

{title: "", 
description: "", 
ballon: "Memória 95160 (516WP).", 
image: "/images/Funções Específicas/OBD0120 Leitura do código eletrônico e geração de transponder Fiat Bravo/Memória 95160 (516WP).jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "Localizando a área de soldagem do cabo MCU.", 
image: "/images/Funções Específicas/OBD0120 Leitura do código eletrônico e geração de transponder Fiat Bravo/Localizando os pontos de soldagem do cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU no BC:<br />1 => Fio Amarelo<br />2 => Fio Verde<br />3 => Fio Preto<br />4 => Fio Azul<br />5 => Fio Vermelho<br />6 => Fio Cinza", 
image: "/images/Funções Específicas/OBD0120 Leitura do código eletrônico e geração de transponder Fiat Bravo/Localizando os pontos de soldagem do cabo MCU 2.jpg"},

{title: "", 
description: "", 
ballon: "Atenção:<br />Não trocar as posições dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap.", 
image: "/images/Funções Específicas/OBD0120 Leitura do código eletrônico e geração de transponder Fiat Bravo/Não inverter os fios.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com a placa do BC, evitando danos ao módulo e ao OBDMap.<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0120 Leitura do código eletrônico e geração de transponder Fiat Bravo/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Apresentação automática:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [``, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>CODE 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CODE 2`, `>BC Bravo`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Bravo`, `>Gerar TPD OBD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;MCU&nbsp;no&nbsp;BCM,`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;LENDO...`,
`&nbsp;&nbsp;&nbsp;AGUARDE...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;PIN:&nbsp;*****`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra o código eletrônico, este código pode ser utilizado para a função via
diagnose, anote!`
},
{lines: [
`&nbsp;`,
`CHAVES&nbsp;PROG:&nbsp;N/8`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra a quantidade de chaves programadas no BC.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Apresentar`,
`Automaticamente?`,
`<br />`,
],
help: `Utilize as setas para selecionar apresentar automaticamente.`
},
{lines: [
`Deseja&nbsp;manter&nbsp;as`,
`&nbsp;&nbsp;&nbsp;chaves&nbsp;ja`,
`&nbsp;&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Tecle (OK) SIM para manter as chaves as chaves já programadas funcionando no veículo, ou tecle (X) NAO para apagá-las e gravar novas chaves.`
},
{lines: [
`&nbsp;Insira&nbsp;transp.`,
`&nbsp;PCF7936&nbsp;virgem`,
`&nbsp;&nbsp;&nbsp;no&nbsp;modulo`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
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
help: `A geração foi iniciada, durante as três etapas não retire o transponder do
módulo.`
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
`&nbsp;Gravando&nbsp;chave`,
`no&nbsp;BCM.&nbsp;Aguarde!`,
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
help: `O transponder foi gerado e programado no BC com sucesso.`
},
{lines: [
`&nbsp;&nbsp;Gerar&nbsp;outra`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chave?`,
`&nbsp;OK&nbsp;-&nbsp;Programar`,
`&nbsp;&nbsp;VOLTA&nbsp;-&nbsp;Sair`,
],
help: `Tecle OK para programar mais chaves e vá ao passo 8, ou tecle VOLTA para voltar ao menu anterior.`
},
]
}, {title: `Somente gerar transponder:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>CODE 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CODE 2`, `>BC Bravo`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Bravo`, `>Gerar TPD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;MCU&nbsp;no&nbsp;BCM,`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;LENDO...`,
`&nbsp;&nbsp;&nbsp;AGUARDE...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;PIN:&nbsp;*****`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra o código eletrônico, este código pode ser utilizado para a função via
diagnose, anote!`
},
{lines: [
`&nbsp;`,
`CHAVES&nbsp;PROG:&nbsp;N/8`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra a quantidade de chaves programadas no BC.`
},
{lines: [
`&nbsp;`,
`&nbsp;Apresentar&nbsp;por`,
`&nbsp;&nbsp;Diagnostico?`,
`<br />`,
],
help: `Utilize as setas para selecionar apresentar por diagnostico.`
},
{lines: [
`Chaves&nbsp;geradas`,
`deverao&nbsp;ser`,
`apresentadas`,
`por&nbsp;dispositivo`,
`de&nbsp;diagnostico,`,
`OK&nbsp;p&nbsp;prosseguir!`,
],
help: `Aperte a seta para baixo para ler a mensagem toda e tecle OK!`
},
{lines: [
`&nbsp;Insira&nbsp;transp.`,
`&nbsp;PCF7936&nbsp;virgem`,
`&nbsp;&nbsp;&nbsp;no&nbsp;modulo`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK`
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
help: `A geração foi iniciada, durante as três etapas não retire o transponder do
módulo.`
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
help: `A geração do transponder foi realizada com sucesso.`
},
{lines: [
`&nbsp;&nbsp;Gerar&nbsp;outra`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chave?`,
`&nbsp;OK&nbsp;-&nbsp;Programar`,
`&nbsp;&nbsp;VOLTA&nbsp;-&nbsp;Sair`,
],
help: `Tecle OK para gerar mais transponders para o veículo e volte ao passo 7, ou tecle
VOLTA para voltar ao menu anterior.`
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
`Mau contato no cabo MCU com o BC,`,`BC ou memória com problema.`,],
solutions: [
`Conferir a correta posição do cabo MCU na placa, todos os fios do cabo MCU deverão estar soldados nos pontos correspondentes a página 8.`,]
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
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`&nbsp;nao&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`O transponder não foi encontrado ou não está inserido corretamente no módulo,`,`O transponder utilizado não é PCF7936.`,],
solutions: [
`Insira o transponder na posição correta no módulo e repita a operação. Caso tenha alguma dúvida, vá ao tópico Posicionamento do transponder no módulo de transponder na página 8.`,``,]
},

{ label: `ERRO na leitura do BCM!`,
screens: [
`&nbsp;`,
`ERRO&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;&nbsp;do&nbsp;BCM!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o BC,`,`Mau contato do cabo MCU com o OBDMap,`,`BC ou memória com problema.`,],
solutions: [
`Conferir a correta posição do cabo MCU na memória, todos os fios do cabo MCU deverão estar soldados nos pontos correspondentes a página 8.`,``,``,]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder PCF7936 virgem.`,]
},

{ label: `Use transponder PCF7936 virgem!`,
screens: [
`&nbsp;`,
`Use&nbsp;transponder`,
`&nbsp;PCF7936&nbsp;virgem!`,
`<br />`,
],
causes: [
],
solutions: [
]
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
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Imob. Lotado! OK p/ prosseguir`,
screens: [
`&nbsp;`,
`&nbsp;Imob.&nbsp;Lotado!`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
causes: [
`O imobilizador atingiu o numero máximo de 8 chaves programadas.`,],
solutions: [
`Apagar as chaves antigas do imobilizador`,]
},

{ label: `Apagar as chaves ja programadas ao imobilizador? (X)NAO (OK)SIM`,
screens: [
`Apagar&nbsp;as&nbsp;chaves`,
`&nbsp;ja&nbsp;programadas`,
`ao&nbsp;imobilizador?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`Para apagar todas as chaves e assim permitir a adição de novas chaves tecle (OK) SIM, se deseja não apagar as chaves tecle (X) NÃO.`,],
solutions: [
]
},

{ label: `Quer realmente apagar as chaves ja programadas? (X)NAO (OK)SIM`,
screens: [
`&nbsp;Quer&nbsp;realmente`,
`apagar&nbsp;as&nbsp;chaves`,
`ja&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`Tecle (OK) SIM para confirmar e apagar as chaves ou (X) NÃO para voltar ao menu anterior.`,],
solutions: [
]
},

{ label: `Apagando Chaves! Aguarde...`,
screens: [
`&nbsp;`,
`Apagando&nbsp;Chaves!`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
causes: [
],
solutions: [
]
},

{ label: `ERRO! BCM INCOMPATIVEL`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERRO!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`BCM&nbsp;INCOMPATIVEL`,
`<br />`,
],
causes: [
`O BC é incompatível com a aplicação,`,`O arquivo pode estar corrompido.`,],
solutions: [
`Verificar a identificação do BC e informações do veículo.`,``,]
},

{ label: `Chave ja esta programada!`,
screens: [
`&nbsp;`,
`Chave&nbsp;ja&nbsp;esta`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;programada!`,
`<br />`,
],
causes: [
`A chave já foi apresentada ao veículo.`,],
solutions: [
]
},

{ label: `Arquivo do BC incorreto! Consulte Manual para continuar!`,
screens: [
`&nbsp;Arquivo&nbsp;do&nbsp;BC`,
`&nbsp;&nbsp;&nbsp;incorreto!`,
`Consulte&nbsp;Manual`,
`para&nbsp;continuar!`,
],
causes: [
`Pode ter havido um desligamento durante a geração do transponder anterior, por falta de energia elétrica e não foi possível concluir a operação,`,`O BC é incompatível com a aplicação.`,],
solutions: [
`Verificar aplicação da carga,`,`Verifique a fixação dos conectores da fonte de alimentação ao módulo de transponder e ao OBDMap.`,]
},

{ label: `Quer realmente corrigir o arquivo? (X)NAO (OK)SIM`,
screens: [
`&nbsp;Quer&nbsp;realmente`,
`&nbsp;&nbsp;&nbsp;&nbsp;corrigir`,
`&nbsp;&nbsp;&nbsp;o&nbsp;arquivo?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`Caso tenha certeza que o BC é do Fiat Bravo conforme a aplicação tecle (OK) SIM para corrigir o arquivo, caso não seja tecle (X) NÃO para sair e verifique a aplicação.`,],
solutions: [
]
},

{ label: `Correcao Concluida!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Correcao`,
`&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
causes: [
`Correção do arquivo finalizada! Reinicie a operação para realizar a geração de chaves.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
