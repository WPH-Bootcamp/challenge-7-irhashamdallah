 
import fs from "fs";

import { Todo } from "./types";
import { isTodoArray } from "./utils";

const FILE_PATH = "./data/todos.json";

// 1. Fungsi Simpan (Menulis ke File)
export function saveTodos(todos: Todo[]): void {
  try {
    // Jika folder 'data' belum ada, buat dulu secara otomatis
    if (!fs.existsSync("./data")) {
      fs.mkdirSync("./data");
    }
    // Ubah array Todo menjadi tulisan (string) dan simpan ke file
    fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error("Gagal menyimpan data:", error);
  }
}

// 2. Fungsi Ambil (Membaca dari File)
export function loadTodos(): Todo[] {
  try {
    if (!fs.existsSync(FILE_PATH)) return []; // Jika file belum ada, kasih array kosong

    const data = fs.readFileSync(FILE_PATH, "utf-8");
    const parsedData = JSON.parse(data);

    // DI SINI KITA PAKAI SATPAM (Step 2 tadi)
    if (isTodoArray(parsedData)) {
      return parsedData;
    } else {
      console.error("Format data di file rusak!");
      return [];
    }
  } catch (error) {
    console.error("Gagal membaca data:", error);
    return [];
  }
}
