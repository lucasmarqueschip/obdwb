//Capa
nomeCarga = `Geração de transponder Chrysler e Jeep SKIM 1 via pinça e módulo de transponder`;
revCarga = `Rev. 1`;
dataManual = `Julho 2013`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de até 8 transponders para veículos Chrysler e Jeep com imobilizador (SKIM) do tipo 1;`,
``,
`O procedimento é feito com o imobilizador em bancada utilizando a pinça e o módulo de transponder.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Chrysler`,
model: `Caravan 3.3`,
years: `2000 a 2002`
},
{
manufacturer: `Jeep`,
model: `Cherokee 4.0`,
years: `1997 a 1998`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize transponder ID4E-64 virgem.`, 
image: `/images/Transponders/4E64.jpg`},

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
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: ``, 
description: ``, 
ballon: `Ferro de solda.`, 
image: `/images/Acessórios/ferro_de_Solda2.jpg`},

{title: ``, 
description: ``, 
ballon: `Sugador de solda. Será necessário para remoção de excesso de solda.`, 
image: `/images/Acessórios/sugador de solda.jpg`},

{title: ``, 
description: ``, 
ballon: `Estilete. Utilizado para limpar a resina sobre os pinos da memória.`, 
image: `/images/Acessórios/Estilete.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg`},

{title: `Localizando o imobilizador no veículo:`, 
description: `O imobilizador dos veículos Cherokee e Caravan estão localizadas na área D4 da imagem.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/D4.jpg`},

{title: `Identificando o imobilizador:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0151 Geração de transponder Chrysler e Jeep SKIM 1 via pinça e módulo de transponder/Identificando o imobilizador.jpg`},

{title: `Retirando a placa da antena:`, 
description: ``, 
ballon: `Utilize uma chave de fenda para abrir a caixa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0151 Geração de transponder Chrysler e Jeep SKIM 1 via pinça e módulo de transponder/Retirando a placa da antena 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Apoie o imobilizador para facilitar o procedimento (na foto foi utilizada uma 3ª mão). Derreta a solda utilizando o<br />ferro de solda e com o auxílio do sugador remova a solda dos terminais da antena.`, 
image: `/images/Funções Específicas/OBD0151 Geração de transponder Chrysler e Jeep SKIM 1 via pinça e módulo de transponder/Retirando a placa da antena 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Após retirar a solda dos dois pontos da antena, retire a placa do imobilizador.`, 
image: `/images/Funções Específicas/OBD0151 Geração de transponder Chrysler e Jeep SKIM 1 via pinça e módulo de transponder/Retirando a placa da antena 3.jpg`},

{title: `Identificando e conectando a pinça na memória 24LC02:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0151 Geração de transponder Chrysler e Jeep SKIM 1 via pinça e módulo de transponder/Identificando a memória 24LC02 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize o estilete para remover a resina que está sobre os pinos da memória.`, 
image: `/images/Funções Específicas/OBD0151 Geração de transponder Chrysler e Jeep SKIM 1 via pinça e módulo de transponder/Identificando a memória 24LC02 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando o pino 1 da memória 24LC02.`, 
image: `/images/Funções Específicas/OBD0151 Geração de transponder Chrysler e Jeep SKIM 1 via pinça e módulo de transponder/Identificando a memória 24LC02 3.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0151 Geração de transponder Chrysler e Jeep SKIM 1 via pinça e módulo de transponder/Identificando a memória 24LC02 4.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0151 Geração de transponder Chrysler e Jeep SKIM 1 via pinça e módulo de transponder/Todos os acessórios conectados.jpg`},
];
instruction = [];
obdmap = true;
services = 
[{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;Insira&nbsp;Transp.`,
`&nbsp;&nbsp;&nbsp;ID4E&nbsp;-&nbsp;64`,
`&nbsp;&nbsp;no&nbsp;modulo&nbsp;e`,
`&nbsp;pressione&nbsp;&lt;OK&gt;`,
],
help: `Insira o transponder ID4E-64 no módulo de transponder e tecle OK.`
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
`Conecte&nbsp;a&nbsp;&nbsp;pinca`,
`na&nbsp;memoria&nbsp;`,
`24LC02&nbsp;segundo&nbsp;o&nbsp;`,
`manual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Conecte a pinça na memória 24LC02 e tecle OK.`
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
`CHAVES&nbsp;PROG:&nbsp;*/8`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra o número de chaves programadas no imobilizador.`
},
{lines: [
`Deseja&nbsp;manter&nbsp;as`,
`&nbsp;&nbsp;&nbsp;chaves&nbsp;ja`,
`&nbsp;&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Se desejar apagar as chaves já existentes tecle (X) NÃO e se desejar mantê-las funcionando no veículo tecle
(OK) SIM.`
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
`&nbsp;&nbsp;Reinsira&nbsp;&nbsp;o`,
`&nbsp;&nbsp;transponder`,
`&nbsp;&nbsp;no&nbsp;modulo&nbsp;e`,
`&nbsp;pressione&nbsp;&lt;OK&gt;`,
],
help: `Reinsira o transponder no módulo de transponder e tecle OK.`
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
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Geração de transponders realizado com sucesso.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Imob. Lotado! OK p/ prosseguir`,
screens: [
`&nbsp;`,
`&nbsp;Imob.&nbsp;Lotado!`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
causes: [
`Esta mensagem poderá ocorrer no momento em que o OBDMap realiza a leitura do imobilizador e detecta que já estão gravadas as 8 chaves no imobilizador.`,],
solutions: [
`Apagar as chaves antigas do imobilizador.`,]
},

{ label: `Apagar as chaves ja programadas ao imobilizador? (X)NAO (OK)SIM`,
screens: [
`Apagar&nbsp;as&nbsp;chaves`,
`&nbsp;ja&nbsp;programadas`,
`ao&nbsp;imobilizador?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`Esta mensagem poderá ocorrer no momento em que o OBDMap realiza a leitura do imobilizador e detecta que já estão gravadas as 8 chaves no imobilizador.`,],
solutions: [
`Apagar as chaves antigas do imobilizador.`,]
},

{ label: `Quer realmente, apagar as chaves ja programadas? (X)NAO (OK)SIM`,
screens: [
`Quer&nbsp;realmente,`,
`apagar&nbsp;as&nbsp;chaves`,
`ja&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`Se realmente desejar apagar as chaves tecle (OK) sim para confirmar ou (X) NÃO para voltar ao menu anterior.`,],
solutions: [
]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder utilizado não é um ID4E-64.`,],
solutions: [
`Utilize um transponder ID4E-64 virgem.`,]
},

{ label: `Utilize Transp. ID4E Blank!`,
screens: [
`&nbsp;`,
`Utilize&nbsp;Transp.`,
`&nbsp;&nbsp;ID4E&nbsp;Blank!`,
`<br />`,
],
causes: [
`O transponder utilizado não é um ID4E-64.`,],
solutions: [
`Utilize um transponder ID4E-64 virgem.`,]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;nao`,
`Encontrado!`,
`<br />`,
],
causes: [
`O transponder não foi encontrado ou não está inserido corretamente no módulo de transponder,`,`O transponder utilizado não é ID4E-64.`,],
solutions: [
`Insira o transponder na posição correta no módulo e repita a operação.`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não esta posicionado corretamente no módulo de transponder,`,`O transponder utilizado não é ID4E-64.`,],
solutions: [
`Verifique a correta posição do transponder no módulo de transponder,`,`Verifique o transponder que está sendo utilizado,`,`Pode-se utilizar a carga básica do módulo de transponder para identificar o transponder.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente,`,`Mau contato na pinça com a memória,`,`Memória com problema.`,],
solutions: [
`Verifique a conexão da pinça com o OBDMap,`,`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

{ label: `Erro na leitura da memoria!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;da&nbsp;memoria!`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente na memória,`,`Os pinos da memória ou da própria pinça podem estar com resina ou algum tipo de sujeira,`,`Mau contato na pinça com o OBDMap.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Verifique a conexão da pinça com o OBDMap,`,`Verificar se os pinos da memória e da pinça estão bem limpos, sem resina.`,]
},

{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa),`,`Memória ou módulo com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado do módulo.`,]
},

{ label: `Erro ao gravar a memoria!`,
screens: [
`&nbsp;`,
`&nbsp;Erro&nbsp;ao&nbsp;gravar&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;a&nbsp;memoria!`,
`<br />`,
],
causes: [
`Imobilizador ou memória com problema,`,`Mau contato na pinça com o OBDMap,`,`Mau contato na pinça com a memória.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Verificar se os pinos da memória e da pinça estão bem limpos, sem resina.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
