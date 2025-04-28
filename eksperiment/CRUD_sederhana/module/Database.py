import json
from . import Crud

DB_NAME = "data.json"
DB_TEMPLATE = {
    "name": "name",
    "stock": "stock",
    "price": "price",
}

def firstDB():
    try:
        with open(DB_NAME, "r") as file:
            dataProduct = json.load(file)
    except:
        print("Database Tidak Ditemukan, Membuat Baru.....")
        Crud.createFirst()