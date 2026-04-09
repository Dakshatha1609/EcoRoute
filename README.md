# EcoRoute Analytics 🚗⚡  
### Geospatial + Machine Learning System for EV Infrastructure Planning

---

## 🚀 Overview

EcoRoute Analytics is a machine learning–driven spatial decision support system that identifies optimal EV charging station locations using GIS-based feature engineering and interpretable ML models.

---

## 🎯 Problem

EV infrastructure planning is:

- Not data-driven  
- Ignores tourism demand  
- Leads to poor station placement  

---

## 💡 Solution

This system integrates:

- GIS spatial analysis (QGIS)
- Machine learning models (EBM + NAM)
- Interactive web dashboard  

---

# 🌐 Web Application

### 🏠 Homepage
<img src="https://github.com/user-attachments/assets/3be87667-6733-45f0-9a14-d81f55502d34" />

### 🔐 Login Page  
<!-- ADD YOUR LOGIN SS HERE -->

### 📊 Dashboard Interface
<img src="https://github.com/user-attachments/assets/0660f96d-a818-4b93-80c4-a8ff200da01d" />

👉 Shows:
- Tourist location selection  
- EV analysis system  
- Interactive UI  

---

# ⚡ Prediction Outputs

### ❌ Low Priority Location (Already Covered)
<img src="https://github.com/user-attachments/assets/d2a490bc-91fb-4799-b5c7-9c40587a4c7b" />

### ✅ High Priority Location (Needs EV Station)
<img src="https://github.com/user-attachments/assets/04381bd0-6ca9-4410-a9ff-54a1538cd243" />

👉 This proves:
- Model differentiates demand vs coverage  
- Decision logic is working  

---

# 🗺️ GIS Analysis (QGIS)

<img src="https://github.com/user-attachments/assets/00daaebe-b074-4f2e-9df4-ece3d4f225b7" />

👉 Performed:

- 3km buffer → demand analysis  
- 1km buffer → feasibility  
- Extracted:
  - POI density  
  - Road accessibility  
  - Existing EV stations  

---

# 🧠 Machine Learning Models

## 🔹 Model 1: Explainable Boosting Machine (EBM)

<img src="https://github.com/user-attachments/assets/65546b58-bb87-4030-a5aa-ede5266f495e" />

- Primary decision model  
- Provides feature importance  
- Interpretable (glass-box model)  

---

## 🔹 Model 2: Neural Additive Model (NAM)

<img src="https://github.com/user-attachments/assets/b1f71f86-f4c3-442e-966c-c72eeadc203f" />

- Used for validation  
- Captures non-linear patterns  
- Confirms robustness  

---

# 📊 Model Results & Validation

<img src="https://github.com/user-attachments/assets/461f3693-f0b1-4e12-bdda-1e0c7bd97ddd" />
<img src="https://github.com/user-attachments/assets/626f087a-c286-430c-a23b-6230db558c8e" />

### Metrics:

- Spearman Rank Correlation: **0.90**  
- Kendall Tau: **0.80**

👉 Insight:
- Strong agreement between EBM & NAM  
- Predictions are stable and reliable  

---

# 📍 Final Output

Top predicted EV station locations:

- Kihim Beach  
- Awas Beach  
- Mandwa Jetty  
- Underi Fort  
- Saswane Beach  

---

# ⚙️ System Architecture
QGIS → Feature Engineering → ML Models (EBM + NAM)
→ Validation → FastAPI → Next.js Dashboard

---

# 📁 Project Structure
```bash
ev-station-app/
├── backend/
│ ├── app.py
│ ├── data.py
│ └── requirements.txt
│
├── frontend/
│ ├── app/
│ ├── public/
│ └── styles/
│
└── README.md
```

---

# ⚡ API Endpoints

- `GET /places`
- `POST /check-place`
- `POST /nearby-ev`

---

# 🧩 Tech Stack

- Python, FastAPI  
- Next.js  
- QGIS  
- InterpretML (EBM)  
- PyTorch (NAM)  

---

# 🚧 Limitations

- Static dataset  
- Limited to Alibag region  
