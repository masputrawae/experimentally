import json
import os

def saveData(data, fileName="kontak.json"):
    with open(fileName, "w") as file:
        json.dump(data, file, indent=4)
    print("Data berhasil disimpan")

def loadData(fileName="kontak.json"):
    if os.path.exists(fileName):
        with open(fileName, "r") as file:
            try:
                return json.load(file)
            except json.JSONDecodeError:
                return {}
    return {}

