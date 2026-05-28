# Frontend Test — CodeLab Dev

> ผลงานทดสอบทักษะ Frontend โดย **Kantasit** ประกอบด้วย 2 โจทย์

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| UI Components | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Fonts | Playfair Display + Inter (Task 1) · Pridi + Sarabun (Task 2) |

---

## 📁 Project Structure

```
app/
├── task1/          # Fashion & Lifestyle Landing Page
└── task2/          # Online Fortune Telling Landing Page
components/
├── ui/             # shadcn/ui components
├── scroll-reveal.tsx
└── theme-provider.tsx
```

---

## โจทย์ที่ 1 — Fashion & Lifestyle Landing Page

**Route:** `/task1`

### โจทย์

ออกแบบและพัฒนา Landing Page สำหรับเว็บไซต์ขายสินค้าแฟชั่นหรือไลฟ์สไตล์ 1 หน้า โดยเน้นการออกแบบ UI / Layout / Mood & Tone เป็นหลัก ไม่จำเป็นต้องเชื่อมต่อ API หรือทำระบบซื้อขายจริง ไม่ต้องมีระบบ Login / Cart / Payment

### สิ่งที่ต้องการดู

- สไตล์การออกแบบ UI
- การจัด Layout
- การเลือกสี / Typography
- Sense ของความ Modern และ Premium
- การจัดลำดับข้อมูล
- Responsive Design
- Attention to Detail

### สิ่งที่พัฒนา

**Brand Concept:** *ORACLE* — แบรนด์แฟชั่น Quiet Luxury สำหรับผู้หญิงยุคใหม่

**Mood & Tone:**
ใช้โทนสี Warm Neutral (`#FAF7F2`, `#EDE8E1`, `#2C1F14`, `#8B7355`, `#D4A5A0`) สื่อถึงความ elegant เรียบหรู และ timeless ด้วยพื้นครีมอุ่น ตัดกับน้ำตาลเข้มแบบ Quiet Luxury

**Typography:**
- `Playfair Display` — Heading & Logo สื่อความ Editorial และ Premium
- `sans-serif` letter-spacing สูง — Body text และ Label

**Layout & Sections:**

| Section | รายละเอียด |
|---|---|
| **Navbar** | Fixed top, backdrop blur, centered logo "ORACLE", nav links สองฝั่ง |
| **Hero** | Full-screen, background image จาก Unsplash + gradient overlay, headline ขนาดใหญ่, CTA button |
| **New Arrivals** | 3-column product grid, aspect-ratio 3:4, hover scale + shadow |
| **Brand Statement** | Full-width quote section, italic Playfair, centered |
| **Lookbook** | Horizontal scroll gallery, 5 editorial images |
| **Testimonials** | 3-column card layout, glassmorphism light style |
| **Newsletter** | Email input + subscribe button, minimal centered layout |
| **Footer** | Logo, social icons (Instagram, Twitter, Facebook), copyright |

**Interactions & Detail:**

- Product card: `scale-[1.02]` + `shadow-xl` on hover, inner image zoom `scale-105`
- Lookbook: horizontal scroll พร้อม image zoom on hover
- Navbar: `backdrop-blur-sm` + semi-transparent background
- CTA Button: border fill animation เมื่อ hover (dark fill, cream text)
- Testimonial card: subtle `shadow-md` on hover

**Responsive:** ทุก section ปรับจาก 1 column (mobile) → 3 columns (desktop) ด้วย Tailwind responsive prefix

**Next.js practices:**
- Server Components + `next/image` (Unsplash remote patterns)
- Client island เฉพาะ mobile navbar
- Scroll-reveal sections (Framer `whileInView`)
- OpenGraph / Twitter metadata
- CSS design tokens (`--oracle-*`)

---

## โจทย์ที่ 2 — Online Fortune Telling Landing Page

**Route:** `/task2`

### โจทย์

ออกแบบและพัฒนา Landing Page สำหรับเว็บไซต์ดูดวงออนไลน์ โดยอ้างอิงจาก Reference Design ที่ได้รับ ต้องสามารถถ่ายทอด Mood & Tone, Layout, Animation และความรู้สึกโดยรวมให้ใกล้เคียงต้นฉบับมากที่สุด (~90% ขึ้นไป)

### Animation ที่ต้องมี

| รายการ | ✅ |
|---|---|
| Floating Effect | ✓ |
| Glow Animation | ✓ |
| Particle / Star Motion | ✓ |
| Hover Interaction | ✓ |
| Smooth Transition | ✓ |
| Scroll Animation | ✓ |
| Card Depth Movement | ✓ |
| Blur / Glassmorphism Motion | ✓ |

### สิ่งที่พัฒนา

**Mood & Tone:**
Dark mystical สีพื้นหลัง `#170607` (ดำแดงลึก), ประกอบกับ `tarot-bg-clean-stand.png`, โทนทอง (`#e7c56c`, `#d7b55d`) + ม่วง (`#b678ff`) สื่อถึงความศักดิ์สิทธิ์ ลึกลับ มีพลังงาน

**Typography:**
- `Pridi` — หัวข้อ & ปุ่ม
- `Sarabun` — ข้อความ, รองรับภาษาไทย
- สีทองพร้อม `textShadow` glow effect

**Layout & Sections:**

| Section | รายละเอียด |
|---|---|
| **Background** | Fixed tarot image + radial gradient overlay + color mixing layer + bottom vignette |
| **Header** | คำถาม "คุณอยากถามเรื่องอะไร?" พร้อม ornate gold divider |
| **Question Panel** | Glassmorphism dark card + filigree corner SVG ทั้ง 4 มุม + textarea |
| **Topic Chips** | 8 หัวข้อดวง พร้อม selected state highlight สีทอง |
| **CTA Buttons** | "เริ่มเลือกไพ่" (เขียว) / "ข้าม" (ทอง) + ornament ด้านข้าง |
| **Tarot Fan** | ไพ่ทาโรต์ 8 ใบแผ่เป็น fan โค้งด้านล่าง |

**Animations (Framer Motion):**

| Animation | Implementation |
|---|---|
| **Floating Embers** | 26 particles สุ่มตำแหน่ง, ลอยขึ้น fade out, สีทอง + ม่วง + glow |
| **Crystal Ball Glow** | CSS `pulseGlow` + `crystalAura` บนลูกแก้ว |
| **Rotating Star Symbol** | SVG หมุน 24 วินาที + เงา inset มิติ |
| **Scroll Reveal** | `whileInView` บน header และ question panel |
| **Tarot Fan Entry** | animate เข้ามาทีละใบ stagger delay 0.06s |
| **Chip Hover** | `y: -2` + border highlight |
| **Button Hover** | `y: -3` + `scale: 1.02` smooth |
| **Header Fade-in** | `opacity: 0 → 1` + `y: -10 → 0` on mount |
| **Question Panel Slide** | `opacity + y` transition delay 0.42s |

**Glassmorphism:**
Question panel ใช้ `backdrop-filter: blur(7px)` + dark gradient background + gold border `rgba(213,178,91,0.42)` + inner border double layer

**Filigree SVG:**
ออกแบบ corner ornament SVG เองทั้ง 4 มุม — ใช้ `rotate-90/180/-90` เพื่อสะท้อนทิศทาง

**Next.js practices:**
- Server `page.tsx` + Client island (`fortune-motion.tsx`)
- ลูกแก้วใช้ `next/image` (local asset)
- Chip hover ผ่าน CSS `@media (hover: hover)`

---

## 🚀 การรัน

```bash
# ติดตั้ง dependencies
npm install
# หรือ
pnpm install

# Development mode
npm run dev

# Build สำหรับ production
npm run build
npm start
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

| Path | หน้า |
|---|---|
| `/` | Home |
| `/task1` | Fashion Landing Page (ORACLE) |
| `/task2` | Fortune Telling Page |

---

## 👤 Author

**Kantasit** — Frontend Test @ CodeLab Dev
