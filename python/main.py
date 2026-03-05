from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return{"Hello": "World"}

@app.get("/info")
def read_root():
    return{"nombre": "kyrie", "edad": 21, "color_favorito": "#4400ff"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"idem_id": item_id, "q": q}