# API fon fastapi para calcular el IMC (Índice de Masa Corporal)
from fastapi import FastAPI
from models import Persona
import sqlite3

app = FastAPI()

# Se guarda en un diccionario de informacion
personas = {} # diccionario con id autogenerado, nombre, peso, talla, imc
conn = sqlite3.connect('imc.db')
cursor = conn.cursor()
cursor.execute('''
               CREATE TABLE IF NOT EXISTS imc (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    peso DECIMAL NOT NULL CHECK(peso > 0),
                    talla DECIMAL NOT NULL CHECK(talla > 0),
                    imc DECIMAL NOT NULL
               )
''')
conn.commit()
conn.close()

@app.post("/calculate_imc/")
def calculate_imc(person: Persona):
    conn = sqlite3.connect('imc.db')
    cursor = conn.cursor()
    imc = person.peso / (person.talla ** 2)
    cursor.execute('INSERT INTO imc (nombre, peso, talla, imc) VALUES (?, ?, ?, ?);', (person.nombre, person.peso, person.talla, (imc)))
    conn.commit()
    cursor.execute('SELECT last_insert_rowid()')
    person_id = cursor.fetchone()[0]
    cursor.execute('SELECT id, nombre, peso, talla, imc FROM imc WHERE id = ?', (str(person_id)))
    persona = cursor.fetchone()
    conn.close()
    return {"id": persona[0], "nombre": persona[1], "peso": persona[2], "talla": persona[3], "imc": persona[4]}

@app.get("/get_persona/{id_persona}")
def get_persona(id_persona: int):
    conn = sqlite3.connect('imc.db')
    cursor = conn.cursor()
    cursor.execute('SELECT id, nombre, peso, talla, imc FROM imc WHERE id = ?', (str(id_persona)))
    persona = cursor.fetchone()
    conn.close()
    if persona:
        return {"id": persona[0], "nombre": persona[1], "peso": persona[2], "talla": persona[3], "imc": persona[4]}
    else:
        return {"error": "Persona no encontrada"}

@app.get("/get_all_personas/")
def get_all_personas():
    conn = sqlite3.connect('imc.db')
    cursor = conn.cursor()
    cursor.execute('SELECT id, nombre, peso, talla, imc FROM imc')
    personas = cursor.fetchall()
    conn.close()
    lista_personas = [{"id": persona[0], "nombre": persona[1], "peso": persona[2], "talla": persona[3], "imc": persona[4]} for persona in personas]
    return lista_personas

@app.put("/update_persona/{id_persona}")
def update_persona(id_persona: int, person: Persona):
    conn = sqlite3.connect('imc.db')
    cursor = conn.cursor()
    imc = person.peso / (person.talla ** 2)
    cursor.execute('UPDATE imc SET nombre = ?, peso = ?, talla = ?, imc = ? WHERE id = ?;', (person.nombre, person.peso, person.talla, str(imc), str(id_persona)))
    cambiado = cursor.rowcount
    conn.commit()
    cursor.execute('SELECT id, nombre, peso, talla, imc FROM imc WHERE id = ?', (str(id_persona)))
    persona = cursor.fetchone()
    conn.close()
    if cambiado:
        return {"id": persona[0], "nombre": persona[1], "peso": persona[2], "talla": persona[3], "imc": persona[4]}
    else:
        return {"error": "Persona no encontrada"}
    
@app.delete("/delete_persona/{id_persona}")
def delete_persona(id_persona: int):
    conn = sqlite3.connect('imc.db')
    cursor = conn.cursor()
    cursor.execute('DELETE FROM imc WHERE id = ?', (str(id_persona)))
    borrada = cursor.rowcount
    conn.commit()
    conn.close()
    if borrada > 0:
        return {"message": "Persona eliminada"}
    else:
        return {"error": "Persona no encontrada"}