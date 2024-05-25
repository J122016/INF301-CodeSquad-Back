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
  }
}
```

## Operaciones ejemplo para API Factura

```graphql
mutation AddFactura($input: FacturaInput) {
  addFactura(input: $input){
    id
  }
}

query GetFacturas {
  getFacturas {
    id,
    comision
    comprobante_pdf
    id_medico
    monto
    nota_adicional
    nota_adicional_comprobante
    numero_atenciones
    createdAt
    updatedAt
  }
}

query GetFactura($getFacturaId: String!) {
  getFactura(id: $getFacturaId) {
    monto
  }
}


mutation UpdateFactura($updateFacturaId: String!, $updateFacturaInput2: ComprobanteInput) {
  updateFactura(id: $updateFacturaId, input: $updateFacturaInput2) {
    id
  }
}
```

## Variables para ejemplos API Factura
```json
{
  "input": {
    "comision": 14,
    "id_medico": "identificadorMedicoDeEjemplo",
    "monto": 12000,
    "numero_atenciones": 2
  },
  "getFacturaId": "66512ae1f1396ccabf85e3c1",
  "updateFacturaId": "66512ae1f1396ccabf85e3c1",
  "updateFacturaInput2": {
    "comprobante_pdf": "path/to/comprobante.pdf",
    "factura_id": "66512ae1f1396ccabf85e3c1",
    "nota_adicional_comprobante": "sin comentarios adicionales"
  },
}
```