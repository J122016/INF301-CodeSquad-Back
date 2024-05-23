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

query GetUsuarios {
  getUsuarios {
    id
    usuario
    nombre
    rut
    mail
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

query GetRoles {
  getRoles {
    id
    rol
    nrol
  }
}

query Query($getEntityId: String!) {
  getEntity(id: $getEntityId) {
    id
    nombre
  }
}
```

**Variables**
```json
{
  "getEntityId": "66495e15deff23f5f886c189"
}
{
  "setInput": {
    "nombre": "nombre ejemplo"
  }
}
```
