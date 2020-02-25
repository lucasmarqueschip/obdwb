//Capa
nomeCarga = `Manual Carga -  OBD0005<br />IMMO 3 GM - Valeo Leitura da Senha e Programação de Chaves`;
revCarga = `Rev. 2`;
dataManual = `Agosto 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha do imobilizador IMMO3 GM em bancada.`,
`Leitura da senha do imobilizador IMMO3 GM no veículo.`,
`Programação de chaves do imobilizador IMMO3 GM (Valeo).`,
`Apagar chaves do imobilizador IMMO3 GM (Valeo).`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Blazer 2.4`,
years: `2002 a 2007`
},
{
manufacturer: `GM`,
model: `Blazer 2.8`,
years: `2002 a 2012`
},
{
manufacturer: `GM`,
model: `S10 2.4`,
years: `2002 a 2007`
},
{
manufacturer: `GM`,
model: `S10 2.8`,
years: `2002 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Transponder PCF7936 (ID46) virgem.`, 
image: `/images/Transponders/PCF7936 (ID46) Crypto 2 virgem.jpg`},

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
ballon: `Cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A2 DESCONECTADOS.jpg`},

{title: `Identificando e desmontando o imobilizador IMMO3`, 
description: `Para realizar o procedimento em bancada é necessário já ter o imobilizador fora do veículo. Para retirar o imobilizador do veículo é preciso retirar o tambor de ignição. Se não for possível realizar o procedimento em bancada veja como realizar no próprio veículo no item Leitura da senha do imobilizador IMMO3 GM no veículo. <br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/ID IMOB.jpg`},

{title: ``, 
description: `Para realizar o procedimento em bancada é necessário já ter o imobilizador fora do veículo. Para retirar o imobilizador do veículo é preciso retirar o tambor de ignição. Se não for possível realizar o procedimento em bancada veja como realizar no próprio veículo no item Leitura da senha do imobilizador IMMO3 GM no veículo. <br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Desmontando o imob IMMO3.jpg`},

{title: `Localizando e conectando a pinça soic na memória:`, 
description: `Atenção: O pino '1' da pinça deve coincidir com o pino '1'da memória soic. Quando não existir marcação do pino '1' no corpo do componente deve-se olhar o chip de frente, de modo a ler seus dados da esquerda para a direita. Neste caso '24C04', o pino '1' deste componente é o primeiro da esquerda do lado de baixo.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Conectando a pinça no IMMO3.jpg`},

{title: `Identificando e desmontando o imobilizador no veículo`, 
description: ``, 
ballon: `Para o acesso ao imobilizador deve-se retirar a tampa de proteção que se encontra debaixo do volante. Para soltar os dois parafusos que a prendem, utilizar chave Torks 20.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando o imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: `Puxar a tampa de proteção para baixo para acesso ao imobilizador.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando o imobilizador1.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: É necessário retirar o chicote do imobilizador pois se a pinça soic for conectada no imobilizador com o chicote também conectado, pode danificar o imobilizador e o Obdmap. Pressionar as travas indicadas na foto para retirar o chicote.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Retirando o chicote.jpg`},

{title: ``, 
description: ``, 
ballon: `Vista do chicote já retirado.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Chicote já retirado.jpg`},

{title: ``, 
description: ``, 
ballon: `Com uma chave de fenda levante a tampa de proteção do imobilizador.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Desmontando o imobilizador 2 imagens.jpg`},

{title: `Localizando e conectando a pinça na memória :`, 
description: ``, 
ballon: `Localização da memória a ser lida.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando e conectando a pinça 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Posição do pino '1' da memória indicado pela seta.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando e conectando a pinça 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Conectando a pinça na memória.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando e conectando a pinça 3.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = false;
services = 
[
{title: `Realizando a Leitura da senha do imobilizador IMMO3 GM no veículo:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`], help: `Tecle OK`, menu: 1000},
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
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Anote a senha.`
},
{lines: [
`&nbsp;`,
`Operação`,
`Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
]
}, {title: `Realizando a Leitura da senha do imobilizador IMMO3 GM em bancada:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`S10`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Anote a senha.`
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
`Operação`,
`Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
]
}, {title: `Realizando programação de chaves do imobilizador IMMO3 GM (Valeo)`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Para realizar a programação de chaves, é necessária a senha do imobilizador que é composta de quatro dígitos. Caso não tenha esta senha, é necessário realizar a leitura da senha IMMO3 via pinça. Com a senha em mãos, seguir os seguintes passos no visor do OBDMap:`], help: `Tecle OK`, menu: 1000},
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
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
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
`Chave`,
`Programada!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando o apagamento de chaves IMMO3 GM (Valeo)`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Para apagar as chaves, é necessária a senha do imobilizador que é composta de quatro dígitos. Caso não tenha esta senha, é necessário realizar a leitura da senha IMMO3 via pinça. Com a senha em mãos, seguir os seguintes passos no visor do OBDMap:`], help: `Tecle OK`, menu: 1000},
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
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
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
`Chave&nbsp;apagada!`,
`<br />`,
`<br />`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},
{ label: `Curto!`,
screens: [
`&nbsp;`,
`Curto!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente,`,`O imobilizador está com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`Gravação!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou módulo com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado do módulo,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},
{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`leitura!`,
`<br />`,
],
causes: [
`·	Mau contato da pinça com a memória,`,`·	Mau contato da pinça ou cabo MCU com o OBDMap,`,`·	Módulo com problema,`,`·	A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`·	Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`·	Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`·	Conferir a correta soldagem do cabo MCU,`,`·	Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos,`,`·	Conferir bom estado do módulo,`,`·	Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},
{ label: `Senha Incorreta!`,
screens: [
`Senha&nbsp;`,
`Incorreta!`,
`Tecle&nbsp;OK&nbsp;para&nbsp;continuar!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta.`,],
solutions: [
`Inserir a senha correta.`,]
},
{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Comunicação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A2,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
