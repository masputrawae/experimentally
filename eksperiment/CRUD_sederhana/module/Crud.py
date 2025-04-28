import json
import uuid
from .Database import DB_NAME
from .Database import DB_TEMPLATE
from . import Database

def createFirst():
    dataProduct = {}
    
    unique_id = uuid.uuid4()
    product = DB_TEMPLATE.copy()
    
    tk = str(unique_id)
    dataProduct[tk] = product
    product["name"] = input("Masukkan Nama Barang: ")
    product["stock"] = int(input("Masukkan Jumlah Stok: "))
    product["price"] = int(input("Masukkan Harga: "))
    
    with open(DB_NAME, "w") as file:
        json.dump(dataProduct, file, indent=4)

def create():
    with open(DB_NAME, "r") as file:
        product = json.load(file)
        
    unique_id = uuid.uuid4()
    tk = str(unique_id)
    productName = input("Masukkan Nama Barang: ")
    productStock = int(input("Masukkan Jumlah Stok: "))
    productPrice = int(input("Masukkan Harga: "))
    
    product[tk] = {
        "name": productName,
        "stock": productStock,
        "price": productPrice
    }
    
    with open(DB_NAME, "w") as file:
        json.dump(product, file, indent=4)

def readProduct():
    with open(DB_NAME, "r") as file:
        product = json.load(file)
    
    print("\n" + "="*45)
    print(f"| {'Nama':<15} | {'Stock':<10} | {'Price':<10} |")
    print("-"*45)
    for i, info in product.items():
        print(f"| {info['name']:<15} | {info['stock']:<10} | {info['price']:<10} |")
    print("="*45 + "\n")