//Capa
nomeCarga = "Programação de chaves Renault UCH-4 Kwid (2017-2020)";
revCarga = "Rev. 3";
dataManual = "Setembro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
   `Testa a compatibilidade do sistema`,
   `Apaga falhas passadas do calculador`,
   `Leitura de senha (É necessario ter uma chave válida)`,
   `Apaga chaves antigas`,
   `Realiza cópia de chaves`,
   `Programação de telecomando automatico`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
   {
      manufacturer: "Renault",
      model: "Kwid 1.0",
      years: "2017 a 2020"
   },
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
   {
      title: "Transponder utilizado:",
      description: "",
      ballon: "",
      image: ""
   },

   {
      title: "",
      description: "",
      ballon: "Chave original do Kwid",
      image: "/images/Chaves e Telecomandos/Chave kwid edit.jpg"
   },

   {
      title: "Acessórios utilizados:",
      description: "",
      ballon: "Utilize o cabo universal + adaptador A3.",
      image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"
   },

   {
      title: "",
      description: "",
      ballon: "Todos os acessórios conectados para procedimento via diagnose.",
      image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"
   },

   {
      title: "Localizando a tomada de diagnóstico no veículo:",
      description: "A tomada de diagnóstico do veículo fica localizada na área I4.<br /><br />",
      ballon: "",
      image: "/images/Tomada de Diagnostico/Carro/I4.jpg"
   },
];
instruction = [];
obdmap = true;
services =
   [{
      title: `Realizando o teste de compatibilidade`,
      description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
      screens: [
         { lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
         { lines: [`Diagnostico`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
         { lines: [`Renault`, `>UCH - Kwid`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
         { lines: [`UCH - Kwid`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
         { lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: `` },
         {
            lines: [
               `&nbsp;Ligue&nbsp;a&nbsp;chave`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
               `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
            ],
            help: `   Tecle OK!`
         },
         {
            lines: [
               `&nbsp;&nbsp;&nbsp;Testando&nbsp;a`,
               `compatibilidade`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;`,
               `Aguarde...`,
               `<br />`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
               `&nbsp;&nbsp;compativel!`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
               `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
            ],
            help: `Veículo compativel com o software!`
         },
      ]
   }, {
      title: `Realizando a leitura de senha e programação de chaves`,
      description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
      screens: [
         { lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
         { lines: [`Diagnostico`, `>Renault`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
         { lines: [`Renault`, `>UCH - Kwid`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
         { lines: [`UCH - Kwid`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000 },
         { lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: `` },
         {
            lines: [
               `&nbsp;&nbsp;&nbsp;&nbsp;Atencao!`,
               `&nbsp;A&nbsp;bateria&nbsp;deve`,
               `estar&nbsp;carregada.`,
               `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
            ],
            help: `Cuidado, se a bateria estiver fraca pode
causar problemas no painel. Tecle OK.`
         },
         {
            lines: [
               `<br />`,
               `Aguarde...`,
               `<br />`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;Ligue&nbsp;a&nbsp;chave`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
               `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
            ],
            help: `   Tecle OK!`
         },
         {
            lines: [
               `<br />`,
               `Aguarde...`,
               `<br />`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;`,
               `Apagando&nbsp;Falhas`,
               `&nbsp;&nbsp;&nbsp;&nbsp;Passadas`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `Desligue&nbsp;a&nbsp;chave`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
               `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
            ],
            help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
         },
         {
            lines: [
               `&nbsp;Ligue&nbsp;a&nbsp;chave`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
               `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
            ],
            help: `   Tecle OK!`
         },
         {
            lines: [
               `&nbsp;`,
               `Aguarde...`,
               `<br />`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;&nbsp;&nbsp;Testando&nbsp;a`,
               `compatibilidade`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;`,
               `&nbsp;&nbsp;Lendo&nbsp;Senha`,
               `&nbsp;&nbsp;&nbsp;Aguarde...`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;`,
               `Lendo&nbsp;BC.`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aguarde...`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;`,
               `Gravando&nbsp;BC.`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aguarde...`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;O&nbsp;servico&nbsp;dura`,
               `aproximadamente`,
               `&nbsp;&nbsp;&nbsp;**&nbsp;minutos`,
               `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
            ],
            help: `Cuidado! 
A bateria deve estar carregada.`
         },
         {
            lines: [
               `Todas&nbsp;as&nbsp;chaves`,
               `serao&nbsp;perdidas!`,
               `&nbsp;&lt;OK&gt;&nbsp;Continuar`,
               `&nbsp;&nbsp;&lt;VOLTA&gt;&nbsp;Sair`,
            ],
            help: `As chaves já programadas serão
   apagadas.`
         },
         {
            lines: [
               `&nbsp;`,
               `Ligue&nbsp;a&nbsp;ignicao!`,
               `<br />`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;`,
               `Aguarde...`,
               `<br />`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;`,
               `Desligue&nbsp;a`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ignicao!`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `Numero&nbsp;chaves:&nbsp;*`,
               `Programar&nbsp;mais?`,
               `<br />`,
               `(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;`,
               `Aguarde...`,
               `<br />`,
               `<br />`,
            ],
            help: ``
         },
         {
            lines: [
               `&nbsp;&nbsp;Procedimento`,
               `&nbsp;&nbsp;&nbsp;Concluido!`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
               `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
            ],
            help: `   Tecle OK!`
         },
         {
            lines: [
               `Desligue&nbsp;a&nbsp;chave`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
               `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
               `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
            ],
            help: ``
         },
         {
            lines: [
               `Alerta!&nbsp;Nao&nbsp;dar`,
               `&nbsp;partida&nbsp;com&nbsp;o`,
               `OBDMAP&nbsp;Conectado`,
               `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
            ],
            help: ``
         },
      ]
   }
   ];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{
   label: `Erro de Comunicacao! `,
   screens: [
      `&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;de`,
      `&nbsp;&nbsp;Comunicacao!`,
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
      `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
   ],
   causes: [
      `Defeito no veículo, parte elétrica,`, `Software do OBDMap desatualizado,`, `Má conexão dos acessórios.`,],
   solutions: [
      `	Conferir se a bateria está carregada,`, `	Conferir parte elétrica do veículo, fusíveis, etc,`, `	Conferir se utiliza cabo universal e adaptador A3,`, `	Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`, `	Desconectar bateria, aguardar 10 segundos e conectar novamente,`, `	Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador (o veículo pode não conter todos os módulos),`, `	Repita o procedimento,`, `	Caso o erro persista, informe ao suporte as questões acima.`,]
},

{
   label: `Falha na rede CAN!!! `,
   screens: [
      `&nbsp;&nbsp;&nbsp;&nbsp;Falha&nbsp;na`,
      `&nbsp;&nbsp;rede&nbsp;CAN!!!`,
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
      `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
   ],
   causes: [
      `Não foi possível estabelecer uma comunicação com o veículo, devido a falha na rede CAN;`, `O veículo apresenta defeitos elétricos;`,],
   solutions: [
      `Verificar instalação elétrica;`, `Verificar se os módulos não estão com defeito.`,]
},

{
   label: `Senha Incorreta! `,
   screens: [
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Senha`,
      `&nbsp;&nbsp;&nbsp;Incorreta!`,
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
      `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
   ],
   causes: [
      `A senha inserida está incorreta,`, `Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. (dependendo do sistema)`,],
   solutions: [
      `Conferir a senha digitada,`, `Aguardar x tempo com a ignição ligada e tentar novamente com a senha correta. (dependendo do sistema)`,]
},

{
   label: `Erro na Programacao! `,
   screens: [
      `&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
      `&nbsp;&nbsp;Programacao!`,
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
      `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
   ],
   causes: [
      `Bateria do telecomando está fraca,`, `As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`, `O telecomando não está no interior do veículo,`, `A chave não está na ignição,`, `A programação não foi completada,`, `O transponder não está programado no carro,`, `Defeito no carro, parte elétrica, sensores de aproximação.`,],
   solutions: [
      `Verifique a bateria do telecomando,`, `Verifique as antenas do sistema de aproximação no teto do veículo,`, `Coloque o telecomando no interior do veículo,`, `Coloque a chave na ignição,`, `Conferir se o transponder está programado ao veículo,`, `Refazer o procedimento novamente,`, `Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},

{
   label: `Erro no Transponder! `,
   screens: [
      `&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;no`,
      `&nbsp;&nbsp;Transponder!`,
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
      `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
   ],
   causes: [
      `O transponder não é válido`, `A chave não tem transponder`, `O transponder pode estar com defeito`, `A identificação do transponder não está correta`,],
   solutions: [
      `Realize uma leitura do transponder e confira se é o mesmo indicado pelo manual`, `Verifique a procedência do transponder e se o mesmo é de boa qualidade`, `Tente realizar a codificação com outro transponder de lote diferente`, `Repita o procedimento`, `Em caso de dúvida, contate o suporte`,]
},

{
   label: `Senha nao Encontrada! `,
   screens: [
      `&nbsp;&nbsp;&nbsp;Senha&nbsp;nao`,
      `&nbsp;&nbsp;Encontrada!`,
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
      `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
   ],
   causes: [
      `Arquivo da ECU está corrompido,`, `Arquivo inválido da ECU,`, `A senha da ECU pode estar resetada.`,],
   solutions: [
   ]
},

{
   label: `Veiculo incompativel! `,
   screens: [
      `&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
      `&nbsp;incompativel!`,
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
      `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
   ],
   causes: [
      `O sistema do veículo está fora da aplicação, mesmo se o modelo estiver na faixa de anos`, `A função pode estar desatualizada`,],
   solutions: [
      `Caso o veículo esteja nos anos de aplicação, contate o suporte`, `Caso não esteja, fique atento as próximas atualizações `,]
},

{
   label: `Entre em contato com o suporte tecnico [A.K.A.**]`,
   screens: [
      `Entre&nbsp;em&nbsp;contato`,
      `&nbsp;com&nbsp;o&nbsp;suporte`,
      `&nbsp;&nbsp;&nbsp;&nbsp;tecnico`,
      `&nbsp;&nbsp;&nbsp;[A.K.A.**]`,
   ],
   causes: [
      `Função desatualizada`, `Erro no Hardware`,],
   solutions: [
      `Contate o suporte técnico`,]
},

{
   label: `Erro no modulo Bluetooth!`,
   screens: [
      `&nbsp;`,
      `&nbsp;Erro&nbsp;no&nbsp;modulo`,
      `&nbsp;&nbsp;&nbsp;Bluetooth!`,
      `<br />`,
   ],
   causes: [
      `O módulo bluetooth pode estar com defeito`, `O cabo USB pode estar conectado, sem necessidade`,],
   solutions: [
      `Se o cabo USB estiver conectado, retire-o e repita o procedimento`, `Caso não esteja, envie o OBDMAP para a assistência técnica`,]
},

{
   label: `Erro interno codigo: ** `,
   screens: [
      `&nbsp;&nbsp;Erro&nbsp;interno`,
      `&nbsp;&nbsp;&nbsp;codigo:&nbsp;**`,
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
      `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
   ],
   causes: [
      `Ocorreu um erro inesperado internamente no OBDMAP`, `O veículo pode estar com defeito`, `O OBDMAP pode estar com defeito`, `A função escolhida pode estar desatualizada`,],
   solutions: [
      `Confira a Rede CAN do veículo`, `Confira parte elétrica, fusíveis, etc`, `Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`, `Repita o procedimento`, `Caso o erro persista, informe ao suporte as questões acima, bem como o código do "Erro Interno"`,]
},

{
   label: `Sem comunicacao com o veiculo ou veiculo incompativel!`,
   screens: [
      `Sem&nbsp;comunicacao`,
      `&nbsp;com&nbsp;o&nbsp;veiculo`,
      `&nbsp;&nbsp;&nbsp;ou&nbsp;veiculo`,
      `&nbsp;incompativel!`,
   ],
   causes: [
      `O veículo pode não estar na aplicação`, `O veículo pode estar com defeito`, `O OBDMAP ou acessórios podem estar com defeito`, `A função escolhida pode estar desatualizada`,],
   solutions: [
      `Verifique a aplicação (isso implica nos modelos, anos, sistemas e hardware)`, `Confira a Rede CAN do veículo`, `Confira parte elétrica, fusíveis, etc`, `Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`, `Repita o procedimento`, `Caso o erro persista, informe ao suporte as questões acima`,]
},

{
   label: `Use o cabo CAN ou adap. A3 CAN!`,
   screens: [
      `&nbsp;`,
      `Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
      `ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
      `<br />`,
   ],
   causes: [
      `O cabo que está conectado não é o cabo CAN ou o Adaptador A3`,],
   solutions: [
      `Conecte o cabo universal e o adaptador A3 ou o cabo CAN e repita o procedimento`,]
},

{
   label: `Erro Desconhecido (**) `,
   screens: [
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Erro`,
      `&nbsp;&nbsp;Desconhecido`,
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(**)`,
      `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
   ],
   causes: [
      `Ocorreu uma falha não esperada`,],
   solutions: [
      `Repita o procedimento e se atente as mensagens do OBDMAP`, `Caso persista, contate o suporte técnico`,]
},

{
   label: `Alerta! Nao dar partida com o OBDMAP Conectado `,
   screens: [
      `Alerta!&nbsp;Nao&nbsp;dar`,
      `&nbsp;partida&nbsp;com&nbsp;o`,
      `OBDMAP&nbsp;Conectado`,
      `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
   ],
   causes: [
      `Informação para evitar falhas nos módulos CAN devido a pico de tensão`,],
   solutions: [
   ]
},

{
   label: `Erro interno PP-PG 0* `,
   screens: [
      `&nbsp;&nbsp;Erro&nbsp;interno`,
      `&nbsp;&nbsp;&nbsp;&nbsp;PP-PG&nbsp;0*`,
      `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
      `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
   ],
   causes: [
   ],
   solutions: [
   ]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
