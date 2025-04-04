---
title: "Pratinjau Tipografi"
image: https://placehold.co/1080x520
description: "Panduan untuk melihat semua elemen tipografi dalam tema My Notes."
date: 2025-04-02T01:19:10+07:00
lastModified: 2025-04-02T01:19:10+07:00
tags:
  - tipografi
  - pertinjau
  - konten
  - markdown
categories:
  - Blog
  - Konten
  - Artikel
pinned: true
mathjax: true
draft: false
---

Konten ini memperlihatkan pratinjau elemen tipografi yang didukung oleh tema **My Notes**.  
**Selamat Membaca!**

## Judul (Heading)
Berikut adalah contoh berbagai **judul (Heading)**:

# Judul 1  
## Judul 2  
### Judul 3  
#### Judul 4  
##### Judul 5  
###### Judul 6  

## Daftar (List)
### Daftar tak berurutan
- Daftar 1  
- Daftar 2  
  - Daftar 1 di dalam Daftar 2  
  - Daftar 2 di dalam Daftar 2  
- Daftar 3  

### Daftar Berurutan  
1. Daftar Berurutan 1  
2. Daftar Berurutan 2  
   1. Daftar Berurutan 1 di dalam Daftar Berurutan 2  
   2. Daftar Berurutan 2 di dalam Daftar Berurutan 2  
3. Daftar Berurutan 3  

### Daftar Definisi
Istilah Pertama  
: Ini adalah definisi istilah pertama.  

Istilah Kedua  
: Ini adalah definisi dari istilah kedua.  
: Ini adalah definisi lain dari istilah kedua.  

## Daftar yang harus dilakukan
- [ ] Belum dilakukan  
- [x] Sudah dilakukan  

## Tabel

| Nama  | Umur | Hobi      | Profesi |  
| ----- | ---- | --------- | ------- |  
| Ana   | 27   | Memasak   | Dokter  |  
| Budi  | 30   | Memancing | Guru    |  
| Arif  | 35   | Bersepeda | Pilot   |  
| Agung | 21   | Membaca   | Pelajar |  

## Gambar 
### Gambar rata kiri
Anim nostrud cupidatat aliquip nulla fugiat fugiat ullamco exercitation dolore proident culpa laborum adipisicing anim. Officia nisi laborum laborum non reprehenderit consectetur qui culpa consequat. In amet nulla dolore nostrud proident duis laboris et officia sit. Tempor dolore voluptate in mollit deserunt non incididunt ex nostrud non officia nisi ut dolore.

![This is an image](https://picsum.photos/200/150 "left|Left aligned image")

Reprehenderit enim nisi magna cillum aute eiusmod aute laboris ut. Aliqua voluptate exercitation ea sint deserunt magna et. Aliqua quis esse id consequat consequat irure quis eu occaecat exercitation officia nisi do est. Sint minim duis minim adipisicing consequat duis.

### Gambar rata kanan
Consequat anim aliquip veniam consequat officia aliqua. Ullamco tempor deserunt cillum irure. Et est ut laborum ad laboris consectetur laborum consectetur esse minim ad. Est ut cillum fugiat occaecat adipisicing ipsum irure Lorem elit reprehenderit sit anim anim incididunt. Magna sunt velit in laboris ad proident aliqua magna fugiat irure aliqua consectetur. Esse anim sit ad pariatur commodo occaecat est quis.

![This is an image](https://picsum.photos/200/150 "right|Right aligned image")

Duis eiusmod amet est aliquip cillum labore consectetur deserunt. Labore aliqua cillum mollit cupidatat ullamco. Mollit dolore aliqua nostrud occaecat labore cillum et labore. Sint velit culpa et fugiat incididunt excepteur reprehenderit Lorem duis voluptate voluptate occaecat. Est quis labore irure in adipisicing nisi. Sunt et dolor in Lorem irure laborum deserunt. Incididunt aute id ad Lorem nostrud culpa elit ipsum id.

### Gambar rata tengah/default
Laborum ex duis voluptate tempor consequat veniam velit sunt elit. Elit et ipsum ullamco amet aliquip ea ullamco incididunt consequat do aliquip cillum. Anim ullamco non excepteur ullamco consectetur.

![This is an image](https://picsum.photos/200/150 "|Without Parameters")

Reprehenderit veniam enim adipisicing duis anim aliquip sint laboris esse sint. Officia adipisicing esse aliquip cupidatat. Commodo nostrud laboris dolore ut incididunt fugiat est nostrud duis et non ullamco velit. Veniam duis nisi irure occaecat veniam adipisicing dolor commodo. Cupidatat culpa id nisi do dolore pariatur.

## Tautan  

[Menuju Google](https://www.google.com)  

## Kutipan dan Peringatan (Alert)  

### Kutipan Bawaan  

> Ini adalah kutipan bawaan.  

### Kutipan dengan Peringatan (Alert)  
> [!INFO] Informasi  
> Ini dengan peringatan (alert) Informasi.  

> [!TIP] Kiat-kiat  
> Ini dengan peringatan (alert) kiat (tip).  

> [!WARNING] Peringatan  
> Ini dengan peringatan (warning).  

> [!DANGER] Bahaya  
> Ini dengan peringatan (alert) Bahaya.  

> [!ERROR] Kesalahan  
> Ini dengan peringatan (alert) Kesalahan.

Lihat lengkap Kunjungi: [Kumpulan Peringatan](callout.md)  

## Kode  

### Python
```python
# Program sederhana Python
def main():
    print("Hello, World!")
    
    # Operasi penjumlahan
    a = 5
    b = 3
    hasil = a + b
    print(f"Hasil penjumlahan {a} + {b} = {hasil}")

if __name__ == "__main__":
    main()
```

### Golang
```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")

    // Operasi penjumlahan
    a := 5
    b := 3
    hasil := a + b
    fmt.Printf("Hasil penjumlahan %d + %d = %d\n", a, b, hasil)
}
```

## Matematika

$$
\int_{0}^{\infty} \frac{x^2 e^{-x^2}}{1 + e^{x}} \, dx = \frac{\sqrt{\pi}}{2} \left( \text{Li}_2 \left( -e^{-1} \right) - \text{Li}_2 \left( -e^{-2} \right) \right)  
$$  

## Diagram
### Flowchart

```mermaid
graph TD;
    A[Mulai] --> B{Apakah berhasil?};
    B -- Ya --> C[Tampilkan hasil];
    B -- Tidak --> D[Perbaiki bug];
    D --> B;
```

### Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant Server
    User->>Server: Request data
    Server-->>User: Response data
```

### Gantt Chart

```mermaid
gantt
    title Proyek Web Development
    dateFormat  YYYY-MM-DD
    section Desain
    Wireframing     :done, 2024-03-01, 2024-03-07
    UI/UX           :active, 2024-03-08, 2024-03-15
    section Pengembangan
    Frontend        : 2024-03-16, 2024-03-30
    Backend         : 2024-04-01, 2024-04-15
```

### GoAT ASCII  
```goat
    +---------+
    |  Root   |
    +----+----+
         |
    +----+----+
    |         |
  +----+   +----+
  | A  |   | B  |
  +----+   +----+
```

```goat
    +---------+
    |  Root   |
    +----+----+
         |
    +----+----+
    |         |
  +----+   +----+
  | A  |   | B  |
  +----+   +----+
```

## YouTube

{{< youtube id="dQw4w9WgXcQ">}}  

## HTML di Markdown  

<p style="color: red; font-weight: 700;">Tulisan Merah Dengan Ketebalan 700</p>