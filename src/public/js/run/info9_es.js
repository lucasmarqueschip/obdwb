//Capa
nomeCarga = `Manual Actualización -  OBD0009<br />Programación de LlavesTracker T19`;
revCarga = `Rev. 1`;
dataManual = `January 2011`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Programación de hasta 4 llaves para el vehículo.`,
``,
`Observación: `,
`Las llaves programadas se quedarán precargadas solamente para este vehículo. Las llaves programadas no funcionarán en otro vehículo. Este software solamente hace la programación de llaves, no borra las llaves antíguas y`,
`no mostra da cuantidad de llaves programadas en el vehículo. Si añadir una quinta llave, una de las llaves anteriores no funcionará más.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `GM`,
model: `Tracker 2.0`,
years: `2002 a 2007`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilice una llave azul T19 (ID 46) bloqueado, precargado para Suzuki.`, 
image: `/images/Chaves e Telecomandos/Chave azul t19 GM.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Utilice el cable universal + adaptador A2.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A2 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos los accesorios enchufados para el procedimiento via OBD.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A2 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `El terminal OBDII del vehículo se encuentra en la área D6.<br /><br /><br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/D6.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{title: `Realizando la programación de llaves`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Inmo Tracker`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Inmo Tracker`, `>Tipo 1`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Tipo 1`, `>Prog. Llaves?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Utilice&nbsp;el`,
`&nbsp;Adaptador&nbsp;A2!`,
`<br />`,
],
help: `Utilizado en el sistema Tipo 1.`
},
{lines: [
`&nbsp;`,
`Utilice&nbsp;el`,
`&nbsp;Adaptador&nbsp;A2!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`Utilice&nbsp;el&nbsp;chip&nbsp;&nbsp;`,
`T19&nbsp;precargado&nbsp;&nbsp;&nbsp;`,
`para&nbsp;Suzuki`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`Utilice&nbsp;el&nbsp;chip&nbsp;&nbsp;`,
`T19&nbsp;precargado&nbsp;&nbsp;&nbsp;`,
`para&nbsp;Suzuki`,
`<br />`,
],
help: `Pulsa OK!`
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
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Llave&nbsp;`,
`&nbsp;&nbsp;&nbsp;Programada!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Llave&nbsp;`,
`&nbsp;&nbsp;&nbsp;Programada!`,
`<br />`,
],
help: `Pulsa OK!
`
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
{ label: `Falla en la Programacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;la`,
`&nbsp;&nbsp;&nbsp;Programacion!`,
`<br />`,
],
causes: [
`Batería del control remoto está baja,`,`Las antenas de recepción del control remoto puede no estar en perfecito funcionamiento,`,`El control remoto no está en el interior del vehículo,`,`La llave no está en la ignición,`,`La programación no fue completada,`,`El chip no está programado en el coche,`,`Defecto en el coche, parte eléctrica, sensores de aproximación.`,``,],
solutions: [
`Revise la batería del control remoto,`,`Revise las antenas del sistema de aproximación en el techo del vehículo,`,`Ponga el control remoto en el interior del vehículo,`,`Ponga la llave en la ignición,`,`Revise si el chip está programado al vehículo,`,`Realice el procedimiento nuevamente,`,`Revise la parte eléctrica del coche, fusibles, sensores de aproximación, etc.`,]
},
{ label: `Falla en el Chip!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;el&nbsp;Chip!`,
`<br />`,
],
causes: [
`Es necesario que el transponder tenga pasado por el procedimiento de generación, o que lo mismo ya estea válido en el vehículo antes de la presentación. `,``,``,``,],
solutions: [
]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
