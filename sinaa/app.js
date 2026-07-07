(function () {
  'use strict';

  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  const FONTS = [
    { name: 'TufuliArabic', value: 'TufuliArabic', type: 'local' },
    { name: 'Amiri', value: 'Amiri', type: 'google' },
    { name: 'Cairo', value: 'Cairo', type: 'google' },
    { name: 'Tajawal', value: 'Tajawal', type: 'google' },
    { name: 'Scheherazade New', value: 'Scheherazade New', type: 'google' },
    { name: 'Alexandria', value: 'Alexandria', type: 'google' },
    { name: 'Readex Pro', value: 'Readex Pro', type: 'google' },
    { name: 'Rubik', value: 'Rubik', type: 'google' },
    { name: 'Noto Kufi Arabic', value: 'Noto Kufi Arabic', type: 'google' },
    { name: 'Noto Naskh Arabic', value: 'Noto Naskh Arabic', type: 'google' },
    { name: 'IBM Plex Sans Arabic', value: 'IBM Plex Sans Arabic', type: 'google' },
    { name: 'Changa', value: 'Changa', type: 'google' },
    { name: 'Roboto', value: 'Roboto', type: 'google' },
    { name: 'Open Sans', value: 'Open Sans', type: 'google' },
    { name: 'Lato', value: 'Lato', type: 'google' },
    { name: 'Montserrat', value: 'Montserrat', type: 'google' },
    { name: 'Poppins', value: 'Poppins', type: 'google' },
    { name: 'Playfair Display', value: 'Playfair Display', type: 'google' },
    { name: 'Merriweather', value: 'Merriweather', type: 'google' },
    { name: 'Arial', value: 'Arial', type: 'system' },
    { name: 'Tahoma', value: 'Tahoma', type: 'system' },
    { name: 'Times New Roman', value: 'Times New Roman', type: 'system' },
    { name: 'Georgia', value: 'Georgia', type: 'system' },
    { name: 'Courier New', value: 'Courier New', type: 'system' },
    { name: 'Verdana', value: 'Verdana', type: 'system' },
    { name: 'Impact', value: 'Impact', type: 'system' },
  ];

  const TRANS = {
    ar: {
      lang_toggle: 'English',
      upload_cert: 'رفع الشهادة',
      upload_data: 'رفع البيانات',
      fields: 'الحقول',
      add_field: 'إضافة حقل',
      field_n: 'الحقل {n}',
      column: 'العمود',
      font: 'الخط',
      size: 'الحجم',
      color: 'اللون',
      rotation: 'التدوير',
      delete: 'حذف',
      export_png: 'تصدير PNG',
      export_pdf: 'تصدير PDF',
      zoom_in: 'تكبير',
      zoom_out: 'تصغير',
      select_column: 'اختر العمود للعرض:',
      dropzone: 'اسحب الملف هنا أو انقر للاختيار',
      no_cert: 'قم برفع شهادة للبدء',
      no_fields: 'لم يتم إضافة حقول بعد. أضف حقولاً لربطها ببياناتك.',
      no_data_first: 'الرجاء رفع ملف البيانات أولاً',
      cert_ok: '✓ تم رفع الشهادة',
      data_ok: '✓ تم رفع البيانات ({rows} صف)',
      field_added: 'تم إضافة الحقل',
      loading: 'جاري التحميل...',
      page: 'صفحة',
      of: 'من',
      generate_all: 'إنشاء الكل',
      select_rows_title: 'اختيار الصفوف للإنشاء',
      select_all: 'تحديد الكل',
      deselect_all: 'إلغاء التحديد',
      generate_count: 'إنشاء ({n})',
      generating: 'جاري الإنشاء...',
      cancel: 'إلغاء',
      no_rows_sel: 'الرجاء اختيار صف واحد على الأقل',
      generate_ready: '✓ تم إنشاء {n} شهادة',
      generate_error: 'خطأ أثناء الإنشاء',
      folder_pick: 'اختر مجلد الحفظ',
      download_zip: 'تنزيل المضغوطة',
      save_file: 'حفظ الملف',
      saving: 'جاري الحفظ...',
      generate_all_title: 'إنشاء الشهادات',
      images: 'الصور والطوابع',
      image_dropzone: 'اسحب الصورة هنا أو انقر للاختيار',
      image_added: '✓ تم إضافة الصورة',
      delete_image: 'حذف',
      upload_font: 'رفع خط',
      font_uploaded: '✓ تم رفع الخط',
      font_error: 'خطأ في رفع الخط',
      bold: 'B',
      italic: 'I',
      underline: 'U',
      align_left: '<svg class="icon icon-sm" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="2" y1="2" x2="12" y2="2"/><line x1="2" y1="5" x2="9" y2="5"/><line x1="2" y1="8" x2="12" y2="8"/><line x1="2" y1="11" x2="7" y2="11"/></svg>',
      align_center: '<svg class="icon icon-sm" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="2" y1="2" x2="12" y2="2"/><line x1="3.5" y1="5" x2="10.5" y2="5"/><line x1="2" y1="8" x2="12" y2="8"/><line x1="4" y1="11" x2="10" y2="11"/></svg>',
      align_right: '<svg class="icon icon-sm" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="2" y1="2" x2="12" y2="2"/><line x1="5" y1="5" x2="12" y2="5"/><line x1="2" y1="8" x2="12" y2="8"/><line x1="7" y1="11" x2="12" y2="11"/></svg>',
      trash_icon: '<svg class="icon icon-sm" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4.5h10M12 4.5v8a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 014 12.5v-8M6.5 4.5V3a1 1 0 011-1h1a1 1 0 011 1v1.5M6.5 7v4M9.5 7v4"/></svg>',
      bring_forward: '▲',
      send_backward: '▼',
      undo: '↩ تراجع',
      redo: '↪ إعادة',
    },
    en: {
      lang_toggle: 'العربية',
      upload_cert: 'Upload Certificate',
      upload_data: 'Upload Data',
      fields: 'Fields',
      add_field: 'Add Field',
      field_n: 'Field {n}',
      column: 'Column',
      font: 'Font',
      size: 'Size',
      color: 'Color',
      rotation: 'Rotation',
      delete: 'Delete',
      export_png: 'Export PNG',
      export_pdf: 'Export PDF',
      zoom_in: 'Zoom In',
      zoom_out: 'Zoom Out',
      select_column: 'Select column to display:',
      dropzone: 'Drop file here or click to select',
      no_cert: 'Upload a certificate to start',
      no_fields: 'No fields added yet. Add fields to bind your data.',
      no_data_first: 'Please upload a data file first',
      cert_ok: '✓ Certificate uploaded',
      data_ok: '✓ Data uploaded ({rows} rows)',
      field_added: 'Field added',
      loading: 'Loading...',
      page: 'Page',
      of: 'of',
      generate_all: 'Generate All',
      select_rows_title: 'Select Rows to Generate',
      select_all: 'Select All',
      deselect_all: 'Deselect All',
      generate_count: 'Generate ({n})',
      generating: 'Generating...',
      cancel: 'Cancel',
      no_rows_sel: 'Please select at least one row',
      generate_ready: '✓ Generated {n} certificates',
      generate_error: 'Error during generation',
      folder_pick: 'Choose save folder',
      download_zip: 'Download ZIP',
      save_file: 'Save file',
      saving: 'Saving...',
      generate_all_title: 'Generate Certificates',
      images: 'Images & Stamps',
      image_dropzone: 'Drop image here or click to select',
      image_added: '✓ Image added',
      delete_image: 'Delete',
      upload_font: 'Upload Font',
      font_uploaded: '✓ Font uploaded',
      font_error: 'Font upload error',
      bold: 'B',
      italic: 'I',
      underline: 'U',
      align_left: '<svg class="icon icon-sm" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="2" y1="2" x2="12" y2="2"/><line x1="2" y1="5" x2="9" y2="5"/><line x1="2" y1="8" x2="12" y2="8"/><line x1="2" y1="11" x2="7" y2="11"/></svg>',
      align_center: '<svg class="icon icon-sm" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="2" y1="2" x2="12" y2="2"/><line x1="3.5" y1="5" x2="10.5" y2="5"/><line x1="2" y1="8" x2="12" y2="8"/><line x1="4" y1="11" x2="10" y2="11"/></svg>',
      align_right: '<svg class="icon icon-sm" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="2" y1="2" x2="12" y2="2"/><line x1="5" y1="5" x2="12" y2="5"/><line x1="2" y1="8" x2="12" y2="8"/><line x1="7" y1="11" x2="12" y2="11"/></svg>',
      trash_icon: '<svg class="icon icon-sm" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4.5h10M12 4.5v8a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 014 12.5v-8M6.5 4.5V3a1 1 0 011-1h1a1 1 0 011 1v1.5M6.5 7v4M9.5 7v4"/></svg>',
      bring_forward: '▲',
      send_backward: '▼',
      undo: '↩ Undo',
      redo: '↪ Redo',
    },
  };

  let lang = 'ar';

  const state = {
    certType: null,
    certDataUrl: null,
    origWidth: 0,
    origHeight: 0,
    displayWidth: 0,
    displayHeight: 0,
    certImage: null,
    pdfDoc: null,
    pdfPageNum: 1,
    pdfTotalPages: 1,

    dataHeaders: [],
    dataRows: [],

    fields: [],
    fieldCounter: 0,
    selectedFieldId: null,

    overlayImages: [],

    zoom: 1,
  };

  let canvas = null;
  let pendingGoogleFonts = [];

  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  const els = {};
  function cacheEls() {
    els.html = document.documentElement;
    els.langToggle = $('#langToggle');
    els.undoBtn = $('#undoBtn');
    els.redoBtn = $('#redoBtn');
    els.zoomIn = $('#zoomIn');
    els.zoomOut = $('#zoomOut');
    els.zoomLevel = $('#zoomLevel');
    els.pageInfo = $('#pageInfo');
    els.exportPng = $('#exportPng');
    els.exportPdf = $('#exportPdf');
    els.certInput = $('#certInput');
    els.certDropzone = $('#certDropzone');
    els.certStatus = $('#certStatus');
    els.dataInput = $('#dataInput');
    els.dataDropzone = $('#dataDropzone');
    els.dataStatus = $('#dataStatus');
    els.dataPreview = $('#dataPreview');
    els.previewColumn = $('#previewColumn');
    els.previewHeader = $('#previewHeader');
    els.previewBody = $('#previewBody');
    els.imageInput = $('#imageInput');
    els.imageDropzone = $('#imageDropzone');
    els.imageStatus = $('#imageStatus');
    els.imagesList = $('#imagesList');
    els.addField = $('#addField');
    els.fieldsList = $('#fieldsList');
    els.noFields = $('#noFields');
    els.canvasPlaceholder = $('#canvasPlaceholder');
    els.certCanvas = $('#certCanvas');
    els.canvasContainer = $('#canvasContainer');
    els.generateBtn = $('#generateBtn');
    els.uploadFontBtn = $('#uploadFontBtn');
    els.fontInput = $('#fontInput');
    els.fontStatus = $('#fontStatus');
    els.generateModal = $('#generateModal');
    els.modalClose = $('#modalClose');
    els.selectAllRows = $('#selectAllRows');
    els.deselectAllRows = $('#deselectAllRows');
    els.rowCount = $('#rowCount');
    els.selectionHeader = $('#selectionHeader');
    els.selectionBody = $('#selectionBody');
    els.cancelGenerate = $('#cancelGenerate');
    els.startGenerate = $('#startGenerate');
    els.progressModal = $('#progressModal');
    els.progressBar = $('#progressBar');
    els.progressText = $('#progressText');
    els.darkModeToggle = $('#darkModeToggle');
  }

  function t(key, vars) {
    let s = (TRANS[lang] || TRANS.ar)[key] || key;
    if (vars) for (const k of Object.keys(vars)) s = s.replace(`{${k}}`, vars[k]);
    return s;
  }

  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const vars = {};
      if (el.dataset.n) vars.n = el.dataset.n;
      el.textContent = t(key, vars);
    });
    els.langToggle.textContent = t('lang_toggle');
    const pngSpan = els.exportPng.querySelector('[data-i18n]');
    if (pngSpan) pngSpan.textContent = t('export_png');
    const pdfSpan = els.exportPdf.querySelector('[data-i18n]');
    if (pdfSpan) pdfSpan.textContent = t('export_pdf');
    const genSpan = els.generateBtn.querySelector('[data-i18n]');
    if (genSpan) genSpan.textContent = t('generate_all');
  }

  function setLanguage(l) {
    lang = l;
    els.html.lang = l;
    els.html.dir = l === 'ar' ? 'rtl' : 'ltr';
    applyI18n();
  }

  function popup(msg, dur) {
    const el = document.createElement('div');
    el.textContent = msg;
    Object.assign(el.style, {
      position: 'fixed', bottom: '24px', insetInlineStart: '50%', transform: 'translateX(-50%)',
      background: '#1E2A35', color: '#fff', padding: '10px 24px', borderRadius: '6px',
      fontSize: '14px', zIndex: 9999, boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
      transition: 'opacity 0.3s',
    });
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 300); }, dur || 2000);
  }

  function showCanvas() {
    els.canvasPlaceholder.style.display = 'none';
    els.certCanvas.style.display = 'block';
  }

  function hideCanvas() {
    els.canvasPlaceholder.style.display = '';
    els.certCanvas.style.display = 'none';
  }

  /* ===== LOAD GOOGLE FONTS ===== */
  function loadGoogleFonts(families, callback) {
    const needed = families.filter(f => f.type === 'google' && !pendingGoogleFonts.includes(f.value));
    if (!needed.length) { if (callback) callback(); return; }
    needed.forEach(f => pendingGoogleFonts.push(f.value));
    const familiesStr = needed.map(f => f.value + ':400,700').join('|');
    WebFont.load({
      google: { families: needed.map(f => f.value) },
      active: callback,
      inactive: callback,
    });
  }

  /* ===== FILE HANDLING ===== */
  function readFileAs(file, type) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = reject;
      if (type === 'arraybuffer') r.readAsArrayBuffer(file);
      else if (type === 'dataurl') r.readAsDataURL(file);
      else r.readAsText(file);
    });
  }

  /* ===== CERTIFICATE LOADING ===== */
  async function handleCertFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    els.certStatus.textContent = t('loading');
    els.certStatus.className = 'status-msg';

    try {
      if (ext === 'pdf') {
        await loadPDF(file);
      } else if (['png', 'jpg', 'jpeg', 'webp'].includes(ext)) {
        await loadImage(file);
      } else {
        els.certStatus.textContent = '❌ ' + (lang === 'en' ? 'Unsupported format' : 'صيغة غير مدعومة');
        return;
      }
      els.certStatus.textContent = t('cert_ok');
      els.certStatus.className = 'status-msg success';
      popup(t('cert_ok'));
    } catch (e) {
      console.error(e);
      els.certStatus.textContent = '❌ ' + e.message;
      els.certStatus.className = 'status-msg error';
    }
  }

  async function loadPDF(file) {
    const buf = await readFileAs(file, 'arraybuffer');
    state.pdfDoc = await pdfjsLib.getDocument({ data: buf }).promise;
    state.pdfTotalPages = state.pdfDoc.numPages;
    state.pdfPageNum = 1;
    state.certType = 'pdf';
    await renderPDFPage(1);
    updatePageInfo();
  }

  async function renderPDFPage(num) {
    const page = await state.pdfDoc.getPage(num);
    const vp = page.getViewport({ scale: 2 });
    const offscreen = document.createElement('canvas');
    offscreen.width = vp.width;
    offscreen.height = vp.height;
    const ctx = offscreen.getContext('2d');
    await page.render({ canvasContext: ctx, viewport: vp }).promise;
    state.certDataUrl = offscreen.toDataURL('image/png');
    state.origWidth = vp.width;
    state.origHeight = vp.height;
    state.pdfPageNum = num;

    const img = new Image();
    img.src = state.certDataUrl;
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; });
    state.certImage = img;

    fitCanvasToImage();
  }

  async function loadImage(file) {
    const dataUrl = await readFileAs(file, 'dataurl');
    state.certType = 'image';
    state.certDataUrl = dataUrl;
    state.pdfDoc = null;

    const img = new Image();
    img.src = dataUrl;
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; });
    state.certImage = img;
    state.origWidth = img.naturalWidth;
    state.origHeight = img.naturalHeight;

    fitCanvasToImage();
  }

  function getAvailableCanvasSize() {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    if (winW < 640) {
      return { maxW: winW - 20, maxH: winH * 0.55 };
    } else if (winW < 1024) {
      return { maxW: Math.min(900, winW - 280 - 60), maxH: winH - 80 };
    }
    return { maxW: Math.min(900, winW - 340 - 80), maxH: winH - 100 };
  }

  function fitCanvasToImage() {
    const { maxW, maxH } = getAvailableCanvasSize();
    let w = state.origWidth;
    let h = state.origHeight;
    if (w > maxW) { h = h * (maxW / w); w = maxW; }
    if (h > maxH) { w = w * (maxH / h); h = maxH; }
    state.displayWidth = Math.round(w);
    state.displayHeight = Math.round(h);
    state.zoom = 1;

    state.fields = [];
    state.fieldCounter = 0;
    state.selectedFieldId = null;
    state.overlayImages = [];
    els.fieldsList.innerHTML = '';
    els.imagesList.innerHTML = '';
    els.imageStatus.textContent = '';
    els.imageStatus.className = 'status-msg';
    els.noFields.style.display = '';

    showCanvas();
    initFabricCanvas();
    history.stack = [];
    history.index = -1;
    setCanvasBackground();
    els.canvasContainer.style.width = state.displayWidth + 'px';
    els.canvasContainer.style.height = state.displayHeight + 'px';
    updateZoomDisplay();
  }

  function initFabricCanvas() {
    if (canvas) {
      canvas.dispose();
      canvas = null;
    }
    const c = els.certCanvas;
    c.width = state.displayWidth;
    c.height = state.displayHeight;
    canvas = new fabric.Canvas(c, {
      preserveObjectStacking: true,
      selection: false,
      defaultCursor: 'default',
    });
    canvas.on('selection:created', onCanvasSelect);
    canvas.on('selection:updated', onCanvasSelect);
    canvas.on('selection:cleared', onCanvasDeselect);
    canvas.on('object:moving', onCanvasMove);
    canvas.on('object:modified', onCanvasModified);
  }

  function setCanvasBackground() {
    fabric.Image.fromURL(state.certDataUrl, function (img) {
      const sx = state.displayWidth / state.origWidth;
      const sy = state.displayHeight / state.origHeight;
      img.set({ scaleX: sx, scaleY: sy });
      canvas.setBackgroundImage(img, function () {
        canvas.renderAll();
        saveState();
      });
    });
  }

  function updatePageInfo() {
    if (state.certType === 'pdf') {
      els.pageInfo.style.display = '';
      els.pageInfo.textContent = t('page') + ' ' + state.pdfPageNum + ' / ' + state.pdfTotalPages;
    } else {
      els.pageInfo.style.display = 'none';
    }
  }

  function updateZoomDisplay() {
    els.zoomLevel.textContent = Math.round(state.zoom * 100) + '%';
  }

  /* ===== DATA LOADING ===== */
  async function handleDataFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    els.dataStatus.textContent = t('loading');
    els.dataStatus.className = 'status-msg';

    try {
      if (ext === 'csv') {
        await parseCSVFile(file);
      } else if (['xlsx', 'xls'].includes(ext)) {
        await parseExcelFile(file);
      } else {
        els.dataStatus.textContent = '❌ ' + (lang === 'ar' ? 'صيغة غير مدعومة' : 'Unsupported format');
        return;
      }
      state.dataPreviewShown = true;
      populateColumnSelector();
      updatePreviewTable(0);
      els.dataPreview.style.display = '';
      els.dataStatus.textContent = t('data_ok', { rows: state.dataRows.length });
      els.dataStatus.className = 'status-msg success';
      updateFieldColumnOptions();
      popup(t('data_ok', { rows: state.dataRows.length }));
    } catch (e) {
      console.error(e);
      els.dataStatus.textContent = '❌ ' + e.message;
      els.dataStatus.className = 'status-msg error';
    }
  }

  async function parseCSVFile(file) {
    const text = await readFileAs(file, 'text');
    const result = Papa.parse(text, { header: false, skipEmptyLines: false });
    if (result.data.length < 2) throw new Error(lang === 'ar' ? 'الملف لا يحتوي على بيانات كافية' : 'File has insufficient data');
    state.dataHeaders = result.data[0].map(h => (h || '').toString().trim());
    state.dataRows = result.data.slice(1).filter(r => r.some(c => (c || '').toString().trim() !== ''));
  }

  async function parseExcelFile(file) {
    const buf = await readFileAs(file, 'arraybuffer');
    const wb = XLSX.read(buf, { type: 'array' });
    const ws = wb.Sheets[wb.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
    if (json.length < 2) throw new Error(lang === 'ar' ? 'الملف لا يحتوي على بيانات كافية' : 'File has insufficient data');
    state.dataHeaders = json[0].map(h => (h || '').toString().trim());
    state.dataRows = json.slice(1).filter(r => r.some(c => (c || '').toString().trim() !== ''));
  }

  function populateColumnSelector() {
    const sel = els.previewColumn;
    sel.innerHTML = '';
    state.dataHeaders.forEach((h, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = h || t('column') + ' ' + (i + 1);
      sel.appendChild(opt);
    });
    sel.onchange = () => {
      const idx = parseInt(sel.value);
      updatePreviewTable(idx);
    };
  }

  function updatePreviewTable(colIdx) {
    const hdr = els.previewHeader;
    const body = els.previewBody;
    hdr.innerHTML = '';
    body.innerHTML = '';
    const colsToShow = Math.min(state.dataHeaders.length, 5);
    for (let i = 0; i < colsToShow; i++) {
      const th = document.createElement('th');
      th.textContent = state.dataHeaders[i] || '-' + (i + 1);
      if (i === colIdx) th.style.background = '#F5EDD6';
      hdr.appendChild(th);
    }
    const maxRows = Math.min(state.dataRows.length, 10);
    for (let r = 0; r < maxRows; r++) {
      const tr = document.createElement('tr');
      for (let c = 0; c < colsToShow; c++) {
        const td = document.createElement('td');
        td.textContent = state.dataRows[r][c] || '';
        if (c === colIdx) td.style.background = '#F5EDD6';
        tr.appendChild(td);
      }
      body.appendChild(tr);
    }
  }

  function updateFieldColumnOptions() {
    state.fields.forEach(f => {
      const sel = document.querySelector(`.field-column[data-field-id="${f.id}"]`);
      if (!sel) return;
      const cur = sel.value;
      sel.innerHTML = '';
      state.dataHeaders.forEach((h, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = h || t('column') + ' ' + (i + 1);
        sel.appendChild(opt);
      });
      if (cur) sel.value = cur;
      else if (sel.options.length > 0) sel.value = '0';
    });
  }

  /* ===== FIELDS ===== */
  function addField() {
    if (!state.dataHeaders.length) {
      popup(t('no_data_first'), 2000);
      return;
    }
    const id = 'field_' + (state.fieldCounter++);
    const colIdx = state.fields.length < state.dataHeaders.length ? state.fields.length : 0;
    const colName = state.dataHeaders[colIdx] || t('column') + ' ' + (colIdx + 1);
    const sampleText = state.dataRows.length > 0 ? (state.dataRows[0][colIdx] || '').toString() : '';

    if (!canvas) {
      popup(lang === 'ar' ? 'الرجاء رفع شهادة أولاً' : 'Please upload a certificate first', 2000);
      return;
    }

    const fontSize = 48;
    const textObj = new fabric.Text(sampleText, {
      fontFamily: 'TufuliArabic',
      fontSize: fontSize,
      fontWeight: 'normal',
      fontStyle: 'normal',
      underline: false,
      textAlign: 'center',
      fill: '#1a1a1a',
      left: state.displayWidth / 2,
      top: state.displayHeight / 2,
      originX: 'center',
      originY: 'center',
      angle: 0,
      fieldId: id,
      selectable: true,
      evented: true,
      hasControls: false,
      hasBorders: true,
      cornerSize: 8,
      padding: 8,
      borderColor: '#D4A84B',
      cornerColor: '#D4A84B',
    });

    canvas.add(textObj);
    canvas.setActiveObject(textObj);
    canvas.renderAll();

    const field = {
      id, colIdx, colName, sampleText,
      textObj,
      fontFamily: 'TufuliArabic',
      fontSize: fontSize,
      fontWeight: 'normal',
      fontStyle: 'normal',
      underline: false,
      textAlign: 'center',
      fill: '#1a1a1a',
      angle: 0,
    };
    state.fields.push(field);
    state.selectedFieldId = id;
    renderFieldsList();
    scrollToField(id);
    els.noFields.style.display = 'none';
    saveState();
  }

  function removeField(id) {
    const idx = state.fields.findIndex(f => f.id === id);
    if (idx === -1) return;
    const field = state.fields[idx];
    canvas.remove(field.textObj);
    canvas.renderAll();
    state.fields.splice(idx, 1);
    if (state.selectedFieldId === id) state.selectedFieldId = null;
    renderFieldsList();
    if (state.fields.length === 0) els.noFields.style.display = '';
    saveState();
  }

  function renderFieldsList() {
    const list = els.fieldsList;
    list.innerHTML = '';
    state.fields.forEach((f, i) => {
      const div = document.createElement('div');
      div.className = 'field-item' + (f.id === state.selectedFieldId ? ' selected' : '');
      div.dataset.fieldId = f.id;
      div.innerHTML = `
        <div class="field-item-header">
          <span class="field-item-name">${t('field_n', { n: i + 1 })}: ${state.dataHeaders[f.colIdx] || ''}</span>
          <div class="field-header-btns">
            <button class="field-layer-btn" data-action="forward" data-field-id="${f.id}" title="${t('bring_forward')}">${t('bring_forward')}</button>
            <button class="field-layer-btn" data-action="backward" data-field-id="${f.id}" title="${t('send_backward')}">${t('send_backward')}</button>
            <button class="field-delete" data-field-id="${f.id}">${t('trash_icon')}</button>
          </div>
        </div>
        <div class="field-controls">
          <div class="control-row">
            <label>${t('column')}</label>
            <select class="field-column" data-field-id="${f.id}"></select>
          </div>
          <div class="control-row">
            <label>${t('font')}</label>
            <select class="field-font" data-field-id="${f.id}"></select>
          </div>
          <div class="control-row">
            <label>${t('size')}</label>
            <input type="number" class="field-size" data-field-id="${f.id}" min="1" max="500" value="${f.fontSize}">
          </div>
          <div class="control-row">
            <label>${t('color')}</label>
            <input type="color" class="field-color" data-field-id="${f.id}" value="${f.fill}">
          </div>
          <div class="control-row">
            <label>${t('rotation')}</label>
            <div class="range-with-value">
              <input type="range" class="field-rotation" data-field-id="${f.id}" min="-180" max="180" value="${f.angle}">
              <span class="rotation-value">${f.angle}°</span>
            </div>
          </div>
          <div class="control-row">
            <label></label>
            <div class="text-format-group">
              <button class="format-btn${f.fontWeight === 'bold' ? ' active' : ''}" data-format="bold" data-field-id="${f.id}">${t('bold')}</button>
              <button class="format-btn${f.fontStyle === 'italic' ? ' active' : ''}" data-format="italic" data-field-id="${f.id}">${t('italic')}</button>
              <button class="format-btn${f.underline ? ' active' : ''}" data-format="underline" data-field-id="${f.id}">${t('underline')}</button>
              <span class="format-sep"></span>
              <button class="format-btn${f.textAlign === 'left' ? ' active' : ''}" data-format="align_left" data-field-id="${f.id}">${t('align_left')}</button>
              <button class="format-btn${f.textAlign === 'center' ? ' active' : ''}" data-format="align_center" data-field-id="${f.id}">${t('align_center')}</button>
              <button class="format-btn${f.textAlign === 'right' ? ' active' : ''}" data-format="align_right" data-field-id="${f.id}">${t('align_right')}</button>
            </div>
          </div>
        </div>
      `;

      const colSel = div.querySelector('.field-column');
      state.dataHeaders.forEach((h, ci) => {
        const opt = document.createElement('option');
        opt.value = ci;
        opt.textContent = h || t('column') + ' ' + (ci + 1);
        if (ci === f.colIdx) opt.selected = true;
        colSel.appendChild(opt);
      });
      colSel.addEventListener('change', () => onFieldColumnChange(f.id, parseInt(colSel.value)));

      const fontSel = div.querySelector('.field-font');
      FONTS.forEach(fo => {
        const opt = document.createElement('option');
        opt.value = fo.value;
        opt.textContent = fo.name;
        if (fo.value === f.fontFamily) opt.selected = true;
        fontSel.appendChild(opt);
      });
      fontSel.addEventListener('change', () => onFieldFontChange(f.id, fontSel.value));

      const sizeInp = div.querySelector('.field-size');
      sizeInp.addEventListener('change', () => onFieldSizeChange(f.id, parseInt(sizeInp.value) || 48));

      const colorInp = div.querySelector('.field-color');
      colorInp.addEventListener('input', () => onFieldColorChange(f.id, colorInp.value));
      colorInp.addEventListener('change', () => saveState());

      const rotRange = div.querySelector('.field-rotation');
      const rotVal = div.querySelector('.rotation-value');
      rotRange.addEventListener('input', () => {
        rotVal.textContent = rotRange.value + '°';
        onFieldRotationChange(f.id, parseInt(rotRange.value));
      });
      rotRange.addEventListener('change', () => saveState());

      div.querySelectorAll('.format-btn').forEach(btn => {
        btn.addEventListener('click', () => onFieldFormatChange(f.id, btn.dataset.format));
      });

      div.querySelectorAll('.field-layer-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.action === 'forward') bringFieldForward(f.id);
          else sendFieldBackward(f.id);
        });
      });

      const delBtn = div.querySelector('.field-delete');
      delBtn.addEventListener('click', () => removeField(f.id));

      div.addEventListener('click', (e) => {
        if (e.target.closest('.field-delete') || e.target.closest('select') || e.target.closest('input') || e.target.closest('button')) return;
        selectField(f.id);
      });

      list.appendChild(div);
    });
  }

  function selectField(id) {
    state.selectedFieldId = id;
    document.querySelectorAll('.field-item').forEach(el => el.classList.remove('selected'));
    const item = document.querySelector(`.field-item[data-field-id="${id}"]`);
    if (item) item.classList.add('selected');
    const field = state.fields.find(f => f.id === id);
    if (field && canvas) {
      canvas.setActiveObject(field.textObj);
      canvas.renderAll();
    }
  }

  function scrollToField(id) {
    const el = document.querySelector(`.field-item[data-field-id="${id}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ===== FIELD PROPERTY CHANGES ===== */
  function onFieldColumnChange(id, colIdx) {
    const field = state.fields.find(f => f.id === id);
    if (!field) return;
    field.colIdx = colIdx;
    const val = state.dataRows.length > 0 ? (state.dataRows[0][colIdx] || '').toString() : '';
    field.sampleText = val;
    field.textObj.set('text', val);
    canvas.renderAll();
    const nameEl = document.querySelector(`.field-item[data-field-id="${id}"] .field-item-name`);
    if (nameEl) {
      const idx = state.fields.indexOf(field);
      nameEl.textContent = `${t('field_n', { n: idx + 1 })}: ${state.dataHeaders[colIdx] || ''}`;
    }
    saveState();
  }

  function onFieldFontChange(id, fontFamily) {
    const field = state.fields.find(f => f.id === id);
    if (!field) return;
    field.fontFamily = fontFamily;
    field.textObj.set('fontFamily', fontFamily);
    canvas.renderAll();
    const fo = FONTS.find(f => f.value === fontFamily);
    if (fo && fo.type === 'google') {
      loadGoogleFonts([fo]);
    }
    saveState();
  }

  function onFieldSizeChange(id, fontSize) {
    const field = state.fields.find(f => f.id === id);
    if (!field) return;
    field.fontSize = fontSize;
    field.textObj.set('fontSize', fontSize);
    canvas.renderAll();
    saveState();
  }

  function onFieldColorChange(id, fill) {
    const field = state.fields.find(f => f.id === id);
    if (!field) return;
    field.fill = fill;
    field.textObj.set('fill', fill);
    canvas.renderAll();
  }

  function onFieldRotationChange(id, angle) {
    const field = state.fields.find(f => f.id === id);
    if (!field) return;
    field.angle = angle;
    field.textObj.set('angle', angle);
    canvas.renderAll();
  }

  function onFieldFormatChange(id, format) {
    const field = state.fields.find(f => f.id === id);
    if (!field) return;
    const obj = field.textObj;
    switch (format) {
      case 'bold':
        field.fontWeight = field.fontWeight === 'bold' ? 'normal' : 'bold';
        obj.set('fontWeight', field.fontWeight);
        break;
      case 'italic':
        field.fontStyle = field.fontStyle === 'italic' ? 'normal' : 'italic';
        obj.set('fontStyle', field.fontStyle);
        break;
      case 'underline':
        field.underline = !field.underline;
        obj.set('underline', field.underline);
        break;
      case 'align_left':
        field.textAlign = 'left'; obj.set('textAlign', 'left'); break;
      case 'align_center':
        field.textAlign = 'center'; obj.set('textAlign', 'center'); break;
      case 'align_right':
        field.textAlign = 'right'; obj.set('textAlign', 'right'); break;
    }
    canvas.renderAll();
    saveState();
    renderFieldsList();
    scrollToField(id);
  }

  function bringFieldForward(id) {
    const field = state.fields.find(f => f.id === id);
    if (!field) return;
    canvas.bringForward(field.textObj);
    canvas.renderAll();
    saveState();
  }

  function sendFieldBackward(id) {
    const field = state.fields.find(f => f.id === id);
    if (!field) return;
    canvas.sendBackwards(field.textObj);
    canvas.renderAll();
    saveState();
  }

  function bringOverlayForward(id) {
    const entry = state.overlayImages.find(o => o.id === id);
    if (!entry) return;
    canvas.bringForward(entry.fabricObj);
    canvas.renderAll();
    saveState();
  }

  function sendOverlayBackward(id) {
    const entry = state.overlayImages.find(o => o.id === id);
    if (!entry) return;
    canvas.sendBackwards(entry.fabricObj);
    canvas.renderAll();
    saveState();
  }

  /* ===== UNDO / REDO ===== */
  const MAX_HISTORY = 50;
  const history = { stack: [], index: -1 };

  function saveState() {
    if (!canvas) return;
    const json = JSON.stringify(canvas.toJSON(['fieldId', 'overlayId']));
    if (history.index < history.stack.length - 1) {
      history.stack = history.stack.slice(0, history.index + 1);
    }
    history.stack.push(json);
    if (history.stack.length > MAX_HISTORY) history.stack.shift();
    history.index = history.stack.length - 1;
  }

  function restoreCanvasFromJSON(jsonStr) {
    const json = JSON.parse(jsonStr);
    canvas.loadFromJSON(json, () => {
      const objects = canvas.getObjects();
      for (const field of state.fields) {
        const obj = objects.find(o => o.fieldId === field.id);
        if (obj) field.textObj = obj;
      }
      for (const overlay of state.overlayImages) {
        const obj = objects.find(o => o.overlayId === overlay.id);
        if (obj) overlay.fabricObj = obj;
      }
      canvas.renderAll();
    });
  }

  function undo() {
    if (history.index <= 0 || !canvas) return;
    history.index--;
    restoreCanvasFromJSON(history.stack[history.index]);
  }

  function redo() {
    if (history.index >= history.stack.length - 1 || !canvas) return;
    history.index++;
    restoreCanvasFromJSON(history.stack[history.index]);
  }

  /* ===== CANVAS EVENTS ===== */
  function onCanvasSelect(e) {
    const obj = e.selected && e.selected[0];
    if (obj && obj.fieldId) {
      state.selectedFieldId = obj.fieldId;
      document.querySelectorAll('.field-item').forEach(el => {
        el.classList.toggle('selected', el.dataset.fieldId === obj.fieldId);
      });
      scrollToField(obj.fieldId);
    }
  }

  function onCanvasDeselect() {
    state.selectedFieldId = null;
    document.querySelectorAll('.field-item').forEach(el => el.classList.remove('selected'));
  }

  function onCanvasMove(e) {
    const obj = e.target;
    if (obj && obj.fieldId) {
      syncFieldPosition(obj.fieldId);
    }
  }

  function onCanvasModified(e) {
    const obj = e.target;
    if (obj && obj.fieldId) {
      syncFieldPosition(obj.fieldId);
    }
    saveState();
  }

  function syncFieldPosition(id) {
    const field = state.fields.find(f => f.id === id);
    if (!field) return;
    field.textObj = canvas.getObjects().find(o => o.fieldId === id);
  }

  /* ===== OVERLAY IMAGES ===== */
  function handleOverlayImages(files) {
    for (const file of files) {
      const ext = file.name.split('.').pop().toLowerCase();
      if (!['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext)) continue;
      readFileAs(file, 'dataurl').then(dataUrl => {
        const img = new Image();
        img.onload = () => addOverlayImageToCanvas(dataUrl, img);
        img.onerror = () => {};
        img.src = dataUrl;
      });
    }
  }

  function addOverlayImageToCanvas(dataUrl, img) {
    if (!canvas) {
      popup(lang === 'ar' ? 'الرجاء رفع شهادة أولاً' : 'Please upload a certificate first', 2000);
      return;
    }

    const maxDim = Math.max(state.displayWidth, state.displayHeight);
    const targetSize = maxDim * 0.15;
    const scale = Math.min(targetSize / img.naturalWidth, targetSize / img.naturalHeight, 1);

    const id = 'overlay_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);

    const fabricImg = new fabric.Image(img, {
      left: state.displayWidth / 2 - (img.naturalWidth * scale) / 2,
      top: state.displayHeight / 2 - (img.naturalHeight * scale) / 2,
      scaleX: scale,
      scaleY: scale,
      angle: 0,
      overlayId: id,
      selectable: true,
      evented: true,
      hasControls: true,
      hasBorders: true,
      cornerSize: 8,
      padding: 8,
      borderColor: '#B83A2A',
      cornerColor: '#B83A2A',
      transparentCorners: false,
    });

    canvas.add(fabricImg);
    canvas.setActiveObject(fabricImg);
    canvas.renderAll();

    const entry = { id, fabricObj: fabricImg, dataUrl, origImgWidth: img.naturalWidth, origImgHeight: img.naturalHeight };
    state.overlayImages.push(entry);
    renderImagesList();
    els.imageStatus.textContent = t('image_added');
    els.imageStatus.className = 'status-msg success';
    saveState();
  }

  function removeOverlayImage(id) {
    const idx = state.overlayImages.findIndex(o => o.id === id);
    if (idx === -1) return;
    const entry = state.overlayImages[idx];
    canvas.remove(entry.fabricObj);
    canvas.renderAll();
    state.overlayImages.splice(idx, 1);
    renderImagesList();
    saveState();
  }

  function renderImagesList() {
    const list = els.imagesList;
    list.innerHTML = '';
    state.overlayImages.forEach((o, i) => {
      const div = document.createElement('div');
      div.className = 'image-item';
      div.innerHTML = `
        <div class="image-item-preview">
          <img src="${o.dataUrl}" alt="overlay ${i + 1}">
        </div>
        <div class="image-item-info">
          <span class="image-item-name">${lang === 'ar' ? 'صورة' : 'Image'} ${i + 1}</span>
          <span class="image-item-size">${o.origImgWidth}×${o.origImgHeight}</span>
        </div>
        <div class="image-item-actions">
          <button class="image-layer-btn" data-action="forward" data-overlay-id="${o.id}" title="${t('bring_forward')}">${t('bring_forward')}</button>
          <button class="image-layer-btn" data-action="backward" data-overlay-id="${o.id}" title="${t('send_backward')}">${t('send_backward')}</button>
          <button class="image-delete" data-overlay-id="${o.id}">${t('trash_icon')}</button>
        </div>
      `;
      div.querySelectorAll('.image-layer-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.action === 'forward') bringOverlayForward(o.id);
          else sendOverlayBackward(o.id);
        });
      });
      const delBtn = div.querySelector('.image-delete');
      delBtn.addEventListener('click', () => removeOverlayImage(o.id));
      list.appendChild(div);
    });
  }

  /* ===== CUSTOM FONT UPLOAD ===== */
  function handleFontUpload(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!['ttf', 'otf', 'woff', 'woff2'].includes(ext)) {
      els.fontStatus.textContent = '❌ ' + (lang === 'ar' ? 'صيغة غير مدعومة' : 'Unsupported format');
      return;
    }

    let fontFamily = file.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
    if (!fontFamily) fontFamily = 'CustomFont';

    const existing = FONTS.find(f => f.value === fontFamily);
    if (existing) {
      const idx = FONTS.indexOf(existing);
      FONTS.splice(idx, 1);
    }

    readFileAs(file, 'arraybuffer').then(async buf => {
      const blob = new Blob([buf], { type: 'font/' + ext });
      const blobUrl = URL.createObjectURL(blob);

      try {
        const fontFace = new FontFace(fontFamily, `url(${blobUrl})`);
        await fontFace.load();
        document.fonts.add(fontFace);

        FONTS.push({ name: fontFamily, value: fontFamily, type: 'custom' });
        refreshFontSelects();
        els.fontStatus.textContent = t('font_uploaded');
        els.fontStatus.className = 'status-msg success';
        popup(t('font_uploaded'), 1500);
      } catch (e) {
        console.error(e);
        els.fontStatus.textContent = '❌ ' + t('font_error');
        els.fontStatus.className = 'status-msg error';
        URL.revokeObjectURL(blobUrl);
      }
    }).catch(e => {
      console.error(e);
      els.fontStatus.textContent = '❌ ' + t('font_error');
      els.fontStatus.className = 'status-msg error';
    });
  }

  function refreshFontSelects() {
    document.querySelectorAll('.field-font').forEach(sel => {
      const cur = sel.value;
      sel.innerHTML = '';
      FONTS.forEach(fo => {
        const opt = document.createElement('option');
        opt.value = fo.value;
        opt.textContent = fo.name;
        sel.appendChild(opt);
      });
      if (cur && FONTS.some(f => f.value === cur)) sel.value = cur;
    });
  }

  /* ===== RENDER ENGINE ===== */
  function renderCertificateForRow(row) {
    const ow = state.origWidth;
    const oh = state.origHeight;
    const offscreen = document.createElement('canvas');
    offscreen.width = ow;
    offscreen.height = oh;
    const ctx = offscreen.getContext('2d');

    ctx.drawImage(state.certImage, 0, 0, ow, oh);

    const sx = ow / state.displayWidth;
    const sy = oh / state.displayHeight;
    const s = Math.min(sx, sy);

    for (const field of state.fields) {
      const tobj = field.textObj;
      const colVal = row[field.colIdx] !== undefined ? String(row[field.colIdx]) : '';
      const x = tobj.left * sx;
      const y = tobj.top * sy;
      const size = Math.round(tobj.fontSize * s);
      const fontFamily = tobj.fontFamily || 'TufuliArabic';
      const fill = tobj.fill || '#1a1a1a';
      const angle = tobj.angle || 0;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle * Math.PI / 180);
      ctx.font = size + 'px "' + fontFamily + '"';
      ctx.fillStyle = fill;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(colVal, 0, 0);
      ctx.restore();
    }

    for (const overlay of state.overlayImages) {
      const obj = overlay.fabricObj;
      const imgEl = obj.getElement();
      const ox = obj.left * sx;
      const oy = obj.top * sy;
      const ow2 = obj.getScaledWidth() * sx;
      const oh2 = obj.getScaledHeight() * sy;
      const oAngle = obj.angle || 0;

      ctx.save();
      ctx.translate(ox + ow2 / 2, oy + oh2 / 2);
      ctx.rotate(oAngle * Math.PI / 180);
      ctx.drawImage(imgEl, -ow2 / 2, -oh2 / 2, ow2, oh2);
      ctx.restore();
    }

    return offscreen;
  }

  /* ===== SAVE DIALOG ===== */
  async function tryPickFileHandle(defaultName, format) {
    if (!('showSaveFilePicker' in window)) return null;
    const isPdf = format === 'pdf';
    const ext = isPdf ? '.pdf' : '.png';
    const mime = isPdf ? 'application/pdf' : 'image/png';
    try {
      return await window.showSaveFilePicker({
        suggestedName: defaultName + ext,
        types: [{ description: isPdf ? 'PDF File' : 'PNG Image', accept: { [mime]: [ext] } }],
      });
    } catch (e) {
      if (e.name === 'AbortError' || e.name === 'SecurityError') return false;
      throw e;
    }
  }

  async function writeToHandle(handle, canvasEl, format) {
    const writable = await handle.createWritable();
    if (format === 'pdf') {
      const imgData = canvasEl.toDataURL('image/png');
      const { jsPDF } = window.jspdf;
      const ow = state.origWidth, oh = state.origHeight;
      const orientation = ow > oh ? 'l' : 'p';
      const pdfW = Math.max(ow, oh), pdfH = Math.min(ow, oh);
      const pdf = new jsPDF({ orientation, unit: 'px', format: [pdfW, pdfH] });
      pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
      await writable.write(pdf.output('arraybuffer'));
    } else {
      const blob = await new Promise(r => canvasEl.toBlob(r, 'image/png'));
      await writable.write(blob);
    }
    await writable.close();
  }

  function fallbackDownload(canvasEl, defaultName, format) {
    if (format === 'pdf') {
      const imgData = canvasEl.toDataURL('image/png');
      const { jsPDF } = window.jspdf;
      const ow = state.origWidth, oh = state.origHeight;
      const orientation = ow > oh ? 'l' : 'p';
      const pdfW = Math.max(ow, oh), pdfH = Math.min(ow, oh);
      const pdf = new jsPDF({ orientation, unit: 'px', format: [pdfW, pdfH] });
      pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
      pdf.save(defaultName + '.pdf');
    } else {
      canvasEl.toBlob(function (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = defaultName + '.png';
        document.body.appendChild(a); a.click();
        document.body.removeChild(a); URL.revokeObjectURL(url);
      }, 'image/png');
    }
  }

  /* ===== BATCH GENERATION MODAL ===== */
  function showGenerateModal() {
    if (!state.certImage || !state.dataHeaders.length || !state.fields.length) {
      popup(lang === 'ar' ? 'الرجاء رفع شهادة وبيانات وإضافة حقول أولاً' : 'Upload certificate, data, and add fields first', 2500);
      return;
    }

    els.generateModal.style.display = '';

    const hdr = els.selectionHeader;
    const body = els.selectionBody;
    hdr.innerHTML = '';
    body.innerHTML = '';

    const thCheck = document.createElement('th');
    thCheck.className = 'col-check';
    hdr.appendChild(thCheck);

    const thIdx = document.createElement('th');
    thIdx.className = 'col-index';
    thIdx.textContent = '#';
    hdr.appendChild(thIdx);

    const colsToShow = Math.min(state.dataHeaders.length, 6);
    for (let i = 0; i < colsToShow; i++) {
      const th = document.createElement('th');
      th.textContent = state.dataHeaders[i] || '-' + (i + 1);
      hdr.appendChild(th);
    }

    const checkedRows = new Set();
    state.dataRows.forEach((row, ri) => {
      const tr = document.createElement('tr');
      tr.dataset.rowIndex = ri;

      const tdCheck = document.createElement('td');
      tdCheck.className = 'col-check';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = true;
      checkedRows.add(ri);
      tdCheck.appendChild(cb);
      tr.appendChild(tdCheck);

      const tdIdx = document.createElement('td');
      tdIdx.className = 'col-index';
      tdIdx.textContent = ri + 1;
      tr.appendChild(tdIdx);

      for (let c = 0; c < colsToShow; c++) {
        const td = document.createElement('td');
        td.textContent = row[c] || '';
        td.title = row[c] || '';
        tr.appendChild(td);
      }

      cb.addEventListener('change', () => {
        if (cb.checked) checkedRows.add(ri);
        else checkedRows.delete(ri);
        tr.classList.toggle('selected', cb.checked);
        updateGenerateBtn(checkedRows.size);
      });

      tr.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'A') return;
        cb.checked = !cb.checked;
        cb.dispatchEvent(new Event('change'));
      });

      body.appendChild(tr);
    });

    const sel = checkedRows;
    els.selectAllRows.onclick = () => {
      body.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = true; cb.dispatchEvent(new Event('change')); });
    };
    els.deselectAllRows.onclick = () => {
      body.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false; cb.dispatchEvent(new Event('change')); });
    };

    els.startGenerate.onclick = () => startBatchGenerate([...checkedRows]);
    els.cancelGenerate.onclick = closeGenerateModal;
    els.modalClose.onclick = closeGenerateModal;
    els.generateModal.addEventListener('click', (e) => {
      if (e.target === els.generateModal.querySelector('.modal-backdrop')) closeGenerateModal();
    });

    updateGenerateBtn(checkedRows.size);

    function updateGenerateBtn(n) {
      els.startGenerate.textContent = t('generate_count', { n });
      els.rowCount.textContent = n + ' / ' + state.dataRows.length;
    }
  }

  function closeGenerateModal() {
    els.generateModal.style.display = 'none';
    els.generateModal.querySelector('.modal-backdrop').onclick = null;
  }

  async function startBatchGenerate(selectedIndices) {
    if (!selectedIndices.length) {
      popup(t('no_rows_sel'), 2000);
      return;
    }

    closeGenerateModal();

    const useDirPicker = 'showDirectoryPicker' in window;
    let dirHandle = null;

    if (useDirPicker) {
      try {
        dirHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
      } catch (e) {
        if (e.name === 'AbortError' || e.name === 'SecurityError') return;
        throw e;
      }
    }

    await document.fonts.ready;

    els.progressModal.style.display = '';
    els.progressBar.style.width = '0%';
    els.progressText.textContent = '0 / ' + selectedIndices.length;

    try {

      const zip = useDirPicker ? null : new JSZip();
      let completed = 0;
      let failed = 0;

      for (const ri of selectedIndices) {
        let rowOk = false;
        try {
          const row = state.dataRows[ri];
          const canvasEl = renderCertificateForRow(row);

          const nameCol = state.fields.length > 0 ? (row[state.fields[0].colIdx] || '').toString() : '';
          const safeBase = nameCol.replace(/[<>:"/\\|?*\x00-\x1f]/g, '_').trim() || 'certificate';
          const fileName = safeBase + '_' + (ri + 1) + '.png';

          if (dirHandle) {
            const blob = await new Promise(r => canvasEl.toBlob(r, 'image/png'));
            const fh = await dirHandle.getFileHandle(fileName, { create: true });
            const w = await fh.createWritable();
            await w.write(blob);
            await w.close();
          } else {
            zip.file(fileName, canvasEl.toDataURL('image/png').split(',')[1], { base64: true });
          }
          rowOk = true;
        } catch (e) {
          failed++;
          console.error('Failed row ' + (ri + 1) + ':', e);
        }

        if (rowOk) completed++;
        els.progressBar.style.width = Math.round(((completed + failed) / selectedIndices.length) * 100) + '%';
        els.progressText.textContent = completed + ' / ' + selectedIndices.length + (failed ? ' (' + failed + ' ' + (lang === 'ar' ? 'فشل' : 'failed') + ')' : '');
        await new Promise(r => setTimeout(r, 0));
      }

      if (zip) {
        els.progressText.textContent = lang === 'ar' ? 'جاري إنشاء المضغوطة...' : 'Creating ZIP...';
        const blob = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'certificates.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }

      els.progressModal.style.display = 'none';
      popup(t('generate_ready', { n: completed }), 3000);
    } catch (e) {
      console.error(e);
      els.progressModal.style.display = 'none';
      popup(t('generate_error') + ': ' + e.message, 3000);
    }
  }

  /* ===== EXPORT ===== */
  async function exportCertificate(format) {
    if (!state.certImage) {
      popup(lang === 'ar' ? 'الرجاء رفع شهادة أولاً' : 'Please upload a certificate first', 2000);
      return;
    }

    const defaultName = (state.dataRows.length > 0 && state.fields.length > 0)
      ? (state.dataRows[0][state.fields[0].colIdx] || '').toString().replace(/[<>:"/\\|?*\x00-\x1f]/g, '_') || 'certificate'
      : 'certificate';

    const handle = await tryPickFileHandle(defaultName, format);
    if (handle === false) return;

    try {
      await document.fonts.ready;
      const offscreen = renderCertificateForRow(state.dataRows[0] || []);
      if (handle) {
        await writeToHandle(handle, offscreen, format);
      } else {
        fallbackDownload(offscreen, defaultName, format);
      }
      popup(lang === 'ar' ? '✓ تم التصدير' : '✓ Exported');
    } catch (e) {
      console.error(e);
      popup(lang === 'ar' ? 'خطأ في التصدير' : 'Export error', 2000);
    }
  }

  /* ===== ZOOM ===== */
  function zoomIn() {
    if (!canvas) return;
    state.zoom = Math.min(state.zoom + 0.1, 3);
    applyZoom();
  }

  function zoomOut() {
    if (!canvas) return;
    state.zoom = Math.max(state.zoom - 0.1, 0.2);
    applyZoom();
  }

  function applyZoom() {
    if (!canvas) return;
    canvas.setZoom(state.zoom);
    canvas.renderAll();
    updateZoomDisplay();
  }

  function fitZoom() {
    if (!canvas) return;
    state.zoom = 1;
    applyZoom();
  }

  /* ===== EVENT BINDING ===== */
  function init() {
    cacheEls();
    setLanguage('ar');
    hideCanvas();

    els.certInput.addEventListener('change', (e) => {
      if (e.target.files[0]) handleCertFile(e.target.files[0]);
    });
    els.certDropzone.addEventListener('dragover', (e) => { e.preventDefault(); e.currentTarget.classList.add('dragover'); });
    els.certDropzone.addEventListener('dragleave', (e) => { e.currentTarget.classList.remove('dragover'); });
    els.certDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      e.currentTarget.classList.remove('dragover');
      if (e.dataTransfer.files[0]) handleCertFile(e.dataTransfer.files[0]);
    });

    els.dataInput.addEventListener('change', (e) => {
      if (e.target.files[0]) handleDataFile(e.target.files[0]);
    });
    els.dataDropzone.addEventListener('dragover', (e) => { e.preventDefault(); e.currentTarget.classList.add('dragover'); });
    els.dataDropzone.addEventListener('dragleave', (e) => { e.currentTarget.classList.remove('dragover'); });
    els.dataDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      e.currentTarget.classList.remove('dragover');
      if (e.dataTransfer.files[0]) handleDataFile(e.dataTransfer.files[0]);
    });

    els.imageInput.addEventListener('change', (e) => {
      if (e.target.files.length) handleOverlayImages(e.target.files);
    });
    els.imageDropzone.addEventListener('dragover', (e) => { e.preventDefault(); e.currentTarget.classList.add('dragover'); });
    els.imageDropzone.addEventListener('dragleave', (e) => { e.currentTarget.classList.remove('dragover'); });
    els.imageDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      e.currentTarget.classList.remove('dragover');
      if (e.dataTransfer.files.length) handleOverlayImages(e.dataTransfer.files);
    });

    els.langToggle.addEventListener('click', () => setLanguage(lang === 'ar' ? 'en' : 'ar'));
    els.undoBtn.addEventListener('click', undo);
    els.redoBtn.addEventListener('click', redo);
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && e.shiftKey) { e.preventDefault(); redo(); }
      if ((e.ctrlKey || e.metaKey) && e.key === 'y') { e.preventDefault(); redo(); }
    });
    els.addField.addEventListener('click', addField);
    els.zoomIn.addEventListener('click', zoomIn);
    els.zoomOut.addEventListener('click', zoomOut);
    els.exportPng.addEventListener('click', () => exportCertificate('png'));
    els.exportPdf.addEventListener('click', () => exportCertificate('pdf'));
    els.generateBtn.addEventListener('click', showGenerateModal);
    els.uploadFontBtn.addEventListener('click', () => els.fontInput.click());
    els.fontInput.addEventListener('change', (e) => {
      if (e.target.files[0]) handleFontUpload(e.target.files[0]);
    });

    loadGoogleFonts(FONTS.filter(f => f.type === 'google'));

    const savedTheme = localStorage.getItem('sinaa-theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    if (els.darkModeToggle) {
      els.darkModeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('sinaa-theme', newTheme);
      });
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (state.certImage && canvas) {
          const prev = state.displayWidth;
          const { maxW } = getAvailableCanvasSize();
          const diff = Math.abs(window.innerWidth - (window.__prevWinWidth || window.innerWidth));
          if (diff > 100 || (window.innerWidth < 640) !== (window.__prevWinWidth < 640)) {
            fitCanvasToImage();
          }
          window.__prevWinWidth = window.innerWidth;
        }
      }, 300);
    });
    window.__prevWinWidth = window.innerWidth;
  }

  document.addEventListener('DOMContentLoaded', init);
})();
