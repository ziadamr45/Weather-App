<div align="center">

# 🌤️ تطبيق الطقس | Weather App

## 📸 لقطات الشاشة | Screenshots

![Weather-App Screenshot](screenshot.png)

### تطبيق ويب احترافي لمعرفة حالة الطقس بتحليلات طقس متقدمة (Next.js Frontend)
### Professional weather web app with smart forecasts, bilingual UI & beautiful animations

[![Live Demo](https://img.shields.io/badge/Live-Demo-0a5c5c?style=for-the-badge&logo=vercel&logoColor=white)](https://weather-sand-phi.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ziadamr45/Weather-)

</div>

---

## 📖 نبذة

<div dir="rtl">

**تطبيق الطقس** هو تطبيق ويب احترافي لمعرفة حالة الطقس بتحليلات طقس متقدمة ودقيقة. يوفر توقعات دقيقة وتحليلات مناخية مع واجهة ثنائية اللغة (عربية/إنجليزية) وتصميم جذاب مع حركات سلسة.

> ⚠️ **ملاحظة**: هذا تطبيق ويب (Frontend) مبني بـ Next.js و TypeScript. اللغة الرئيسية في GitHub قد تظهر كـ Python بسبب وجود سكربتات مساعدة، لكن واجهة التطبيق الأساسية مبنية بالكامل بـ Next.js.

</div>

## ✨ المميزات

| الميزة | الوصف |
|--------|-------|
| 🌤️ توقعات طقس دقيقة | توقعات مناخية دقيقة وموثوقة |
| 🤖 تحليلات طقس ذكية ومتقدمة | تحليلات ذكية ومتقدمة للطقس |
| 🌍 ثنائي اللغة (عربي/إنجليزي) | واجهة بالعربية والإنجليزية |
| 📊 رسوم بيانية تفاعلية | مخططات ورسوم بيانية تفاعلية |
| 🎨 حركات وأنيميشن سلسة | أنيميشن سلسة بـ Framer Motion |
| 💬 مساعد ذكي للطقس | مساعد ذكي للطقس |
| 📍 تحديد الموقع التلقائي | كشف الموقع تلقائيًا |
| 🔔 تنبيهات حالة الطقس | تنبيهات وإشعارات حالة الطقس |
| ⭐ المفضلة — حفظ المواقع | احفظ مواقعك المفضلة |
| 📱 تصميم متجاوب | يعمل على جميع الأجهزة |
| 🌙 وضع داكن/فاتح | اختر المظهر المناسب لك |

## 🛠️ التقنيات

| التقنية | الاستخدام |
|---------|-----------|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) | إطار العمل الكامل (الواجهة الأمامية) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | تطوير آمن بالأنواع |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) | التصميم |
| ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat) | مكونات واجهة المستخدم |
| ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white) | ORM لقاعدة البيانات |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) | الحركات والأنيميشن |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | النشر والاستضافة |

## 🚀 التشغيل

### المتطلبات

- Node.js 18+ أو Bun
- npm أو yarn أو bun

### التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/ziadamr45/Weather-.git
cd Weather-

# تثبيت التبعيات
npm install
# أو
bun install

# إعداد متغيرات البيئة
cp .env.example .env
# عدّل ملف .env بمفاتيح API والإعدادات

# تشغيل تهجيرات قاعدة البيانات
npx prisma migrate dev

# تشغيل خادم التطوير
npm run dev
```

التطبيق سيعمل على `http://localhost:3000`

## 📁 هيكل المشروع

```
Weather-/
├── src/
│   ├── app/              # صفحات Next.js ومسارات API
│   ├── components/       # مكونات React
│   ├── hooks/            # خطافات React المخصصة
│   └── lib/              # أدوات وأنواع ومخزن الحالة
│       ├── weather-store  # إدارة حالة Zustand
│       ├── i18n          # التدويل والتعريب
│       └── weather-types # أنواع TypeScript
├── prisma/               # مخطط قاعدة البيانات والتهجيرات
├── public/               # الملفات الثابتة
└── package.json
```

---

<div align="center">

Ziad Amr

</div>

---



### 👨‍💻 المطور

**زياد عمرو (Ziad Amr)**

- 🌐 الموقع الشخصي: [ziadamrme.vercel.app](https://ziadamrme.vercel.app)
- 💼 GitHub: [ziadamr45](https://github.com/ziadamr45)
- 📘 Facebook: [ziad7mr](https://www.facebook.com/ziad7mr)
- 💬 Telegram: [@ziadamr](https://t.me/ziadamr)
- 📸 Instagram: [ziadamr455](https://www.instagram.com/ziadamr455/)
- 🧵 Threads: [@ziadamr455](https://www.threads.com/@ziadamr455)
- 🐦 X: [@ziad90216](https://x.com/ziad90216)
- 🎥 YouTube: [@alhayat_ala_eltarek](https://youtube.com/@alhayat_ala_eltarek?si=pcsc_31Kcv3Jym14)
- 💼 LinkedIn: [ziad-amr](https://www.linkedin.com/in/ziad-amr-44633a411)
- 📧 Email: ziad90216@gmail.com

---

## English

**Weather App** is a professional weather web application with advanced weather analysis. It provides accurate forecasts and climate analysis with a bilingual interface (Arabic/English) and beautiful smooth animations.

> ⚠️ **Note**: This is a web application (Frontend) built with Next.js and TypeScript. The primary language on GitHub may show as Python due to helper scripts, but the main application interface is built entirely with Next.js.

### Features

| Feature | Description |
|---------|-------------|
| 🌤️ Accurate weather forecasts | Precise and reliable climate forecasts |
| 🤖 Smart weather analysis | Advanced and intelligent weather analysis |
| 🌍 Bilingual UI (Arabic/English) | Interface in Arabic and English |
| 📊 Interactive charts & graphs | Interactive charts and visualizations |
| 🎨 Smooth animations | Smooth animations with Framer Motion |
| 💬 Smart weather assistant | AI-powered weather assistant |
| 📍 Auto location detection | Automatic location detection |
| 🔔 Weather alerts | Weather alerts and notifications |
| ⭐ Favorites — save locations | Save your favorite locations |
| 📱 Responsive design | Works on all devices |
| 🌙 Dark/Light mode | Choose your preferred theme |

### Tech Stack

| Technology | Purpose |
|------------|---------|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) | Fullstack Framework (Frontend) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | Type-safe Development |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) | Styling |
| ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat) | UI Components |
| ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white) | Database ORM |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) | Animations |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | Deployment |

### Getting Started

#### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

#### Installation

```bash
# Clone the repository
git clone https://github.com/ziadamr45/Weather-.git
cd Weather-

# Install dependencies
npm install
# or
bun install

# Set up environment variables
cp .env.example .env
# Edit .env with your weather API keys and configuration

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Project Structure

```
Weather-/
├── src/
│   ├── app/              # Next.js pages & API routes
│   ├── components/       # React components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utilities, types & store
│       ├── weather-store  # Zustand state management
│       ├── i18n          # Internationalization
│       └── weather-types # TypeScript types
├── prisma/               # Database schema & migrations
├── public/               # Static assets
└── package.json
```

---

<div align="center">

Ziad Amr

</div>

### 👨‍💻 Developer

**Ziad Amr**

- 🌐 Portfolio: [ziadamrme.vercel.app](https://ziadamrme.vercel.app)
- 💼 GitHub: [ziadamr45](https://github.com/ziadamr45)
- 📘 Facebook: [ziad7mr](https://www.facebook.com/ziad7mr)
- 💬 Telegram: [@ziadamr](https://t.me/ziadamr)
- 📸 Instagram: [ziadamr455](https://www.instagram.com/ziadamr455/)
- 🧵 Threads: [@ziadamr455](https://www.threads.com/@ziadamr455)
- 🐦 X: [@ziad90216](https://x.com/ziad90216)
- 🎥 YouTube: [@alhayat_ala_eltarek](https://youtube.com/@alhayat_ala_eltarek?si=pcsc_31Kcv3Jym14)
- 💼 LinkedIn: [ziad-amr](https://www.linkedin.com/in/ziad-amr-44633a411)
- 📧 Email: ziad90216@gmail.com
