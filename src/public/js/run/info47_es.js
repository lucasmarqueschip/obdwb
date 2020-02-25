//Capa
nomeCarga = `Manual Actualización -  OBD0047<br />`;
revCarga = `Rev. 1`;
dataManual = `January 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Brava 1.6`,
years: `2001 a 2003`
},
{
manufacturer: `Fiat`,
model: `Doblo 1.8`,
years: `2003 a 2006`
},
{
manufacturer: `Fiat`,
model: `Fiorino 1.3`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Fiorino 1.5`,
years: `1997 a 2000`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.0`,
years: `2001 a 2009`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.3 8V`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.0`,
years: `2000 a 2005`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.3`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Strada Fire 1.3`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Uno Fire 1.3`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Uno Mille Fire`,
years: `2001 a 2009`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Accessories used:`, 
description: ``, 
ballon: `Cable universal + adaptador A1.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilice el Fiat cable para alimentar el módulo de transponder.<br />Nota: La batería se encuentra detrás de la cubierta de plástico del lado del conductor`, 
image: `/images/Acessórios/Cabo Fiat.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinza soic 8. Conecta la memoria al OBDMap.`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/ECU 1.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/ECU 2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/ECU 3.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/Localizando a memória.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/Pinça conectada.jpg`},
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
`Abre&nbsp;switch`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK.`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Llave&nbsp;Cod.&nbsp;ERA:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`<br />`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CODE&nbsp;&nbsp;`,
`electronico:`,
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
`<br />`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CODE&nbsp;&nbsp;`,
`electronico:`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK.`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Intenta&nbsp;dar&nbsp;la`,
`Partida&nbsp;por&nbsp;10s`,
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
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizada!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [{ label: `Falla en la Comunicacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;la`,
`&nbsp;&nbsp;&nbsp;Comunicacion!`,
`<br />`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha espirado,`,`Mala conexión de los accesorios.`,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise si el cable universal y adaptador A1 está siendo usado,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez este software tenga sido alterado.`,]
},
{ label: `Falla en lectura!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en`,
`&nbsp;&nbsp;lectura!`,
`<br />`,
],
causes: [
`ppp `,],
solutions: [
`·	Revise la correcta posición de la pinza en la memoria, todos los terminales de la pinza deben encostarse a los terminales correspondentes de la memoria,`,`·	Revise si los tornillos que prenden l pinza al OBDMap están bien fijos,`,`·	Revise el buen estado del módulo,`,`·	Revise si los terminales de la memoria y de la pinza estan limpios, sin resina o suciedad.`,]
},
{ label: `Falla en Programacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en`,
`&nbsp;&nbsp;&nbsp;Programacion!`,
`<br />`,
],
causes: [
`·	Malo contacto de la pinza con la memoria,`,`·	Malo contacto de la pinza con el OBDMap,`,`·	Memoria o módulo con problema,`,`·	La pinza fue conectada en otro componente, (si existir otro componente SOIC8 en la placa)`,`·	Los terminales de la memoria o de la própia pinza pueden estar con resina o suciedad.`,],
solutions: [
`·	Revisar la correcta posición de la pinza en la memoria, todos los terminales de la pinza deben enconstarse a los terminales correspondentes de la memoria,`,`·	Revisar si los tornillos que fijan la pinza al OBDMap están bien fijos,`,`·	Revisar el estado del módulo,`,`·	Revisar si los terminales de la memoria y de la pinza están limpos, con resina o sucios.`,]
},
{ label: `Pinza invertida!`,
screens: [
`&nbsp;`,
`Pinza`,
`&nbsp;&nbsp;invertida!`,
`<br />`,
],
causes: [
`La pinza fue conectada invertida en la memoria, o sea, el pin 1 de la pinza no coincide con el pin 1 de la memoria (el pin 1 se queda del lado rojo del cable).`,],
solutions: [
`Revise la posición correcta de la pinza en la memoria.`,]
},
{ label: `Cortocircuito!`,
screens: [
`&nbsp;`,
`Cortocircuito!`,
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
