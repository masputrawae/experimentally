def addContact(data, name, number):
    data[name] = number
    print(f"Kontak: {name} Ditambahkan.")

def deleteContact(data, name):
    if name in data:
        del data[name]
        print(f"Kontak: {name} Dihapus.")
    else:
        print(f"Kontak tidak ditemukan.")

def readContact(data):
    if not data:
        print(f"Kontak kosong.")
    else:
        for name, number in data.items():
            print(f"{name}: {number}")

