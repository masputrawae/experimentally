import os
from module.Crud import create, readProduct
from module.Database import firstDB

if __name__ == "__main__":
    while(True):
        print("\n"+"-"*56)
        firstDB()
        print(" "*20+" Selamat Datang "+" "*20+"")
        print("-"*56+"\n")
        
        print("[1] Tampilkan Barang")
        print("[2] Tambahkan Barang")
        print("[3] Edit Barang")
        print("[4] Hapus Barang")
        print("[5] Keluar Program\n")
        
        userSelect = int(input(">>> "))
        
        match userSelect:
            case 1:
                readProduct()
            case 2:
                create()
            case 3:
                print("Edit")
            case 4:
                print("Hapus")
            case 5:
                break
        
        input("\nTekan Enter untuk lanjut...")
        os.system('clear')