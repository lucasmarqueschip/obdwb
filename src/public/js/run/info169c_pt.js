//Capa
nomeCarga = "Programação de chaves Jetta VDO Imob6 T2";
revCarga = "Rev. 8";
dataManual = "Junho 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 8 chaves para o veículo com chave válida.`,
`Este procedimento é somente via diagnose. É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas, onde uma delas deve iniciar o procedimento. Caso as chaves que já funcionavam no veículo não sejam`,
`reprogramadas, elas não funcionarão mais, necessitando fazer a programação novamente.`,
``,
`Programação de até 8 chaves para o veículo sem chave válida.`,
`É necessário ter em mãos todas as chaves a serem programadas e tentar realizar a programação utilizando a função "Programação de chaves com chave válida" (Página 7), se acusar "Chave inválida" será necessário desmontar o painel para fazer a liberação (Página 9). Todas as chaves serão apagadas, funcionando somente as programadas nesse procedimento.`,
`<obs>`,
`Observação: `,
`Quando fizer uma Liberação do painel, mas ainda não estiver finalizada a Programação por diagnose no mesmo veículo, não é possível iniciar um novo procedimento de Programação sem chaves. Neste caso é necessário utilizar a função "Cancelamento do serviço" e acompanhamento do suporte.`,
``,
`Funções adicionais:`,
`Liberação do painel`,
`Necessita desmontagem do painel e soldagem de 4 fios do cabo MCU para fazer a liberação do painel e programar qualquer chave. Esta função deve ser usada se não existir nenhuma chave válida do veículo.`,
``,
`Restauração do painel`,
`A restauração do painel é uma função usada para voltar o painel na condição original antes da liberação do painel realizada pelo OBDMAP. Esta operação não é um procedimento padrão e por isso deve ser acompanhada pelo suporte. Por isso é necessária a entrada do código de acesso.`,
``,
`Cancelamento do serviço`,
`Como a restauração, esse não é um procedimento padrão e deve ser usado somente se houver desistência após já ter feito a liberação do painel. Também será gerado um código de acesso e acompanhado pelo suporte.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Jetta 2.0",
years: "2010 a 2012"
},
{
manufacturer: "VW",
model: "Jetta 2.5",
years: "2010 a 2012"
},
];
applicationObs = createObs("Observação: Além da aplicação, o painel do veículo deve ser do fabricante VDO / Continental e ter seu hardware igual aos mostrados em Identificando e desmontando o painel (Página 12) e utilizar Microcontrolador NEC D70F3425 e memória 24C64, e ter fabricação inferior a 06/2012 como mostrado (Página 12).", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o Transponder ID 48 NOVO! Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO_OBRIGATORIO.jpg"},

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
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "", 
ballon: "A data de fabricação deve ser anterior a 01/06/12, caso contrário o painel não se encaixa na aplicação.", 
image: "/images/Funções Específicas/OBD0169 Programação de chaves Jetta VDO Imob6 T2/Identificando e desmontando o painel 1.jpg"},

{title: "", 
description: "", 
ballon: "Utilize chave Torx T8 para desmontar o painel.", 
image: "/images/Funções Específicas/OBD0169 Programação de chaves Jetta VDO Imob6 T2/Identificando e desmontando o painel 2.jpg"},

{title: "Desmontando e localizando os pontos de soldagem do cabo MCU Modelo A:", 
description: "", 
ballon: "Área de solda do cabo MCU no modelo A.", 
image: "/images/Funções Específicas/OBD0169 Programação de chaves Jetta VDO Imob6 T2/Pontos soldagem modelo A 1.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Preto<br />2 => Fio Vermelho<br />3 => Fio Verde<br />4 => Fio Cinza", 
image: "/images/Funções Específicas/OBD0169 Programação de chaves Jetta VDO Imob6 T2/Pontos soldagem modelo A 2.jpg"},

{title: "", 
description: "", 
ballon: "Soldado os fios do cabo MCU na placa do painel.", 
image: "/images/Funções Específicas/OBD0169 Programação de chaves Jetta VDO Imob6 T2/Pontos soldagem modelo A 3.jpg"},

{title: "Todos os acessórios conectados em bancada:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0169 Programação de chaves Jetta VDO Imob6 T2/Todos os acessórios conectados modelo A.jpg"},

{title: "Desmontando e localizando os pontos de soldagem do cabo MCU Modelo B:", 
description: "", 
ballon: "Área de solda do cabo MCU no modelo B.", 
image: "/images/Funções Específicas/OBD0169 Programação de chaves Jetta VDO Imob6 T2/Pontos soldagem modelo B 1.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Vermelho<br />2 => Fio Preto<br />3 => Fio Verde<br />4 => Fio Cinza", 
image: "/images/Funções Específicas/OBD0169 Programação de chaves Jetta VDO Imob6 T2/Pontos soldagem modelo B 2.jpg"},

{title: "", 
description: "", 
ballon: "Soldado os fios do cabo MCU na placa do painel.", 
image: "/images/Funções Específicas/OBD0169 Programação de chaves Jetta VDO Imob6 T2/Pontos soldagem modelo B 3.jpg"},

{title: "Todos os acessórios conectados em bancada", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0169 Programação de chaves Jetta VDO Imob6 T2/Todos os acessórios conectados modelo B.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de chaves com chave válida`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Jetta`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`10-12`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves sem chave válida`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Jetta`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`10-12`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a liberação do painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Jetta`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Modo de Servico`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a restauração do painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Jetta`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Gravar Arquivo`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o cancelamento do serviço`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Jetta`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Canc. Servico`], help: `Tecle OK`, menu: 1000},

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
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Sistema do veículo diferente da aplicação dessa carga.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Chave invalida!`,
screens: [
`&nbsp;`,
`Chave&nbsp;invalida!`,
`<br />`,
`<br />`,
],
causes: [
`A chave que iniciou o procedimento não é válida,`,`A tentativa de programar a primeira chave sem ter uma chave válida falhou.`,],
solutions: [
`Utilizar uma chave válida quando dispor de uma,`,`Quando não dispor de uma chave válida e a tentativa de programar através da função "Programação de chaves com chave válida" falhar é necessário fazer a Liberação do painel. (Página 9)`,``,]
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

{ label: `Procedimento Incompleto!`,
screens: [
`&nbsp;`,
`Procedimento&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incompleto!`,
`<br />`,
],
causes: [
`Não foi realizada corretamente a liberação do painel.`,],
solutions: [
`Realizar a liberação do painel. (Página 9)`,`Em caso de dúvida contate o suporte.`,]
},

{ label: `Aguardando chaves ou painel corrompido.`,
screens: [
`&nbsp;&nbsp;&nbsp;Aguardando`,
`chaves&nbsp;ou&nbsp;painel`,
`&nbsp;&nbsp;corrompido.`,
`<br />`,
],
causes: [
`O número de chaves escolhidos não foi o número de chaves programadas,`,`Painel do carro pode estar corrompido.`,],
solutions: [
`Verificar se o número de chaves mostrado no painel corresponde ao número de chaves desejado para a programação.`,``,`Observações:`,`Condição 1: Veículo não aceita chaves: Quando o procedimento é iniciado, mas se observa pelo painel do veículo que as chaves não estão sendo adicionadas, pode ser devido ao transponder utilizado não ser o correto.`,`Condição 2: Painel apagado: A bateria esta muito fraca. Desconecte a bateria, aguarde 10 segundos e reconecte. Se necessário dê uma carga na bateria.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
