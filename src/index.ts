// TODO: Import readline untuk membaca input dari command line

// TODO: Import fungsi-fungsi dari todoService

// TODO: Import fungsi-fungsi dari utils (termasuk type guards)

// TODO: Buat fungsi untuk menampilkan menu utama
// Tampilkan opsi seperti:
// 1. Add new todo
// 2. Mark todo as complete
// 3. Delete todo
// 4. List all todos
// 5. Search todos
// 6. Exit

// TODO: Buat fungsi untuk handle input dari user
// Gunakan readline.question untuk menerima input

// TODO: Buat fungsi main yang akan menjalankan aplikasi secara loop
// Hint: Gunakan recursive function atau while loop

// TODO: Jalankan fungsi main
// console.log('Welcome to TypeScript To-Do App!');
// console.log('Start building your app here...');

import * as readline from "readline";
import { addTodo, listTodos, completeTodo, deleteTodo } from "./todoService";

// Membuat antarmuka untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function tampilkanMenu(): void {
  console.log("\n=== APLIKASI TO-DO TYPESCRIPT ===");
  console.log("1. Tambah Tugas");
  console.log("2. Lihat Semua Tugas");
  console.log("3. Tandai Selesai");
  console.log("4. Hapus Tugas");
  console.log("5. Keluar");

  rl.question("\nPilih menu (1-5): ", (jawaban) => {
    switch (jawaban) {
      case "1":
        rl.question("Apa tugas baru kamu? ", (tugas) => {
          addTodo(tugas);
          tampilkanMenu(); // Kembali ke menu setelah selesai
        });
        break;
      case "2":
        listTodos();
        tampilkanMenu();
        break;
      case "3":
        listTodos(); // Tampilkan dulu biar user tahu nomornya
        rl.question("Nomor berapa yang sudah selesai? ", (no) => {
          completeTodo(parseInt(no) - 1); // -1 karena array mulai dari 0
          tampilkanMenu();
        });
        break;
      case "4":
        listTodos();
        rl.question("Nomor berapa yang mau dihapus? ", (no) => {
          deleteTodo(parseInt(no) - 1);
          tampilkanMenu();
        });
        break;
      case "5":
        console.log("Sampai jumpa lagi! Semangat kerjanya.");
        rl.close();
        break;
      default:
        console.log("Pilihan tidak ada. Masukkan angka 1-5.");
        tampilkanMenu();
        break;
    }
  });
}

// Menjalankan aplikasi untuk pertama kali
tampilkanMenu();