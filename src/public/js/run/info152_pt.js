//Capa
nomeCarga = `Preparação de transponders e programação de chaves Fox 2013 painel VDO (Imob 5)`;
revCarga = `Rev. 4`;
dataManual = `Janeiro 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Esta carga faz a programação de chaves para o painel VDO com memória 24C32 e sistema VW Imob5 (com o hardware do painel igual ao mostrado no manual . Para isso é necessário primeiramente preparar as chaves utilizando a pinça/MCU e o módulo de transponder com o painel em bancada. Depois de preparado as chaves ainda é necessário fazer a programação de chaves. Temos basicamente duas situações de programações de chaves:`,
``,
`1ª Situação - Adição de chaves:<br/>É necessário utilizar uma "chave válida", ou seja, uma chave que já esteja programada no veículo para iniciar o procedimento, e em seguida passar pelo procedimento as outras chaves que foram preparadas em bancada e as demais chaves que já estavam funcionando.`,
``,
`2ª Situação - Perda de todas as chaves:<br/>Neste caso para iniciar a programação é necessário utilizar uma chave que foi preparada pela função "1ª chave válida", esta chave não dará a partida no veículo antes da programação, mas será aceita como uma chave válida para iniciar o procedimento de programação.<br/><br/>A programação de chaves apaga todas as chaves no início do procedimento, portanto é necessário passar pelo procedimento todas as chaves que se deseja manter funcionando.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `VW`,
model: `Fox 1.0`,
years: `2013 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação:`, `Somente para painel igual ao mostrado neste manual.`, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize o transponder Megamos ID48-CAN (Dedicado a VW).`, 
image: `/images/Transponders/Transponder Megamos ID48-CAN VW.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize o cabo Universal + adaptador A1.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg`},

{title: `Retirando o painel do veículo:`, 
description: ``, 
ballon: `Remova a capa que protege os 2 parafusos fixadores.`, 
image: `/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Retirando o painel do veículo.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova os 2 parafusos fixadores do painel.`, 
image: `/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Removendo o painel.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, remova o conector do painel.<br />Observação: É aconselhável utilizar uma flanela sobre a capa superior do volante para evitar danos no momento de retirar o painel.`, 
image: `/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Removendo o painel 2.jpg`},

{title: `Identificando o painel:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Identificando o painel.jpg`},

{title: `Procedimento via pinça`, 
description: `Localizando e conectando a pinça na memória 24C32:`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Localizando e conectando a pinça na memória 24C32.jpg`},

{title: ``, 
description: `Localizando e conectando a pinça na memória 24C32:`, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Conectando a pinça na memória 24C32.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Todos os acessórios conectados.jpg`},

{title: `Procedimento via cabo MCU:`, 
description: `Localizando os pontos de soldagem do cabo MCU:`, 
ballon: `Área de soldagem do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Localizando os pontos de soldagem do cabo MCU.jpg`},

{title: ``, 
description: `Localizando os pontos de soldagem do cabo MCU:`, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU;<br />1 => Fio Verde<br />2 => Fio Vermelho<br />3 => Fio Cinza<br />4 => Fio Preto`, 
image: `/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Localizando os pontos de soldagem do cabo MCU 2.jpg`},

{title: ``, 
description: `Localizando os pontos de soldagem do cabo MCU:`, 
ballon: `Cabo MCU conectado no painel.`, 
image: `/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Cabo conectado no painel.jpg`},

{title: `Todos os acessorios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0152 Preparação de transponders e programação de chaves Fox 2013/Todos os acessórios conectados2.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do Fox fica localizada na área C5 da imagem.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/C5.jpg`},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a preparação da primeira chave válida:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Fox Imob5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fox Imob5`, `>VDO`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`1a&nbsp;Chave&nbsp;Valida`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Posicione&nbsp;transp`,
`&nbsp;ID48-CAN&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK`
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
`&nbsp;Conecte&nbsp;o&nbsp;cabo`,
`&nbsp;&nbsp;MCU/Pinca&nbsp;no`,
`&nbsp;painel&nbsp;segundo`,
`&nbsp;o&nbsp;manual&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;Painel...`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`SENHA:&nbsp;*****`,
`<br />`,
`<br />`,
],
help: `Anote a senha de 5 dígitos.`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;Painel.&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Posicione&nbsp;transp`,
`&nbsp;ID48-CAN&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK`
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
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Primeira chave gerada com sucesso.`
},
]
}, {title: `Realizando a preparação de outras chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Fox Imob5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fox Imob5`, `>VDO`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`Outras&nbsp;Chaves`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo`,
`&nbsp;&nbsp;MCU/Pinca&nbsp;no`,
`&nbsp;painel&nbsp;segundo`,
`&nbsp;o&nbsp;manual&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;Painel...`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`SENHA:&nbsp;*****`,
`<br />`,
`<br />`,
],
help: `Anote a senha de 5 dígitos.`
},
{lines: [
`&nbsp;`,
`Posicione&nbsp;transp`,
`&nbsp;ID48-CAN&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK`
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
`&nbsp;&nbsp;&nbsp;Tranponder`,
`&nbsp;&nbsp;&nbsp;Preparado!`,
`Preparar&nbsp;prox.?`,
`&lt;X&gt;Nao&nbsp;&nbsp;&nbsp;&lt;OK&gt;Sim`,
],
help: `Se desejar preparar mais transponder tecle (OK) SIM e volte ao passo 10 ou tecle (X) NÃO para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Painel Imob5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Imob5`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use`,
`&nbsp;Adaptador&nbsp;A1!`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;&nbsp;Utilize&nbsp;TPD`,
`&nbsp;&nbsp;&nbsp;&nbsp;ID48-CAN`,
`preparado&nbsp;para&nbsp;o`,
`&nbsp;&nbsp;veiculo&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK`
},
{lines: [
`Insira&nbsp;uma&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;valida&nbsp;na`,
`ignicao&nbsp;e&nbsp;tecle`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha lida anteriormente e tecle OK!`
},
{lines: [
`&nbsp;`,
`N.&nbsp;de&nbsp;chaves:`,
`*`,
`<br />`,
],
help: `Insira o número de chaves que deseja programar no veículo. Tecle OK e vá ao
passo 11, ou passo 13 se for somente uma chave.`
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
`Chaves&nbsp;prog:&nbsp;*/8`,
`Insira&nbsp;a&nbsp;proxima`,
`&nbsp;chave,&nbsp;ligue&nbsp;e`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `A partir deste momento todas as chaves deverão ser inseridas em até 60 segundos. Insira a próxima, tecle OK e vá
ao passo 11, ou passo 13 se já tiver inserido todas as chaves.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`Chaves&nbsp;prog:&nbsp;*/8`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro grav. ID48 <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav.&nbsp;ID48`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato no cabo que liga o Modulo de transponder ao OBDMap;`,`Transponder  com problema;`,`O transponder utilizado não é um ID48 virgem;`,`Transponder não esta bem posicionado no Módulo de transponder.`,],
solutions: [
`Conferir a correta posição do transponder no módulo de transponder;`,`Utilizar um transponder ID48 virgem;`,`Conferir a fixação do cabo que liga o módulo de transponder ao OBDMap.`,]
},

{ label: `Painel Invalido!`,
screens: [
`&nbsp;`,
`Painel&nbsp;Invalido!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,`O arquivo do painel esta corrompido.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,`A pinça foi conectada em outro componente,`,`Memória ou Painel com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado do Painel.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Painel ou memória com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,`Curto entre os fios do cabo MCU,`,`Cabo MCU soldado em posição errada.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do Painel;`,`Conferir a correta soldagem do cabo MCU.`,]
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

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`A chave não está na ignição,`,`Defeito no carro, parte elétrica,`,`Transponder não preparado,`,`Transponder não compatível com o veículo,`,`Transponder utilizado não é o ID48-CAN,`,`A chave utilizada para iniciar o procedimento não é uma chave válida para o veículo.`,],
solutions: [
`Coloque a chave na ignição,`,`Refazer o procedimento novamente,`,`Verificar se o transponder utilizado é o ID48-CAN preparado e compatível com o veículo,`,`Verificar se a primeira chave utilizada está válida para o veículo,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},

{ label: `Erro de Comunicacao!`,
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
