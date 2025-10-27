# EV Power Selector 電動載具功率計算器
由 [Midas 邁大師](https://github.com/chenmidas) 開發 🚀
只需輸入「電壓」與「轉速」，即可自動查詢與計算馬達功率、扭矩、傳動比等資訊！
## 🌟 特色功能 Features
- 🧮 即時計算馬達需求功率、轉速、扭矩
- 🔁 支援輪胎/鏈條/減速齒比調整對應
- 📐 輸入單位中英對照（含 m/s、RPM、Nm、W）
- 🖥️ 瀏覽器即時回應，無需伺服器
- 🌐 支援 GitHub Pages 靜態網頁部署
## 📥 輸入項目 Input Fields
| 中文欄位                 | English Label            |
|--------------------------|--------------------------|
| 騎乘質量 (kg)            | Rider Weight (kg)        |
| 車輛質量 (kg)            | Vehicle Weight (kg)      |
| 額定速度 (km/h)          | Rated Speed (km/h)       |
| 輪胎直徑 (m)             | Tire Diameter (m)        |
| 加速時間 (s)             | Accel. Time (s)          |
| 鏈輪齒比                 | Sprocket Ratio           |
| 輪轂馬達減速比           | Hub Gear Ratio           |
## 📤 計算結果輸出 Output Fields

| 中文項目                       | English Label              |
|-------------------------------|----------------------------|
| 總質量                         | Total Weight (kg)          |
| 額定速度                       | Rated Speed (m/s)          |
| 加速度                         | Acceleration (m/s²)        |
| 加速距離                       | Accel. Distance (m)        |
| 輪胎週長                       | Tire Circumference (m)     |
| 輪胎角速度                     | Wheel Angular Speed (rad/s)|
| 輪胎扭矩                       | Wheel Torque (Nm)          |
| 輪胎所需功率                   | Power (W)                  |
| 輪胎轉速                       | Wheel RPM                  |
| 馬達轉速                       | Motor RPM                  |

## 🖼️ Logo
Logo 採用 Midas 邁大師專屬形象，可置換 `midas-logo.png` 為個人化標誌。

## 🛠️ 使用方式 How to Use
1. 開啟 `index.html`，即可在瀏覽器中使用
2. 所有運算於前端自動進行，無需額外安裝程式
3. 若需上傳 GitHub Pages，將整包 `.zip` 上傳部署即可

## 📄 技術架構 Tech Stack
- HTML / CSS / JavaScript（Vanilla JS）
- 無需後端，100% 靜態網站
- 適用於電動自行車、滑板、輕型電動載具

## 📦 原始碼 / 部署 Demo

👉 GitHub Repo: [ev-power-selector](https://github.com/chenmidas/ev-power-selector)  
👉 Demo 網站： *(請填入你的 GitHub Pages 網址)*

---
