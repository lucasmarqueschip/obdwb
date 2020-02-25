//Capa
nomeCarga = `Manual Carga -  OBD0137<br />Leitura de Senha e Programação de Chaves (Peugeot 307/Citroën C4 e C5 2008 a 2011)`;
revCarga = `Rev. 4`;
dataManual = `Julho 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha da BSI.<br/> - Para realizar essa função é necessário retirar a BSI do veículo.`,
`Programação de chaves via OBD.<br/> - Com esta função é possível programar até 5 chaves ao veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Citroen`,
model: `C3`,
years: `2013 a 2017`
},
{
manufacturer: `Citroen`,
model: `C3 Picasso`,
years: `2012 a 2015`
},
{
manufacturer: `Citroen`,
model: `C3 Aircross`,
years: `2011 a 2017`
},
{
manufacturer: `Citroen`,
model: `C4 2.0`,
years: `2007 a 2014`
},
{
manufacturer: `Citroen`,
model: `C4 Pallas`,
years: `2008 a 2013`
},
{
manufacturer: `Citroen`,
model: `C4 Picasso`,
years: `2009 a 2014`
},
{
manufacturer: `Citroen`,
model: `C5 2.0`,
years: `2007 a 2012`
},
{
manufacturer: `Peugeot`,
model: `307 1.6`,
years: `2008 a 2012`
},
{
manufacturer: `Peugeot`,
model: `307 2.0`,
years: `2008 a 2012`
},
{
manufacturer: `Peugeot`,
model: `308`,
years: `2012 a 2014`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize o Transponder PCF7936 - ID46 - Virgem!`, 
image: `/images/Transponders/Transponder PCF7936 Carvão.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Utilize o cabo universal Connect`, 
image: `/images/Connect/Acessórios/Adaptador A4.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo Universal.`, 
image: `/images/Acessórios/Cabo Universal.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: `Localizando o BSI:`, 
description: `O BSI dos veículos citados na página 3 fica localizado na posição A5 da imagem.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU na BSI tipo 1:`, 
description: ``, 
ballon: `Para melhor visualização dos pontos a serem soldados, foi separado em área A e B.`, 
image: `/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 1/Localizando os pontos de soldagem do cabo MCU na BSI tipo 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU na Área A:<br />1 => Fio Verde<br />2 => Fio Cinza<br />3 => Fio Azul<br />4 => Fio Amarelo`, 
image: `/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 1/Localizando os pontos de soldagem do cabo MCU na BSI.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU na Área B:<br />5 => Fio Preto<br />6 => Fio Vermelho`, 
image: `/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 1/Localizando os pontos de soldagem do cabo MCU na BSI 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Soldado os fios do cabo MCU na Área A.`, 
image: `/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 1/Fios soldados na area A.jpg`},

{title: ``, 
description: ``, 
ballon: `Soldado os fios do cabo MCU na Área B.`, 
image: `/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 1/Fios soldados na area B.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 1/Todos os acessórios conectados.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU na BSI tipo 2:`, 
description: ``, 
ballon: `Para melhor visualização dos pontos a serem soldados, foi separado em área A e B.`, 
image: `/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 2/Localizando os pontos de soldagem do cabo MCU na BSI tipo 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldado os fios do cabo MCU na área A:<br />1 => Fio Azul<br />2 => Fio Cinza<br />3 => Fio Verde<br />4 => Fio Amarelo`, 
image: `/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 2/Localizando os pontos de soldagem do cabo MCU na BSI.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldado os fios do cabo MCU na área B:<br />5 => Fio Vermelho<br />6 => Fio Preto`, 
image: `/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 2/Localizando os pontos de soldagem do cabo MCU na BSI 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Fios do cabo MCU soldados na área A:`, 
image: `/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 2/Fios soldados pela área A.jpg`},

{title: ``, 
description: ``, 
ballon: `Fios do cabo MCU soldados na área B:`, 
image: `/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 2/Fios soldados pela área B.jpg`},

{title: `Todos os acessórios conectados :`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 2/Todos os acessórios conectados.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos citados na página 3 fica localizada na posição E6 e F6 da foto.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/E6-F6.jpg`},
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
{title: `Realizando a leitura de senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Peugeot`], help: `Tecle OK`, menu: 1000},
{lines: [`307`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI - 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;o&nbsp;cabo`,
`MCU&nbsp;na&nbsp;BSI`,
`segundo&nbsp;o&nbsp;manual`,
`&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1/3`,
`************`,
`<br />`,
],
help: `O OBDMap pode encontrar mais de uma possibilidade de senha, com o auxílio das
setas do OBDMap visualize as outras possíveis senhas e anote.`
},
]
}, {title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Peugeot`], help: `Tecle OK`, menu: 1000},
{lines: [`307`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI - 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Transponder`,
`utilizado:&nbsp;ID46`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha&nbsp;da&nbsp;BSI:`,
`<br />`,
`<br />`,
],
help: `Insira a senha lida anteriormente.`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves:`,
`<br />`,
`<br />`,
],
help: `Escolha a quantidade de chaves a ser programada.`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;chave&nbsp;n`,
`e&nbsp;ligue&nbsp;ignição!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Chave&nbsp;n`,
`Apresentada`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Retire&nbsp;a&nbsp;chave`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Apresentação`,
`Concluída!`,
`<br />`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Curto nos fios do cabo MCU,`,`BSI ou memória com problema.`,],
solutions: [
`Conferir a correta posição do cabo MCU no BSI, todos os fios do cabo MCU deverão estar soldados nos pontos correspondentes.`,]
},
{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`leitura!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o BSI,`,`Mau contato no cabo MCU com o OBDMap,`,`BSI com problema.`,],
solutions: [
`Verificar os pontos de solda do cabo MCU,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos.`,``,]
},
{ label: `BSI TRAVADA! Aguarde 15 min..`,
screens: [
`BSI&nbsp;travada!`,
`Aguarde&nbsp;15&nbsp;minutos`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`BSI travada.`,],
solutions: [
`Aguarde 15 minutos até a BSI destravar.`,]
},
{ label: `Chave ja foi apresentada no procedimento, OK para continuar..`,
screens: [
`&nbsp;`,
`Chave&nbsp;já&nbsp;foi`,
`apresentada&nbsp;no`,
`<br />`,
],
causes: [
`A chave já foi programada ao veículo.`,],
solutions: [
]
},
{ label: `Arquivo Invalido!`,
screens: [
`&nbsp;`,
`Arquivo`,
`Inválido!`,
`<br />`,
],
causes: [
`O BSI está com o arquivo corrompido ou inválido.`,``,],
solutions: [
``,]
},
{ label: `Use o Transponder ID46`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;Transponder&nbsp;ID46`,
`<br />`,
`<br />`,
],
causes: [
`O transponder está incorreto.`,],
solutions: [
`Utilize o transponder ID46.`,``,]
},
{ label: `Transponder nao valido!`,
screens: [
`&nbsp;`,
`Transponder`,
`não&nbsp;válido!`,
`<br />`,
],
causes: [
`O transponder está incorreto.`,],
solutions: [
`Utilize o transponder ID46.`,]
},
{ label: `Senha Incorreta, apos 3 erros`,
screens: [
`&nbsp;`,
`Senha&nbsp;Incorreta,`,
`após&nbsp;3&nbsp;erros`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `a BSI sera TRAVADA por`,
screens: [
`&nbsp;`,
`a&nbsp;BSI&nbsp;será`,
`TRAVADA&nbsp;por`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `15 minutos, OK para reiniciar.`,
screens: [
`&nbsp;`,
`15&nbsp;minutos,&nbsp;OK`,
`para&nbsp;reiniciar.`,
`<br />`,
],
causes: [
`A senha foi digitada errada 3 vezes, BSI travada por 15 minutos.`,],
solutions: [
`Aguardar 15 minutos até a BSI destravar.`,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A4,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
