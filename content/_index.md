---
title: Home
subtitle: "Tempat Berbagi Keluh Kesah"
image: "https://picsum.photos/300/200"
---
Kalau hanya untuk **menguji warna syntax highlighting**, cukup gunakan satu snippet kode dengan berbagai elemen syntax yang memanfaatkan semua warna yang sudah kamu atur.  

Berikut adalah kode Markdown yang bisa kamu pakai di Hugo:  
```go
// Komentar (seharusnya pakai warna komentar)
package main

import (
    "fmt"  // String (harus sesuai warna string)
)

// Function (seharusnya pakai warna function)
func main() {
    var number int = 42  // Number (seharusnya pakai warna number)
    result := number * 2 // Operator (harus pakai warna operator)
    
    fmt.Println("Hello, World!") // String
}
```
---
### **Kenapa kode ini cocok untuk pengujian?**  
✅ **Komentar** → Harus sesuai dengan warna `--comment-color`.  
✅ **Keyword (`package`, `func`, `var`)** → Harus sesuai dengan warna `--keyword-color`.  
✅ **String (`"Hello, World!"`)** → Harus sesuai dengan warna `--string-color`.  
✅ **Function (`main`, `fmt.Println`)** → Harus sesuai dengan warna `--function-color`.  
✅ **Operator (`*`, `:=`)** → Harus sesuai dengan warna `--operator-color`.  
✅ **Number (`42`)** → Harus sesuai dengan warna `--number-color`.  

Kamu bisa coba jalankan Markdown ini di Hugo, lalu cek apakah semua elemen syntax mendapatkan warna yang sesuai dengan CSS-mu. 🚀