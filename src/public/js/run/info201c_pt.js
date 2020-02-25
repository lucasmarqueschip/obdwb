//Capa
nomeCarga = `Manual Carga -  OBD0201<br />Programação de chaves Ford Pats 4 Tipo 3 (New Fiesta 13-14 e Ecosport 13-15)`;
revCarga = `Rev. 5`;
dataManual = `Fevereiro 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Identificação do sistema do veículo, sendo compatível ou não com a aplicação da carga.`,
`Apagamento com reprogramação de 2 chaves para o veículo.`,
`Programação de até 4 chaves para o veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Ford`,
model: `New Fiesta 1.5`,
years: `2013 a 2014`
},
{
manufacturer: `Ford`,
model: `New Fiesta 1.6`,
years: `2013 a 2014`
},
{
manufacturer: `Ford`,
model: `Ecosport 1.6`,
years: `2013 a 2015`
},
{
manufacturer: `Ford`,
model: `Ecosport 2.0`,
years: `2013 a 2015`
},
];
applicationObs = ``;
applicationObs += createObs(`Alguns veículos New Fiesta com display azul no painel não são atendidos por esta carga, sendo necessário que se faça a identificação do sistema do veículo antes de realizar o procedimento de programação ou adição de chaves.`, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize um transponder ID 4D63 ou ID 4D63 DST+.`, 
image: `/images/Transponders/ID 4D63.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Usado para realizar o procedimento via diagnóstico.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico fica localizada na posição A4.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},
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
{title: `Realizando a identificação do sistema PATS 4 Tipo3 :`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`New Fiesta`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Identificação`], help: `Tecle OK`, menu: 1000},
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ford&nbsp;Pats&nbsp;4&nbsp;T3!`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ecosport`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 4`], help: `Tecle OK`, menu: 1000},
{lines: [`13-15`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Carregando...&nbsp;`,
`Aguarde`,
`<br />`,
],
help: ``
},
{lines: [
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;perdidas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair`,
`<br />`,
],
help: `As chaves já programadas serão
   apagadas.`
},
{lines: [
`São&nbsp;necessárias`,
`2&nbsp;chaves&nbsp;para`,
`realizar&nbsp;o`,
`procedimento!`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder`,
`4D63&nbsp;/&nbsp;4D63&nbsp;DST+`,
`<br />`,
],
help: `Utilize um transponder ID 4D63 ou ID
4D63 DST+ dedicados para Ford.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Pode ser que não tenha sido possível o acesso, sendo assim serão feitas mais algumas tentativas (Passo 18).`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;e&nbsp;ligue&nbsp;a`,
`chave&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;e&nbsp;ligue&nbsp;a`,
`próxima&nbsp;chave&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira e ligue a próxima
chave a ser programada, e tecle OK.`
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
`Desligue&nbsp;e&nbsp;`,
`ligue&nbsp;a&nbsp;chave!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves atualmente programadas no veículo.`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Desconecte&nbsp;o&nbsp;OBD`,
`<br />`,
],
help: `O procedimento foi concluído com sucesso. Desconecte o cabo da tomada de diagnose.`
},
{lines: [
`&nbsp;`,
`Tentativa&nbsp;**`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Poderão ser feitas até 16 tentativas de acesso.`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK.`
},
{lines: [
`&nbsp;`,
`Aguarde`,
`10&nbsp;segundos!`,
`<br />`,
],
help: `Aguarde 10 segundos e retorne ao passo 10.`
},
]
}, {title: `Realizando a adição de novas chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ecosport`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 4`], help: `Tecle OK`, menu: 1000},
{lines: [`13-15`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:`,
`Adicionar&nbsp;Chaves`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder`,
`4D63&nbsp;/&nbsp;4D63&nbsp;DST+`,
`<br />`,
],
help: `Utilize um transponder ID 4D63 ou ID 4D63 DST+ dedicados para Ford.`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Pode ser que não tenha sido possível o acesso, sendo assim serão feitas mais algumas tentativas (Passo 13).`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;e&nbsp;`,
`ligue&nbsp;a&nbsp;chave!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves atualmente programadas no veículo.`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Desconecte&nbsp;o&nbsp;OBD`,
`<br />`,
],
help: `O procedimento foi concluído com sucesso. Desconecte o cabo da tomada de diagnose.`
},
{lines: [
`&nbsp;`,
`Tentativa&nbsp;**`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Poderão ser feitas até 16 tentativas de acesso.`
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
`Aguarde`,
`10&nbsp;segundos!`,
`<br />`,
],
help: `Aguarde 10 segundos e retorne ao passo 8.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Painel Invalido!`,
screens: [
`&nbsp;`,
`Painel&nbsp;Inválido!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},
{ label: `Incode: ****** Outcode:`,
screens: [
`&nbsp;`,
`Incode:&nbsp;******&nbsp;`,
`Outcode:`,
`<br />`,
],
causes: [
`As tentatívas de acesso ao veículo falharam.`,],
solutions: [
`É necessário contato com o suporte para obter o Outcode. OBS: Não se deve desligar a ignição nesse processo, pois o código será alterado.`,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},
{ label: `Acesso Negado Aguarde 5:00 min Para Repetir`,
screens: [
`Acesso&nbsp;&nbsp;Negado`,
`Aguarde&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;min`,
`Para&nbsp;Repetir`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Desconecte o OBDMap!!`,
screens: [
`&nbsp;`,
`Desconecte&nbsp;o&nbsp;OBDMap!!`,
`<br />`,
`<br />`,
],
causes: [
`  Não foi possível acessar o modo de programação do veículo.`,],
solutions: [
`  Aguarde 5 minutos e repita o procedimento.`,]
},
{ label: `Erro no acesso!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;acesso!`,
`<br />`,
`<br />`,
],
causes: [
` Não foi possível acessar o modo de programação do veículo.`,],
solutions: [
`Repita o procedimento.`,]
},
{ label: `Veiculo fora da Aplicacao!`,
screens: [
`&nbsp;`,
`Veículo&nbsp;fora&nbsp;da&nbsp;`,
`Aplicação!`,
`<br />`,
],
causes: [
` O veículo não faz parte da aplicação da carga.`,],
solutions: [
`Verificar aplicação.`,]
},
{ label: `Erro na Programacao!`,
screens: [
`Erro&nbsp;na`,
`Programação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder utilizado não é válido.`,],
solutions: [
`Utilize um transponder compatível com o veículo.`,]
},
{ label: `Erro no Transponder! `,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Transponder!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder pode não estar dedicado corretamente para o veículo.`,],
solutions: [
`Verificar os detalhes no manual de dedicação OBD0206 - Dedicação do transponder ID4D-63 e ID4D DST+ para Ford.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
