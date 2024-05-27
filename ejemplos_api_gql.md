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
  }
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

mutation UpdateFactura($comprobanteInput: ComprobanteInput) {
  updateFactura(comprobanteInput: $comprobanteInput) {
    actualizada_por
    updatedAt
    nota_adicional_comprobante
    monto
    comprobante_pdf
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
  "deleteFacturaId": "6653fdb393c85d7ea0e30b40"
}
```