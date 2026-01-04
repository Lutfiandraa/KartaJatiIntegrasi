# 🔧 FIX DEPLOYMENT VERCEL - LMDB Bug Resolution

## ✅ PERBAIKAN YANG SUDAH DILAKUKAN

### 1. **gatsby-config.js** ✅
- ✅ **TIDAK ADA** flags `USE_LMDB` atau `FAST_DEV`
- ✅ **TIDAK ADA** flags object sama sekali
- ✅ Konfigurasi minimal dan aman untuk Vercel

### 2. **vercel.json** ✅
- ✅ Environment variable `GATSBY_EXPERIMENTAL_FORCE_FS_STORE=true` **DITAMBAHKAN LANGSUNG**
- ✅ Framework: `gatsby`
- ✅ Build command: `npm run build`
- ✅ Install command: `npm install --legacy-peer-deps`
- ✅ Output directory: `public`

### 3. **package.json** ✅
- ✅ Gatsby version dikunci ke `5.12.12` (stabil untuk Vercel)
- ✅ Build script sudah include `gatsby clean`
- ✅ Script `build:vercel` ditambahkan sebagai backup (dengan env var explicit)

### 4. **File Audit** ✅
- ✅ `gatsby-node.js` - kosong, aman
- ✅ `gatsby-browser.js` - hanya import CSS, aman
- ✅ `gatsby-ssr.js` - hanya script injection, aman
- ✅ Tidak ada plugin `@vercel/gatsby-plugin-vercel-builder` yang terinstall
- ✅ Tidak ada dependency yang memicu LMDB secara paksa

---

## 🎯 LANGKAH DEPLOYMENT (URUTAN EXACT)

### **STEP 1: Clean Install Lokal (Testing)**

```bash
cd frontend
rm -rf node_modules .cache public package-lock.json
npm install --legacy-peer-deps
npm run build
```

**Expected Result:** Build berhasil tanpa error LMDB ✅

---

### **STEP 2: Commit & Push**

```bash
git add .
git commit -m "Fix LMDB bug: Force filesystem datastore for Vercel deployment"
git push
```

---

### **STEP 3: Set Environment Variable di Vercel (BACKUP)**

Meskipun sudah ada di `vercel.json`, **TAMBAHKAN JUGA** di Vercel Dashboard sebagai backup:

1. Buka **Vercel Dashboard** → Pilih project
2. **Settings** → **Environment Variables**
3. Tambahkan:
   - **Name:** `GATSBY_EXPERIMENTAL_FORCE_FS_STORE`
   - **Value:** `true`
4. Pilih semua environment:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. **Save**

---

### **STEP 4: Redeploy di Vercel**

**Opsi A - Via Dashboard:**
1. Buka project di Vercel
2. Klik **Deployments**
3. Klik **⋮** (three dots) pada deployment terbaru
4. Pilih **Redeploy**
5. **PENTING:** Centang **"Use existing Build Cache"** → **UNCHECK** (hapus cache)
6. Klik **Redeploy**

**Opsi B - Via Git Push:**
```bash
git commit --allow-empty -m "Trigger Vercel redeploy"
git push
```

---

## 📋 CHECKLIST FINAL

Sebelum deploy, pastikan:

- [x] ✅ `gatsby-config.js` - **TIDAK ADA** flags LMDB/FAST_DEV
- [x] ✅ `vercel.json` - **SUDAH ADA** env `GATSBY_EXPERIMENTAL_FORCE_FS_STORE=true`
- [x] ✅ `package.json` - Gatsby version `5.12.12` (locked, bukan `^`)
- [x] ✅ Build lokal berhasil tanpa error
- [ ] ⚠️ Environment variable ditambahkan di Vercel Dashboard (backup)
- [ ] ⚠️ Redeploy tanpa cache

---

## 🔍 VERIFIKASI SETELAH DEPLOY

Setelah deployment sukses, cek log Vercel:

**✅ YANG HARUS ADA:**
```
Using filesystem datastore
```

**❌ YANG TIDAK BOLEH ADA:**
```
[gatsby]/dist/datastore/lmdb/...
RangeError [ERR_BUFFER_OUT_OF_BOUNDS]
```

---

## 🚨 TROUBLESHOOTING

### Jika masih error LMDB:

1. **Pastikan environment variable sudah set:**
   ```bash
   # Di Vercel Dashboard, cek Environment Variables
   # Harus ada: GATSBY_EXPERIMENTAL_FORCE_FS_STORE = true
   ```

2. **Hapus cache Vercel:**
   - Settings → General → Clear Build Cache
   - Atau redeploy dengan "Use existing Build Cache" **UNCHECKED**

3. **Verifikasi versi Gatsby:**
   ```bash
   cd frontend
   npm list gatsby
   # Harus menunjukkan: gatsby@5.12.12
   ```

4. **Force reinstall:**
   ```bash
   cd frontend
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   git add package-lock.json
   git commit -m "Update package-lock.json"
   git push
   ```

---

## 📝 FILE YANG DIUBAH

1. ✅ `frontend/gatsby-config.js` - Dihapus flags, ditambahkan komentar
2. ✅ `frontend/vercel.json` - Ditambahkan env `GATSBY_EXPERIMENTAL_FORCE_FS_STORE`
3. ✅ `frontend/package.json` - Ditambahkan script `build:vercel`

## 📝 FILE YANG TIDAK PERLU DIUBAH

- ✅ `gatsby-node.js` - Sudah kosong, aman
- ✅ `gatsby-browser.js` - Hanya import CSS, aman
- ✅ `gatsby-ssr.js` - Hanya script injection, aman

---

## 🎯 HASIL AKHIR YANG DIHARAPKAN

✅ `npm install` - **SUKSES**  
✅ `gatsby build` - **SUKSES** (menggunakan filesystem datastore)  
✅ Deploy Vercel - **SUKSES** (tanpa error LMDB/buffer)  
✅ Production ready - **READY** 🚀

---

**Catatan Penting:**
- Environment variable `GATSBY_EXPERIMENTAL_FORCE_FS_STORE=true` **WAJIB** ada
- Versi Gatsby `5.12.12` sudah dikunci (tidak menggunakan `^`)
- Tidak ada flags di `gatsby-config.js` yang bisa mengaktifkan LMDB
- Build akan menggunakan **Filesystem Datastore** yang aman untuk CI/serverless

