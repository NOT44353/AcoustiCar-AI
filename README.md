# AcoustiCar AI™ 🚗🔊
> **Next-Generation Acoustic Vehicle Diagnostics & Predictive Maintenance AI**  
> *แพลตฟอร์ม AI วินิจฉัยความผิดปกติของยานยนต์ด้วยคลื่นเสียง สำหรับผู้ใช้ทั่วไป อู่ซ่อมรถ และเต็นท์รถมือสอง*

---

## 🌟 จุดเด่นของโปรเจกต์ (Product Highlights)

1. **Pure Web Audio API (Zero Dependency):**
   - ดักจับคลื่นเสียงความละเอียดสูงสดๆ ผ่านไมโครโฟน โดยปิด Echo Cancellation และ Noise Suppression ของระบบปฏิบัติการ เพื่อคงคุณลักษณะทางฟิสิกส์เชิงกลของเสียงโลหะและเครื่องยนต์ไว้ครบถ้วน
2. **Real-time 60 FPS Visualizer:**
   - 4 โหมดการแสดงผลคลื่นเสียง: Frequency Spectrum Bars, Oscilloscope Waveform, Realtime Spectrogram Heatmap, และ Polar Radar
3. **Built-in Acoustic Synthesizer (Benchmark Lab):**
   - มีระบบสังเคราะห์เสียงความเสียหายของเครื่องยนต์ 8 รูปแบบยอดฮิตในตัว (สายพาน, วาล์ว, ชาร์ปละลาย, เบรก, ลูกปืนล้อ, เพลาขับ, ท่อแวคคั่ม, เครื่องปกติ) สำหรับใช้ทดสอบโดยไม่ต้องมีรถจริงอยู่ข้างๆ
4. **Thai Automotive Market Ready:**
   - ฐานข้อมูลราคากลางอะไหล่แท้ศูนย์ vs อะไหล่เทียบ OEM และค่าแรงช่างในไทย
   - สคริปต์กันโดนฟันราคา (Anti-Fraud Script) ยื่นให้ช่างดูได้ทันที
   - ใบรับรองสุขภาพเสียงรถยนต์ (Vehicle Acoustic Health Certificate) พร้อมสั่งพิมพ์/PDF

---

## 💰 แผนการทำเงิน (Monetization & Business Models)

| โมเดลธุรกิจ | กลุ่มเป้าหมาย | รูปแบบรายได้ |
| :--- | :--- | :--- |
| **1. Affiliate E-Commerce** | เจ้าของรถที่ตรวจพบอะไหล่เสีย | ค่าคอมมิชชัน 5-15% จากการคลิกซื้ออะไหล่ตรงรุ่นบน Shopee / Lazada |
| **2. O2O Lead Generation** | อู่ซ่อมรถพันธมิตร & ค็อกพิท | ค่าส่งต่อลูกค้า (Referral Lead) 100 - 300 บาท ต่อเคสที่จองคิว |
| **3. B2B SaaS Subscription** | เต็นท์รถมือสอง & บริษัทตรวจสภาพรถ | รายเดือน ฿1,490 / เดือน ใช้ออกใบรับรอง Acoustic Certificate สร้างความน่าเชื่อถือ |
| **4. B2C Pro Membership** | คนรักรถ / เจ้าของรถเก่า | ค่าสมาชิก ฿99 / เดือน สแกนไม่จำกัดพร้อมสคริปต์ช่างและส่วนลดค่าแรงอู่ |

---

## 🚀 วิธีการติดตั้งและรันระบบ (Quick Start)

### ทางเลือกที่ 1: รันผ่าน Node.js หรือ Bun
```bash
# ติดตั้งและเปิดเซิร์ฟเวอร์
cd AcoustiCar-AI
npm start
# หรือ node server.js
```
เปิดเบราว์เซอร์ไปที่: `http://localhost:4000`

### ทางเลือกที่ 2: เปิดผ่านเว็บเซิร์ฟเวอร์ใดๆ (Static Hosting)
เนื่องจากตัวแอปถูกสร้างด้วยเทคโนโลยีมาตรฐาน (HTML5, Vanilla CSS, Vanilla JS) สามารถนำไฟล์ทั้งหมดขึ้นโฮสต์ได้ทันทีบน:
- **Vercel** (`vercel --prod`)
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**

---

## 🛠️ โครงสร้างไฟล์ในโปรเจกต์

```
AcoustiCar-AI/
├── assets/
│   └── hero-scan.jpg       # ภาพ HUD Diagnostic Banner ความละเอียดสูง
├── index.html              # หน้าหลักโครงสร้างแอปและ Modals ทั้งหมด
├── styles.css              # Cyber-Automotive Glassmorphic Dark Design System
├── app.js                  # ระบบ Web Audio API, Synthesizer, FFT, AI Classifier
├── manifest.json           # การตั้งค่า Progressive Web App (PWA)
├── package.json            # คำสั่งสตาร์ทโปรเจกต์
├── server.js               # Node.js HTTP Server แบบ Standalone
└── README.md               # เอกสารประกอบโปรเจกต์และแผนธุรกิจ
```

---

## 📈 แผนการพัฒนาต่อยอด (Future Roadmap)

- [ ] เชื่อมต่อ **Gemini 1.5 Flash Audio API** เพื่อวิเคราะห์เสียงเชิงลึกร่วมกับ Prompt ภาษาไทย
- [ ] พัฒนาระบบเชื่อมต่อบลูทูธ **OBD-II Dongle (ELM327)** ดึงค่า RPM, Fuel Trim, Coolant Temp ควบคู่กับเสียง
- [ ] แพ็กเกจแอปเป็น **Mobile App (Capacitor / Flutter)** ลง Google Play Store และ Apple App Store

---
© 2026 AcoustiCar AI™ · All Rights Reserved.
