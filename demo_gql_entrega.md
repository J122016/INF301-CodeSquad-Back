
# Demo entrega, ejecución gql

Requerimientos, detallados en [README.md](README.md) :
- Tener permisos para leer/escribir en la db.
- Tener el servidor backend con Apolloserver levantado.

A continuación se detalla un **guion demo referencial** para mostrar la ejecución secuencial de operaciones en gql, para ello **copiar los siguientes bloques de código en campo operaciones y variables respectivamente dento del interprete de graphql en Apolloserver**. *(Igualmente puede generar operaciones con ayuda del explorador Apolloserver)*.

> Nota: Si encuentra elgún error no manejado favor avisar, ya sea generando una issue o vía interna indicando el mensaje de error obtenido y entradas.

## Operaciones

```graphql
# # # # # # # # # # # DEMO ROLES # # # # # # # # # # # 

# Consultar por rol que no existe
query GetRol {
  getRol(input: {nrol:"6"}) {
    id
    rol
    nrol
  }
}

# Añadir un nuevo Rol
mutation AddRol {
  addRol(input: {rol:"Rol ejemplo",nrol:"6"}) {
    id
    rol
    nrol
  }
}

# Ver todos los roles existentes, existiendo el recién agregado
query GetRoles {
  getRoles {
    id
    rol
    nrol
  }
}

# Actualizar un rol existente
mutation UpdateRol {
  updateRol(nrol: "6",rol:"Rol de ejemplo a eliminar") {
    id
    rol
    nrol
  }
}

# Revisar un rol específico, ejemplo el recien modificado
query GetRol {
  getRol(input: {nrol:"6"}) {
    id
    rol
    nrol
  }
}

# Borrar un rol existente
mutation DeleteRol {
  deleteRol(nrol: "6") {
    id
    mensaje
  }
}

# Revisando que realmente ya no se encuentre
query GetRoles {
  getRoles {
    id
    rol
    nrol
  }
}

# # # # # # # # # # # DEMO ROLES # # # # # # # # # # # 

# Obtener todos los usuarios registrados
query GetUsuarios {
  getUsuarios {
    id
    usuario
    pass
    nombre
    rut
    mail
    nrol
  }
}

# Obtener usuario especifico dado su rut
# - nota: ejemplo rut no existente: 12345678-0 
query GetUsuarioRut {
  getUsuarioRut(input: {rut:"12345678-9"}) {
    id
    usuario
    pass
    nombre
    rut
    mail
    nrol
  }
}

# Obtener usuarios por número de rol
# - nota: rol 1 actualmente es Admin
query GetUsuarioRol {
  getUsuarioRol(input: {nrol:"1"}) {
    id
    usuario
    pass
    nombre
    rut
    mail
    nrol
  }
}

# Registrar un nuevo usuario
mutation AddUsuario($insertUsuario: NuevoUsuario) {
  addUsuario(input: $insertUsuario) {
    id
    usuario
    pass
    nombre
    rut
    mail
    nrol
  }
}

# Actualizar un usuario existente
mutation UpdateUsuario($ModUsuario: CambioUsuario) {
  updateUsuario(rut: "12345678-0",input: $ModUsuario) {
    id
    usuario
    pass
    nombre
    rut
    mail
    nrol
  }
}

# Revisando que usuario cambio
query GetUsuarioRut {
  getUsuarioRut(input: {rut:"12345678-0"}) {
    id
    usuario
    pass
    nombre
    rut
    mail
    nrol
  }
}

# Eliminar un usuario existente
mutation DeleteUsuario {
  deleteUsuario(rut: "12345678-0") {
    id
    mensaje
  }
}

# Verificando que no exista "12345678-0"
query GetUsuarios {
  getUsuarios {
    rut
  }
}

# Inicio de sesión correcto mediante usuario
# - referencia variable "datoslog1": {
#    "usuario": "SegUsuario2",
#    "pass": "4321",
#    "mail": ""
#  }
query Login($datoslog1: login) {
  login(input: $datoslog1) {
    id
    nrol
    mensaje
  }
}

# Inicio de sesión incorrecto mediante correo
# - referencia variable "datoslog2": {
#    "usuario": "",
#    "pass": "4321",
#    "mail": "s.u@2.com"
#  }
query Login2($datoslog2: login) {
  login(input: $datoslog2) {
    id
    nrol
    mensaje
  }
}

# Inicio de sesión incorrecto
# - referencia variable "datoslog3": {
    "usuario": "",
    "pass": "431",
    "mail": "s.u@2.com"
  }
query Login3($datoslog3: login) {
  login(input: $datoslog3) {
    id
    nrol
    mensaje
  }
}

# # # # # # # # # # # DEMO AGENDA # # # # # # # # # # # 

# Consideración: las horas de atención son fijas en un día, bloques de 1hr manejados en front.

# Bloqueando una día de atención para TODOS los médicos, dado por ejemplo un feriado
# - referecia variable "agenda1": {
#    "categoria": "Global",
#    "id_medico": "",
#    "fecha": "2024-05-05",
#    "laboral": "No"
#  }
mutation addAgenda($agenda1: NuevaAgenda) {
  addAgenda(input: $agenda1) {
    id
    categoria
    id_medico
    fecha
    laboral
  }
}

# Abriendo la disponibilidad de UN médico para cierto día
# - referecia variable "agenda2": {
#    "categoria": "Medico",
#    "id_medico": "665353a188904508244f4bd9",
#    "fecha": "2024-05-03",
#    "laboral": "Si"
#  }
mutation addAgenda2($agenda2: NuevaAgenda) {
  addAgenda(input: $agenda2) {
    id
    categoria
    id_medico
    fecha
    laboral
  }
}

# Abriendo la disponibilidad de TODOS los médicos entre un PERIODO de fechas
# - referencia variable "agenda3": {
#    "ini": "2024-04-29",
#    "fin": "2024-05-04",
#    "categoria": "Global",
#    "id_medico": "",
#    "laboral": "Si"
#  }
mutation addAgendas($agenda3: NuevasAgendas) {
  addAgendas(input: $agenda3) {
    id
    categoria
    id_medico
    fecha
    laboral
  }
}

# Obteniendo la agenda completa de TODOS los médicos durante un periodo de tiempo
# - referencia variable "get1": {
#    "ini": "2024-04-29",
#    "fin": "2024-05-07",
#    "categoria": "Global"
#  }
query GetAgendas($get1: VerAgendas) {
  getAgendas(input: $get1) {
    id
    categoria
    id_medico
    fecha
    laboral
  }
}

# Obteniendo la agenda completa de UN médico durante un periodo de tiempo
# - referencia variable "get2": {
#    "ini": "2024-05-01",
#    "fin": "2024-05-07",
#    "id_medico": "665353a188904508244f4bd9"
#  }
query GetAgendasDoc($get2: VerAgendasDoc) {
  getAgendasDoc(input: $get2) {
    id
    categoria
    id_medico
    fecha
    laboral
  }
}

# # # # # # # # # # # DEMO RESERVAS # # # # # # # # # # # 

# Obtener reservas de un usuario dado su rut
# variable referencia "rutcte": {
#    "rut": "22222222-2"
#  }
query GetReservasCliente($rutcte: RutInput){
  getReservasCliente(input: $rutcte){
    id
    rut
    fecha
    hora
    id_medico
    atendido
    facturado
    pagado
  }
}

# Obtener reservas en espera de un día (idealmente el presente). 
# - nota: En espera significa que la hora esta reservada y pagada
# - referencia variable "dia": {
#    "fecha": "2024-05-27"
#  }
query GetReservasEnEsperaDia($dia: FechaInput) {    #query GetReservasEnEsperaDia {
  getReservasEnEsperaDia(input: $dia) {             #   getReservasEnEsperaDia(input: {"fecha": "2024-05-27"}){
    rut
    fecha
    hora
    pagado
    atendido
  }
}

# Crea una reserva para un paciente
# - referencia variable "reserva": {
#    "rut": "22222222-2",
#    "fecha": "2024-05-05",
#    "hora": "12:30",
#    "id_medico": "665353a188904508244f4bd9"
#  }
mutation CrearReserva($reserva: ReservaInput) {
  crearReserva(input: $reserva) {
    id
    mensaje
  }
}

# Modifica una reserva
# nota issue: Aquí se maneja una hora por día para paciente, a futuro se soportará multiples horas en un día.
# - referencia variables
# "buscareserva": {
#    "rut": "22222222-2",
#    "fecha": "2024-05-05"
#  },
# "modreserva1": {
#    "fecha": "2025-05-05",
#    "hora": "14:30",
#    "id_medico": "665353a188904508244f4bd9"
#  }
mutation ModificarReserva($buscareserva: RutFechaInput!,$modreserva1: modreservapaciente) {
  modificarReserva(input: $buscareserva,update: $modreserva1) {
    id
    mensaje
  }
}

# Obtiene Todas las Reservas de UN médico según fecha
# - referencia variable "buscareservadoc": {
#    "fecha": "2025-05-05",
#    "id_medico": "665353a188904508244f4bd9"
#  }
query GetReservasMedico($buscareservadoc: FechaIDInput) {
  getReservasMedico(input: $buscareservadoc) {
    id
    rut
    fecha
    hora
    id_medico
    atendido
    facturado
    pagado
  }
}

# Obtiene pacientes atendidos de UN médico según fecha
# - referencia variable "buscaratendidosdoc": {
#    "fecha": "2024-06-05",
#    "id_medico": "665353a188904508244f4bd9"
#  }
query getAtendidosMedico($buscaratendidosdoc: FechaIDInput) {
  getAtendidosMedico(input: $buscaratendidosdoc) {
    id
    rut
    fecha
    hora
    id_medico
    atendido
    facturado
    pagado
  }
}

# Cancela/Elimina una reserva dado médico, día y hora agendada
# - referencia variables
# "rutcte": {
#    "rut": "22222222-2"
#  },
# "modreserva1": {
#    "fecha": "2025-05-05",
#    "hora": "14:30",
#    "id_medico": "665353a188904508244f4bd9"
#  }
mutation CancelarReserva( $rutcte: RutInput, $modreserva1: modreservapaciente) {
  cancelarReserva(input: $rutcte, reserva: $modreserva1) {
    mensaje
  }
}

# Marcar una reserva como atendida
# - notas: 
#   Requiere exista (ejecutar flujo reservas nuevamente sin cancelar).
#   Requiere que esta este pagada, es decir, tenga una boleta (ejecutar addBoleta con datos pertinentes).
# - referencia variables
# "rutcte": {
#    "rut": "22222222-2"
#  },
# "modreserva1": {
#    "fecha": "2025-05-05",
#    "hora": "14:30",
#    "id_medico": "665353a188904508244f4bd9"
#  }
mutation Marcaratendido($rutcte: RutInput, $modreserva1: modreservapaciente){
  marcaratendido(input: $rutcte, reserva: $modreserva1) {
    mensaje
  }
}

# # # # # # # # # # # DEMO BOLETAS # # # # # # # # # # # 

# Agregar una boleta, dejando pagada una atención
# - referencia variable "boletaInput": {
#    "fecha": "2024-05-27",
#    "id_atencion": "66550fafae262793438ce8ca",
#    "monto": 100.50
#  }
mutation addBoleta($boletaInput: BoletaInput!) {
  addBoleta(input: $boletaInput) {
    id
    id_atencion
    monto
    fecha
  }
}

# Obtener todas las boletas generadas
query getBoletas {
  getBoletas {
    id
    id_atencion
    monto
    fecha
  }
}

# Obtener una boleta específica
# - referencia variable "getBoletaId": "66555c3ff58296ddda389cf8"
query getBoleta ($getBoletaId: ID!){    #query getBoleta {
  getBoleta(id: $getBoletaId) {         #    getBoleta(id: "66555c3ff58296ddda389cf8") {
    id
    id_atencion
    monto
    fecha
  }
}

# Actualizar una boleta
# - nota: boleta debe existir
# - referencia variables
# "inputUpdateBoleta": {
#    "fecha": "2024-05-28",
#    "id_atencion": "66550fafae262793438ce8ca",
#    "monto": 200.75
#  },
# "updateBoletaId": "6655507a33a32141a0a5cf76"
mutation updateBoleta($inputUpdateBoleta: BoletaInput, $updateBoletaId: ID!) {
  updateBoleta(input: $inputUpdateBoleta, id: $updateBoletaId) {
    id
    id_atencion
    monto
    fecha
  }
}

# Borra una boleta específica
# nota: boleta debe existir
# - referencia variable "deleteBoletaId": "665551f233a32141a0a5cf7c"
mutation deleteBoleta($deleteBoletaId: ID!) {
  deleteBoleta(id: $deleteBoletaId) {
    id
    mensaje
  }
}

# Obtiene la cantidad de atenciones EFECTUADAS (pagadas y con asistencia) por día de la semana para reportería (demora un poco, falta optimizar)
# - referencia variables
# "inicio": {
#    "fecha": "2024-04-01"
#  },
#  "fin": {
#    "fecha": "2024-07-12"
#  }
query GetReporteAtencionesEfectuadasPorDia($inicio: FechaInput, $fin: FechaInput) {
  getReporteAtencionesEfectuadasPorDia(inicio: $inicio, fin: $fin) {
    atenciones
    dia
  }
}

# # # # # # # # # # # DEMO FACTURAS # # # # # # # # # # # 

# Obtiene el la suma de monto y cantidad de reservas pagadas pero no facturadas entre un periodo para un médico
# - referencia variables
#  "medicoId": "665353a188904508244f4bd9",
#  "fechaInicio": "2024-05-01",
#  "fechaFinal": "2024-07-12"
query GetReservasAFacturar($medicoId: String!, $fechaInicio: String!, $fechaFinal: String!) {
  getReservasAFacturar(id_medico: $medicoId, fecha_inicio: $fechaInicio, fecha_final: $fechaFinal) {
    monto
    numero_atenciones
  }
}

# Genera una nueva factura
# - referencia variable "facturaInput": {
#    "comision": 50,
#    "creada_por": "ID secretaria",
#    "id_medico": "ID médico",
#    "monto": 50000,        // se obtiene mediante GetReservasAFacturar
#    "numero_atenciones": 2 // se obtiene mediante GetReservasAFacturar
#  }
mutation AddFactura($facturaInput: FacturaInput) {
  addFactura(facturaInput: $facturaInput) {
    id
  }
}

# Obtiene TODAS las facturas
# - nota: misma función puede ser ocupada para filtrar (ver siguiente operación)
query GetFacturas {
  getFacturas {
    id,
    id_medico,
    creada_por,
    monto
  }
}

# Obtiene facturas con filtros opcionales de periodo fechas y médico
query GetFacturas{
  getFacturas(filters: {
    inicio: "2022-01-01"
    final: "2025-01-31"
    id_medico: "665353a188904508244f4bd9"
  }) {
    id,
    id_medico,
    creada_por,
    createdAt,
    monto
  }
}
 
# Obtiene una factura específica mediante su identificador
# - referencia variable "getFacturaId": "6653f488b769b5dbeeed6b6d"
query GetFactura($getFacturaId: String!) {
  getFactura(id: $getFacturaId) {
    id
    id_medico
    numero_atenciones
    comision
    monto
    nota_adicional
    comprobante_pdf
    nota_adicional_comprobante
    creada_por
    actualizada_por
    createdAt
    updatedAt
  }
}

# Actualiza una factura, idealmente para añadir el comprobante correspondiente
# - nota: a su vez actualiza las reservas correspondientes a estado facturado
# - referencia variable 
# "comprobanteInput": {
#    "actualizada_por": "ID actualizador",
#    "comprobante_pdf": "url/path/to/comprobante.pdf",
#    "factura_id": "6653f488b769b5dbeeed6b6d",
#    "nota_adicional_comprobante": "Pago a 30 dias"
#  }
mutation UpdateFactura($comprobanteInput: ComprobanteInput) {
  updateFactura(comprobanteInput: $comprobanteInput) {
    actualizada_por
    updatedAt
    nota_adicional_comprobante
    monto
    comprobante_pdf
    numero_atenciones
    reservasActualizadas
  }
}

# Elimina una factura existente especifica solo si no tiene comprobante anexado
# - referencia variable 
#  "deleteFacturaId": "6653fdb393c85d7ea0e30b40"
mutation anularFactura($deleteFacturaId: String!) {
  anularFactura(factura_id: $deleteFacturaId) {
    id
    mensaje
  }
}

# Obtiene el monto comicionado total por día para cada médico para un periodo seleccionado, uso para reportes.
# - referencia variables
#  "fechaInicio": "2024-05-01",
#  "fechaFinal": "2024-07-12"
query GetReporteComisionesMedicosPorDia ($fechaInicio: String!, $fechaFinal: String!){
  getReporteComisionesMedicosPorDia(fecha_inicio: $fechaInicio, fecha_final: $fechaFinal) {
    id_medico
    comision_monto
  }
}
```

## **Variables generales**

Conjunto de variables reutilizadas para las operaciones anteriores.

```json
{
  "getEntityId": "66495e15deff23f5f886c189",
  "setInput": {
    "nombre": "nombre ejemplo"
  },
  "insertUsuario": {
    "usuario": "Usuario secretaria",
    "pass": "1234567890",
    "nombre": "Usuario ejemplo",
    "rut": "12345678-0",
    "mail": "nombre.apellido@1.com",
    "nrol": "2"
  },
  "ModUsuario": {
    "usuario": "secretaria modificado",
    "pass": "abcde",
    "nombre": "Segundo Ejemplo",
    "mail": "nom.app@2.com",
    "nrol": "2"
  },
  "datoslog1": {
    "usuario": "SegUsuario2",
    "pass": "4321",
    "mail": ""
  },
  "datoslog2": {
    "usuario": "",
    "pass": "4321",
    "mail": "s.u@2.com"
  },
  "datoslog3": {
    "usuario": "",
    "pass": "431",
    "mail": "s.u@2.com"
  },
  "agenda1": {
    "categoria": "Global",
    "id_medico": "",
    "fecha": "2024-05-05",
    "laboral": "No"
  },
  "agenda2": {
    "categoria": "Medico",
    "id_medico": "665353a188904508244f4bd9",
    "fecha": "2024-05-03",
    "laboral": "Si"
  },
  "agenda3": {
    "ini": "2024-04-29",
    "fin": "2024-05-04",
    "categoria": "Global",
    "id_medico": "",
    "laboral": "Si"
  },
  "get1": {
    "ini": "2024-04-29",
    "fin": "2024-05-07",
    "categoria": "Global"
  },
  "get2": {
    "ini": "2024-05-01",
    "fin": "2024-05-07",
    "id_medico": "665353a188904508244f4bd9"
  },
  "reserva": {
    "rut": "22222222-2",
    "fecha": "2024-05-05",
    "hora": "12:30",
    "id_medico": "665353a188904508244f4bd9"
  },
  "rutcte": {
    "rut": "22222222-2"
  },
  "buscareserva": {
    "rut": "22222222-2",
    "fecha": "2024-05-05"
  },
  "buscareservadoc": {
    "fecha": "2025-05-05",
    "id_medico": "665353a188904508244f4bd9"
  },
  "buscaratendidosdoc": {
    "fecha": "2024-06-05",
    "id_medico": "665353a188904508244f4bd9"
  },
  "modreserva1": {
    "fecha": "2025-05-05",
    "hora": "14:30",
    "id_medico": "665353a188904508244f4bd9"
  },
  "dia": {
    "fecha": "2024-05-27"
  },
  "inicio": {
    "fecha": "2024-04-01"
  },
  "fin": {
    "fecha": "2024-07-12"
  },
  "boletaInput": {
    "fecha": "2024-05-27",
    "id_atencion": "66550fafae262793438ce8ca",
    "monto": 100.50
  },
  "getBoletaId": "66555c3ff58296ddda389cf8",
  "inputUpdateBoleta": {
    "fecha": "2024-05-28",
    "id_atencion": "66550fafae262793438ce8ca",
    "monto": 200.75
  },
  "updateBoletaId": "66555c3ff58296ddda389cf8",
  "deleteBoletaId": "665551f233a32141a0a5cf7c",

  "facturaInput": {
    "comision": 50,
    "creada_por": "ID secretaria",
    "id_medico": "ID médico",
    "monto": 50000,
    "numero_atenciones": 2
  },
  "getFacturaId": "6653f488b769b5dbeeed6b6d",
  "comprobanteInput": {
    "actualizada_por": "ID actualizador",
    "comprobante_pdf": "url/path/to/comprobante.pdf",
    "factura_id": "6653f488b769b5dbeeed6b6d",
    "nota_adicional_comprobante": "Pago a 30 dias"
  },
  "deleteFacturaId": "6653fdb393c85d7ea0e30b40",
  "medicoId": "665353a188904508244f4bd9",
  "fechaInicio": "2024-05-01",
  "fechaFinal": "2024-07-12"
}
```