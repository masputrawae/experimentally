from datetime import datetime, timezone, timedelta
import os

def timeCreate():
    simpleDate = datetime.now().strftime("%Y-%m-%d")
    timeZone = timezone(timedelta(hours=7))
    timeNow = datetime.now(timeZone)
    formatedDate = timeNow.isoformat(timespec="seconds")
    return formatedDate, simpleDate

def fileCreate():
    formatedDate, simpleDate = timeCreate()

    fileNameInput = input(f'Masukkan Nama File: (default: note) >>> ') or "note"
    titleInput = input(f'Masukkan Judul (default: {simpleDate})>>> ') or f'{simpleDate}'
    savePath = input(f'Simpan File (contoh: ./notes/ )>>> ')

    if not os.path.exists(savePath):
        print("❌ Path tidak ditemukan, menggunakan ./ sebagai default.")
        savePath = "./inbox/"
    if not savePath.endswith("/"):
        savePath += "/"

    fileNameOut = f'{formatedDate}_{fileNameInput}.md'
    saveFileOut = f'{savePath}{fileNameOut}'

    template = f'''---
title: {titleInput}
date: {formatedDate}
description: "Catatan Pada: {simpleDate} tentang: "
tags:
  - 
categories:
  -
emoji: 📝
---

# 📅 {simpleDate} {titleInput}

'''

    os.makedirs(savePath, exist_ok=True)
    with open(saveFileOut, 'w') as file:
        file.write(template)

    os.system(f'vim "{saveFileOut}"')

if __name__ == "__main__":
    fileCreate()
