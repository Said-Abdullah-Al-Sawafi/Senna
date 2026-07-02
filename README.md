<div dir="rtl">

# صِنعة — مصمم الشهادات

أداة ويب لتصميم وإصدار الشهادات بكميات كبيرة. تتيح رفع قالب شهادة (PDF أو صورة)، ربط الحقول ببيانات من ملف CSV أو Excel، وإنشاء شهادات مخصصة بأسماء المستفيدين دفعة واحدة.

### الميزات

- رفع الشهادات بصيغة PDF أو PNG أو JPG
- رفع البيانات من CSV أو Excel
- إضافة حقول نصية متعددة (الاسم، التاريخ، إلخ) ووضعها على الشهادة
- دعم الخطوط العربية (Google Fonts وخطوط مرفوعة يدوياً)
- إضافة صور وطوابع فوق الشهادة
- معاينة فورية عبر قماشة تفاعلية
- تصدير الشهادات بصيغة PNG أو PDF
- إنشاء شهادات متعددة دفعة واحدة مع حفظها في ملف ZIP
- يدعم اللغتين العربية والإنجليزية
- تصميم متجاوب مع جميع الأجهزة

### الاستخدام

1. ارفع قالب الشهادة (PDF أو صورة)
2. ارفع ملف البيانات (CSV أو Excel)
3. أضف الحقول وحدد موقعها على الشهادة
4. اختر الصفوف المطلوبة
5. اضغط "إنشاء الكل" لتصدير الشهادات

### تقنيات المستخدمة

- Fabric.js — قماشة تفاعلية للتحكم بالحقول
- PDF.js — عرض ملفات PDF
- jsPDF — تصدير PDF
- JSZip — إنشاء ملفات مضغوطة
- SheetJS — قراءة ملفات Excel

---

</div>

# صِنعة (Sina'a) — Certificate Designer

A web-based tool for designing and batch-generating certificates. Upload a certificate template (PDF or image), map data fields from CSV/Excel, and generate personalized certificates in bulk.

### Features

- Upload certificate templates in PDF, PNG, or JPG format
- Import data from CSV or Excel files
- Add multiple text fields (name, date, etc.) and position them on the certificate
- Arabic font support (Google Fonts + custom uploads)
- Overlay images and stamps on the certificate
- Real-time preview on an interactive canvas
- Export certificates as PNG or PDF
- Batch-generate multiple certificates and save as ZIP
- Bilingual interface (Arabic / English)
- Responsive design for all devices

### Usage

1. Upload a certificate template (PDF or image)
2. Upload a data file (CSV or Excel)
3. Add fields and position them on the certificate
4. Select the rows to generate
5. Click "Generate All" to export certificates

### Built With

- Fabric.js — interactive canvas for field manipulation
- PDF.js — PDF rendering
- jsPDF — PDF export
- JSZip — ZIP archive creation
- SheetJS — Excel file parsing

---

## Deploy on GitHub Pages

This project is ready for GitHub Pages. The app lives in the `sinaa/` subfolder.

### Option 1 — Automatic (Recommended)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. The included workflow will deploy automatically (if `.github/workflows` exists)

### Option 2 — Manual (No workflow needed)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Set branch to `main` and folder to `/sinaa`
5. Save — your site will be live at `https://<user>.github.io/<repo>/`

The root `index.html` will redirect visitors to `/sinaa/` automatically.
