//Capa
nomeCarga = `Manual Actualización -  OBD0008<br />Clio II, Duster, Logan, Master y Sandero / Soic 93C66`;
revCarga = `Rev. 4`;
dataManual = `January 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Lectura del PIN del Calculador 2 por pinza.`,
`Programación de llaves por OBDII.`,
`<obs>`,
`Observaciones:`,
`- Para el vehículo Master, este software realiza solamente la programación de llaves. Para realizar la lectura del PIN es necesario utilizar el software OBD0121.`,
`- Para los otros vehículos, este software realiza la lectura del PIN y programación de llaves.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Renault`,
model: `Clio II 1.0 16v`,
years: `2004 a 2011`
},
{
manufacturer: `Renault`,
model: `Clio II 1.6 16v`,
years: `2004 a 2011`
},
{
manufacturer: `Renault`,
model: `Duster`,
years: `2012 a 2012`
},
{
manufacturer: `Renault`,
model: `Logan 1.0 16v`,
years: `2007 a 2011`
},
{
manufacturer: `Renault`,
model: `Logan 1.6 16v`,
years: `2007 a 2013`
},
{
manufacturer: `Renault`,
model: `Master 2.8`,
years: `2010 a 2012`
},
{
manufacturer: `Renault`,
model: `Sandero 1.6`,
years: `2007 a 2011`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Accessories used:`, 
description: ``, 
ballon: `Fuente de alimentación. Necesaria para utilizar el OBDMap en banco de pruebas.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinza soic 8. Conecta la memoria al OBDMap.`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `Cable universal + adaptador A1.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos los accesorios conectados.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: `Es necesario quitar el calculador del vehículo para hacer el procedimiento de lectura del PIN en banco por pinza.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0008  Clio2, Sandero e Logan/Retirar o Calculador.jpg`},

{title: ``, 
description: `Después de localizar la memoria, conecte la pinza.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0008  Clio2, Sandero e Logan/localizar a memória soic de numeração 93C66.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `El terminal OBDII del vehículo Master está situado en la posición A4.<br />El terminal OBDII de los vehículos Clio II y Duster está situado en la posición F6.<br />El terminal OBDII de los vehículos Logan y Sandero está situado en la posición I5.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4 - F6 - I5.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{title: `Lectura del PIN:`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Pinza`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Pinza`, `>Renault`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Renault`, `>Clio II - Calc`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Clio II - Calc`, `>Lectura?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
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
`Pin:`,
`************`,
`<br />`,
],
help: `Escriba el PIN.`
},
]
}, {title: `Programación de llaves:`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>Renault`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Renault`, `>Clio II - Calc`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Clio II - Calc`, `>Prog. Llaves?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Introduzca&nbsp;PIN:`,
`************`,
`<br />`,
],
help: `Ingrese el PIN de 12 dígitos leído anteriormente y pulsa OK!`
},
{lines: [
`&nbsp;`,
`Quite&nbsp;la&nbsp;llave`,
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
`Inserta&nbsp;llave&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`
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
`&nbsp;`,
`&nbsp;&nbsp;Llave&nbsp;`,
`&nbsp;&nbsp;&nbsp;Programada!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Programar`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mas&nbsp;llaves?`,
`<br />`,
],
help: `Pulsa OK para más llaves o VOLTAR para salir.`
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: `Press OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [{ label: `Error de Lectura`,
screens: [
`<br />`,
`Error&nbsp;de&nbsp;Lectura`,
`<br />`,
`<br />`,
],
causes: [
`Mal contacto de la pinza con la memoria,`,`Mal contacto de la pinza con el OBDMap,`,`Pinza con avería.`,``,],
solutions: [
`Revise la conexión de la pinza con la memoria,`,`Revise la conexión de la pinza con el OBDMap,`,`Revise el buen estado de la pinza.`,]
},
{ label: `Falla en la Comunicacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;la`,
`&nbsp;&nbsp;&nbsp;Comunicacion!`,
`<br />`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha expirado,`,`Mala conexión de los accesorios.`,``,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise si el cable universal y adaptador A1 está siendo usado,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más reciente con el soporte técnico, tal vez esta carga tenga sido alterada.`,]
},
{ label: `PIN Incorrecto!`,
screens: [
`&nbsp;`,
`PIN`,
`&nbsp;Incorrecto!`,
`<br />`,
],
causes: [
`El PIN ingresado está incorrecto.`,``,],
solutions: [
`Ingrese el PIN correcto.`,]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
