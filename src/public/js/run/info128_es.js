//Capa
nomeCarga = `Manual Actualización -  OBD0128<br />Programación de Llaves Ford New Fiesta`;
revCarga = `Rev. 1`;
dataManual = `January 2012`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Borrar llaves.`,
`Programación de hasta 5 llaves.`,
`Con esta function es possible borrar todas las llaves del vehículo y programar nuevas llaves sin borrar las antiguas.`,

];
introObs = createObs(`Observación:`, `- Cuando hacer el procedimiento de borrar llaves es necessario tener al menos 2 llaves para que el sistema trabaje nuevamente.`, ``)


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Ford`,
model: `New Fiesta 1.6`,
years: `2012 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder used:`, 
description: ``, 
ballon: `Chip Texas Crypto ID4D-DST Plus.`, 
image: `/images/Transponders/ID4D-DST Plus.jpg`},

{title: ``, 
description: ``, 
ballon: `Chip ya montado en la llave.`, 
image: `/images/Chaves e Telecomandos/ID4D-DST Plus na chave.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Utilice el cable CAN o cable Universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo CAN.jpg`},

{title: ``, 
description: ``, 
ballon: `Cable universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Conecte el cable universal al adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos los accesorios enchufados para el procedimiento por OBDII.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `El terminal OBDII del vehículo está situado en la posición A5.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{title: `Borrar llaves`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Ford`, `>PATS 3`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`PATS 3`, `>N FIESTA 12-12`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`N FIESTA 12-12`, `>Borrar llaves`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Utilice&nbsp;2&nbsp;chips`,
`ID4D&nbsp;DST+&nbsp;Ford`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Espere...`,
`<img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" /><img class="imgCarac" src="images/bar.png" />`,
`<br />`,
],
help: `Espere 10 minutos.`
},
{lines: [
`&nbsp;`,
`Cerra&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`Asegure&nbsp;la&nbsp;llave&nbsp;`,
`en&nbsp;posicion&nbsp;de&nbsp;`,
`arranque!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Pulsa&nbsp;OK`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: `Durante ese tiempo, asegure la llave en posicion de arranque.`
},
{lines: [
`&nbsp;`,
`Inserta&nbsp;otra`,
`llave&nbsp;y&nbsp;pulsa&nbsp;OK`,
`<br />`,
],
help: `Inserte la llave siguiente. Pulsa OK!`
},
{lines: [
`Asegure&nbsp;la&nbsp;llave&nbsp;`,
`en&nbsp;posicion&nbsp;de&nbsp;`,
`arranque!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Pulsa&nbsp;OK`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: `Durante ese tiempo, asegure la llave en posicion de arranque.`
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
}, {title: `Programación de llaves`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Ford`, `>PATS 3`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`PATS 3`, `>N FIESTA 12-12`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`N FIESTA 12-12`, `>Añadir llaves`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Utilice&nbsp;el&nbsp;Chip`,
`ID4D&nbsp;DST+&nbsp;Ford`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
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
`Espere...`,
`<br />`,
`<br />`,
],
help: `Espere 10 minutos.`
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
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise si el cable universal y adaptador A3 está siendo usado,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez esta carga tenga sido alterada.`,]
},
{ label: `Acceso Denegado!`,
screens: [
`&nbsp;`,
`Acceso&nbsp;Denegado!`,
`<br />`,
`<br />`,
],
causes: [
`El vehículo no es compatible con la aplicación.`,``,],
solutions: [
`Revise la aplicación,`,`Repita el procedimiento.`,``,]
},
{ label: `Falla Operacion! <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Falla`,
`&nbsp;&nbsp;&nbsp;Operacion!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},
{ label: `Utilice cable CAN o adaptador A3 CAN!`,
screens: [
`Utilice&nbsp;cable&nbsp;`,
`CAN`,
`o&nbsp;adaptador&nbsp;A3&nbsp;`,
`CAN!`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
