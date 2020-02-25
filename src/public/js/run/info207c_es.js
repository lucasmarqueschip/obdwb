//Capa
nomeCarga = `Manual Actualización -  OBD0207<br />Programación de llaves proximity Ford Pats 6`;
revCarga = `Rev. 3`;
dataManual = `January 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
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
ballon: `Cable universal connect`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `Todos los accesorios enchufados para el procedimiento por OBDII.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

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

obdmap = false;
services = 
[
{title: `Realizando la programación de las llaves proximity`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Seleccione:`,
`Programar&nbsp;proximidad`,
`<br />`,
],
help: `Pulsa OK.`
},
{lines: [
`Todas&nbsp;llaves&nbsp;seran&nbsp;borradas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Salir`,
`<br />`,
],
help: `Las llaves proximity programadas serán borradas.`
},
{lines: [
`Dos&nbsp;llaves&nbsp;son`,
`necesarias&nbsp;para`,
`ejecutar&nbsp;el`,
`procedimiento!`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Utilizar&nbsp;la&nbsp;llave&nbsp;original!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Pulsa&nbsp;START/STOP&nbsp;para&nbsp;abrir&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK.`
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
`Pulsa&nbsp;start/stop&nbsp;para&nbsp;cerrar&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK.`
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
`Inserta&nbsp;la&nbsp;llave`,
`en&nbsp;slot&nbsp;segun`,
`el&nbsp;manual&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Inserta la primera llave proximity a ser programada en el slot, segundo página 6 y pulsa OK.`
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
`Quite&nbsp;la`,
`llave&nbsp;del`,
`vehículo&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Insertar&nbsp;la&nbsp;siguiente&nbsp;llave&nbsp;`,
`en&nbsp;slot&nbsp;OK`,
`<br />`,
],
help: `Inserta la próxima llave proximity para ser programada en el slot y pulsa OK.`
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
`Pulsa&nbsp;*&nbsp;del`,
`control&nbsp;remoto&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;por&nbsp;&nbsp;`,
`1segundo&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Presione el botón abrir del telecomando de la primera llave proximity y pulsa OK.`
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
`Pulsa&nbsp;*&nbsp;del`,
`control&nbsp;remoto&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;por&nbsp;&nbsp;`,
`1segundo&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Presione el botón abrir del telecomando de la primera llave proximity y pulsa OK.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;llaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de llaves proximity actualmente programadas en el vehículo.`
},
{lines: [
`&nbsp;`,
`Procedimiento&nbsp;Concluido!`,
`Desconecte&nbsp;OBD&nbsp;`,
`<br />`,
],
help: `El procedimiento fue concluido con éxito. Desconecte el cable del conector de diagnóstico.`
},
{lines: [
`&nbsp;`,
`Intento&nbsp;**`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Pueden ser hechos hasta 16 intentos de acceso.`
},
{lines: [
`&nbsp;`,
`Cerra&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Pulsa Ok.`
},
{lines: [
`&nbsp;`,
`Espere`,
`10&nbsp;segundos!`,
`<br />`,
],
help: `Aguarda 10 segundos y volve al paso 10.`
},
]
}, {title: `Realizando la adición de nuevas llaves proximity`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Seleccione:`,
`Llave&nbsp;de&nbsp;proximidad`,
`<br />`,
],
help: `Pulsa OK.`
},
{lines: [
`&nbsp;`,
`Utilizar&nbsp;la&nbsp;llave&nbsp;original!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Pulsa&nbsp;START/STOP&nbsp;para&nbsp;abrir&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK.`
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
`Pulsa&nbsp;start/stop&nbsp;para&nbsp;cerrar&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK.`
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
`Inserta&nbsp;la&nbsp;llave`,
`en&nbsp;slot&nbsp;segun`,
`el&nbsp;manual&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Inserta la primera llave proximity a ser programada en el slot, segundo página 6 muestra y pulsa OK.`
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
`Pulsa&nbsp;*&nbsp;del`,
`control&nbsp;remoto&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;por&nbsp;&nbsp;`,
`1segundo&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Presione el botón abrir del control de la primera llave proximity y pulsa OK.`
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
`Numero&nbsp;de&nbsp;llaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de llaves proximity actualmente programadas en el vehículo.`
},
{lines: [
`&nbsp;`,
`Procedimiento&nbsp;Concluido!`,
`Desconecte&nbsp;OBD&nbsp;`,
`<br />`,
],
help: `El procedimiento fue concluido con éxito. Desconecte el cable del conector de diagnóstico.`
},
{lines: [
`&nbsp;`,
`Intento&nbsp;**`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Pueden ser hechos hasta 16 intentos de acceso.`
},
{lines: [
`&nbsp;`,
`Cerra&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Pulsa Ok.`
},
{lines: [
`&nbsp;`,
`Espere`,
`10&nbsp;segundos!`,
`<br />`,
],
help: `Aguarda 10 segundos y volve al paso 10.`
},
]}];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [
{ label: `Falla en la Comunicacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;la&nbsp;Comunicacion!`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Defecto en el vehículo, parte eléctrica.`,`Software del OBDMap desactualizado.`,`Mala conexión de los accesorios. `,],
solutions: [
`Revise si la batería está cargando.`,`Revise la parte eléctrica del vehículo, fusibles, etc.`,`Revise si el cable universal y adaptador A1 está siendo usado.`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones.`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente.`,`Revise la actualización más recente con el soporte técnico, talvez esta carga tenga sido alterada.`,]
},
{ label: `Falla en la Programacion!`,
screens: [
`Falla&nbsp;en&nbsp;la`,
`Programacion!`,
`Pulsa&nbsp;&lt;OK&gt;`,
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
`Falla&nbsp;en&nbsp;el&nbsp;Transponder!`,
`Pulse&nbsp;&lt;OK&gt;`,
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
`OBDMap!!`,
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
`Incode:&nbsp;******&nbsp;`,
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
`Utilice&nbsp;el&nbsp;cable`,
`A9!`,
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
`Error&nbsp;en&nbsp;el&nbsp;acceso!`,
`<br />`,
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
`de&nbsp;la&nbsp;Aplicacion!`,
`<br />`,
],
causes: [
`El vehículo no es parte de la aplicación de la carga.`,],
solutions: [
`Verificar aplicación.`,``,]
},
{ label: `Acceso Negado Aguarda 5:00 min Para Repetir`,
screens: [
`Acceso&nbsp;&nbsp;Negado`,
`Espere&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;min`,
`Para&nbsp;Repetir`,
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
