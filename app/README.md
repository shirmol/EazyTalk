<div align="center">

# 📻 EazyTalk
### Operational Communication Simulation Platform

![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)

<br />

**פלטפורמת לומדה מבצעית המדמה מכשיר קשר טקטי לקצה המבצעי.**
<br/>
המערכת נבנתה בדגש על ריאליזם, חווית משתמש (UX) אימרסיבית וביצועים גבוהים.

[🔗 **Live Demo**](https://your-link-here.com) · [🐞 **Report Bug**](https://github.com/YourUsername/EazyTalk/issues)

<br />

![Main App Preview](./src/assets/EasyTalk_Jeep_Intro.png)

</div>

---

## 🔥 System Capabilities (יכולות ליבה וארכיטקטורה)

### 🧩 Modular Component Architecture
המערכת נבנתה על בסיס עקרונות **Atomic Design**. הקוד מחולק לרכיבים (Components) עצמאיים ורב-פעמיים, מה שמאפשר תחזוקה קלה, קריאות גבוהה (Clean Code) ויכולת הרחבה (Scalability) לפיצ'רים עתידיים ללא שבירת הקוד הקיים.

### 📱 Adaptive Responsive Core
פיתוח מנוע תצוגה ייחודי מסוג **Locked Aspect Ratio Engine**.
במקום להשתמש ברספונסיביות סטנדרטית שעלולה לעוות את המכשיר המבצעי, המערכת מחשבת בזמן אמת את גודל המסך ומייצרת "קונטיינר נעול" השומר על הפרופורציות המדויקות של המכשיר, תוך שימוש ברקע דינמי (`Full-Screen Cover`) להשלמת האווירה.

### ⚡ Optimized Rendering Performance
שימוש מתקדם ב-`useEffect` וניהול זיכרון כדי למנוע רינדורים מיותרים (Re-renders).
דוגמה בולטת היא מנוע ה-**Slice-Based Typewriter** שפותח לפרויקט: במקום לשרשר מחרוזות (דבר הגורם לבעיות ביצועים), המנוע "חותך" את הטקסט ממקור יחיד, מה שמבטיח אפס שגיאות ברינדור עברית (RTL) גם תחת עומס.

### 🎮 Immersive Micro-Interactions
דגש חזק על חווית משתמש (UX) באמצעות מיקרו-אינטראקציות. כל לחיצה, מעבר מסך או הודעה מלווה במשוב ויזואלי מיידי (Visual Feedback) ואנימציות CSS3 מותאמות אישית (ללא ספריות כבדות), היוצרות תחושת "App-like" חלקה ומהירה.

### ♿ Accessibility (A11y) Focus
הממשק תוכנן להיות נגיש לכלל המשתמשים, עם תמיכה מלאה בניווט מקלדת (Keyboard Navigation), פוקוס ויזואלי ברור, ושימוש סמנטי ב-HTML המאפשר עבודה תקינה עם קוראי מסך (Screen Readers).

---

## 🎨 Visual Gallery

| Operational Dashboard | Emergency Protocol | Completion & Rewards |
|:---:|:---:|:---:|
| <img src="./src/assets/Press_to_Talk_Instruction.png" width="250" /> | <img src="./src/assets/Select_Contact_Instruction.png" width="250" /> | <img src="./src/assets/Join_Group_Instruction.png" width="250" /> |

---

## 🛠️ Technical Stack

הפרויקט נבנה בסטנדרטים מודרניים של תעשיית ה-High Tech:

* **Core:** React 18 (Hooks based: `useState`, `useEffect`, `useRef`).
* **Build Tool:** Vite (לביצועים אופטימליים וזמני טעינה מהירים במיוחד).
* **Styling:** Pure CSS Modules & Variables (Zero-Runtime styling overhead).
* **State Management:** ניהול מצבים מורכבים (Flow Management) ללא תלות בספריות חיצוניות.

---

## 🚀 Quick Start

```bash
git clone [https://github.com/YourUsername/EazyTalk.git](https://github.com/YourUsername/EazyTalk.git)
cd EazyTalk
npm install
npm run dev