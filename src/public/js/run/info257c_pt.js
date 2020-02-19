//Capa
nomeCarga = "Programação de chaves VW Imob6 (Seat Ibiza 11-14)";
revCarga = "Rev. 0";
dataManual = "Janeiro 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 8 chaves para o veículo com chave válida. `,
`Este procedimento é somente via diagnose. É possível adicionar chaves, onde as chaves anteriores continuarão funcionando normalmente no veículo, ou apagar as chaves antigas, caso queira manter alguma das chaves antigas, basta reprogramá-las. `,
``,
`Programação de até 8 chaves para o veículo sem chave válida. `,
``,
`É necessário desmontar o painel e coloca-lo em modo de serviço em bancada utilizando o cabo MCU (Página26) antes de programar as chaves. É possível adicionar chaves, onde as chaves anteriores continuarão funcionando normalmente no veículo, ou apagar as chaves antigas, caso queira manter alguma das chaves antigas, basta reprogramá-las. `,
`<obs>`,
`Observação: `,
`Quando colocar o painel em Modo de Serviço, mas ainda não estiver finalizada a programação por diagnose no mesmo veículo, não é possível iniciar um novo procedimento de programação de chaves. Neste caso é necessário realizar o procedimento de programação por diagnose até o final, ou utilizar a função de Gravar Backup no painel com acompanhamento do suporte técnico.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Seat",
model: "Ibiza 1.2",
years: "2011 a 2014"
},
{
manufacturer: "Seat",
model: "Ibiza 1.4",
years: "2011 a 2014"
},
{
manufacturer: "Seat",
model: "Ibiza 1.6",
years: "2011 a 2014"
},
{
manufacturer: "Seat",
model: "Ibiza 2.0",
years: "2011 a 2014"
},
];
applicationObs = createObs("Observação: Além da aplicação, o painel do veículo deve ser do fabricante VDO / Continental e ter seu hardware igual aos mostrados em Identificando e desmontando o painel (Página 22).", undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "Utilize o transponder ID48-CAN (TP23) NOVO! Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido!", 
image: "/images/Transponders/ID48-CAN (TP23).jpg"},

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
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "", 
ballon: "Abaixe o volante para facilitar a desmontagem.", 
image: "/images/Funções Específicas/OBD0168 Programação de chaves Amarok VDO Imob6 T2/Identificando e desmontando o painel.jpg"},

{title: "", 
description: "", 
ballon: "Retire a peça mostrada ao lado.", 
image: "/images/Funções Específicas/OBD0168 Programação de chaves Amarok VDO Imob6 T2/Desmontando o painel.jpg"},

{title: "", 
description: "", 
ballon: "Utilize chave Torx T15 para retirar os parafusos que prendem painel.", 
image: "/images/Funções Específicas/OBD0168 Programação de chaves Amarok VDO Imob6 T2/Desmontando o painel 2.jpg"},

{title: "", 
description: "", 
ballon: "Levante a trava de cor rosa para retirar o conector do painel.", 
image: "/images/Funções Específicas/OBD0168 Programação de chaves Amarok VDO Imob6 T2/Desmontando o painel 3.jpg"},

{title: "", 
description: "", 
ballon: "Utilize chave Torx T8 para desmontar o painel.", 
image: "/images/Funções Específicas/OBD0168 Programação de chaves Amarok VDO Imob6 T2/Desmontando o painel 4.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0257/picPainel1.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0257/picPainel2.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0257/picPainel3.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de chaves com chave válida`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Seat`], help: `Tecle OK`, menu: 1000},
{lines: [`Ibiza`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`13-14`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves sem chave válida`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Seat`], help: `Tecle OK`, menu: 1000},
{lines: [`Ibiza`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`13-14`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando procedimento de Modo de Serviço`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado! <OK>`,
screens: [
`&nbsp;`,
`&nbsp;Acesso&nbsp;Negado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do módulo.`,]
},

{ label: `Erro na gravacao <OK> p/ repetir.`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir.`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou Módulo com problema,`,`A pinça foi conectada em outro componente,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado do Módulo,`,]
},

{ label: `Erro na leitura <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Mau contato na pinça com o OBDMap,`,`A pinça foi conectada em outro componente,`,`Mau contato nos fios do cabo MCU,`,`Fios do cabo MCU soldado em posições erradas.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir a correta soldagem do cabo MCU,`,`Conferir boa fixação da pinça ou cabo MCU com o OBDMap.`,]
},

{ label: `Chave invalida! <OK>`,
screens: [
`&nbsp;`,
`Chave&nbsp;invalida!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`A chave que iniciou o procedimento não é válida,`,`A tentativa de programar a primeira chave sem ter uma chave válida falhou,`,`O painel está esperando apresentação de mais chaves.`,],
solutions: [
`Utilizar uma chave válida quando dispor de uma,`,`Quando não dispor de uma chave válida e a tentativa de programar através da função "Programação de chaves com chave válida" falhar é necessário fazer a Liberação do painel.`,`Verificar se o número de chaves programadas esta coerente com a mostrado no painel.`,]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`&nbsp;nao&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Painel Invalido! ********** <OK>`,
screens: [
`&nbsp;`,
`Painel&nbsp;Invalido!`,
`**********&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Transponder Bloqueado! <OK>`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;Transponder`,
`Bloqueado!&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder ID46 virgem.`,]
},

{ label: `Procedimento Incompleto! <OK>`,
screens: [
`&nbsp;&nbsp;Procedimento`,
`&nbsp;&nbsp;Incompleto!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Não foi realizada corretamente a liberação do painel.`,],
solutions: [
`Realizar a liberação do painel.`,`Em caso de dúvida contate o suporte.`,]
},

{ label: `Aguardando chaves ou painel corrompido. <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;Aguardando`,
`chaves&nbsp;ou&nbsp;painel`,
`&nbsp;&nbsp;corrompido.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
`O número de chaves escolhidos não foi o número de chaves programadas,`,`Painel do carro pode estar corrompido.`,],
solutions: [
`Verificar se o número de chaves mostrado no painel corresponde ao número de chaves desejado para a programação.`,`Observações:`,`Condição 1: Veículo não aceita chaves: Quando o procedimento é iniciado, mas se`,`observa pelo painel do veículo que as chaves não estão sendo adicionadas, pode ser`,`devido ao transponder utilizado não ser o correto.`,`Condição 2: Painel apagado: A bateria está muito fraca. Desconecte a bateria, aguarde 10 segundos e reconecte. Se necessário dê uma carga na bateria.`,]
},

{ label: `Erro na Identificacao <OK> p/ repetir`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;Identificacao`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato nos fios do cabo MCU;`,`Fios do cabo MCU soldado em posições erradas.`,``,``,``,],
solutions: [
`Conferir a correta soldagem do cabo MCU;`,`Conferir a boa fixação do cabo MCU com o OBDMap.`,``,``,]
},

{ label: `Erro na Verificacao <OK> p/ repetir`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;&nbsp;Verificacao`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato nos fios do cabo MCU;`,`Fios do cabo MCU soldado em posições erradas.`,``,``,],
solutions: [
`Conferir a correta soldagem do cabo MCU;`,`Conferir a boa fixação do cabo MCU com o OBDMap.`,``,``,]
},

{ label: `Erro interno codigo **`,
screens: [
`&nbsp;`,
`&nbsp;Erro&nbsp;interno`,
`&nbsp;&nbsp;&nbsp;codigo&nbsp;**`,
`<br />`,
],
causes: [
],
solutions: [
]
},

{ label: `Erro de Comunicacao! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;de`,
`&nbsp;&nbsp;Comunicacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`	Conferir se a bateria está carregada,`,`	Conferir parte elétrica do veículo, fusíveis, etc,`,`	Conferir se utiliza cabo universal e adaptador A3,`,`	Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`	Desconectar bateria, aguardar 10 segundos e conectar novamente,`,`	Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador (o veículo pode não conter todos os módulos),`,`	Repita o procedimento,`,`	Caso o erro persista, informe ao suporte as questões acima.`,]
},

{ label: `Veiculo incompativel! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;incompativel!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Veículo fora da aplicação.`,],
solutions: [
`Recomenda-se não realizar o procedimento;`,`Consulte o suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
