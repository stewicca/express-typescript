# Cara Dasar Mengatur Server Node.js + Express.js Menggunakan Bahasa TypeScript

### Persiapan

Pertama, buatlah direktori untuk aplikasi yang akan kita buat:

```
mkdir express-typescript
```

Masuk ke direktori yang sudah kita buat:

```
cd express-typescript
```

Jalankan perintah di bawah ini agar aplikasi kita bisa berjalan di lingkungan Node.js dengan file package.json:

```
npm init
```

Saat perintah ini dijalankan, perintah ini akan menanyakan pertanyaan-pertanyaan berikut:

```
package name: (src) express-typescript
version: (1.0.0)
description:
entry point: index.ts
test command:
git repository:
keywords:
author: wreccy
lisence: (ISC)
```

Pastikan `entry point` ditetapkan ke index.ts

### Install Dependensi

Karena kita akan bekerja dengan Express.js, kita perlu menginstall express:

```
npm install --save express
```

Kita perlu menginstal TypeScript, tipe Express untuk memanfaatkan TypeScript, ts-node untuk menjalankan server dengan TypeScript, dan nodemon untuk menjalankan server dengan fitur otomatis refresh:

```
npm install --save-dev typescript @types/express ts-node nodemon
```

Pastikan file `package.json` Anda seperti berikut:

```json
{
  "name": "express-typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "wreccy",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "nodemon": "^3.0.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2"
  }
}
```

### Membuat Server dengan Express.js dan TypeScript

Mari kita buat apa yang bisa dianggap sebagai server paling dasar menggunakan Express.js. Di dalam folder src, buat file index.ts dan salin kode berikut:

```typescript
import express from 'express';

const app = express();
const port = 3000;

app.use(Router);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
```

### Membuat Endpoint

Mari kita buat endpoint untuk menampilkannya ke halaman website, disini saya akan membuat 3 endpoint. `/` adalah halaman utama kita, `/about` adalah halaman tentang kita, `/contact` adalah halaman kontak kita. Di dalam folder src, buat folder routes dan buat file pageRoute.ts:

```typescript
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Selamat Datang');
});

router.get('/about', (req: Request, res: Response) => {
  res.send('Tentang Saya');
});

router.get('/contact', (req: Request, res: Response) => {
  res.send('Contact Saya');
});

export default router;
```

Kita perlu menyertakan routes yang sudah kita buat ke dalam index.ts:

```typescript
import express from 'express';

import Router from './routes/pageRoute';

const app = express();
const port = 3000;

app.use(Router);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

```

Catatan: routes adalah sekumpulan rute-rute endpoint

### Jalankan Server

Sebelum kita menjalankan server kita, kita buat perintah di file package.json. Di sini saya menghapus perintah `test` dan mengubahnya seperti berikut:

```json
{
  "name": "express-typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "start": "nodemon src/index.ts"
  },
  "author": "wreccy",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "nodemon": "^3.0.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2"
  }
}
```

Saatnya kita menjalankan server kita, dengan jalankan perintah:

```
npm start
```

Selamat! Anda bisa mengecek hasilnya di `http://localhost:3000`
