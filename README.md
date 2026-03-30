# 🌸 釜山自由行 (2026.04) 🌸

這是一個基於 **React + TypeScript + Vite + Tailwind CSS** 重構的單頁式旅遊導覽應用程式。
原先的 Vanilla JS/HTML 單一檔案已經模組化成具備高維護性的前端專案結構。

## 📁 專案結構

- `src/`：原始碼目錄
  - `components/`：所有的 React 元件
    - `layout/`：處理全站佈局 (`Header`, `Footer`)
    - `features/`：功能性區塊 (`UtilityBox`(實用百寶箱), `DayTabs`(天數切換), `SpotCard`(行程卡片))
    - `modals/`：所有的彈出視窗 (`ModalWrapper`, `HotelModal`, `FlightModal`, `IntroModal`, `ExchangeModal`, `KoreanModal`)
  - `data/`：靜態資料模組
    - `itineraryData.ts`：每日行程景點與地址對應
    - `introData.ts`：行程圖文介紹
    - `koreanPhrases.ts`：韓語字卡對照表
  - `hooks/`：自定義的 Hooks (例如 `useLocalStorage` 負責處理筆記存檔)
  - `App.tsx`：專案主程式進入點，控管狀態與元件組合
  - `index.css`：Tailwind 主要進入點與自定義動畫配置
  - `main.tsx`：React 渲染進入點
- `original.html`：重構前的舊版檔案備份（可視情況刪除）
- `vite.config.ts`：Vite 開發伺服器與建置設定檔
- `package.json`：專案依賴與腳本定義

## 🚀 指令說明 (Commands)

請在專案根目錄下使用終端機執行下列指令：

- **安裝依賴套件** (初次使用)：
  ```bash
  npm install
  ```

- **啟動本地開發伺服器**：
  ```bash
  npm run dev
  ```
  執行後，終端機會提供一個本地網址 (例如 `http://localhost:5173/`)，可在瀏覽器中開啟觀看即時結果。

- **編譯產生生產版本**：
  ```bash
  npm run build
  ```

## 📦 Build 輸出位置

執行 `npm run build` 之後，Vite 會將所有壓縮過且最佳化後的靜態檔案輸出到專案底下的 `dist/` 資料夾中。
這些檔案即可直接部署到任何靜態網頁代管服務。

## 🌐 部署至 GitHub Pages

我們已經透過 `gh-pages` 套件配置好了一鍵部署流程。

1. 確保您已經登入並設定好 GitHub 權限，且將專案與遠端 Repo (`git@github.com:debbielin-13/2026-busan.git`) 建立連結。
2. 確保 `vite.config.ts` 中的 `base` 屬性已設定為您的 Repo 名稱 (目前預設為 `'/2026-busan/'`)。
3. 執行部署指令：
   ```bash
   npm run deploy
   ```
4. 該腳本會先自動執行 `npm run build` (因為定義了 `predeploy` 腳本)，並將打包出的 `dist/` 上傳到您 GitHub Repo 的 `gh-pages` 分支。
5. 前往 GitHub Repo 的 **Settings > Pages** 區塊，確認已選擇以 `gh-pages` 分支做為部署來源（通常上傳後 Github 會自動設定好）。您的網站大約幾分鐘後就會公開上線！
