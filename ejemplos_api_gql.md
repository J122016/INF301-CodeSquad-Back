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
    "nombre": "Segundo Usuario",
    "rut": "98765432-1",
    "mail": "s.u@1.com",
    "nrol": "1"
  },
  "ModUsuario": {
    "usuario": "SegUsuario2",
    "nombre": "Segundo Usuario2",
    "mail": "s.u@2.com",
    "nrol": "1"
  }
}
```