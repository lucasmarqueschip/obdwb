//Capa
nomeCarga = `Manual Carga -  OBD0016<br />GM Immo 1 - OPEL 1 - Leitura de senha`;
revCarga = `Rev. 4`;
dataManual = `Setembro 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Realiza leitura de senha do imobilizador Opel 1 via Soquete S1 e via OBD.`,
`Faz uma leitura dos principais dados do imoblizador.`,
`Apaga todas as falhas do sistema.`,
`Adiciona e remove Chaves do sistema.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Corsa 1.0`,
years: `1997 a 2003`
},
{
manufacturer: `GM`,
model: `Corsa 1.0 16V`,
years: `1997 a 1999`
},
{
manufacturer: `GM`,
model: `Corsa 1.6`,
years: `1997 a 2003`
},
{
manufacturer: `GM`,
model: `Corsa 1.6 16V`,
years: `1997 a 1999`
},
{
manufacturer: `GM`,
model: `Corsa Pickup 1.6`,
years: `1997 a 1999`
},
{
manufacturer: `GM`,
model: `Omega 2.2 E020`,
years: `1995 a 1999`
},
{
manufacturer: `GM`,
model: `Omega 2.2 IMMO`,
years: `1995 a 1999`
},
{
manufacturer: `GM`,
model: `Omega 4.1`,
years: `1995 a 1999`
},
{
manufacturer: `GM`,
model: `Vectra B 2.0`,
years: `1996 a 1999`
},
{
manufacturer: `GM`,
model: `Vectra B 2.0 16V`,
years: `1997 a 1999`
},
{
manufacturer: `GM`,
model: `Vectra B 2.2`,
years: `1997 a 1999`
},
{
manufacturer: `GM`,
model: `Vectra B 2.2 16V`,
years: `1997 a 1999`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Identificando o imobilizador Opel 1:`, 
description: `Para este procedimento deve-se utilizar um ferro de solda e um sugador de solda. Esquente a solda dos terminais da antena e utilize o sugador para remover a solda: <br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Immo Opel1.jpg`},

{title: ``, 
description: `Para este procedimento deve-se utilizar um ferro de solda e um sugador de solda. Esquente a solda dos terminais da antena e utilize o sugador para remover a solda: <br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Immo Opel1_2.jpg`},

{title: ``, 
description: `Para este procedimento deve-se utilizar um ferro de solda e um sugador de solda. Esquente a solda dos terminais da antena e utilize o sugador para remover a solda: <br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Immo Opel1_3.jpg`},

{title: `Desmontando o imobilizador:`, 
description: ``, 
ballon: `Utilize uma chave de fenda<br />media para destravar as travas<br />da tampa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Desmontando Immo.jpg`},

{title: ``, 
description: ``, 
ballon: `Retire a tampa para ter acesso à<br />placa.`, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Desmontando Immo3.jpg`},

{title: `Retirando a antena do imobilizador:`, 
description: `Para este procedimento deve-se utilizar um ferro de solda e um sugador de solda. Esquente a solda dos terminais da antena e utilize o sugador para remover a solda.`, 
ballon: `Para este procedimento deve-se<br />utilizar um ferro de solda e um<br />sugador de solda.`, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Retirando a Antena.jpg`},

{title: ``, 
description: `Para este procedimento deve-se utilizar um ferro de solda e um sugador de solda. Esquente a solda dos terminais da antena e utilize o sugador para remover a solda.`, 
ballon: `Use o ferro de solda para<br />esquentar a solda dos<br />terminais da antena.`, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Retirando a Antena2.jpg`},

{title: ``, 
description: `Para este procedimento deve-se utilizar um ferro de solda e um sugador de solda. Esquente a solda dos terminais da antena e utilize o sugador para remover a solda.`, 
ballon: `Utilize o sugador de solda<br />para retirar a solda dos<br />terminais da antena.`, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Retirando a Antena3.jpg`},

{title: `Retirando a antena da placa:`, 
description: `Depois de removida a solda dos terminais retire a antena da placa: <br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Tirar Antena.jpg`},

{title: ``, 
description: `Depois de removida a solda dos terminais retire a antena da placa: <br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Tirar Antena2.jpg`},

{title: `Retirando o cristal da placa:`, 
description: `Retirando o cristal da placa: <br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Retirando oCristal da placa.jpg`},

{title: ``, 
description: `Retirando o cristal da placa: <br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Retirando oCristal da placa2.jpg`},

{title: `Cortando o pino 11 do microcontrolador:`, 
description: `Cortando o pino 11 do microcontrolador: Utilizar um estilete ou um alicate de corte de bico fino. <br />Identificando os pinos do microcontrolador Em destaque o pino 11, que deverá ser cortado <br />`, 
ballon: `Identificando os pinos do microcontrolador Em destaque o pino 11, que deverá ser cortado`, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Identificando os pinos.jpg`},

{title: ``, 
description: `Cortando o pino 11 do microcontrolador: Utilizar um estilete ou um alicate de corte de bico fino. <br />Identificando os pinos do microcontrolador Em destaque o pino 11, que deverá ser cortado <br />`, 
ballon: `Identificando os pinos do<br />microcontrolador em<br />destaque o pino 11, que<br />deverá ser cortado`, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Cortando Pino 11.jpg`},

{title: ``, 
description: `Cortando o pino 11 do microcontrolador: Utilizar um estilete ou um alicate de corte de bico fino. <br />Identificando os pinos do microcontrolador Em destaque o pino 11, que deverá ser cortado <br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Cortando Pino 11_2.jpg`},

{title: ``, 
description: `Cortando o pino 11 do microcontrolador: Utilizar um estilete ou um alicate de corte de bico fino. <br />Identificando os pinos do microcontrolador Em destaque o pino 11, que deverá ser cortado <br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Cortando Pino 11_3.jpg`},

{title: `Cortando a trilha da placa do imobilizador:`, 
description: `Fazer um corte na trilha indicada com um estilete inclinado na diagonal, de modo a levantar um lado da trilha. Esta parte levantada será usada para facilitar a soldagem depois do procedimento. <br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Cortando a Trila.jpg`},

{title: `Conectaando o soquete S1`, 
description: `Conectar o soquete S1 no Obdmap e no microcontrolador do imobilizador conforme mostrado abaixo. Se necessário, apoiar o dedo sobre o soquete para evitar mau contato. Atenção: Observar que o soquete só encaixa em uma posição.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Conector S1.jpg`},

{title: ``, 
description: `Conectar o soquete S1 no Obdmap e no microcontrolador do imobilizador conforme mostrado abaixo. Se necessário, apoiar o dedo sobre o soquete para evitar mau contato. Atenção: Observar que o soquete só encaixa em uma posição.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Conector S1_2.jpg`},

{title: ``, 
description: `Conectar o soquete S1 no Obdmap e no microcontrolador do imobilizador conforme mostrado abaixo. Se necessário, apoiar o dedo sobre o soquete para evitar mau contato. Atenção: Observar que o soquete só encaixa em uma posição.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Conector S1_3.jpg`},

{title: `Ressoldando o imobilizador Opel 1:`, 
description: `Para que o imobilizador seja utilizado normalmente é necessário soldar o cristal retirado, a trilha cortada e o pino do microcontrolador cortado anteriormente.`, 
ballon: `Passe o estilete sobre a trilha cortada para voltá-la na posição original, retire o verniz do local para permitir a soldagem.`, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Ressoldando.jpg`},

{title: ``, 
description: `Para que o imobilizador seja utilizado normalmente é necessário soldar o cristal retirado, a trilha cortada e o pino do microcontrolador cortado anteriormente.`, 
ballon: `Solde a trilha cortada utilizando um soldador e um pouco de solda.`, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Ressoldando_2.jpg`},

{title: ``, 
description: `Para que o imobilizador seja utilizado normalmente é necessário soldar o cristal retirado, a trilha cortada e o pino do microcontrolador cortado anteriormente.`, 
ballon: `Soldar o pino cortado (pino 11) com o pino ao lado (pino 12) conforme a figura.`, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Soldar Pino.jpg`},

{title: ``, 
description: `Para que o imobilizador seja utilizado normalmente é necessário soldar o cristal retirado, a trilha cortada e o pino do microcontrolador cortado anteriormente.`, 
ballon: `Soldar o pino cortado (pino 11) com o pino ao lado (pino 12) conforme mostrado abaixo:`, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Soldar Pino2.jpg`},

{title: ``, 
description: `Para que o imobilizador seja utilizado normalmente é necessário soldar o cristal retirado, a trilha cortada e o pino do microcontrolador cortado anteriormente.`, 
ballon: `Detalhe dos pinos soldados`, 
image: `/images/Funções Específicas/OBD0016 Gm Immo 1 Opel 1 Leitura de Senha/Soldar Pino3.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4-D6-F9.jpg`},

{title: `Acessórios utilizados para programação via OBD`, 
description: ``, 
ballon: `Utilize o cabo C2 para realizar a programação via diagnostico.`, 
image: `/images/Acessórios/OBDMap + cabo C2.jpg`},
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
{title: `Realizando Leitura de senha do Imobilizador Opel 1 via Soquete S1`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Operação`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Erro&nbsp;interno`,
`Código`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Erro&nbsp;na`,
`comparação!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`O&nbsp;imobilizador`,
`está&nbsp;resetado!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Erro`,
`Time&nbsp;OUT!`,
`<br />`,
],
help: ``
},
{lines: [
`Conecte&nbsp;o`,
`Soquete&nbsp;S1&nbsp;no`,
`imobilizador&nbsp;segundo&nbsp;o`,
`manual&nbsp;&lt;OK&gt;`,
],
help: ``
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
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Senha será exibida no display. Anote a senha.`
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
}, {title: `Realizando leitura de senha do imobilizador Opel 1 via OBD.`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use`,
`Adaptador&nbsp;A2!`,
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
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando leitura de dados Opel 1 via OBD.`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura dos dados`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Tensão&nbsp;baixa&nbsp;da&nbsp;Bateria!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave&nbsp;não`,
`Encontrada!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Transponder&nbsp;`,
`não&nbsp;Encontrado!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`ECU&nbsp;não`,
`Encontrada!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Use`,
`Adaptador&nbsp;A2!`,
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
`Número&nbsp;de`,
`Chaves:`,
`<br />`,
],
help: `Escolha até 8 chaves para
ser programado. Tecle OK.`
},
]
}, {title: `Apagando falhas do sistema Opel 1 via OBD.`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Código de falhas`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de falhas`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use`,
`Adaptador&nbsp;A2!`,
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
`Falhas`,
`Apagadas!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a programação de chaves Opel 1 via OBD.`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Erro!&nbsp;Limite`,
`5&nbsp;chaves!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Use`,
`Adaptador&nbsp;A2!`,
`<br />`,
],
help: `Tecle OK!`
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
`Programacao`,
`Concluida!`,
`<br />`,
],
help: `Programação concluída com sucesso.`
},
]
}, {title: `Apagando chaves programadas no imoblilizador Opel 1 via OBD.`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use`,
`Adaptador&nbsp;A2!`,
`<br />`,
],
help: `Tecle OK!`
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
`Chaves&nbsp;Apagadas!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`Gravação!`,
`<br />`,
],
causes: [
`	Mau contato da pinça com a memória, `,`	Mau contato da pinça com o OBDMap,`,`	Memória ou módulo com problema,`,`	A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`	Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,``,],
solutions: [
`	Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória, `,`	Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`	Conferir bom estado do módulo,`,`	Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,``,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do módulo.`,]
},
{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não`,`coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo). `,],
solutions: [
`Conferir a correta posição da pinça na memória. `,]
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
{ label: `Acesso Negado!`,
screens: [
`Acesso&nbsp;Negado!`,
`**`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},
{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Transponder!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Transponder não gerado.`,``,``,``,],
solutions: [
`É necessário que o transponder tenha passado pelo procedimento de geração, ou que ele já esteja válido no veículo antes da apresentação.`,``,``,]
},
{ label: `Falha no Procedimento!`,
screens: [
`&nbsp;`,
`Falha&nbsp;no&nbsp;Procedimento!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O OBDmap não conseguiu concluir o procedimento desejado, o byte recebido é diferente do esperado para conclusão da operação.`,``,],
solutions: [
`Repita o precedimento.`,`Imoblizador incompatível.`,]
},
{ label: `Senha Incorreta!`,
screens: [
`Senha&nbsp;`,
`Incorreta!`,
`Tecle&nbsp;OK&nbsp;para&nbsp;continuar!`,
`<br />`,
],
causes: [
`·	A senha inserida está incorreta,`,`·	Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. (dependendo do sistema)`,],
solutions: [
`·	Conferir a senha digitada,`,`·	Aguardar x tempo com a ignição ligada e tentar novamente com a senha correta. (dependendo do sistema)`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
