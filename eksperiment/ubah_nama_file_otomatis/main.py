import os
import shutil

# Folder asal dan tujuan
oldFolderPath = "./old-folder"
newFolderPath = "./new-folder"

# Telusuri semua folder dan file secara rekursif
for root, dirs, files in os.walk(oldFolderPath):
    for fileName in files:
        # Path lengkap file lama
        oldPath = os.path.join(root, fileName)

        # Ganti '-' jadi '_'
        newFileName = fileName.replace("-", "_")

        # Hitung path relatif dari root folder lama
        relativePath = os.path.relpath(root, oldFolderPath)

        # Buat folder tujuan yang sesuai di newFolderPath
        newDir = os.path.join(newFolderPath, relativePath)
        os.makedirs(newDir, exist_ok=True)

        # Path lengkap file baru di folder tujuan
        newPath = os.path.join(newDir, newFileName)

        # Salin file ke folder baru dengan nama baru
        shutil.copy2(oldPath, newPath)

        print(f"Copied & Renamed: {oldPath} -> {newPath}")
