//Capa
nomeCarga = `Manual Carga -  OBD0141<br />Reset e Descodificação Fiat ME7.3H4 Final 684 via OBD (Boot)`;
revCarga = `Rev. 1`;
dataManual = `Maio 2013`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU Fiat híbrida 0261 206 684: deixando a mesma virgem, pronta para se codificar com um novo veículo.`,
`Descodificação da ECU Fiat híbrida 0 261 206 684: A descodificação da ECU consiste em desabilitar o seu sistema de imobilizador interno, de forma que a mesma funcione sem a necessidade de transponders, funcionando somente com a chave mecânica.<br/><font color="red"><obs>Observação:</font><br/> É recomendado utilizar a carga de identificação de ECU Fiat Híbrida para identificar o modelo correto de ECU.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Palio 1.3 8V`,
years: `1999 a 2002`
},
{
manufacturer: `Fiat`,
model: `Siena 1.3 8V`,
years: `1999 a 2002`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo C3. Necessário para colocar a ECU em modo de boot.`, 
image: `/images/Acessórios/Cabo C3.jpg`},

{title: ``, 
description: ``, 
ballon: `Adaptador A5. Auxilia no processo de reset e descodificação da ECU.`, 
image: `/images/Connect/Acessórios/Adaptador A5.jpg`},

{title: `Localizando a ECU Fiat Híbrida no veículo:`, 
description: ``, 
ballon: `Com auxílio de uma chave "L 10" remova a capa que protege o motor.`, 
image: `/images/Funções Específicas/OBD0141/Capa do motor.jpg`},

{title: ``, 
description: ``, 
ballon: `ECU localizada.`, 
image: `/images/Funções Específicas/OBD0141/ECU localizada..jpg`},

{title: `Identificando a ECU Fiat Híbrida através da etiqueta:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0141/Id Ecu Etiqueta1.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0141/Id Ecu Etiqueta2.jpg`},

{title: `Colocando a ECU Fiat Híbrida em modo boot:`, 
description: `<font color="red">Atenção:</font> Antes de começar o reset ou a descodificação é preciso colocar a ECU em modo de boot, que consiste em aterrar o pino 20 do bocal B da ECU, para isso siga as instruções abaixo.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0141/modoBoot1.jpg`},

{title: ``, 
description: `<font color="red">Atenção:</font> Antes de começar o reset ou a descodificação é preciso colocar a ECU em modo de boot, que consiste em aterrar o pino 20 do bocal B da ECU, para isso siga as instruções abaixo.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0141/modoBoot2.jpg`},

{title: ``, 
description: `<font color="red">Atenção:</font> Antes de começar o reset ou a descodificação é preciso colocar a ECU em modo de boot, que consiste em aterrar o pino 20 do bocal B da ECU, para isso siga as instruções abaixo.`, 
ballon: `Com auxílio de uma chave "Fenda pequena" remova a trava que prende a capa de proteção do soquete.`, 
image: `/images/Funções Específicas/OBD0141/Remova a trava.jpg`},

{title: ``, 
description: `<font color="red">Atenção:</font> Antes de começar o reset ou a descodificação é preciso colocar a ECU em modo de boot, que consiste em aterrar o pino 20 do bocal B da ECU, para isso siga as instruções abaixo.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0141/Remova a trava2.jpg`},

{title: ``, 
description: `<font color="red">Atenção:</font> Antes de começar o reset ou a descodificação é preciso colocar a ECU em modo de boot, que consiste em aterrar o pino 20 do bocal B da ECU, para isso siga as instruções abaixo.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0141/Remova a trava3.jpg`},

{title: ``, 
description: `<font color="red">Atenção:</font> Antes de começar o reset ou a descodificação é preciso colocar a ECU em modo de boot, que consiste em aterrar o pino 20 do bocal B da ECU, para isso siga as instruções abaixo.`, 
ballon: `Conecte a agulha do cabo C3 no pino 20.`, 
image: `/images/Funções Específicas/OBD0141/Remova a trava4.jpg`},

{title: ``, 
description: `<font color="red">Atenção:</font> Antes de começar o reset ou a descodificação é preciso colocar a ECU em modo de boot, que consiste em aterrar o pino 20 do bocal B da ECU, para isso siga as instruções abaixo.`, 
ballon: `No procedimento será necessário conectar a garra do cabo C3 no pólo negativo da bateria, porém em algumas partes do procedimento será necessário que remova esta garra.`, 
image: `/images/Funções Específicas/OBD0141/Remova a trava5.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos está localizada na área A5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},

{title: ``, 
description: `<br /><font color="red">Observação:</font><br />Se a descodificação foi realizada com sucesso a luz do code no painel ficará constantemente acesa, porém o carro irá funcionar.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0141/Painel.jpg`},
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
{title: `Identificando a ECU Fiat Híbrida via OBD:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.3H4`], help: `Tecle OK`, menu: 1000},
{lines: [`Identificação`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use`,
`Adaptador&nbsp;A1!`,
`<br />`,
],
help: `Use o adaptador A1 e tecle OK!`
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
`ECU:`,
`*&nbsp;***&nbsp;***&nbsp;***`,
`<br />`,
],
help: `ECU identificada.`
},
]
}, {title: `Realizando o reset da ECU:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.3H4`], help: `Tecle OK`, menu: 1000},
{lines: [`Final 684`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;A1,A5&nbsp;e&nbsp;C3`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
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
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Bosch&nbsp;684`,
`Resetar?`,
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
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`
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
`Etapa&nbsp;`,
`**&nbsp;%`,
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
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Etapa&nbsp;2`,
`çç&nbsp;%`,
`<br />`,
],
help: ``
},
{lines: [
`Desconecte&nbsp;o`,
`cabo&nbsp;C3&nbsp;da`,
`bateria&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
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
`Conecte&nbsp;o&nbsp;cabo`,
`C3&nbsp;na&nbsp;bateria`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Nesta etapa será necessário conectar a
garra do cabo C3 no pólo negativo da bateria como mostra na Página 8. Tecle OK!`
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
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Etapa&nbsp;3`,
`**&nbsp;%`,
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
help: `A ECU foi resetada.`
},
]
}, {title: `Realizando a descodificação da ECU:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.3H4`], help: `Tecle OK`, menu: 1000},
{lines: [`Final 684`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;A1,A5&nbsp;e&nbsp;C3`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
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
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Bosch&nbsp;684`,
`Descodificar?`,
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
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`
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
`Etapa&nbsp;`,
`**&nbsp;%`,
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
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Etapa&nbsp;2`,
`çç&nbsp;%`,
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
help: `A ECU foi descodificada.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro! Verifique a conexao do adaptador A5!`,
screens: [
`Erro!`,
`Verifique&nbsp;a`,
`conexão&nbsp;do`,
`adaptador&nbsp;A5!`,
],
causes: [
`Mau contato do adaptador com o OBDMap,`,`Adaptador está desconfigurado.`,],
solutions: [
`Verificar a conexão do adaptador com o OBDMap,`,`Encaminhar o adaptador para reparo.`,]
},
{ label: `Erro! Verifique a conexao do cabo C3!`,
screens: [
`Erro!`,
`Verifique&nbsp;a`,
`conexão&nbsp;do`,
`cabo&nbsp;C3!`,
],
causes: [
`O cabo C3 não está devidamente conectado no pino 20 do lado B da ECU, ou a garra não está conectada no pólo negativo da bateria (não colocando a ECU em modo de boot).`,],
solutions: [
`Verificar a conexão do cabo C3, conectá-lo como mostra na Página 9.`,]
},
{ label: `ID da ECU Incorreta!`,
screens: [
`&nbsp;`,
`ID&nbsp;da&nbsp;ECU`,
`Incorreta!`,
`<br />`,
],
causes: [
`Modelo da ECU identificado não é o mesmo da aplicação.`,],
solutions: [
`Verificar o modelo da ECU através da função de identificar ECU.`,]
},
{ label: `Arquivo da ECU corrompido! Descodificar? (X)Nao (OK)Sim`,
screens: [
`Arquivo&nbsp;da&nbsp;ECU`,
`corrompido!`,
`Descodificar?`,
`(X)Não&nbsp;&nbsp;(OK)Sim`,
],
causes: [
`O arquivo da ECU está corrompido.`,],
solutions: [
`Descodificar ECU.`,]
},
{ label: `Obs: NAO utilize cabo C3! <OK>`,
screens: [
`&nbsp;`,
`Observação:&nbsp;NÃO&nbsp;utilize`,
`cabo&nbsp;C3!&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`A ECU está em modo de boot através do cabo C3.`,],
solutions: [
`Na função de identificar ECU não utilizar o cabo C3.`,]
},
{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de`,
`Comunicação!`,
`<br />`,
],
causes: [
`Defeito no carro, parte elétrica;`,`ECU com defeito.`,],
solutions: [
`Verificar parte elétrica do carro, fusíveis, etc;`,`Verificar a conexão do adaptador A1 no OBDMap e no conector OBD do veículo.`,]
},
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`Gravação!`,
`<br />`,
],
causes: [
`Falha na conexão entre o OBDMap e a tomada OBD do veículo.`,],
solutions: [
`Verificar a conexão entre o OBDMap e a tomada OBD do veículo.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
