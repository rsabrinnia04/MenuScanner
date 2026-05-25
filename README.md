# 🏮 華語菜單 AR | 月閣餐廳 (月閣餐廳 AR 互動伴讀器)

「華語菜單 AR」是一款專為來台外籍交換生與旅客設計的**質感直式行動網頁擴增實境 (WebAR) 伴讀學習應用程式**。

本專案以台中宮原眼科二樓的名店**「醉月樓」**（於應用程式中重構為**「月閣餐廳」**）為主題情境。學生能透過相機鏡頭掃描中文紙本菜單，並在擬真的餐廳情境中互動學習各項菜色與點餐對話，克服在台點餐溝通的焦慮感，拉近課堂學習與真實生活場景的距離。

---

## 🌟 視覺美學與設計風格

本應用程式採用精心設計的**質感暖光色調**（Soft-Light Aesthetic），專為各年齡層的使用者提供極佳的易用度，告別生硬冰冷的黑底霓虹科技感：
*   🎨 **暖心配色**：以柔和的奶油米色（`#faf8f5`）為背景，搭配乾淨白皙的卡片容器、質感深石灰色文字，以及致敬台灣古典茶館風格的經典**古銅金**（`#c5a059`）框線與細節。
*   📱 **行動優先版面**：專為智慧型手機直式螢幕優化，在桌上型電腦瀏覽時則會貼心顯示精緻的 iPhone 外框模擬器。
*   ✨ **現代無表情符號（Emoji-Free）設計**：全介面禁用原始表情符號，改採用高品質的 **FontAwesome v6 向量圖示**，並置於精緻的圓形色塊徽章中，極具專業質感。

---

## 🚀 核心功能特色

### 1. 3D 空間 AR 即時翻譯
*   將相機對準月閣餐廳的紙本選單卡片（透過預先編譯的特徵檔 `CN BOOK.mind` 進行圖像辨識，對應圖檔為 `MOON PAV MENU/CN.png`）。
*   AR 空間中隨即會浮現並追蹤一張精緻的 3D 立體浮空古銅金邊卡片。
*   **即時翻譯更新**：在頁面頂端切換不同語系標籤（英文 🇬🇧、印尼文 🇮🇩、越南文 🇻🇳、泰文 🇹🇭、韓文 🇰🇷）時，**A-Frame 空間中的 3D 浮空菜色名稱、拼音與互動提示文字會隨之即時翻譯更新**！

### 2. 樹狀分支導覽系統
為所有年齡層的使用者提供極為直覺且邏輯清晰的學習樹：
$$\text{類別選擇 (根節點 Root)} \longrightarrow \text{菜色瀏覽 (分支節點 Branch)} \longrightarrow \text{會話練習控制台 (葉節點 Leaf)}$$
*   **類別選擇**：可挑選**主食（Main Course）**、**前菜小點（Appetizers）** 或 **飲品糕點（Beverages & Pastries）**。
*   **菜色瀏覽**：包含 **12 道醉月樓真實菜色**（如*台灣刈包*、*蝦仁炒飯*、*檸檬愛玉*、*太陽餅*等），展示細緻的文字排版。
*   **會話練習**：開啟專屬的互動練習面板。

### 3. 智慧發音評測 (STT) 與語音朗讀 (TTS)
每道菜色皆配有三條精選實用分支會話，由淺入深學習對話：
*   👉 **會話 A（如何點餐）**：例如 *"我要點一份台灣刈包。"*
*   👉 **會話 B（詢問價格）**：例如 *"請問台灣刈包一份多少錢？"*
*   👉 **會話 C（客製化提問）**：例如 *"這刈包裡是滷五花肉嗎？"*

*   🔊 **發音引導**：整合 Web 語音合成技術（TTS），特別將朗讀速度調慢至舒適清晰的 **0.75 倍速**，完美模擬台灣在地國語發音。
*   🎙️ **發音評分**：利用瀏覽器語音辨識技術（STT）分析學生的發音，並即時給予星等與百分比評分（如 `⭐⭐⭐ 完美！` 或 `⭐⭐ 還不錯`），同時提供拼音回饋，比對學生唸出的字詞與目標語句，幫助精準糾音。

### 4. 數位菜單重構與原始圖檔燈箱
*   **「CN Menu」按鈕**：位於頁尾，點擊後會以優雅的燈箱（Lightbox）展示原始紙本印刷選單 `CN.png`。
*   **「重構菜單」按鈕**：由於部分舊版印刷圖檔在行動裝置上可能會因為缺字呈現空白方塊（Tofu Blocks `🅇🅇🅇🅇`），本功能以高對比度的 HTML 數位字型重新建構整本菜單，並隨所選語言同步翻譯，確保所有菜名、售價、食材成分皆能完美清晰呈現。

---

## 🛠️ 開發技術棧
*   **前端基底**：HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **擴增實境**：A-Frame v1.4.2 & Mind-AR v1.2.5 進行網頁端輕量級圖像追蹤與渲染
*   **圖示庫**：FontAwesome v6 CDN
*   **語音 API**：Web Speech API (SpeechSynthesis & SpeechRecognition) 

---

## 📦 如何在本地端啟動專案

由於 WebAR 技術需要取用相機權限並讀取本地特徵特徵檔（`CN BOOK.mind`），您必須透過本地或遠端的網頁伺服器（Web Server）來開啟此資料夾。

### 方式 A：使用 Node.js（推薦，最快速）
1.  開啟終端機並切換至專案根目錄：
    ```bash
    cd "AR MENU BOOK"
    ```
2.  透過 npx 啟動輕量伺服器：
    ```bash
    npx http-server -p 8080
    ```
3.  在瀏覽器中開啟 `http://localhost:8080` 即可。

### 方式 B：使用 VS Code Live Server 插件
1.  使用 VS Code 開啟此專案資料夾。
2.  點擊右下角的 **Go Live**（需先於 VS Code 安裝 *Live Server* 擴充套件）。
3.  在開啟的行動瀏覽器或模擬器中檢視。

---

## 📸 如何測試掃描辨識 (AR Target)

1.  在手機或電腦模擬器中開啟本應用程式。
2.  點擊頁尾的 **CN Menu** 按鈕，即可看到醉月樓原始紙本菜單（`MOON PAV MENU/CN.png`）。您也可以將此圖檔下載至另一台裝置螢幕上或列印出來。
3.  將您的手機鏡頭對準該張菜單圖檔。
4.  相機視窗中便會自動偵測並淡入 3D 立體古銅金邊卡片！此時點擊頂端的各國國旗，便可即時看到浮空卡片上的中文、拼音與各國翻譯文字瞬間同步更新，體驗無縫即時翻譯。

---

## 🗺️ 專案目錄結構
```markdown
├── index.html              # 主要應用程式結構與 Mind-AR 相機配置
├── style.css               # 質感暖光響應式餐廳介面設計
├── app.js                  # 12道經典菜色數據庫、語音辨識、導覽及翻譯邏輯
├── CN BOOK.mind            # 預編譯的 Mind-AR 相機辨識特徵檔
├── MOON PAV MENU/
│   └── CN.png              # 原始紙本菜單掃描圖檔（包含12道菜色）
├── README.md               # 英文版專案說明文件
└── READMECN.md             # 繁體中文版專案說明文件（本文件）
```

---

*祝您在月閣餐廳優雅舒適的氛圍中，開心且自信地練習華語點餐！🏮*



# 🏮 Mandarin Menu AR | Moon Pavilion (月閣餐廳 AR Companion)

Mandarin Menu AR is a premium, interactive, portrait-oriented Web Augmented Reality (WebAR) application designed to assist foreign exchange students and travelers in Taiwan with learning Chinese restaurant dialogue. 

The application is themed around **Moon Pavilion** (*Zui Yue Lou* 醉月樓 on the 2nd floor of Miyahara in Taichung), allowing students to scan Chinese menu pages and interact with authentic local dishes in a simulated restaurant environment.

---

## 🌟 Visual Preview & Aesthetics

The UI features a **premium soft-light aesthetic** tailored for all ages, replacing generic cold dark designs:
* **Palette**: Cream-beige background (`#faf8f5`), crisp clean card containers, soft gray slate text, and classic bronze-gold accents (`#c5a059`) matching Taiwanese cultural tea houses.
* **Smartphone-First layout**: Locked strictly to a portrait smartphone viewport with a neat simulator mockup container on desktop.
* **Modern Typography**: Smooth rendering using clean system fonts, completely **emoji-free** (using professional **FontAwesome v6 vector icons** inside circular badges).

---

## 🚀 Key Features

### 1. Dynamic 3D Spatial AR Translation
*   Points the camera at the Moon Pavilion printed card (`MOON PAV MENU/CN.png` via pre-compiled `CN BOOK.mind` descriptor target).
*   Projects a beautiful, floating 3D holographic billboard in real-time.
*   **Dynamic Translation**: Selecting different language flags (English, Indonesian, Vietnamese, Thai, Korean) instantly translates the A-Frame 3D floating title and interactive action guides live in the camera view!

### 2. Branching Tree Navigation
Supports a simple, structured learning path suited for all age groups:
$$\text{Category Selection (Root)} \longrightarrow \text{Dish Browser (Branch)} \longrightarrow \text{Practice Dialogue Console (Leaf)}$$
*   **Root**: Pick between **Main Course**, **Appetizers**, or **Beverages & Pastries**.
*   **Branch**: Select from **12 authentic Moon Pavilion dishes** (e.g., *Taiwan Gua Bao*, *Shrimp Fried Rice*, *Aiyu Jelly*, *Suncake*) with high-fidelity system-font previews.
*   **Leaf**: Open a dedicated practicing panel for the selected dish.

### 3. Smart Speech Evaluation (STT) & Voice Synth (TTS)
Each dish is accompanied by three branching conversational practices:
* **Option A (Order)**: e.g., *"我要點一份台灣刈包。"* (I want to order...)
* **Option B (Price)**: e.g., *"請問台灣刈包一份多少錢？"* (How much is...)
* **Option C (Custom Specialty)**: e.g., *"這刈包裡是滷五花肉嗎？"* (Is this bun filled with...)

*   🔊 **Audio Guide**: Uses Speech Synthesis (TTS) optimized to a comfortable slow rate (0.75x) mimicking native Taiwanese Mandarin pronunciation.
*   🎙️ **Speech Grader**: Leverages the browser Web Speech API (STT) to analyze voice input, presenting a star-rating card with percentages (e.g., `⭐⭐⭐ Perfect!` or `⭐⭐ Good Try`) and showing phonetic feedback comparing the user's spoken words with the target phrase.

### 4. Corrected Digital Menu & Image Lightbox
*   **"CN Menu" Button**: Instantly loads the original printed book page `CN.png` in a zoomable lightbox overlay.
*   **Reconstructed Menu (Tofu characters resolved!)**: Resolves rendering issues or missing fonts in scans by rendering a full digital HTML menu board with system font fallbacks, complete with Pinyin, prices, translations, and ingredients.

---

## 🛠️ Technology Stack
*   **Core Logic**: HTML5, Vanilla JavaScript, CSS3
*   **Augmented Reality**: [A-Frame v1.4.2](https://aframe.io/) & [Mind-AR v1.2.5](https://github.com/hiukim/mind-ar-js) for browser-based image tracking
*   **Vector Graphics**: FontAwesome v6 (CSS)
*   **Speech Services**: Web Speech Synthesis & Recognition API (Standard Browser runtime)

---

## 📦 How to Run Locally

Because WebAR requires camera access and asset loading (such as `CN BOOK.mind`), you must host the workspace folder on a local or remote web server.

### Option A: Using Node.js (Recommended)
1.  Navigate into the project workspace:
    ```bash
    cd "AR MENU BOOK"
    ```
2.  Install and run a lightweight server:
    ```bash
    npx http-server -p 8080
    ```
3.  Open `http://localhost:8080` in your web browser.

### Option B: VS Code Live Server
1.  Open the project folder in VS Code.
2.  Click **Go Live** on the status bar (requires the *Live Server* extension).
3.  Scan the page on your phone or local simulator.

---

## 📸 Triggering the AR Target

1.  Open the app in your phone's browser or desktop simulation.
2.  Click the **CN Menu** button in the footer to view or print the original menu book target (`MOON PAV MENU/CN.png`).
3.  Point your active device camera at the image (or scan it on another screen).
4.  Watch the floating gold-bordered card fade in and track the page dynamically! Select different language tabs at the top to watch the spatial translation occur instantaneously.

---

## 🗺️ Project Structure
```markdown
├── index.html              # Main application markup & Mind-AR configuration
├── style.css               # Premium soft-light responsive restaurant design
├── app.js                  # 12-dish data matrix, STT/TTS grader, navigation & translation logic
├── CN BOOK.mind            # Compiled Mind-AR camera descriptor target
├── MOON PAV MENU/
│   └── CN.png              # Reference printed menu target containing dishes
└── README.md               # Documentation
```

---

*Enjoy learning Chinese in a realistic Taiwanese restaurant context with Mandarin Menu AR! 🏮*
