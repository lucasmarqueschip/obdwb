//Capa
nomeCarga = `Manual Carga -  OBD0090<br />Casamento do painel VDO Crypto e Marelli via OBD2 e reset da ECU ME7.5.30 e 4GV Gol, Voyage e Saveiro até 2012 via pinça (necessita senha)`;
revCarga = `Rev. 7`;
dataManual = `Outubro 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Realiza a leitura do ID do painel`,
`Identifica se o painel do veículo é VDO ou Magnetti Marelli.`,
``,
`Reset das ECU's IAW 4GV e ME7.5.30`,
`Permite realizar o reset da ECU deixando ela virgem pronta para se codificar com um novo veículo.`,
``,
`Adaptar ECU`,
`Adapta a ECU com os painéis VDO ou Magnetti Marelli.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `VW`,
model: `Gol G4 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Gol G4 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Gol G5 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Gol G5 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro G5 1.0`,
years: `2010 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro G5 1.6`,
years: `2010 a 2012`
},
{
manufacturer: `VW`,
model: `Voyage 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Voyage 1.6`,
years: `2009 a 2012`
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
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},

{title: `Identificando e desmontando a ECU IAW 4GV:`, 
description: `Para identificar o modelo do painel utilize a carga ID Gol G5 (carga básica).<br />Após todos os acessórios conectados no veículo, seguir os seguintes passos no visor do OBDMap.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU IAW 4GV.jpg`},

{title: ``, 
description: `Para identificar o modelo do painel utilize a carga ID Gol G5 (carga básica).<br />Após todos os acessórios conectados no veículo, seguir os seguintes passos no visor do OBDMap.`, 
ballon: `Utilize uma chave torx T15 para retirar os parafusos fixadores que prendem a tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU IAW 4GV/desmontando a ECU IAW 4GV .jpg`},

{title: ``, 
description: `Para identificar o modelo do painel utilize a carga ID Gol G5 (carga básica).<br />Após todos os acessórios conectados no veículo, seguir os seguintes passos no visor do OBDMap.`, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU IAW 4GV/desmontando a ECU IAW 4GV 2.jpg`},

{title: `Localizando e conectando a pinça na memória 95320:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU IAW 4GV/Localizando e conectando a pinça na memória 95320.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU IAW 4GV/Localizando e conectando a pinça na memória 95320 2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: `Todos os acessórios conectados:`, 
description: `Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem a ECU.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU IAW 4GV/Todos os acessórios conectados.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Para melhor visualização dos pontos de soldagem, foi separado em área A e área B.`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU IAW 4GV/pontos de soldagem separados A e B.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU na Área A:<br />1 => Fio Preto<br />2 => Fio Cinza<br />3 => Fio Azul`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU IAW 4GV/Identificando os pontos a serem soldados.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU na Área B:<br />4 => Fio Verde<br />5 => Fio Vermelho<br />6 => Fio Amarelo`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU IAW 4GV/Identificando os pontos a serem soldados 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Soldado os fios do cabo MCU na área A.`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU IAW 4GV/Soldado os fios do cabo MCU da área A.jpg`},

{title: ``, 
description: ``, 
ballon: `Soldado os fios do cabo MCU na área B.`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU IAW 4GV/Soldado os fios do cabo MCU da área B.jpg`},

{title: `Todos os acessorios conectados:`, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com a ECU, evitando danos ao mesmo e ao OBDMap.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU IAW 4GV/Todos os acessórios conectados 2.jpg`},

{title: `Identificando e desmontando a ECU ME7.5.30:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave torx T15 para retirar os parafusos fixadores que prendem a tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU ME7.5.30/Desmontando a ECU ME7.5.30.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/ECU ME7.5.30/Desmontando a ECU ME7.5.30 2.jpg`},

{title: `Localizando e conectando a pinça na memória 95040:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/Memória 95040/Localizando e conectando a pinça na memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/Memória 95040/Localizando e conectando a pinça na memória 95040 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória 95040.`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/Memória 95040/Localizando e conectando a pinça na memória 95040 3.jpg`},

{title: `Todos os acessórios conectados :`, 
description: `Atenção:<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem a ECU.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/Memória 95040/Todos os acessórios conectados2.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU :`, 
description: ``, 
ballon: `Local onde será soldado os fios do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/Memória 95040/Localizando os pontos de soldagem do cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldado os fios do caboMCU:<br />1=> Fio Cinza<br />2=> Fio Verde<br />3=> Fio Azul<br />4=> Fio Amarelo<br />5=> Fio Preto<br />6=> Fio Vermelho`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/Memória 95040/Localizando os pontos de soldagem do cabo MCU 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: Não trocar as posições dos fios. Primeiro solde os fios na ECU, depois ligue o cabo MCU no OBDMap.`, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/Memória 95040/Soldagem do cabo MCU.jpg`},

{title: `Todos os acessórios conectados  :`, 
description: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com a ECU, evitando danos ao mesmo e ao OBDMap.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0090 Casamento do painel VDO Gol G5/Memória 95040/Todos os acessórios conectados.jpg`},
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
{title: `Realizando identificação do modelo do painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Identificação`], help: `Tecle OK`, menu: 1000},
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
`PAINEL:&nbsp;VDO`,
`**************`,
`**`,
`<br />`,
],
help: `Painel Identificado.`
},
]
}, {title: `Resetando a ECU IAW 4GV`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 4GV`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;ECU`,
`através&nbsp;da`,
`Pinça&nbsp;SOIC8&nbsp;ou`,
`cabo&nbsp;MCU`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`ECU`,
`Resetada!`,
`<br />`,
],
help: ``
},
]
}, {title: `Resetando a ECU ME7.5.30`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch ME7.5.30`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;o&nbsp;Cabo`,
`MCU/PINCA&nbsp;na&nbsp;ECU`,
`Segundo&nbsp;Manual.`,
`Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
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
}, {title: `Realizando a adaptação da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Adaptacao do modulo`], help: `Tecle OK`, menu: 1000},
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
`Senha:`,
`0000`,
`<br />`,
],
help: `Digite a senha lida anteriormente. Tecle OK!`
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
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
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
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`Gravação!`,
`<br />`,
],
causes: [
`Mau contato da pinça ou cabo MCU com a memória,`,`Mau contato da pinça ou cabo MCU com o OBDMap,`,`Paineol ou memória com problema,`,`A pinça foi conectada em outro componente,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,`ECU com problema ou arquivo corrompido.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado do painel e memória,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Os fios foram soldados em outros pontos na ECU,`,`O cabo MCU, painel ou ECU está com problema,`,`Mau contato na pinça com a memória,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Verificar a correta posição dos fios no painel e na ECU,`,`Verificar se o cabo MCU apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo,`,`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`Verifique...`,
`<br />`,
],
causes: [
`·	A pinça foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,`·	Painel ou memória com problema.`,],
solutions: [
`·	Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`·	Conferir bom estado do painel e memória.`,]
},
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
`Conferir a senha digitada.`,]
},
{ label: `ECU ja programada!`,
screens: [
`&nbsp;`,
`ECU&nbsp;já`,
`programada!`,
`<br />`,
],
causes: [
`A ECU já esta programada a outro veículo.`,],
solutions: [
`Para poder adaptar esta ECU é necessário realizar o procedimento de reset.`,]
},
{ label: `ALERTA!!! cod. erros no painel! <OK> - Continuar <VOLTA> - Sair`,
screens: [
`ALERTA!!!&nbsp;Códigos`,
`erros&nbsp;no&nbsp;painel!`,
`&lt;OK&gt;&nbsp;-&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;-&nbsp;Sair`,
],
causes: [
`O OBDMap tenta apagar os erros presentes do painel antes de adaptar a ECU, pois esses erros podem impedir o sucesso da adaptação. Caso o OBDMap não consiga apagar esses erros, esse alerta será exibido para informar que a adaptação pode não ter sucesso. Caberá ao usuário decidir continuar ou cancelar o procedimento.`,],
solutions: [
]
},
{ label: `ALERTA!! Codigos erros na ECU! <OK> - Continuar <VOLTA> - Sair`,
screens: [
`ALERTA!!&nbsp;Códigos&nbsp;`,
`erros&nbsp;na&nbsp;ECU!`,
`&lt;OK&gt;&nbsp;-&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;-&nbsp;Sair`,
],
causes: [
`O OBDMap tenta apagar os erros presentes na ECU antes de adaptá-la, pois esses erros podem impedir o sucesso da adaptação. Caso o OBDMap não consiga apagar esses erros, esse alerta será exibido para informar que a adaptação pode não ter sucesso. Caberá ao usuário decidir continuar ou cancelar o procedimento.`,],
solutions: [
]
},
{ label: `ALERTA!!! Cod. erros no Immob. <OK> - Continuar <VOLTAR> - Sair`,
screens: [
`ALERTA!!!&nbsp;Códigos`,
`erros&nbsp;no&nbsp;Imobilizador`,
`&lt;OK&gt;&nbsp;-&nbsp;Continuar`,
`&lt;VOLTAR&gt;&nbsp;-&nbsp;Sair`,
],
causes: [
`O OBDMap tenta apagar os erros presentes do imobilizador antes de adaptar a ECU, pois esses erros podem impedir o sucesso da adaptação. Caso o OBDMap não consiga apagar esses erros, esse alerta será exibido para informar que a adaptação pode não ter sucesso. Caberá ao usuário decidir continuar ou cancelar o procedimento.`,],
solutions: [
]
},
{ label: `Erro na adaptacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`adaptação!`,
`<br />`,
],
causes: [
`Falhas no veículo (sensores, componentes etc)`,`Foram encontrados erros em alguns módulos (ECU, painel ou imobilizador). Foi exibida no display a mensagem com erros presentes, dando a opção para o usuário continuar mesmo assim, ou cancelar o procedimento.`,`Utilizando transponder não dedicado.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
