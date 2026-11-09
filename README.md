# 長崎秘寶探偵團 Formal Build 1.1｜開發原始碼

## 結構（已拆分）
- `index.html`: 進入點，載入 CSS / data / app
- `styles.css`: 樣式（保留原視覺）
- `data.js`: 資產、日記、角色、階段定義（Game State Machine 資料）
- `app.js`: 邏輯、狀態機、IndexedDB、相機、Canvas
- `manifest.json` + `sw.js`: PWA，主要流程與像素素材可離線
- `assets/`: 3 位玩家角色各 3 個姿勢；3 隻旅伴各 4 個姿勢（未改寫）

## 本機試玩
```bash
python3 -m http.server 8080
```
開啟 `http://localhost:8080`。iPhone 相機與 PWA 需 HTTPS。

## 本版改善
1. 拆分為 index.html / styles.css / data.js / app.js
2. 明確 Game State Machine（STAGES 陣列 + RENDERERS 對應）
3. PWA manifest + service worker（離線主流程與素材）
4. LocalStorage → IndexedDB（進度、和平宣言、寶藏、封面照片）
5. 保留兩次 Detective Lens 相機 + 手動定位備援；CV 失敗不阻擋日記／行程
6. 任務完成後直接揭露下一站（無猜目的地）
7. Travel Buddy 永遠非必要支線
8. 和平使者任務僅在和平公園，安靜尊重介面
9. 針對 iPhone Safari：playsinline、safe-area、visibility/pagehide 停相機、orientation 處理、file input、Canvas 匯出、離線存檔

## 未改寫
故事、任務順序、繁體中文台詞、像素素材全部保留。無新增行程。

## 技術注意
- 相機需安全來源（HTTPS / localhost）
- 進度雙寫 IndexedDB + LocalStorage 備份
- 封面照片存 IndexedDB（dataURL）
