// TODO: Import tipe-tipe yang sudah didefinisikan di types.ts

// TODO: Import fungsi storage untuk baca/tulis file

// TODO: Buat fungsi untuk menambahkan To-Do baru
// - Generate id yang unik (bisa pakai timestamp atau counter)
// - Pastikan text tidak kosong
// - Set default status sebagai active

// TODO: Buat fungsi untuk menandai To-Do sebagai selesai
// - Cari To-Do berdasarkan id
// - Ubah statusnya menjadi completed
// - Handle kasus jika id tidak ditemukan

// TODO: Buat fungsi untuk menghapus To-Do
// - Filter To-Do berdasarkan id
// - Handle kasus jika id tidak ditemukan

// TODO: Buat fungsi untuk menampilkan semua To-Do
// - Tampilkan dengan format yang rapi
// - Tambahkan status [ACTIVE] atau [DONE] di depan setiap To-Do
// - Berikan nomor urut untuk memudahkan user memilih

// TODO: Buat fungsi untuk mencari To-Do berdasarkan keyword

import { Todo } from "./types";
import { saveTodos, loadTodos } from "./storage";

// Kita ambil data lama dari brankas (file JSON)
let todos: Todo[] = loadTodos();

// 1. FUNGSI TAMBAH (ADD)
export function addTodo(task: string): void {
  const newTodo: Todo = {
    id: Date.now().toString(), // Membuat ID unik dari waktu sekarang
    task: task,
    completed: false, // Tugas baru pasti statusnya belum selesai
  };
  todos.push(newTodo);
  saveTodos(todos); // Simpan ke file JSON
  console.log("✅ Tugas berhasil ditambahkan!");
}

// 2. FUNGSI LIHAT (LIST)
export function listTodos(): void {
  console.log("\n--- DAFTAR TUGAS ANDA ---");
  if (todos.length === 0) {
    console.log("Kosong. Belum ada rencana hari ini.");
  } else {
    todos.forEach((todo, index) => {
      // Jika completed true muncul [DONE], jika false muncul [ACTIVE]
      const status = todo.completed ? "[DONE]  " : "[ACTIVE]";
      console.log(`${status} ${index + 1}. ${todo.task}`);
    });
  }
}

// 3. FUNGSI SELESAI (COMPLETE)
export function completeTodo(index: number): void {
  if (todos[index]) {
    todos[index].completed = true;
    saveTodos(todos); // Update data di file JSON
    console.log("⭐ Mantap! Tugas ditandai selesai.");
  } else {
    console.log("❌ Nomor tugas tidak ditemukan.");
  }
}

// 4. FUNGSI HAPUS (DELETE)
export function deleteTodo(index: number): void {
  if (todos[index]) {
    const deleted = todos.splice(index, 1); // Menghapus 1 item dari array
    saveTodos(todos); // Update data di file JSON
    console.log(`🗑️ Tugas "${deleted[0].task}" telah dihapus.`);
  } else {
    console.log("❌ Gagal menghapus, nomor tidak valid.");
  }
}