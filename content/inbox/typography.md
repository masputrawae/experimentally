---
title: Typography
image: 'https://placehold.co/720x1080'
description: 'Fill in the Description Notes here'
date: 2025-03-26T12:34:00+07:00
last_modified: 2025-03-26T12:34:00+07:00
tags:
  - "notes"
  - "quick-notes"
  - "testing"
  - "typography"
  - "example"
categories:
  - "Notes"
grouping:
  - "🤔 Others"
  - "⏱️ Temporary"
pinned: true
mathjax: true 
draft: false
---
Artikel ini dirancang untuk menguji semua sintaks Markdown yang mungkin didukung oleh Hugo. Dengan menggunakan artikel ini, Anda dapat memastikan bahwa semua elemen Markdown, termasuk perhitungan matematis, checkbox, dan lainnya, ditampilkan dengan benar di situs Hugo Anda.

---

## Heading Level 2

### Heading Level 3

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

---

## Paragraf dan Format Teks

Ini adalah paragraf biasa. Anda dapat menulis teks biasa di sini. **Ini adalah teks tebal** dan *ini adalah teks miring*. Anda juga bisa menggunakan ~~teks coret~~.

Anda juga bisa menggabungkan **teks tebal** dengan *teks miring* seperti ini: ***teks tebal dan miring***.

---

## Daftar (List)

### Daftar Tidak Berurutan (Unordered List)

- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2
- Item 3

### Daftar Berurutan (Ordered List)

1. Item pertama
2. Item kedua
   1. Sub-item 2.1
   2. Sub-item 2.2
3. Item ketiga

---

## Tautan (Link) dan Gambar (Image)

Ini adalah contoh [tautan ke Google](https://www.google.com).

Ini adalah contoh gambar:

![Alt text untuk gambar](https://picsum.photos/150 "Judul gambar opsional")

### Gambar dengan Align
Reprehenderit qui ea nostrud nostrud dolore qui dolor deserunt et irure fugiat. Culpa proident ex id aute et. Non magna excepteur excepteur non consectetur irure sit officia. Ad ullamco aute ad elit ipsum nostrud aute commodo ea ullamco.

{{< image src="https://placehold.co/200" alt="Gambar" align="center" >}}
Ini adalah caption gambar.
{{< /image >}}

Id nostrud qui non veniam incididunt consectetur ex irure elit et proident tempor magna. Nisi culpa consequat exercitation commodo ipsum. Eu ex dolor aliquip anim excepteur sunt laborum consequat aliquip do incididunt aliquip voluptate adipisicing. Voluptate elit nulla laborum ad id enim tempor aliquip Lorem sint. Eiusmod esse proident ex mollit ipsum nostrud non cupidatat qui esse. Labore consectetur consequat laboris mollit minim nulla deserunt anim commodo qui elit eu nulla fugiat.

{{< image src="https://placehold.co/200" alt="Gambar" align="left" >}}
Ini adalah caption gambar.
{{< /image >}}


Sit commodo mollit ullamco qui fugiat ipsum exercitation fugiat in. Consectetur laborum adipisicing quis ad ipsum nisi enim aute nulla qui cupidatat irure voluptate. Nostrud sit ad esse deserunt velit cupidatat ex. Nostrud sint nisi et amet exercitation dolor officia quis consequat elit ea. Duis proident dolore dolor ex minim exercitation excepteur adipisicing aliqua.

{{< image src="https://placehold.co/200" alt="Gambar" align="right" >}}
Ini adalah caption gambar.
{{< /image >}}


Amet et nisi sit nostrud aliquip. Est sit id ullamco aute ad mollit veniam reprehenderit aute labore. Officia ea incididunt elit consequat tempor enim. Magna labore mollit minim in officia aliquip nostrud deserunt proident ut aute consectetur veniam culpa. Minim irure nostrud nisi sunt cupidatat quis elit. Incididunt veniam dolor occaecat fugiat.

{{< image src="https://placehold.co/200" alt="Gambar" align="full" >}}
Ini adalah caption gambar.
{{< /image >}}

---

## Blockquote

> Ini adalah contoh blockquote. Anda dapat menggunakannya untuk menonjolkan kutipan atau teks penting.

---

## Kode (Code)

### Inline Code

Anda dapat menulis `inline code` dengan menggunakan backtick.

### Block Code

```python
def hello_world():
    print("Hello, World!")
```

```javascript
function helloWorld() {
    console.log("Hello, World!");
}
```

---

## Tabel (Table)

| No  | Nama       | Usia | Kota      |
| --- | ---------- | ---- | --------- |
| 1   | John Doe   | 28   | New York  |
| 2   | Jane Smith | 34   | London    |
| 3   | Sam Brown  | 22   | Sydney    |

---

## Garis Horizontal (Horizontal Rule)

---

## Catatan Kaki (Footnote)

Ini adalah contoh teks dengan catatan kaki[^1].

[^1]: Ini adalah catatan kaki.

---

## Emoji

Anda juga bisa menggunakan emoji di Markdown! 😊🎉🚀

---

## Checkbox (Task List)

- [x] Task 1 (Selesai)
- [ ] Task 2 (Belum selesai)
- [ ] Task 3 (Belum selesai)

---

## Perhitungan Matematis (LaTeX)

Hugo mendukung rendering persamaan matematis menggunakan LaTeX. Berikut beberapa contoh:

### Inline Math

Contoh persamaan inline: \( E = mc^2 \).

### Block Math

Contoh persamaan dalam blok:

$$
\int_{a}^{b} x^2 \, dx
$$

Atau persamaan yang lebih kompleks:

$$
\frac{\partial u}{\partial t} + \nabla \cdot (\mathbf{u} \otimes \mathbf{u}) = -\nabla p + \nu \nabla^2 \mathbf{u}
$$

---

## HTML (Jika Diperlukan)

Jika Anda perlu menggunakan HTML, Anda bisa melakukannya seperti ini:

<p style="color:red;">Ini adalah teks berwarna merah menggunakan HTML.</p>

---

## Video dan Embed

Anda dapat menyematkan video atau konten lain menggunakan HTML:

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>

Atau Shortcodes hugo
{{< youtube id="dQw4w9WgXcQ">}}

---

## Definition List

Markdown ekstensi seperti Hugo mungkin mendukung daftar definisi:

Apple
: Pomaceous fruit of plants of the genus Malus in the family Rosaceae.

Orange
: The fruit of an evergreen tree of the genus Citrus.

---

## Kesimpulan

Dengan menggunakan artikel ini, Anda dapat menguji berbagai sintaks Markdown yang didukung oleh Hugo.

## JavaScript Example
```javascript
// Contoh kode JavaScript
function greet(name) {
    return `Hello, ${name}!`;
}

const user = "John";
console.log(greet(user));
```

## Python Example
```python
# Contoh kode Python
def greet(name):
    return f"Hello, {name}!"

user = "John"
print(greet(user))
```

## HTML Example
```html
<!-- Contoh kode HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a test page for syntax highlighting.</p>
</body>
</html>
```

### Link
[Kunjungi Hugo](https://gohugo.io)
# Matematika (KaTeX / MathJax)

Berikut adalah contoh perhitungan matematika kompleks dalam bentuk MathJax:

$$
\int_{0}^{\infty} \frac{x^{3}}{e^{x}-1}\,dx = \frac{\pi^{4}}{15}
$$

**Penjelasan:**
Ini adalah integral yang terkait dengan fungsi Bose-Einstein dan menghasilkan solusi eksak \\(\frac{\pi^{4}}{15}\\). Perhitungan ini melibatkan:

1. Ekspansi deret:
$$
\frac{1}{e^{x}-1} = \sum_{n=1}^{\infty} e^{-nx}
$$

2. Substitusi dan integral parsial:
$$
\int_{0}^{\infty} x^{3} e^{-nx}\,dx = \frac{6}{n^{4}}
$$

3. Penjumlahan deret Riemann zeta:
$$
\sum_{n=1}^{\infty} \frac{1}{n^{4}} = \zeta(4) = \frac{\pi^{4}}{90}
$$

4. Gabungkan hasil:
$$
6 \cdot \frac{\pi^{4}}{90} = \frac{\pi^{4}}{15}
$$

---

# Diagram (Mermaid)

```mermaid
flowchart TD
    A([Mulai]) --> B[Input Kata Kunci]
    B --> C[Preprocessing Teks]
    C --> D[Indeks Inverted Search]
    D --> E[Ranking Dokumen]
    E --> F[Filter & Sorting]
    F --> G[Output Hasil Pencarian]
    G --> H([Selesai])

    subgraph Preprocessing
    C --> C1[Case Folding]
    C1 --> C2[Tokenisasi]
    C2 --> C3[Stopword Removal]
    C3 --> C4[Stemming]
    end

    subgraph Ranking
    E --> E1[TF-IDF]
    E1 --> E2[Vector Space Model]
    E2 --> E3[PageRank/Algoritma Lain]
    end
```

---

## GoAT diagrams (ASCII)
```goat
                   +---------------------+
                   |   Crawling Module   |
                   +----------+----------+
                              |
                              v
+---------------------+       +---------------------+       +---------------------+
|    URL Frontier     | <---> |   Web Crawler       | ----> |   Raw HTML Data     |
+---------------------+       +---------------------+       +---------------------+
                              |
                              v
                   +---------------------+
                   |   Parser/Indexer    |
                   +----------+----------+
                              |
                              v
+---------------------+       +---------------------+       +---------------------+
|   Inverted Index    | <---> |  Tokenizer/         | <---- |   Processed Text    |
|   (Database)        |       |  Stemmer            |       |   (Keywords, Meta)  |
+---------------------+       +---------------------+       +---------------------+
                              |
                              v
                   +---------------------+
                   |   Ranking Algorithm |
                   |  (PageRank, TF-IDF) |
                   +----------+----------+
                              |
                              v
                   +---------------------+
                   |   Query Processor   |
                   +----------+----------+
                              |
                              v
                   +---------------------+
                   |   Search Results    |
                   |   (Ranked List)     |
                   +---------------------+
```

```goat
+------+     +------+     +------+
| User |     | API  |     | DB   |
+--+---+     +--+---+     +--+---+
   |            |            |
   |-- Request->|            |
   |            |-- Query -->|
   |            |<-- Data ---|
   |<-- Response|            |
```