//Capa
nomeCarga = "Módulo de transponder - Carga básica";
revCarga = "Rev. 6";
dataManual = "Fevereiro 2020";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

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
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Megamos",
model: "ID13",
years: " a 2020"
},
{
manufacturer: "Megamos",
model: "ID48 - MAGIC 1",
years: " a 2020"
},
{
manufacturer: "Megamos",
model: "ID48 - MAGIC 2",
years: " a 2020"
},
{
manufacturer: "Sokymat / Nova",
model: "T5 COMO ID13",
years: " a 2020"
},
{
manufacturer: "Sokymat / Nova",
model: "T5 COMO ID11",
years: " a 2020"
},
{
manufacturer: "Sokymat / Nova",
model: "T5 COMO ID12",
years: " a 2020"
},
{
manufacturer: "Temic",
model: "ID12",
years: " a 2020"
},
{
manufacturer: "Temic",
model: "ID11",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF ID33",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "T5 COMO ID33",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7935",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7936",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7939M",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7937",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7941",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7942",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7943",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7945",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7946",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7947",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7952",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7953",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "PCF7961",
years: " a 2020"
},
{
manufacturer: "NXP",
model: "HITAG AES",
years: " a 2020"
},
{
manufacturer: "Texas",
model: "ID4C",
years: " a 2020"
},
{
manufacturer: "Texas",
model: "ID4D",
years: " a 2020"
},
{
manufacturer: "Texas",
model: "ID4D DST+",
years: " a 2020"
},
{
manufacturer: "Texas",
model: "ID4D-63 ESPECIAL",
years: " a 2020"
},
{
manufacturer: "Texas",
model: "ID4E",
years: " a 2020"
},
{
manufacturer: "JMA",
model: "TPX1",
years: " a 2020"
},
{
manufacturer: "JMA",
model: "TPX2",
years: " a 2020"
},
{
manufacturer: "CN",
model: "CN3",
years: " a 2020"
},
];
applicationObs = createObs("Observação sobre o transponders T5:", "Transponders T5 do tipo ilustrado abaixo, normalmente funcionam muito bem com o Módulo de transponders do Obdmap.", "../../")createObs("", "Transponders T5 do tipo ilustrado abaixo, podem exigir algumas repetições até que a gravação tenha sucesso.", "../../")createObs("", "Transponders T5 do tipo ilustrado abaixo (sem nenhuma inscrição), podem não funcionar com o Módulo de Transponders do Obdmap.", "../../")createObs("", "Transponders T5 (vidro) do tipo ilustrado abaixo (sem nenhuma inscrição), podem não funcionar no veículo.", "../../")



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "", 
image: "/images/Acessórios/OBDMap+Modulo de transponder+Fonte de alimentação.JPG"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.", 
image: "/images/Instrucao Modulo de Transponder/MT-Chave GM.jpg"},

{title: "", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a identificação do transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a copia do transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a escrita do transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},{title: `Realizando a randomização do transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},];
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
