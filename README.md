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
