// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid

// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid

import { Todo } from "./types";

// Fungsi untuk mengecek: "Apakah benda ini benar-benar sebuah Todo?"
export function isTodo(obj: any): obj is Todo {
  return (
    obj !== null &&
    typeof obj === "object" &&
    typeof obj.id === "string" &&
    typeof obj.task === "string" &&
    typeof obj.completed === "boolean"
  );
}

// Fungsi untuk mengecek: "Apakah benda ini benar-benar daftar (array) Todo?"
export function isTodoArray(data: any): data is Todo[] {
  return Array.isArray(data) && data.every(isTodo);
}