//Capa
nomeCarga = "Programação de Chaves VW Imob6 Painel VDO Tipo7 (Amarok 15-17)";
revCarga = "Rev. 6";
dataManual = "Outubro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 8 chaves para o veículo com chave válida.`,
`Este procedimento é somente via diagnose. É possível adicionar chaves, onde as chaves`,
`anteriores continuarão funcionando normalmente no veículo, ou apagar as chaves antigas;`,
`caso queira manter alguma das chaves antigas, basta reprogramá-las.`,
`Programação de até 8 chaves para o veículo sem chave válida.`,
`É necessário desmontar o painel e colocá-lo em modo de serviço em bancada utilizando o`,
`cabo MCU (Página 21) antes de programar as chaves. É possível adicionar chaves, onde as`,
`chaves anteriores continuarão funcionando normalmente no veículo, ou apagar as chaves`,
`antigas, caso queira manter alguma das chaves antigas, basta reprogramá-las.`,
`<obs>`,
`Observações:`,
`- Quando colocar o painel em Modo de Serviço, mas ainda não estiver finalizada a`,
`programação por diagnose no mesmo veículo, não é possível iniciar um novo procedimento`,
`de programação de chaves. Neste caso é necessário realizar o procedimento de`,
`programação por diagnose até o final, ou utilizar a função de Gravar Backup no painel com`,
`acompanhamento do suporte técnico.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Amarok 2.0",
years: "2015 a 2017"
},
];
applicationObs = createObs("• Além da aplicação, o painel do veículo deve ser do fabricante VDO / Continental e ter seu", "hardware igual aos mostrados em Identificando e desmontando o painel (Página 17)", "• Alguns veículos é necessário utilizar uma chave nova canivete original Megamos Crypto")createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "Utilize o transponder Megamos ID48 NOVO! <br />Se não for utilizado um<br />transponder novo o<br />procedimento pode não ser<br />bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO.jpg"},

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

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "", 
ballon: "Destravando o<br />volante para<br />facilitar o acesso<br />ao painel", 
image: "/images/Funções Específicas/OBD0252 - Programação de Chaves VW Imob6 Painel VDO Tipo7 (Amarok 15-17)/Passo 1.jpg"},

{title: "", 
description: "", 
ballon: "Retire a peça<br />mostrada ao<br />lado.", 
image: "/images/Funções Específicas/OBD0252 - Programação de Chaves VW Imob6 Painel VDO Tipo7 (Amarok 15-17)/Passo 2.jpg"},

{title: "", 
description: "", 
ballon: "Utilize chave Torx<br />T15 para retirar<br />os parafusos que<br />prendem o<br />painel.", 
image: "/images/Funções Específicas/OBD0252 - Programação de Chaves VW Imob6 Painel VDO Tipo7 (Amarok 15-17)/Passo 3.jpg"},

{title: "", 
description: "", 
ballon: "Levante a trava de cor<br />rosa para retirar o<br />conector do painel.Levante a trava de cor<br />rosa para retirar o<br />conector do painel.", 
image: "/images/Funções Específicas/OBD0252 - Programação de Chaves VW Imob6 Painel VDO Tipo7 (Amarok 15-17)/Passo 4.jpg"},

{title: "", 
description: "", 
ballon: "Utilize chave Torx<br />T8 para desmontar<br />o painel.", 
image: "/images/Funções Específicas/OBD0252 - Programação de Chaves VW Imob6 Painel VDO Tipo7 (Amarok 15-17)/Passo 5.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "Área de solda do cabo MCU.", 
image: "/images/Funções Específicas/OBD0252 - Programação de Chaves VW Imob6 Painel VDO Tipo7 (Amarok 15-17)/Localizando os pontos de soldagem do cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Vermelho 2 => Fio Preto 3 => Fio Verde 4 => Fio Cinza", 
image: "/images/Funções Específicas/OBD0252 - Programação de Chaves VW Imob6 Painel VDO Tipo7 (Amarok 15-17)/Localizando os pontos de soldagem dos fios do cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Soldado os fios<br />do cabo MCU na<br />placa do painel.", 
image: "/images/Funções Específicas/OBD0252 - Programação de Chaves VW Imob6 Painel VDO Tipo7 (Amarok 15-17)/Soldado os fios do cabo MCU na placa.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Amarok`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`15-17`], help: `Tecle OK`, menu: 1000},
{lines: [`Compatibilidade`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves com chave válida`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Amarok`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`15-17`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves sem chave válida`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Amarok`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`15-17`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando procedimento de Modo de Serviço`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Amarok`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Modo de Servico`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Transponder Rejeitado! `,
screens: [
`&nbsp;&nbsp;Transponder`,
`&nbsp;&nbsp;&nbsp;Rejeitado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`• O transponder já se encontra programado e travado,`,`• O transponder utilizado já foi programado em outro veículo,`,`• O transponder utilizado não é um ID48 Novo.`,],
solutions: [
`• Utilize um transponder ID48 virgem.`,]
},

{ label: `Atencao! Painel e a ECU nao casados! <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Atencao!`,
`&nbsp;Painel&nbsp;e&nbsp;a&nbsp;ECU`,
`&nbsp;&nbsp;nao&nbsp;casados!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
`• Foi detectado que o painel e a ECU pertencem a veículos diferentes.`,``,],
solutions: [
`• O procedimento de programação de chaves pode ser completado, porém, se o kit não for`,`casado, o veículo não dará partida, e indicará IMOBILIZADOR ATIVADO, IMOBILIZER ou SAFE no`,`display do Painel.`,]
},

{ label: `Transponder Bloqueado! `,
screens: [
`&nbsp;&nbsp;Transponder`,
`&nbsp;&nbsp;&nbsp;Bloqueado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder ID46 virgem.`,]
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

{ label: `Os dados dos paineis sao Incompativeis! <OK>`,
screens: [
`&nbsp;&nbsp;Os&nbsp;dados&nbsp;dos`,
`&nbsp;&nbsp;paineis&nbsp;sao`,
`&nbsp;Incompativeis!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
`• O painel que está no veículo, não é o mesmo que foi colocado em Modo de Serviço.`,],
solutions: [
`• Verifique o procedimento correto conforme indica o manual;`,`• Em caso de dúvidas, contate o suporte técnico.`,]
},

{ label: `Chave invalida! <OK>`,
screens: [
`<br />`,
`Chave&nbsp;invalida!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`A chave que iniciou o procedimento não é válida,`,`A tentativa de programar a primeira chave sem ter uma chave válida falhou,`,`O painel está esperando apresentação de mais chaves.`,],
solutions: [
`• Utilizar uma chave válida.`,]
},

{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`• Cabo CAN ou A3 com defeito.`,],
solutions: [
`• Contate o suporte técnico.`,``,]
},

{ label: `Aguardando chaves ou painel corrompido. <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;Aguardando`,
`chaves&nbsp;ou&nbsp;painel`,
`&nbsp;&nbsp;corrompido.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
`• Painel do carro pode estar corrompido;`,`• O veículo está em uma condição em que uma programação foi iniciada e não foi finalizada com`,`sucesso.`,],
solutions: [
`• Contate o suporte técnico.`,]
},

{ label: `Acesso Negado! * <OK>`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`• Veículo fora da aplicação.`,],
solutions: [
`• Verificar aplicação;`,`• Contate o suporte técnico.`,]
},

{ label: `Versao Invalida! <OK>`,
screens: [
`<br />`,
`Versao&nbsp;Invalida!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`• Veículo fora da aplicação.`,],
solutions: [
`• Verificar aplicação;`,`• Contate o suporte técnico.`,]
},

{ label: `Atencao! Painel desconectado! <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Atencao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Painel`,
`&nbsp;desconectado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
`• O Painel está desconectado.`,],
solutions: [
`• Conecte o painel;`,`• Contate o suporte técnico.`,]
},

{ label: `Erro na Identificacao <OK> p/ repetir`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;Identificacao`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`• Mau contato nos fios do cabo MCU;`,`• Fios do cabo MCU soldado em posições erradas.`,],
solutions: [
`• Conferir a correta soldagem do cabo MCU;`,`• Conferir a boa fixação do cabo MCU com o OBDMap.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`<br />`,
`&nbsp;Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`• Painel com problema;`,`• Curto entre os fios do cabo MCU;`,`• Cabo MCU soldado em posição errada.`,],
solutions: [
`• Conferir a correta soldagem do cabo MCU;`,`• Conferir bom estado do painel.`,]
},

{ label: `O Painel esta em Modo de Servico!`,
screens: [
`&nbsp;`,
`O&nbsp;Painel&nbsp;esta&nbsp;em`,
`Modo&nbsp;de&nbsp;Servico!`,
`<br />`,
],
causes: [
`• O painel já se encontra em Modo de Serviço, realizado por outro equipamento.`,``,],
solutions: [
`• Em caso de dúvida contate o suporte.`,]
},

{ label: `Erro na Verificacao <OK> p/ repetir`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;&nbsp;Verificacao`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`• Mau contato nos fios do cabo MCU;`,`• Fios do cabo MCU soldado em posições erradas.`,],
solutions: [
`• Conferir a correta soldagem do cabo MCU;`,`• Conferir a boa fixação do cabo MCU com o OBDMap.`,]
},

{ label: `Erro na gravacao <OK> p/ repetir.`,
screens: [
`<br />`,
`Erro&nbsp;na&nbsp;gravacao`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir.`,
`<br />`,
],
causes: [
`• Mau contato nos fios do cabo MCU;`,`• Fios do cabo MCU soldado em posições erradas`,],
solutions: [
`• Conferir a correta soldagem do cabo MCU;`,`• Conferir a boa fixação do cabo MCU com o OBDMap.`,]
},

{ label: `Erro na leitura <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`• Mau contato nos fios do cabo MCU;`,`• Fios do cabo MCU soldado em posições erradas.`,],
solutions: [
`• Conferir a correta soldagem do cabo MCU;`,`• Conferir a boa fixação do cabo MCU com o OBDMap.`,]
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
