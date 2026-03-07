from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class UsuarioDTO(BaseModel):
    nombre: str

diccionario_usuarios = {
    1: { "nombre": "A"},
    2: { "nombre": "B"}
}

#Recordar: con APIs usar /vi/ con número de versión
@app.post("/v1/usuario")
def create_user(usuario: UsuarioDTO):
    id_usuario = len(diccionario_usuarios) + 1
    nuevo_usuario = { "nombre": usuario.nombre }
    diccionario_usuarios[id_usuario] = nuevo_usuario
    return diccionario_usuarios[id_usuario]

@app.get("/v1/usuarios")
def read_users():
    return diccionario_usuarios

@app.get("/v1/usuario/{id_usuario}")
def read_user(id_usuario: int):
    usuario = diccionario_usuarios.get(id_usuario)
    if usuario == None:
        return {"error": "Usuario no encontrado"}
    return usuario