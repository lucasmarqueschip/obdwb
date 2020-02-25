//Capa
nomeCarga = `Manual Actualización -  OBD0133<br />`;
revCarga = `Rev. 6`;
dataManual = `January 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [

];
introObs = createObs()


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Nissan`,
model: `Frontier 2.5`,
years: `2006 a 2013`
},
{
manufacturer: `Nissan`,
model: `Versa 1.6`,
years: `2012 a 2017`
},
{
manufacturer: `Nissan`,
model: `Tiida 1.8`,
years: `2006 a 2013`
},
{
manufacturer: `Nissan`,
model: `March 1.0`,
years: `2016 a 2017`
},
{
manufacturer: `Nissan`,
model: `March 1.6`,
years: `2012 a 2017`
},
{
manufacturer: `Nissan`,
model: `Livina 1.8`,
years: `2009 a 2013`
},
{
manufacturer: `Nissan`,
model: `Sentra 2.0`,
years: `2005 a 2013`
},
{
manufacturer: `Nissan`,
model: `Gran Livina`,
years: `2009 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder used:`, 
description: ``, 
ballon: `Utilice el chip virgen PCF7936 - ID46.`, 
image: `/images/Transponders/Transponder PCF7936 Carvão.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Cable universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Cable universal + adaptador A1.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-C5-D6.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0133 Leitura de Senha e Programação de Chaves NATS 6 e NATS 6 CAN via OBD/OUTRAS MENSAGENS - ERRO DE COMUNICAÇÃO.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Conecta&nbsp;ignicion`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK.`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguarda...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;BCM:&nbsp;*****`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`&nbsp;Utilize&nbsp;Transp`,
`PCF7936&nbsp;en&nbsp;Blank`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`N.&nbsp;de&nbsp;Llaves:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Conecta&nbsp;ignicion`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`PIN..:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguarda...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Descon.&nbsp;ignicion`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ins&nbsp;llave&nbsp;n`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;arranca!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;Inserta&nbsp;y`,
`conecta&nbsp;llave&nbsp;*`,
`&nbsp;por&nbsp;5&nbsp;segundos`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ins&nbsp;llave&nbsp;n`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;arranca!`,
`<br />`,
],
help: ``
},
{lines: [
`Conecta&nbsp;la&nbsp;llave`,
`&nbsp;&nbsp;por&nbsp;5&nbsp;segs.,`,
`&nbsp;desc.&nbsp;la&nbsp;llave`,
`por&nbsp;5&nbsp;segs.&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Conecta&nbsp;el&nbsp;motor`,
`&nbsp;&nbsp;por&nbsp;30&nbsp;segs.`,
`&nbsp;para&nbsp;finalizar`,
`&nbsp;la&nbsp;prog.&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`&nbsp;Utilize&nbsp;Transp`,
`PCF7936&nbsp;en&nbsp;Blank`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Todas&nbsp;llaves&nbsp;`,
`seran&nbsp;borradas!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Conecta&nbsp;ignicion`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`PIN..:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguarda...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Descon.&nbsp;ignicion`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;Inserta&nbsp;y`,
`conecta&nbsp;llave&nbsp;*`,
`&nbsp;por&nbsp;5&nbsp;segundos`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;N.&nbsp;llaves:&nbsp;*`,
`Programar&nbsp;mas?`,
`(X)NO&nbsp;&nbsp;&nbsp;(OK)SI`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Conecta&nbsp;y&nbsp;desc.`,
`&nbsp;&nbsp;&nbsp;&nbsp;la&nbsp;ignicion!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [{ label: `Utilize el cable CAN!`,
screens: [
`<br />`,
`Utilize&nbsp;el&nbsp;cable&nbsp;`,
`CAN!`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Falla en la Comunicacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;la`,
`&nbsp;&nbsp;&nbsp;Comunicacion!`,
`<br />`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha espirado,`,`Mala conexión de los accesorios.`,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise si el cable universal y adaptador A1 está siendo usado,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez esta carga tenga sido alterada.`,]
},
{ label: `PIN incorrecto!`,
screens: [
`<br />`,
`&nbsp;PIN&nbsp;incorrecto!`,
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
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
