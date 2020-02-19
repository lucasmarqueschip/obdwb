//Capa
nomeCarga = "Geração de Transponder Chrysler Skim 2";
revCarga = "Rev. 1";
dataManual = "Abril 2014";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de até 8 transponders para veículos Chrysler com imobilizador (SKIM) do tipo 2;`,
`A programação de chaves é acumulativa, ou seja, a chave programada no imobilizador, não altera as já existentes ao sistema, até completar 8 novas chaves.`,
`<obs>`,
`Observação:`,
` Retire a resina dos pinos da memória para evitar mal contato.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Chrysler",
model: "Grand Caravan 3.3",
years: "2004 a 2005"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize transponder PCF7936 (ID46) virgem.", 
image: "/images/Transponders/PCF7936 Philips Virgem.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Ferro de solda.", 
image: "/images/Acessórios/ferro_de_Solda2.jpg"},

{title: "", 
description: "", 
ballon: "Sugador de solda. Será necessário para remoção de excesso de solda.", 
image: "/images/Acessórios/sugador de solda.jpg"},

{title: "", 
description: "", 
ballon: "Estilete. Utilizado para limpar a resina sobre os pinos da memória.", 
image: "/images/Acessórios/Estilete.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "Localizando o imobilizador no veículo:", 
description: "O imobilizador do veículo Grand Caravan está localizada na área D4.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/D4.jpg"},

{title: "Identificando o imobilizador:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0177 Geração Skim 2/idImobilizador.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0177 Geração Skim 2/idImobilizador2.jpg"},

{title: "Retirando a placa da antena:", 
description: "", 
ballon: "Utilize uma chave de fenda para abrir a caixa do imobilizador.", 
image: "/images/Funções Específicas/OBD0177 Geração Skim 2/Retirando Placa.jpg"},

{title: "", 
description: "", 
ballon: "Pontos de dessoldagem, para retirar a placa.", 
image: "/images/Funções Específicas/OBD0177 Geração Skim 2/Pontos para dessoldagem.jpg"},

{title: "", 
description: "", 
ballon: "Apoie o imobilizador para facilitar o procedimento (na foto foi utilizada uma 3ª mão). Derreta a solda utilizando o ferro de solda e com o auxílio do sugador remova a solda dos terminais da antena.", 
image: "/images/Funções Específicas/OBD0177 Geração Skim 2/Sugador.jpg"},

{title: "", 
description: "", 
ballon: "Derreta a solda utilizando o ferro de solda e o sugador para remover a solda dos terminais do conector.", 
image: "/images/Funções Específicas/OBD0177 Geração Skim 2/Sugador2.jpg"},

{title: "Identificando e conectando a pinça na memória 95080:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0177 Geração Skim 2/pinçaNaMemoria.jpg"},

{title: "", 
description: "", 
ballon: "Identificando o pino 1 da memória 95080.", 
image: "/images/Funções Específicas/OBD0177 Geração Skim 2/pino1.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.<br />Obs: Certifique se que foi retirada a resina dos pinos da memória, para evitar mau contato.", 
image: "/images/Funções Específicas/OBD0177 Geração Skim 2/pino1 da pinça no pino do do processador.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0177 Geração Skim 2/Todos os acessorios.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a geração de transponders:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Chrysler`], help: `Tecle OK`, menu: 1000},
{lines: [`Grand Caravan`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Skim 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},];
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
`O imobilizador atingiu o numero máximo de 8 chaves programadas.`,``,``,],
solutions: [
`Apagar as chaves antigas do imobilizador`,]
},

{ label: `Apagar as chaves ja programadas ao imobilizador? (X)NAO (OK)SIM`,
screens: [
`Apagar&nbsp;as&nbsp;chaves`,
`&nbsp;ja&nbsp;programadas`,
`ao&nbsp;imobilizador?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`O imobilizador atingiu o numero máximo de 8 chaves programadas.`,],
solutions: [
`Para apagar todas as chaves e assim permitir a adição de novas chaves tecle (OK) SIM, se deseja não apagar as chaves tecle (X) NÃO.`,]
},

{ label: `Quer realmente apagar as chaves ja programadas? (X)NAO (OK)SIM`,
screens: [
`&nbsp;Quer&nbsp;realmente`,
`apagar&nbsp;as&nbsp;chaves`,
`ja&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`O imobilizador atingiu o numero máximo de 8 chaves programadas.`,`Para apagar todas as chaves e assim permitir a adição de novas chaves tecle (OK) SIM, se deseja não apagar as chaves tecle (X) NÃO.`,],
solutions: [
`Se realmente desejar apagar as chaves tecle (OK) sim para confirmar ou (X) NÃO para voltar ao menu anterior.`,]
},

{ label: `Apagando Chaves! Aguarde...`,
screens: [
`&nbsp;`,
`Apagando&nbsp;Chaves!`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
causes: [
`Aguarde o apagamento de chaves.`,],
solutions: [
]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`&nbsp;nao&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`O transponder não foi encontrado ou não está inserido corretamente no módulo de transponder;`,`O transponder utilizado não é PCF7936.`,],
solutions: [
`Insira o transponder na posição correta no módulo e repita a operação;`,`Verifique o transponder que está sendo utilizado. Pode-se utilizar a carga básica do módulo de transponder para identificar o transponder.`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça não foi conectada corretamente;`,`Mau contato na pinça com a memória;`,`Memória com problema.`,],
solutions: [
`Verifique a conexão da pinça com o OBDMap;`,`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

{ label: `Erro na leitura do Imobilizador`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;Imobilizador`,
`<br />`,
],
causes: [
`Mau contato na pinça com o imobilizador;`,`Mau contato na pinça com OBDMap;`,`Imobilizador ou a memória com problema;`,`Presença de resina nos pinos da memória.`,],
solutions: [
`Verificar a conexão da pinça com a memória;`,`Verifique se os parafusos que prendem a pinça no OBDMap estão bem fixos;`,`Verifique se que foi retirado a resina dos pinos da memória.`,]
},

{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Memória ou módulo com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado do módulo.`,]
},

{ label: `ERRO GRAV. IMOB.`,
screens: [
`&nbsp;`,
`ERRO&nbsp;GRAV.&nbsp;IMOB.`,
`<br />`,
`<br />`,
],
causes: [
`Mau contato na pinça com o imobilizador;`,`Mau contato na pinça com o OBDMap;`,`Imobilizador ou a memória com problema;`,`Presença de resina nos pinos da memória.`,],
solutions: [
`Verificar a conexão da pinça com a memória;`,`Verificar se os parafusos que prendem a pinça no OBDMap estão bem fixos;`,`Verificar se foi retirado a resina dos pinos da memória.`,]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder PCF7936 virgem.`,``,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Imobilizador Incorreto!`,
screens: [
`&nbsp;`,
`Imobilizador`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incorreto!`,
`<br />`,
],
causes: [
` Arquivo do imobilizador inválido;`,` Imobilizador ou a memória com problema;`,` Imobilizador não é SKIM 2.`,],
solutions: [
`Verificar a aplicação da função.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
