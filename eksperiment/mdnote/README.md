# 📅 2025-04-30 Penjelasan Script

Script Python kecil untuk bikin catatan harian dalam format Markdown langsung dari terminal.

Fungsinya:

- Nama file otomatis pakai tanggal dan waktu
- Ada template frontmatter
- Bisa pilih lokasi simpan
- Langsung buka di Vim setelah file dibuat

---

## Cara pakai

1. Simpan script di folder, misalnya: `~/scripts/mdnote.py`
2. Bikin alias biar gampang dijalankan dari mana aja:

Untuk bash:

```bash
echo 'alias mdnote="python3 ~/scripts/mdnote.py"' >> ~/.bashrc
source ~/.bashrc
```

Untuk zsh:

```bash
echo 'alias mdnote="python3 ~/scripts/mdnote.py"' >> ~/.zshrc
source ~/.zshrc
```

3. Jalankan:

```bash
mdnote
```

---

## Output

File Markdown dengan nama:

```
2025-04-30T07:30:12_note.md
```

Isi awalnya:

```markdown
---
title: Judul Catatan
date: 2025-04-30T07:30:12+07:00
description: "Catatan Pada: 2025-04-30 tentang: "
tags:
  -
categories:
  -
emoji: 📝
---

# 📅 2025-04-30 Judul Catatan
```

---

Script ini cuma buat pribadi, biar nyatet cepat tanpa buka aplikasi berat. Langsung nulis aja di Vim. 😄
