from kontak import addContact, deleteContact, readContact
from file_handler import saveData, loadData

def main():
    contact = loadData()

    while True:
        print("\n--- Manajemen Kontak ---")

        print("1. Lihat Kontak")
        print("2. Tambah Kontak")
        print("3. Hapus Kontak")
        print("4. Simpan & Keluar")

        option = input("Pilih menu (1 - 4): ")

        if option == "1":
            readContact(contact)
        elif option == "2":
            name = input("Masukkan Nama: ")
            number = input("Masukkan Nomor: ")

            addContact(contact, name, number)
        elif option == "3":
            name = input("Masukkan Nama Yang Akan Dihapus: ")
            deleteContact(contact, name)
        elif option == "4":
            saveData(contact)
            print("Terima kasih!, Sampai Jumpa.")
            break
        else:
            print("Input Tidak Valid")

if __name__ == "__main__":
    main()
