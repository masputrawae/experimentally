from datetime import datetime as dt, timezone as tz, timedelta as td
from pathlib import Path
import subprocess
import sys

def dateFormat(formatType="simple"):
    timeZone = tz(td(hours=7))
    now = dt.now(timeZone)
    simpleFormat = now.strftime("%Y-%m-%d")
    commitTime = now.strftime("%Y-%m-%d %H:%M:%S")
    isoFormat = now.isoformat(timespec="seconds")

    if formatType == "simple":
        return simpleFormat
    elif formatType == "isoFormated":
        return isoFormat
    elif formatType == "commitTime":
        return commitTime
    else:
        print("Format tidak dikenali:", formatType)
        return simpleFormat

def pathExists(path):
    return Path(path).is_dir()

def makeDir(path):
    try:
        Path(path).mkdir(parents=True, exist_ok=True)
    except Exception as e:
        print(f"Gagal membuat direktori: {e}")
        sys.exit(1)

def createNote():
    simpleDate = dateFormat()
    isoDate = dateFormat("isoFormated")

    fileNameInput = input("Masukkan Nama File (default: note): ") or "note"
    titleInput = input(f"Masukkan Judul (default: {simpleDate}): ") or simpleDate
    savePath = input("Simpan File (Contoh: ./notes/, default ./inbox/ ): ") or "./inbox/"

    if not pathExists(savePath):
        print("❌ Path tidak ditemukan, menggunakan ./inbox/ sebagai default")
        savePath = "./inbox/"

    savePath = Path(savePath)
    makeDir(savePath)

    saveFile = savePath / f"{simpleDate}_{fileNameInput}.md"

    template = f'''---
title: {titleInput}
date: {isoDate}
description: "Catatan Pada: {simpleDate}"
tags:
  - "isi_tags"
categories:
  - "Isi Kategori"
emoji: 📝
---

# 📅 {simpleDate} {titleInput}

'''

    try:
        with open(saveFile, "w") as f:
            f.write(template)
    except Exception as e:
        print(f"Gagal menulis file: {e}")
        return

    try:
        subprocess.run(["vim", str(saveFile)], check=True)
    except subprocess.CalledProcessError:
        print("Gagal membuka file dengan vim.")

def gitCommit():
    try:
        subprocess.run(["git", "add", "."], check=True)
        now = dateFormat("commitTime")
        commitMessage = f"Changed On 📅 : {now}"
        subprocess.run(["git", "commit", "-m", commitMessage], check=True)
        subprocess.run(["git", "push", "origin", "main"], check=True)
        print("✅ Auto commit dan push berhasil.")
    except subprocess.CalledProcessError as e:
        print("❌ Terjadi kesalahan saat menjalankan perintah Git:", e)

def gitStatus():
    try:
        # Menyimpan output status repository ke dalam variabel
        status_output = "\n" + "─" * 40 + "\n"
        status_output += "📁 STATUS REPOSITORY".center(40) + "\n"
        status_output += "─" * 40 + "\n"

        # Menjalankan perintah git status dan menambahkan outputnya
        status_output += subprocess.run(["git", "status"], text=True, capture_output=True).stdout

        # Menyimpan output riwayat commit
        log_output = "\n" + "─" * 40 + "\n"
        log_output += "📜 RIWAYAT COMMIT TERAKHIR".center(40) + "\n"
        log_output += "─" * 40 + "\n"

        # Menjalankan perintah git log dan menambahkan outputnya
        log_output += subprocess.run(["git", "log", "--oneline", "-n", "5"], text=True, capture_output=True).stdout

        # Gabungkan kedua bagian output
        final_output = status_output + log_output + "\n" + "─" * 40 + "\n"

        # Menampilkan hasil akhir
        print(final_output)

    except subprocess.CalledProcessError as e:
        print("❌ Gagal menampilkan status atau log:", e)

def main():
    print("\n------ My Notes ------")
    print("[1] Buat Catatan")
    print("[2] Push Catatan")
    print("[3] Lihat Daftar Catatan")
    print("[4] Pull Catatan")
    print("[5] Status Git\n")

    userOption = input("Pilih (1 - 5): ").strip()

    if userOption == "1":
        createNote()
    elif userOption == "2":
        gitCommit()
    elif userOption == "3":
        subprocess.run(["tree"])
    elif userOption == "4":
        subprocess.run(["git", "pull"])
    elif userOption == "5":
        gitStatus()
    else:
        print("❌ Pilihan Tidak Valid")

if __name__ == "__main__":
    main()
