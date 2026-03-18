from fastapi import FastAPI
from utils import generar_guid
from models import FiestaDTO, InvitadoDTO
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [ # [*]
    "http://localhost",
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

fiestas = {}
invitados = {}

@app.post("/v1/fiesta")
def crear_fiesta(fiesta: FiestaDTO):
    id_generado = generar_guid()
    fiestas[id_generado] = {"id": id_generado, "nombre": fiesta.nombre, "fecha": fiesta.fecha, "lugar": fiesta.lugar, "activo": True}
    return fiestas[id_generado]

@app.get("/v1/fiesta/{id}")
def leer_fiesta(id: str):
    fiesta = fiestas.get(id)
    if fiesta is None:
        return {"error": "Fiesta no encontrada"}
    return fiesta

@app.get("/v1/fiestas")
def leer_fiestas(tipo: str | None = "activas"):
    if tipo == "activas":
        seleccion = True
    elif tipo == "canceladas":
        seleccion = False
    else:
        return {"error": "Tipo debe ser 'activas' o 'canceladas'"}
    return [fiesta for fiesta in list(fiestas.values()) if fiesta["activo"] == seleccion]

@app.post("/v1/invitado")
def crear_invitado(invitado: InvitadoDTO):
    id_generado = generar_guid()
    invitados[id_generado] = {"id": id_generado, "nombre": invitado.nombre, "id_fiesta": invitado.id_fiesta}
    return invitados[id_generado]

@app.get("/v1/fiesta/{id}/invitados")
def leer_invitados_fiesta(id: str):
    return [invitado for invitado in list(invitados.values()) if invitado["fiesta_id"] == id]

@app.post("/v1/fiesta/{id}/cancelar")
def cancelar_fiesta(id: str):
    fiesta = fiestas.get(id)
    if fiesta is None:
        return {"error": "Fiesta no encontrada"}
    fiesta["activo"] = False
    fiestas["id"] = fiesta
    return fiestas["id"]