# Graph Report - c:/Users/alial/code/Senna  (2026-07-15)

## Corpus Check
- Corpus is ~8,730 words - fits in a single context window. You may not need a graph.

## Summary
- 100 nodes · 262 edges · 8 communities
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.67)
- Token cost: 0 input · 56,386 output

## Community Hubs (Navigation)
- App Concepts & Library Stack
- Canvas Setup & Certificate Loading
- Data Import & Preview
- Field Editing & Properties
- Export & Batch Generation
- Overlay Images & Autosave
- Fabric Canvas Events
- Field Creation & Formatting

## God Nodes (most connected - your core abstractions)
1. `init()` - 22 edges
2. `saveState()` - 20 edges
3. `t()` - 17 edges
4. `renderFieldsList()` - 17 edges
5. `restoreProject()` - 17 edges
6. `Sinaa App Shell (HTML)` - 15 edges
7. `Sina'a (صِنعة) Certificate Designer` - 13 edges
8. `popup()` - 11 edges
9. `handleDataFile()` - 11 edges
10. `fitCanvasToImage()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `app.js Application Script` --implements--> `Sina'a (صِنعة) Certificate Designer`  [INFERRED]
  sinaa/index.html → README.md
- `Sina'a (صِنعة) Certificate Designer` --cites--> `jsPDF (PDF export library)`  [EXTRACTED]
  README.md → sinaa/index.html
- `Sina'a (صِنعة) Certificate Designer` --cites--> `PDF.js (PDF rendering library)`  [EXTRACTED]
  README.md → sinaa/index.html
- `Sina'a (صِنعة) Certificate Designer` --cites--> `SheetJS / xlsx (Excel parsing library)`  [EXTRACTED]
  README.md → sinaa/index.html
- `Generate Row-Selection Modal` --implements--> `Batch Certificate Generation`  [INFERRED]
  sinaa/index.html → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Batch Certificate Generation Flow** — readme_batch_certificate_generation, sinaa_index_generate_modal, sinaa_index_progress_modal, sinaa_index_jspdf, sinaa_index_jszip [INFERRED 0.85]
- **Client-Side Library Stack (CDN)** — sinaa_index_fabric_js, sinaa_index_pdf_js, sinaa_index_papaparse, sinaa_index_sheetjs, sinaa_index_jspdf, sinaa_index_webfontloader, sinaa_index_jszip [EXTRACTED 1.00]

## Communities (8 total, 0 thin omitted)

### Community 0 - "App Concepts & Library Stack"
Cohesion: 0.13
Nodes (24): Root Landing Redirect Page, Batch Certificate Generation, Unified Elements Panel, GitHub Pages Deployment, Real-Time Interactive Canvas Preview, Automatic Project Saving, Row-by-Row Live Preview, Sina'a (صِنعة) Certificate Designer (+16 more)

### Community 1 - "Canvas Setup & Certificate Loading"
Cohesion: 0.12
Nodes (22): applyI18n(), applyZoom(), cacheEls(), fitCanvasToImage(), fitZoom(), getAvailableCanvasSize(), handleCertFile(), hideCanvas() (+14 more)

### Community 2 - "Data Import & Preview"
Cohesion: 0.29
Nodes (14): applyPreviewRow(), handleDataFile(), handleFontUpload(), parseCSVFile(), parseExcelFile(), populateColumnSelector(), readFileAs(), refreshFontSelects() (+6 more)

### Community 3 - "Field Editing & Properties"
Cohesion: 0.27
Nodes (12): bringFieldForward(), onFieldColorChange(), onFieldColumnChange(), onFieldFontChange(), onFieldRotationChange(), onFieldSizeChange(), onFieldTextChange(), removeField() (+4 more)

### Community 4 - "Export & Batch Generation"
Cohesion: 0.24
Nodes (11): addOverlayImageToCanvas(), closeGenerateModal(), exportCertificate(), fallbackDownload(), handleOverlayImages(), popup(), renderCertificateForRow(), showGenerateModal() (+3 more)

### Community 5 - "Overlay Images & Autosave"
Cohesion: 0.48
Nodes (6): autoSave(), bringOverlayForward(), removeOverlayImage(), renderImagesList(), sendOverlayBackward(), serializeProject()

### Community 6 - "Fabric Canvas Events"
Cohesion: 0.40
Nodes (6): initFabricCanvas(), onCanvasDeselect(), onCanvasModified(), onCanvasMove(), onCanvasSelect(), syncFieldPosition()

### Community 7 - "Field Creation & Formatting"
Cohesion: 0.50
Nodes (4): addField(), addStaticText(), onFieldFormatChange(), scrollToField()

## Knowledge Gaps
- **5 isolated node(s):** `Static Text Elements`, `Automatic Project Saving`, `style.css Stylesheet`, `PapaParse (CSV parsing library)`, `WebFontLoader (Google Fonts loader)`
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `init()` connect `Canvas Setup & Certificate Loading` to `Data Import & Preview`, `Export & Batch Generation`, `Overlay Images & Autosave`, `Field Creation & Formatting`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `init()` (e.g. with `addField()` and `addStaticText()`) actually correct?**
  _`init()` has 7 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Static Text Elements`, `Automatic Project Saving`, `style.css Stylesheet` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Concepts & Library Stack` be split into smaller, more focused modules?**
  _Cohesion score 0.13043478260869565 - nodes in this community are weakly interconnected._
- **Should `Canvas Setup & Certificate Loading` be split into smaller, more focused modules?**
  _Cohesion score 0.11688311688311688 - nodes in this community are weakly interconnected._