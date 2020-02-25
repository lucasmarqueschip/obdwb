//Capa
nomeCarga = `Manual Actualización -  OBD0207<br />Programación de llaves proximity Ford Pats 6`;
revCarga = `Rev. 3`;
dataManual = `January 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Borrado com reprogramación de 2 llaves proximity para el vehículo.`,
`Programación de hasta 4 llaves proximity para el veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Ford`,
model: `Focus 1.6`,
years: `2008 a 2013`
},
{
manufacturer: `Ford`,
model: `Focus 2.0`,
years: `2008 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0207- Ford Pats 6 Focus 2008 2013/Imágen-posterior-del-Ford-Focus-2010.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Chaves e Telecomandos/Chave Ford Focus keyless .jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Cable universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `Todos los accesorios enchufados para el procedimiento por OBDII.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `El conector de diagnóstico se queda localizado en la posición A4. <br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},

{title: ``, 
description: ``, 
ballon: `Extraiga la lámina del control y inserta en el encendido.`, 
image: `/images/Chaves e Telecomandos/slot ford focus.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{title: `Realizando la programación de las llaves proximity`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Ford`, `>PATS 6`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`PATS 6`, `>Focus 08-13`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Seleccione:`,
`Prog.&nbsp;Proximity`,
`<br />`,
],
help: `Pulsa OK.`
},
{lines: [
`&nbsp;`,
`Todas&nbsp;llaves&nbsp;`,
`seran&nbsp;borradas!`,
`<br />`,
],
help: `Las llaves proximity programadas serán borradas.`
},
{lines: [
`&nbsp;Dos&nbsp;llaves&nbsp;son`,
`necesarias&nbsp;para`,
`&nbsp;&nbsp;ejecutar&nbsp;el`,
`&nbsp;procedimiento!`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Utilizar&nbsp;la`,
`&nbsp;llave&nbsp;original!`,
`<br />`,
],
help: ``
},
{lines: [
`Pulsa&nbsp;start/stop`,
`&nbsp;para&nbsp;conectar`,
`&nbsp;el&nbsp;encendido.`,
`<br />`,
],
help: `Pulsa OK.`
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
`Pulsa&nbsp;start/stop`,
`para&nbsp;desconectar`,
`&nbsp;el&nbsp;encendido.`,
`<br />`,
],
help: `Pulsa OK.`
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
`Inserta&nbsp;la&nbsp;llave`,
`1&nbsp;en&nbsp;slot&nbsp;segun`,
`&nbsp;el&nbsp;manual&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Inserta la primera llave proximity a ser programada en el slot, segundo página 6 y pulsa OK.`
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
`&nbsp;&nbsp;&nbsp;Remueva&nbsp;la`,
`&nbsp;&nbsp;&nbsp;llave&nbsp;del`,
`&nbsp;vehiculo&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Inserta&nbsp;prox.&nbsp;`,
`llave&nbsp;en&nbsp;slot&nbsp;OK`,
`<br />`,
],
help: `Inserta la próxima llave proximity para ser programada en el slot y pulsa OK.`
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
`&nbsp;&nbsp;Pulsa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`del&nbsp;control&nbsp;1&nbsp;`,
`por&nbsp;1s.&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Presione el botón abrir del telecomando de la primera llave proximity y pulsa OK.`
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
`&nbsp;&nbsp;Pulsa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`del&nbsp;telemando&nbsp;2&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;por&nbsp;1s.&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Presione el botón abrir del telecomando de la primera llave proximity y pulsa OK.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;llaves`,
`Pro.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de llaves proximity actualmente programadas en el vehículo.`
},
{lines: [
`&nbsp;`,
`Proc.&nbsp;Concluido!`,
`Desconecte&nbsp;OBD`,
`<br />`,
],
help: `El procedimiento fue concluido con éxito. Desconecte el cable del conector de diagnóstico.`
},
{lines: [
`&nbsp;`,
`Tentativa&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Pueden ser hechos hasta 16 intentos de acceso.`
},
{lines: [
`&nbsp;`,
`Descon.&nbsp;ignición`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa Ok.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Aguarda`,
`&nbsp;&nbsp;10&nbsp;segundos!`,
`<br />`,
],
help: `Aguarda 10 segundos y volve al paso 10.`
},
]
}, {title: `Realizando la adición de nuevas llaves proximity`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Ford`, `>PATS 6`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`PATS 6`, `>Focus 08-13`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Seleccione:`,
`Add&nbsp;Proximity`,
`<br />`,
],
help: `Pulsa OK.`
},
{lines: [
`&nbsp;`,
`Utilizar&nbsp;la`,
`&nbsp;llave&nbsp;original!`,
`<br />`,
],
help: ``
},
{lines: [
`Pulsa&nbsp;start/stop`,
`&nbsp;para&nbsp;conectar`,
`&nbsp;el&nbsp;encendido.`,
`<br />`,
],
help: `Pulsa OK.`
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
`Pulsa&nbsp;start/stop`,
`para&nbsp;desconectar`,
`&nbsp;el&nbsp;encendido.`,
`<br />`,
],
help: `Pulsa OK.`
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
`Inserta&nbsp;la&nbsp;llave`,
`*&nbsp;en&nbsp;slot&nbsp;segun`,
`&nbsp;el&nbsp;manual&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Inserta la primera llave proximity a ser programada en el slot, segundo página 6 muestra y pulsa OK.`
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
`&nbsp;&nbsp;Pulsa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`del&nbsp;control&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;`,
`por&nbsp;1s.&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Presione el botón abrir del control de la primera llave proximity y pulsa OK.`
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
`Numero&nbsp;de&nbsp;llaves`,
`Pro.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de llaves proximity actualmente programadas en el vehículo.`
},
{lines: [
`&nbsp;`,
`Proc.&nbsp;Concluido!`,
`Desconecte&nbsp;OBD`,
`<br />`,
],
help: `El procedimiento fue concluido con éxito. Desconecte el cable del conector de diagnóstico.`
},
{lines: [
`&nbsp;`,
`Tentativa&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Pueden ser hechos hasta 16 intentos de acceso.`
},
{lines: [
`&nbsp;`,
`Descon.&nbsp;ignición`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa Ok.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Aguarda`,
`&nbsp;&nbsp;10&nbsp;segundos!`,
`<br />`,
],
help: `Aguarda 10 segundos y volve al paso 10.`
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
`Defecto en el vehículo, parte eléctrica.`,`Software del OBDMap desactualizado.`,`Mala conexión de los accesorios. `,],
solutions: [
`Revise si la batería está cargando.`,`Revise la parte eléctrica del vehículo, fusibles, etc.`,`Revise si el cable universal y adaptador A1 está siendo usado.`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones.`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente.`,`Revise la actualización más recente con el soporte técnico, talvez esta carga tenga sido alterada.`,]
},
{ label: `Falla en la Programacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;la`,
`&nbsp;&nbsp;&nbsp;Programacion!`,
`<br />`,
],
causes: [
` El transponder utilizado no es válido.`,` El transponder puede no estar dedicado correctamente para el vehículo.`,],
solutions: [
`Utilice un transponder compatible con el vehículo.`,``,` `,]
},
{ label: `Falla en el Transponder!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en`,
`&nbsp;el&nbsp;Transponder!`,
`<br />`,
],
causes: [
` El transponder utilizado no es válido.`,` El transponder puede no estar dedicado correctamente para el vehículo.`,],
solutions: [
` Utilice un transponder compatible con el vehículo.`,``,``,``,]
},
{ label: `Desconecte el OBDMap!!`,
screens: [
`&nbsp;`,
`Desconecte&nbsp;el&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OBDMap!!`,
`<br />`,
],
causes: [
`No fue posible acceder el modo de programación del vehículo.`,``,` `,],
solutions: [
`Aguarda 5 minutos y repita el procedimiento.`,``,]
},
{ label: `Incode: ****** Outcode:`,
screens: [
`&nbsp;`,
`Incode:&nbsp;******`,
`Outcode:`,
`<br />`,
],
causes: [
`Los intentos de accesso al vehículo han fallado.`,``,``,],
solutions: [
`Es necesario contactar el soporte para obtener el Outcode. Obs: No desactive la ignición en el processo porque se cambiará el código.`,``,``,]
},
{ label: `Utilize el cable A9`,
screens: [
`&nbsp;`,
`Utilize&nbsp;el&nbsp;cable`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A9`,
`<br />`,
],
causes: [
`El cable utilizado no está correcto.`,],
solutions: [
`Conecte el cable A9 y repita el procedimiento.`,]
},
{ label: `Error en el acceso!`,
screens: [
`&nbsp;`,
`Error&nbsp;en&nbsp;el&nbsp;`,
`acceso!`,
`<br />`,
],
causes: [
`No fue posible acceder el modo de programación del vehículo.`,``,],
solutions: [
`Repita el procedimiento.`,``,]
},
{ label: `Vehiculo fuera de Aplicacion!`,
screens: [
`&nbsp;`,
`Vehiculo&nbsp;fuera&nbsp;`,
`&nbsp;&nbsp;de&nbsp;Aplicacion!`,
`<br />`,
],
causes: [
`El vehículo no es parte de la aplicación de la carga.`,],
solutions: [
`Verificar aplicación.`,``,]
},
{ label: `Acceso Negado Aguarda 5:00 min Para Repetir`,
screens: [
`&nbsp;Acceso&nbsp;&nbsp;Negado`,
`Aguarda&nbsp;5:00&nbsp;min`,
`&nbsp;&nbsp;Para&nbsp;Repetir`,
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
