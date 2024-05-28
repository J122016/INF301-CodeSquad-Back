# Lista de operaciones para probar en graphql

TO DO: Organizar funciones por entidad

## Operación
```graphql

mutation Mutation($setInput: ModelOneInput) {
  addEntity(input: $setInput) {
    nombre
  }
}

query GetEntities {
  getEntities {
    id
    nombre
  }
}

query Query($getEntityId: String!) {
  getEntity(id: $getEntityId) {
    id
    nombre
  }
}

query GetRoles {
  getRoles {
    id
    rol
    nrol
  }
}

query GetRol {
  getRol(input: {nrol:"2"}) {
    id
    rol
    nrol
  }
}

mutation AddRol {
  addRol(input: {rol:"Cajero",nrol:"4"}) {
    id
    rol
    nrol
  }
}

mutation UpdateRol {
  updateRol(nrol: "4",rol:"Cajero") {
    id
    rol
    nrol
  }
}

mutation DeleteRol {
  deleteRol(nrol: "4") {
    id
    mensaje
  }
}

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

mutation UpdateUsuario($ModUsuario: CambioUsuario) {
  updateUsuario(rut: "98765432-1",input: $ModUsuario) {
    id
    usuario
    pass
    nombre
    rut
    mail
    nrol
  }
}

mutation DeleteUsuario {
  deleteUsuario(rut: "98765432-1") {
    id
    mensaje
  }
}

query Login($datoslog1: login) {
  login(input: $datoslog1) {
    id
    nrol
    mensaje
  }
}

query Login2($datoslog2: login) {
  login(input: $datoslog2) {
    id
    nrol
    mensaje
  }
}

query Login3($datoslog3: login) {
  login(input: $datoslog3) {
    id
    nrol
    mensaje
  }
}

mutation addAgenda($agenda1: NuevaAgenda) {
  addAgenda(input: $agenda1) {
    id
    categoria
    id_medico
    fecha
    laboral
  }
}

mutation addAgenda2($agenda2: NuevaAgenda) {
  addAgenda(input: $agenda2) {
    id
    categoria
    id_medico
    fecha
    laboral
  }
}

mutation addAgendas($agenda3: NuevasAgendas) {
  addAgendas(input: $agenda3) {
    id
    categoria
    id_medico
    fecha
    laboral
  }
}

query GetAgendas($get1: VerAgendas) {
  getAgendas(input: $get1) {
    id
    categoria
    id_medico
    fecha
    laboral
  }
}

query GetAgendasDoc($get2: VerAgendasDoc) {
  getAgendasDoc(input: $get2) {
    id
    categoria
    id_medico
    fecha
    laboral
  }
}

query GetReservasCliente($rutcte: RutInput) {
  getReservasCliente(input: $rutcte) {
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

query GetReservasEnEsperaDia($dia: FechaInput) {
  getReservasEnEsperaDia(input: $dia) {
    rut
    fecha
    hora
    pagado
    atendido
  }
}

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

query getAtendidosMedico($buscareservadoc: FechaIDInput) {
  getAtendidosMedico(input: $buscareservadoc) {
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

mutation CrearReserva($reserva: ReservaInput) {
  crearReserva(input: $reserva) {
    id
    mensaje
  }
}

mutation ModificarReserva($buscareserva: RutFechaInput!,$modreserva1: modreservapaciente) {
  modificarReserva(input: $buscareserva,update: $modreserva1) {
    id
    mensaje
  }
}

mutation cancelarReserva($buscareserva: RutFechaInput!) {
  cancelarReserva(input: $buscareserva) {
    mensaje
  }
}

mutation MarcarPagado($buscareserva: RutFechaInput) {
  marcarPagado(input: $buscareserva) {
    mensaje
  }
}

mutation Marcaratendido($buscareserva: RutFechaInput!) {
  marcaratendido(input: $buscareserva) {
    mensaje
  }
}


mutation addBoleta($boletaInput: BoletaInput!) {
  addBoleta(input: $boletaInput) {
    id
    id_atencion
    monto
    fecha
  }
}

query getBoletas {
  getBoletas {
    id
    id_atencion
    monto
    fecha
  }
}

query getBoleta($getBoletaId: ID!) {
  getBoleta(id: $getBoletaId) {
    id
    id_atencion
    monto
    fecha
  }
}


mutation updateBoleta($inputUpdateBoleta: BoletaInput, $updateBoletaId: ID!) {
  updateBoleta(input: $inputUpdateBoleta, id: $updateBoletaId) {
    id
    id_atencion
    monto
    fecha
  }
}

mutation deleteBoleta($deleteBoletaId: ID!) {
  deleteBoleta(id: $deleteBoletaId) {
    id
    mensaje
  }
}

query GetReporteAtencionesEfectuadasPorDia($inicio: FechaInput, $fin: FechaInput) {
  getReporteAtencionesEfectuadasPorDia(inicio: $inicio, fin: $fin) {
    atenciones
    dia
  }
}
```

**Variables**
```json
{
  "getEntityId": "66495e15deff23f5f886c189",
  "setInput": {
    "nombre": "nombre ejemplo"
  },
  "insertUsuario": {
    "usuario": "SegUsuario",
    "pass": "4321",
    "nombre": "Segundo Usuario",
    "rut": "98765432-1",
    "mail": "s.u@1.com",
    "nrol": "1"
  },
  "ModUsuario": {
    "usuario": "SegUsuario2",
    "pass": "4321",
    "nombre": "Segundo Usuario2",
    "mail": "s.u@2.com",
    "nrol": "1"
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
    "fecha": "2024-05-05",
    "id_medico": "665353a188904508244f4bd9"
  },
  "modreserva1": {
    "fecha": "2024-05-05",
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
  "getBoletaId": "6655507a33a32141a0a5cf76",
  "inputUpdateBoleta": {
    "fecha": "2024-05-28",
    "id_atencion": "66550fafae262793438ce8ca",
    "monto": 200.75
  },
  "updateBoletaId": "6655507a33a32141a0a5cf76",
  "deleteBoletaId": "665551f233a32141a0a5cf7c"
}
```

## Operaciones ejemplo para API Factura

```graphql
mutation AddFactura($facturaInput: FacturaInput) {
  addFactura(facturaInput: $facturaInput) {
    id
  }
}

query GetFacturas {
  getFacturas {
    id,
    id_medico,
    creada_por,
    monto
  }
}

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

query GetReservasAFacturar($medicoId: String!, $fechaInicio: String!, $fechaFinal: String!) {
  getReservasAFacturar(medico_id: $medicoId, fecha_inicio: $fechaInicio, fecha_final: $fechaFinal) {
    monto
    numero_atenciones
  }
}

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

mutation anularFactura($deleteFacturaId: String!) {
  deleteFactura(factura_id: $deleteFacturaId) {
    id
    mensaje
  }
}
```

## Variables para ejemplos API Factura
```json
{
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
  //reservas a facturar inputs
  "medicoId": "665353a188904508244f4bd9",
  "fechaInicio": "2024-05-01",
  "fechaFinal": "2024-07-12" //2024-05-31
}
```