membangun aplikasi crud pencatat produk yang memiliki fitur create read update dan delete 

dibanagun menggunakan teknologi nodejs dan database mysql

CRUD-MySQL/ 
├── backend/
│   ├── config/
│   │   └── db.js          
│   ├── controllers/         
│   │   └── userController.js 
│   ├── routes/             
│   │   └── userRoutes.js 
│   ├── .env               
│   └── package.json        
│   └── architecture.drawio 
└── .gitignore              


Tahap dalam membangun aplikasi backend hingga selesai

1. Persiapan project
Menyiapkan Node.js, npm, struktur folder, ES Modules, dan package yang dibutuhkan.

2. Konfigurasi Database
Menghubungkan Node.js dengan MySQL menggunakan mysql2, mengatur kredensial melalui .env, dan memastikan koneksi berhasil.

3. Membangun server
Membuat server HTTP menggunakan Node.js. Server menjadi tempat backend menerima permintaan dari client.

