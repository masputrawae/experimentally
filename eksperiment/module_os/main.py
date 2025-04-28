import os

# Lihat Folder Saat Ini
print("folder saat ini :", os.getcwd())

# Buat Folder Baru
os.mkdir('folder_baru')

# Lihat Isi Folder Setelah Buat Folder
print("Isi Folder: ", os.listdir())

# Jalankan Perintah Linux Dari Python
os.system('echo Hello World dari Terminal!')

