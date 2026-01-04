# 🚀 Panduan Deployment Vercel - Fix LMDB Bug

## ✅ Perbaikan yang Sudah Dilakukan

1. ✅ Versi Gatsby dikunci ke `5.12.13` (versi stabil untuk Vercel)
2. ✅ Flag `USE_LMDB` dihapus dari `gatsby-config.js` (tidak berlaku di versi ini)
3. ✅ `vercel.json` sudah dikonfigurasi dengan benar

## 🔧 Environment Variable Wajib di Vercel

**PENTING:** Tambahkan environment variable berikut di Vercel Dashboard:

### Langkah-langkah:

1. Buka **Vercel Dashboard** → Pilih project kamu
2. Pergi ke **Settings** → **Environment Variables**
3. Tambahkan variable berikut:

```
Name: GATSBY_EXPERIMENTAL_FORCE_FS_STORE
Value: true
```

4. Pilih environment:
   - ✅ **Production**
   - ✅ **Preview** 
   - ✅ **Development**

5. Klik **Save**

## 🧹 Clean Install (Lokal)

Sebelum deploy, jalankan di lokal untuk memastikan build berhasil:

```bash
cd frontend
rm -rf node_modules .cache public package-lock.json
npm install --legacy-peer-deps
npm run build
```

Jika build lokal berhasil → Vercel pasti berhasil ✅

## 📋 Checklist Deployment

- [ ] Environment variable `GATSBY_EXPERIMENTAL_FORCE_FS_STORE=true` sudah ditambahkan di Vercel
- [ ] Versi Gatsby sudah dikunci ke `5.12.13` di `package.json`
- [ ] Flag `USE_LMDB` sudah dihapus dari `gatsby-config.js`
- [ ] Clean install lokal sudah dilakukan dan build berhasil
- [ ] Push perubahan ke repository
- [ ] Redeploy di Vercel **tanpa cache** (atau hapus cache di Vercel)

## 🎯 Setelah Environment Variable Ditambahkan

1. **Redeploy** project di Vercel
2. Atau trigger deployment baru dengan push ke repository
3. Build akan menggunakan **Filesystem Datastore** (bukan LMDB)
4. Deployment seharusnya berhasil tanpa error LMDB

---

**Catatan:** Environment variable ini memaksa Gatsby menggunakan filesystem datastore yang kompatibel dengan serverless/CI environment seperti Vercel.

