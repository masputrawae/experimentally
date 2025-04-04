---
title: Kondisi if-else
image: https://placehold.co/1080x520
description: Catatan belajar JavaScript Kondisi if-else.
date: 2025-04-03T02:48:10+07:00
last_modified: 2025-04-03T02:48:10+07:00
tags:
  - programming
  - javascript
  - web_development
  - front_end
  - kondisi
  - if_else
categories:
  - Programing
  - Javascript
grouping:
  - 📚 Learning
pinned: false
mathjax: false
draft: false
---

Di JavaScript, kondisi digunakan untuk menjalankan kode berdasarkan suatu pernyataan benar (true) atau salah (false). Ada beberapa cara menulis kondisi, yaitu menggunakan if, else if, else, switch, serta ternary operator.

## if
Percabangan Sederhana, Digunakan untuk menjalankan kode jika kondisi bernilai true.

```javascript
let angka = 10;
if (angka > 5) {
  console.log("Angka lebih besar dari 5");
}
// Output: Angka lebih besar dari 5
```

## if...else
Percabangan dengan Alternatif, Digunakan jika ada dua kemungkinan kondisi, true atau false.

```javascript
let umur = 16;
if (umur >= 18) {
  console.log("Anda sudah dewasa");
} else {
  console.log("Anda masih di bawah umur");
}
// Output: Anda masih di bawah umur
```

## if...else if...else

Percabangan dengan Banyak Kondisi, Digunakan jika ada lebih dari dua kondisi.

```javascript
let nilai = 85;
if (nilai >= 90) {
  console.log("Grade A");
} else if (nilai >= 80) {
  console.log("Grade B");
} else if (nilai >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}
// Output: Grade B
```

### switch 
Alternatif dari if...else if, Digunakan untuk memeriksa banyak kemungkinan nilai dalam satu [variabel](variabel-dan-tipe-data).

```javascript
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini Senin");
    break;
  case "Selasa":
    console.log("Hari ini Selasa");
    break;
  case "Rabu":
    console.log("Hari ini Rabu");
    break;
  default:
    console.log("Hari tidak diketahui");
}
// Output: Hari ini Senin
```

> [!info]
> break; digunakan untuk menghentikan pengecekan agar tidak menjalankan kasus selanjutnya.

## Ternary Operator (?:)

Digunakan untuk kondisi sederhana dalam satu baris.

```javascript
let usia = 20;
let status = (usia >= 18) ? "Dewasa" : "Anak-anak";
console.log(status);
// Output: Dewasa
```

## Logical Operator dalam Kondisi

JavaScript mendukung operator logika untuk menggabungkan beberapa kondisi:

**Contoh**:
```javascript
let umurUser = 25;
let punyaSIM = true;

if (umurUser >= 18 && punyaSIM) {
  console.log("Boleh mengemudi");
} else {
  console.log("Tidak boleh mengemudi");
}
// Output: Boleh mengemudi
```
> [!info]
> Cocok untuk kondisi singkat tanpa banyak logika.

> [!tip]
> 1. Gunakan if...else untuk kondisi umum.
> 2. Gunakan switch untuk membandingkan banyak nilai dalam satu variabel.
> 3. Gunakan ternary operator untuk kondisi singkat.
> 4. Gunakan operator logika (&&, ||, !) untuk menggabungkan beberapa kondisi.