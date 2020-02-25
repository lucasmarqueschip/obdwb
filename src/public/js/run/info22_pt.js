//Capa
nomeCarga = `Módulo de transponder - Carga básica`;
revCarga = `Rev. 6`;
dataManual = `Fevereiro 2020`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Identificação dos transponders:`,
`<br />ID13; T5 COMO ID13;<br /> ID48 - MAGIC 1 / MAGIC 2 (VW, AUDI, SEAT); <br />ID11; T5 COMO ID11;<br /> ID12; T5 COMO ID12;<br /> PCF ID33; T5 COMO ID33 (GM-OPEL, VAG (VW), PSA - CPH, NISSAN, FIAT - ALFA, PSA - VALEO);<br /> PCF7935 (PCF COMO ID40 - GM, ID42/44 - VAG(VW), ID45 - PEUGEOT);<br /> PCF7936; PCF7939M; PCF7937; PCF7941; PCF7942; PCF7943; PCF7945; PCF7946; PCF7947; PCF7952; PCF7953; PCF7961; CN3; HITAG AES;<br /> ID4C; TPX1; <br />ID4D / TPX2 (KAWASAKI, YAMAHA, SUZUKI MOTOS, TOYOTA); <br />ID4D-63 ESPECIAL (Ford); <br />ID4D DST+ (Fors (Especial), Toyota);<br /> ID4E.`,
``,
`Copia dos Transponders`,
`Copiar para T5 ou NOVA a partir de originais`,
`<br />ID11;<br /> ID12;<br /> ID13;<br /> ID20;<br /> ID33.`,
``,
`Escrita dos transponders`,
`Através desta operação é possível dedicar um T5/NOVA como:`,
`<br />ID11;<br /> ID12;<br /> ID13;<br /> ID33. `,
``,
`Randomização dos transponders:`,
`<br />ID11; <br />ID12. `,
` `,
`Destravamento do transponder `,
`<br />ID48.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Megamos`,
model: `ID13`,
years: ` a 2020`
},
{
manufacturer: `Megamos`,
model: `ID48 - MAGIC 1`,
years: ` a 2020`
},
{
manufacturer: `Megamos`,
model: `ID48 - MAGIC 2`,
years: ` a 2020`
},
{
manufacturer: `Sokymat / Nova`,
model: `T5 COMO ID13`,
years: ` a 2020`
},
{
manufacturer: `Sokymat / Nova`,
model: `T5 COMO ID11`,
years: ` a 2020`
},
{
manufacturer: `Sokymat / Nova`,
model: `T5 COMO ID12`,
years: ` a 2020`
},
{
manufacturer: `Temic`,
model: `ID12`,
years: ` a 2020`
},
{
manufacturer: `Temic`,
model: `ID11`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF ID33`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `T5 COMO ID33`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7935`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7936`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7939M`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7937`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7941`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7942`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7943`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7945`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7946`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7947`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7952`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7953`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `PCF7961`,
years: ` a 2020`
},
{
manufacturer: `NXP`,
model: `HITAG AES`,
years: ` a 2020`
},
{
manufacturer: `Texas`,
model: `ID4C`,
years: ` a 2020`
},
{
manufacturer: `Texas`,
model: `ID4D`,
years: ` a 2020`
},
{
manufacturer: `Texas`,
model: `ID4D DST+`,
years: ` a 2020`
},
{
manufacturer: `Texas`,
model: `ID4D-63 ESPECIAL`,
years: ` a 2020`
},
{
manufacturer: `Texas`,
model: `ID4E`,
years: ` a 2020`
},
{
manufacturer: `JMA`,
model: `TPX1`,
years: ` a 2020`
},
{
manufacturer: `JMA`,
model: `TPX2`,
years: ` a 2020`
},
{
manufacturer: `CN`,
model: `CN3`,
years: ` a 2020`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação sobre o transponders T5:`, `Transponders T5 do tipo ilustrado abaixo, normalmente funcionam muito bem com o Módulo de transponders do Obdmap.`, `../../`);
applicationObs += createObs(``, `Transponders T5 do tipo ilustrado abaixo, podem exigir algumas repetições até que a gravação tenha sucesso.`, `../../`);
applicationObs += createObs(``, `Transponders T5 do tipo ilustrado abaixo (sem nenhuma inscrição), podem não funcionar com o Módulo de Transponders do Obdmap.`, `../../`);
applicationObs += createObs(``, `Transponders T5 (vidro) do tipo ilustrado abaixo (sem nenhuma inscrição), podem não funcionar no veículo.`, `../../`);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

<<<<<<< .mine
{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Acessórios/OBDMap+Modulo de transponder+Fonte de alimentação.JPG`},
=======
{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: ``},
>>>>>>> .r6553

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Chave GM.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg`},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a identificação do transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mod. Transp.`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mod. Transp.`, `>Basico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`SELECIONE:`,
`&nbsp;&nbsp;IDENTIFICAR?`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`POSICIONE&nbsp;TRANSP`,
`&nbsp;E&nbsp;PRESSIONE&nbsp;OK.`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;LENDO...`,
`&nbsp;&nbsp;&nbsp;AGUARDE...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;TEMIC&nbsp;ID11`,
`****************`,
`<br />`,
],
help: `No caso dos transponders TEMIC 11(ID11), TEMIC 12(ID12) e MEGAMOS 13(ID13) o resultado aparecerá como ao lado. Na primeira linha estará a identificação do modelo do transponder e na segunda os dados da memória.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;T5&nbsp;COMO&nbsp;ID11`,
`****************`,
`<br />`,
],
help: `Na primeira linha estará a identificação do modelo do transponder T5/NOVA e qual modelo está sendo emulado e na segunda os dados da memória.`
},
{lines: [
`&nbsp;&nbsp;MEGAMOS&nbsp;ID48`,
`&nbsp;CRYPTO&nbsp;MAGIC&nbsp;*`,
`****&nbsp;**&nbsp;********`,
`&nbsp;LOCKED/TRAVADO`,
],
help: `Neste exemplo, a primeira linha mostra que é um transponder MEGAMOS ID48.
Na segunda linha informa se é Magic 1 ou
Magic 2
Na terceira linha será mostrada a montadora, caso for VW, Audi ou Seat, caso contrário, não aparecerá nada escrito e em seguida o byte de
Lock e o Número de Identificação do
transponder.
Na quarta linha identifica se o transponder foi bloqueado. Caso não tiver em LOCK/TRAVADO, a linha vai estar em branco.`
},
{lines: [
`&nbsp;PCF&nbsp;COMO&nbsp;ID33&nbsp;&nbsp;&nbsp;`,
`****************`,
`****************`,
`****************`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;T5&nbsp;COMO&nbsp;ID33`,
`****************`,
`****************`,
`****************`,
],
help: ``
},
{lines: [
`&nbsp;PCF&nbsp;COMO&nbsp;&nbsp;ID**&nbsp;&nbsp;`,
`&nbsp;**************`,
`****************`,
`****************`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;PCF7935`,
`****************&nbsp;`,
`****************`,
`****************`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;TEXAS&nbsp;ID4C&nbsp;&nbsp;&nbsp;&nbsp;`,
`EEPROM:&nbsp;********&nbsp;`,
`****************`,
`************`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;TEXAS&nbsp;ID4D`,
`**&nbsp;&nbsp;**&nbsp;&nbsp;********&nbsp;`,
`R:&nbsp;******&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`L:&nbsp;****`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;TPX2&nbsp;ID4D`,
`**&nbsp;&nbsp;**&nbsp;&nbsp;********&nbsp;`,
`R:&nbsp;******&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`L:&nbsp;****`,
],
help: ``
},
{lines: [
`TEXAS&nbsp;ID4D&nbsp;DST&nbsp;+`,
`**&nbsp;&nbsp;**&nbsp;&nbsp;********`,
`R:&nbsp;******`,
`L:&nbsp;****`,
],
help: ``
},
{lines: [
`&nbsp;TEXAS&nbsp;&nbsp;ID4D-6B`,
`**&nbsp;&nbsp;**&nbsp;&nbsp;********&nbsp;`,
`R:&nbsp;******&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`L:&nbsp;****&nbsp;KAWASAKI`,
],
help: ``
},
{lines: [
`&nbsp;TEXAS&nbsp;ID4D-63`,
`**&nbsp;&nbsp;**&nbsp;&nbsp;********`,
`R:&nbsp;******`,
`L:&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FORD`,
],
help: ``
},
{lines: [
`TEXAS&nbsp;&nbsp;ID4D&nbsp;DST+`,
`**&nbsp;&nbsp;**&nbsp;&nbsp;********`,
`R:&nbsp;******`,
`L:&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FORD`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;ID4D-67&nbsp;`,
`MESTRA&nbsp;&nbsp;&nbsp;&nbsp;TOYOTA`,
`**&nbsp;&nbsp;**&nbsp;&nbsp;********`,
`R:******&nbsp;&nbsp;L:****`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;ID4D-67&nbsp;DST+`,
`&nbsp;&nbsp;SUB&nbsp;-&nbsp;TOYOTA`,
`**&nbsp;&nbsp;**&nbsp;&nbsp;********`,
`R:******&nbsp;&nbsp;L:****`,
],
help: ``
},
{lines: [
`&nbsp;ID4D-67G&nbsp;&nbsp;DST+`,
`MESTRA&nbsp;&nbsp;&nbsp;&nbsp;TOYOTA`,
`**&nbsp;&nbsp;**&nbsp;&nbsp;********`,
`R:******&nbsp;&nbsp;L:****`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;TEXAS&nbsp;ID4E`,
`**&nbsp;&nbsp;**&nbsp;&nbsp;********`,
`R:&nbsp;******&nbsp;L:****`,
`<br />`,
],
help: ``
},
{lines: [
`PCF79**&nbsp;-&nbsp;ID46`,
`ID&nbsp;:&nbsp;********`,
`SKL:&nbsp;4D494B52`,
`SKH:&nbsp;4F4E`,
],
help: ``
},
{lines: [
`PCF79**&nbsp;-&nbsp;ID46`,
`ID&nbsp;:&nbsp;********`,
`Modo&nbsp;CRYPTO&nbsp;ou`,
`PSW&nbsp;modificado.`,
],
help: ``
},
{lines: [
`PCF7939MA`,
`ID:&nbsp;********`,
`LOCKED/TRAVADO`,
`<br />`,
],
help: ``
},
{lines: [
`HITAG&nbsp;AES&nbsp;128`,
`BITS&nbsp;(REMOTO)`,
`ID:&nbsp;********`,
`LOCKED/TRAVADO`,
],
help: ``
},
]
}, {title: `Realizando a copia do transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mod. Transp.`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mod. Transp.`, `>Basico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Nao&nbsp;pode&nbsp;ser&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;copiado&nbsp;!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`POSICIONE&nbsp;TRANSP`,
`PRESS.&nbsp;OK&nbsp;P/&nbsp;LER`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Utilize&nbsp;T5/NOVA.`,
`&nbsp;(OK)&nbsp;p/&nbsp;prog..`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`GRAVANDO&nbsp;T5/NOVA`,
`&nbsp;&nbsp;&nbsp;AGUARDE...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`SELECIONE:`,
`&nbsp;&nbsp;COPIAR?`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a escrita do transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Mod. Transp.`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mod. Transp.`, `>Basico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`SELECIONE:&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID&nbsp;&nbsp;**`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`0000000000000000`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Utilize&nbsp;T5/NOVA.`,
`&nbsp;(OK)&nbsp;p/&nbsp;prog..`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`GRAVANDO&nbsp;T5/NOVA`,
`&nbsp;&nbsp;&nbsp;AGUARDE...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`SELECIONE:`,
`&nbsp;&nbsp;ESCREVER?`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a randomização do transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`SELECIONE:`,
`&nbsp;&nbsp;ESPECIAL?`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`SELECIONE:`,
`RANDOMIZAR&nbsp;ID11?`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Utilize&nbsp;T5/NOVA.`,
`&nbsp;(OK)&nbsp;p/&nbsp;prog..`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`SELECIONE:`,
`DESTRAVAR&nbsp;ID48?`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`POSICIONE&nbsp;TRANSP`,
`&nbsp;E&nbsp;PRESSIONE&nbsp;OK.`,
`<br />`,
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
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça ou cabo MCU com o OBDMap,`,`Módulo com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir a correta soldagem do cabo MCU,`,`Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos,`,`Conferir bom estado do módulo,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},

{ label: `ERRO GRAV. T5! (OK) P/ REPETIR.`,
screens: [
`&nbsp;`,
`&nbsp;ERRO&nbsp;GRAV.&nbsp;T5!`,
`(OK)&nbsp;P/&nbsp;REPETIR.`,
`<br />`,
],
causes: [
],
solutions: [
]
},

{ label: `---------------- T5/NOVA ID20`,
screens: [
`&nbsp;`,
`----------------&nbsp;`,
`&nbsp;&nbsp;T5/NOVA&nbsp;ID20`,
`<br />`,
],
causes: [
],
solutions: [
]
},

{ label: `Nao pode ser copiado !`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;Nao&nbsp;pode&nbsp;ser&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;copiado&nbsp;!`,
`<br />`,
],
causes: [
],
solutions: [
`Esta mensagem surge quando se tenta copiar um transponder de um tipo que pode ser`,`identificado, mas não copiado. É o caso do ID48 usado no sistema CODE II FIAT. A criptografia deste`,`transponder é virtualmente impossível de ser quebrada e também não há no mercado um transponder`,`capaz de emulá-lo.`,]
},

{ label: `FALHA! - MAGIC 1`,
screens: [
`&nbsp;`,
`FALHA!&nbsp;-&nbsp;MAGIC&nbsp;1`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
