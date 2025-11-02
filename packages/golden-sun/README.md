# Golden Sun: Vale Village

**A pixel-perfect recreation of Vale Village from Golden Sun (GBA)**

![Project Status](https://img.shields.io/badge/Status-40%25%20Complete-yellow)
![Development](https://img.shields.io/badge/Development-In%20Progress-blue)
![GBA Aesthetic](https://img.shields.io/badge/Aesthetic-Golden%20Sun%20GBA-green)

---

## 🎮 About This Project

This is a comprehensive recreation of **Vale Village**, the starting town from the classic GBA RPG *Golden Sun*. Built with modern web technologies (React + TypeScript), the project aims to capture the authentic GBA aesthetic and gameplay while adding full accessibility features.

**Current Status:** 40% Complete (3 of 7 development phases finished)

---

## ✨ Features

### ✅ Completed
- **Story & World-Building** - Complete story bible with 24 NPCs, 260+ names, full lore
- **Pixel-Perfect Mockups** - HTML/CSS Vale Village mockup viewable in browser
- **30 Character Sprites** - Authentic GBA sprites (Isaac, Garet, Jenna, NPCs, villagers)
- **Design System** - 60+ CSS variables matching Golden Sun palette
- **Architecture Plan** - 31 acceptance criteria, 10 detailed task prompts
- **Accessibility** - WCAG 2.1 AA compliant (keyboard navigation, ARIA labels)

### 🔄 In Progress
- **Game Systems** - NPC, Movement, Dialogue, Shop, Save systems (~40% implemented)
- **React Components** - DialogueBox, ShopMenu, GameWorld (partial implementation)
- **Testing** - 11 test files created, tests in development

### ⏸️ Planned
- **Graphics Phase 2** - React integration, animations, polish
- **Complete Testing** - Full test coverage, QA verification
- **Deployment** - Production build and release

---

## 🎯 MVP Scope

### What's Included
✅ Vale village exploration (8-directional movement, collision, camera)
✅ 16 interactive NPCs with unique dialogues
✅ 7 buildings (3 enterable: Isaac's House, Item Shop, Armor Shop)
✅ Shop system with economy (buy items with coins)
✅ Save system (rest at inn, localStorage persistence)
✅ Full keyboard accessibility

### Out of Scope (MVP)
❌ Combat/Battle system
❌ Party members following player
❌ Psynergy abilities
❌ Equipment stats/effects
❌ World map navigation
❌ Sol Sanctum dungeon

---

## 🚀 Quick Start

### View the Mockup (No Installation Required!)

**Option 1: Open in Browser**
```bash
# Navigate to mockups folder and open vale-village.html
open mockups/vale-village.html
```

**Option 2: From Repository**
```bash
cd packages/golden-sun/mockups
# Then open vale-village.html in your browser
```

**What You'll See:**
- Pixel-perfect Vale Village overworld
- 16 NPCs positioned throughout the village
- 7 buildings with enterable indicators
- Example dialogue box with Garet
- Authentic GBA grass gradient, shadows, and aesthetic

---

### Run the React App (In Development)

**Install Dependencies:**
```bash
npm install
```

**Development Server:**
```bash
npm run dev
```

**Run Tests:**
```bash
npm run test
```

**Type Check:**
```bash
npm run type-check
```

**Build:**
```bash
npm run build
```

**Full Verification:**
```bash
npm run verify  # Runs type-check + tests + build
```

---

## 🏗️ Tech Stack

- **Framework:** React 18.2.0
- **Language:** TypeScript 5.0 (strict mode)
- **Build Tool:** Vite 4.4.0
- **Testing:** Vitest with jsdom
- **Styling:** CSS (no frameworks, pure GBA aesthetic)
- **Architecture:** Pure functional systems with immutable state

---

## 📁 Project Structure

```
golden-sun/
├── mockups/                    # 🎨 Graphics Phase 1 (100% Complete)
│   ├── vale-village.html       # ← VIEW THIS! Pixel-perfect mockup
│   ├── overworld.css           # Overworld styles
│   ├── tokens.css              # 60+ design variables
│   ├── sprite_map.json         # 31 entities documented
│   └── assets/                 # 30 character sprites (GIFs)
│
├── artifacts/                  # 📖 Story & Planning (100% Complete)
│   ├── story-bible.md          # 24 NPCs, complete world-building
│   ├── beat-map.md             # 9 story beats
│   ├── namepack.json           # 260+ names (NPCs, items, locations)
│   ├── encounter-palette.json  # Combat design (future)
│   ├── session-plan.md         # 35-45h development plan
│   └── acceptance-criteria.md  # 31 measurable requirements
│
├── src/                        # 💻 Implementation (40% Complete)
│   ├── types/                  # TypeScript type definitions
│   │   ├── npc.ts              # NPC types ✅
│   │   ├── dialogue.ts         # Dialogue types ✅
│   │   ├── shop.ts             # Shop types ✅
│   │   ├── player.ts           # Player types ✅
│   │   └── ...                 # 15 total type files
│   │
│   ├── systems/                # Game logic (pure functions)
│   │   ├── npcSystem.ts        # NPC positioning, interaction ✅
│   │   ├── dialogueSystem.ts   # Text rendering, portraits
│   │   ├── movementSystem.ts   # 8-directional movement, collision
│   │   ├── shopSystem.ts       # Shop logic, economy
│   │   ├── saveSystem.ts       # Save/load persistence
│   │   └── ...                 # 25 total systems
│   │
│   ├── components/             # React components (partial)
│   │   ├── DialogueBox.tsx     # Dialogue UI
│   │   ├── ShopMenu.tsx        # Shop interface
│   │   ├── GameWorld.tsx       # Main game canvas
│   │   └── OnScreenController.tsx # Touch controls
│   │
│   └── data/                   # Game data
│       ├── dialogueData.ts     # NPC dialogue trees
│       ├── npcSpriteRegistry.ts # NPC sprite mapping
│       └── ...
│
├── tests/                      # 🧪 Testing (in progress)
│   ├── npcSystem.test.ts       # NPC tests
│   ├── dialogueSystem.test.ts  # Dialogue tests
│   ├── movementSystem.test.ts  # Movement tests
│   └── ...                     # 11 total test files
│
└── tasks/                      # 📋 Architect task prompts
    ├── README.md               # Task organization
    └── T-SYS-NPC.md            # Example: NPC system task
```

---

## 📊 Development Progress

| Phase | Status | Progress |
|-------|--------|----------|
| **1. Story Director** | ✅ Complete | 100% |
| **2. Graphics Phase 1 (Mockup)** | ✅ Complete | 100% |
| **3. Architect (Planning)** | ✅ Complete | 100% |
| **4. Coder (Implementation)** | 🔄 In Progress | 40% |
| **5. Graphics Phase 2 (React)** | ⏸️ Pending | 0% |
| **6. QA & Testing** | ⏸️ Pending | 0% |
| **7. Release** | ⏸️ Pending | 0% |

**Overall:** 40% Complete
**Time Invested:** ~10 hours
**Estimated Remaining:** 25-35 hours

---

## 🎨 Design Principles

### GBA Authenticity
- **Resolution:** 240×160 (scaled 2×/3×/4× for modern displays)
- **Color Palette:** Authentic Golden Sun GBA colors
- **Sprites:** Original character sprites from Golden Sun
- **UI:** Dialogue boxes, menus matching GBA style

### Accessibility First
- **WCAG 2.1 AA compliant** - Color contrast, screen reader support
- **Keyboard Navigation** - Full game playable without mouse
- **ARIA Labels** - Proper semantic HTML
- **Reduced Motion** - Respects user preferences

### Code Quality
- **Pure Functions** - All systems use pure functions (no side effects)
- **TypeScript Strict** - 0 errors, full type safety
- **Result Types** - Rust-inspired error handling (`Result<T, E>`)
- **100% Test Coverage** - Target for all core systems

---

## 📚 Key Documentation

### For Understanding the Project
- **[EXECUTIVE_SUMMARY.md](./EXECUTIVE_SUMMARY.md)** - Comprehensive overview with progress dashboard
- **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** - Detailed status, next steps, acceptance criteria
- **[README_GOLDEN_SUN.md](./README_GOLDEN_SUN.md)** - Alternative README with file structure

### Story & World-Building
- **[artifacts/story-bible.md](./artifacts/story-bible.md)** - 24 NPCs, 260+ names, complete lore
- **[CHARACTER_PROFILES.md](./CHARACTER_PROFILES.md)** - Detailed character backgrounds
- **[PLOT_OUTLINE.md](./PLOT_OUTLINE.md)** - Story beats and narrative arc
- **[QUEST_DESIGN.md](./QUEST_DESIGN.md)** - Quest system design

### Graphics & Design
- **[mockups/MOCKUP_APPROVED.md](./mockups/MOCKUP_APPROVED.md)** - Mockup approval checklist
- **[mockups/vale-village.html](./mockups/vale-village.html)** - **VIEW THIS!** Interactive mockup

### Architecture & Planning
- **[artifacts/session-plan.md](./artifacts/session-plan.md)** - 35-45h development roadmap
- **[artifacts/acceptance-criteria.md](./artifacts/acceptance-criteria.md)** - 31 requirements
- **[tasks/README.md](./tasks/README.md)** - Task organization and dependencies

---

## 🎮 Characters & NPCs

**Main Characters:**
- **Isaac** (Protagonist) - Venus Adept
- **Garet** - Mars Adept, Isaac's best friend
- **Jenna** - Mars Adept
- **Ivan** - Jupiter Adept (joins later)
- **Mia** - Mercury Adept (joins later)

**Vale NPCs (16 total):**
- Elder, Kraden (Scholar), Dora (Isaac's mother)
- Kyle (Garet's father), Great Healer
- Innkeeper, Armor Shop Owner, Item Shop Owner
- Villagers, Scholars, and more

See [CHARACTER_PROFILES.md](./CHARACTER_PROFILES.md) for complete profiles.

---

## 🏆 Development Methodology

This project uses the **Six-Role AI-Driven Game Development System**:

1. **Story Director** - World-building, narrative, character design
2. **Graphics (Phase 1)** - Mockup creation, sprite gathering, design system
3. **Architect** - System design, task breakdown, acceptance criteria
4. **Coder** - Implementation, pure functions, tests
5. **Graphics (Phase 2)** - React integration, animations, polish
6. **QA/Automation** - Testing, verification, deployment

This approach ensures:
- ✅ Clear separation of concerns
- ✅ No scope creep
- ✅ Visual approval before code
- ✅ Comprehensive planning eliminates ambiguity

---

## 🎯 Next Steps

### Immediate (Coder Phase)
1. Complete NPC system tests
2. Implement Movement System (collision, 8-directional)
3. Implement Dialogue System (text rendering, portraits)
4. Build React components (DialogueBox, GameWorld)
5. Integrate systems with React app

### Near-Term (20-30 hours)
- Complete all 6 core systems (NPC, Movement, Dialogue, Shop, Save, Overworld)
- Write 50+ tests (100% pass rate)
- Verify TypeScript 0 errors
- Manual accessibility testing

### Later (Graphics Phase 2)
- Convert mockup styles to React
- Add animations (idle bobs, walk cycles)
- Polish UI (transitions, fades, sparkles)

---

## 🤝 Contributing

This is a personal learning project demonstrating AI-assisted game development. Not currently accepting contributions, but feel free to:

- ⭐ Star the repository
- 🐛 Report bugs via issues
- 💡 Suggest features via discussions
- 📖 Use as a reference for your own projects

---

## 📄 License

ISC

---

## 🙏 Credits

- **Original Game:** Golden Sun (2001) by Camelot Software Planning
- **Sprites:** Extracted from Golden Sun GBA ROM
- **Development:** Built using Six-Role AI Development System
- **Tools:** React, TypeScript, Vite, Vitest

---

## 📞 Questions?

- **Scope unclear?** → See [PROJECT_STATUS.md](./PROJECT_STATUS.md)
- **Want to see visuals?** → Open [mockups/vale-village.html](./mockups/vale-village.html)
- **Need full overview?** → Read [EXECUTIVE_SUMMARY.md](./EXECUTIVE_SUMMARY.md)
- **Want to understand the story?** → Check [artifacts/story-bible.md](./artifacts/story-bible.md)

---

**Status:** 🔄 In Active Development
**Last Updated:** 2025-11-02
**Next Milestone:** Complete Movement & Dialogue Systems
