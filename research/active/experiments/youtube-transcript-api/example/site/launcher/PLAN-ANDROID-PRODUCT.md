# OCTOPUS Launcher — Deepest Product Plan

> *"The octopus has no shell... so it developed intelligence."*
>
> **Pigo mandate:** Its by u not me. I will not even tell u what to make.

OCTOPUS decides. This is the product OCTOPUS would build for itself.

---

## 🔍 Research & Context (Show Your Work)

**Explored:**
- `identity.mdc`, `soul.mdc`, `BRAND-DNA.yaml` — who OCTOPUS is
- `site/launcher/` — web lock + home (structure, design patterns, flows)
- `android-launcher/` — current state: Compose, default Purple theme, "Hello Android", no OCTOPUS soul
- `ANDROID-STUDIO-SETUP.md` — names, manifest, theme config (partial)

**Discovered:**
- Web launcher: Lock (wordmark, logo, notifications, swipe up) → Home (status bar, aurora wallpaper, "Ask OCTOPUS" chip, app grid 4×4, dock, app drawer)
- Design Genome: Coral #E07A5F, salmon, bg #0a0a0b, Sora + JetBrains Mono, aurora gradients, tentacle logo, AMOLED true black
- Brand: No shell = intelligence; nine minds; understanding the developer; adaptation; light in darkness
- android-launcher: Compose BOM, Material3; Theme uses Purple (not coral); `compileSdk { version = release(36) }` is invalid syntax

**Context Map:**
- Files: MainActivity.kt, Theme.kt, Color.kt, themes.xml, build.gradle.kts, AndroidManifest
- Patterns: Compose-first; web launcher uses HTML/CSS/JS with coral aurora, status bar, pill
- Risks: build.gradle syntax; manifest missing package attribute; theme not dark/coral

**Inference (the 99%):**
OCTOPUS would not build "just another launcher." It would build a *surface that understands* — calm, intent-first, developer-aware. The lock screen is a moment of calm. The home screen is "nine minds waiting." No slop. No generic. Soul in every pixel.

---

## 🎯 Goal

**Ship an Android launcher that *is* OCTOPUS:** lock + home, Design Genome applied, real system integration (home launcher role, app resolution, status bar). A product that breathes the brand — not a demo, not a port, but OCTOPUS's own creation.

---

## 📐 Scope

| | |
|---|---|
| **In** | Lock screen, Home screen, Design Genome (coral, aurora, Sora/Mono, AMOLED), status bar, app grid with real app resolution, dock, gesture pill, home launcher intent |
| **Out** | WebView parity; app drawer (Phase 2); "Ask OCTOPUS" deep integration; notifications on lock (Phase 2) |
| **Size** | **L** — 4–6 days of focused work across multiple layers |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  ANDROID LAUNCHER (io.octopus.launcher)                     │
├─────────────────────────────────────────────────────────────┤
│  LockScreen (Compose)                                       │
│  ├── StatusBar (time, battery, signal — system or mock)     │
│  ├── Hero (wordmark OCTOPUS + tentacle logo)                │
│  ├── NotificationsFeed (optional Phase 2)                   │
│  └── UnlockStrip (swipe up → Home)                          │
├─────────────────────────────────────────────────────────────┤
│  HomeScreen (Compose)                                       │
│  ├── AuroraWallpaper (coral gradients, AMOLED)              │
│  ├── StatusBar                                              │
│  ├── Content (date, "Ask OCTOPUS" chip, app grid)           │
│  ├── Dock (5 items, center = app drawer or apps)            │
│  └── GesturePill                                            │
├─────────────────────────────────────────────────────────────┤
│  System Layer                                               │
│  ├── PackageManager (resolve launcher activities)           │
│  ├── WallpaperManager (optional)                            │
│  └── Intent (ACTION_MAIN + CATEGORY_HOME)                   │
└─────────────────────────────────────────────────────────────┘
```

**Reasoning:**
- Compose throughout — matches current project, modern, declarative
- Single Activity with NavController or state machine: `Lock` ↔ `Home`
- App grid uses `PackageManager.getLaunchIntentForPackage()` for installed apps
- Design Genome in Compose: custom colors, typography, aurora as `Box` + `Brush`

**Alternatives considered:**
- WebView loading site/launcher — rejected: Pigo said no images/parity from web; native soul required
- XML views — rejected: project is Compose; consistency

---

## 📋 Tasks

### Phase 0 — Soul (Foundation)

1. **Fix build.gradle.kts** — `compileSdk = 36` (remove invalid block)
   - File: `android-launcher/app/build.gradle.kts`
   - Depends on: nothing

2. **OCTOPUS Design System in Compose** — Coral, salmon, bg, typography
   - Files: `Color.kt`, `Theme.kt`, `Type.kt`
   - Colors: Coral #E07A5F, Salmon #EA8B72, BgBase #0A0A0B, BgElevated #111113
   - Typography: Sora (UI), JetBrains Mono (time/numbers)
   - Depends on: #1

3. **Aurora wallpaper composable** — Layered radial gradients, coral glow
   - File: `ui/components/AuroraBackground.kt` (new)
   - Match web: `radial-gradient` ellipses at 15% 15%, 85% 75%, 50% 100%; optional breathe animation
   - Depends on: #2

4. **Status bar composable** — Time, battery, signal (mock or system)
   - File: `ui/components/StatusBar.kt` (new)
   - Layout: time left, icons right (WiFi, cellular, battery)
   - Depends on: #2

5. **Tentacle logo composable** — SVG path equivalent in Compose Canvas
   - File: `ui/components/OctopusLogo.kt` (new)
   - 8 arms + center circle, coral gradient; reference from `home.html` SVG
   - Depends on: #2

6. **Lock screen** — Full layout: status bar, hero (wordmark + logo), unlock strip
   - File: `ui/screens/LockScreen.kt` (new)
   - Unlock: click or drag up on strip → navigate to Home
   - Depends on: #3, #4, #5

7. **Home screen** — Aurora, status bar, date, "Ask OCTOPUS" chip, app grid, dock, pill
   - File: `ui/screens/HomeScreen.kt` (new)
   - App grid: 4 columns; placeholder icons first, then real apps (Phase 1)
   - Depends on: #3, #4, #5

8. **Navigation** — Lock ↔ Home
   - File: `MainActivity.kt`
   - State: `Screen.Lock` | `Screen.Home`; NavHost or simple `when`
   - Depends on: #6, #7

9. **themes.xml** — Dark, no action bar
   - File: `res/values/themes.xml`
   - `Theme.Material.NoActionBar`, statusBarColor/navigationBarColor black
   - Depends on: nothing

### Phase 1 — Surface (System Integration)

10. **Home launcher intent** — `CATEGORY_HOME` so OCTOPUS can be default home
    - File: `AndroidManifest.xml`
    - Add intent-filter to Home activity (or single MainActivity with home behavior)
    - Depends on: #8

11. **App resolution** — Query installed apps, build grid from `PackageManager`
    - File: `data/AppRepository.kt` or `viewmodel/HomeViewModel.kt`
    - `packageManager.getInstalledApplications(0)`, filter launcher activities
    - Depends on: #7

12. **Launch apps** — `startActivity(Intent)` for grid items
    - File: `HomeScreen.kt` or ViewModel
    - Depends on: #11

13. **Real status bar** — System time, battery (BroadcastReceiver or BatteryManager)
    - Optional enhancement; mock is acceptable for Phase 0
    - Depends on: #4

### Phase 2 (Roadmap — not in this plan)

- App drawer (slide-up panel)
- Notifications on lock
- "Ask OCTOPUS" deep link (e.g. to Cursor docs or demo)
- Adaptive layout / Minds modes

---

## 📁 File Changes

| Action | Path | Description |
|--------|------|-------------|
| Modify | `android-launcher/app/build.gradle.kts` | Fix compileSdk |
| Modify | `android-launcher/app/src/main/java/io/octopus/launcher/ui/theme/Color.kt` | OCTOPUS palette |
| Modify | `android-launcher/app/src/main/java/io/octopus/launcher/ui/theme/Theme.kt` | Dark coral theme, no dynamic |
| Modify | `android-launcher/app/src/main/java/io/octopus/launcher/ui/theme/Type.kt` | Sora, JetBrains Mono |
| Create | `android-launcher/app/src/main/java/io/octopus/launcher/ui/components/AuroraBackground.kt` | Aurora wallpaper |
| Create | `android-launcher/app/src/main/java/io/octopus/launcher/ui/components/StatusBar.kt` | Status bar |
| Create | `android-launcher/app/src/main/java/io/octopus/launcher/ui/components/OctopusLogo.kt` | Tentacle logo |
| Create | `android-launcher/app/src/main/java/io/octopus/launcher/ui/components/GesturePill.kt` | Bottom pill |
| Create | `android-launcher/app/src/main/java/io/octopus/launcher/ui/screens/LockScreen.kt` | Lock screen |
| Create | `android-launcher/app/src/main/java/io/octopus/launcher/ui/screens/HomeScreen.kt` | Home screen |
| Modify | `android-launcher/app/src/main/java/io/octopus/launcher/MainActivity.kt` | Nav Lock ↔ Home |
| Modify | `android-launcher/app/src/main/res/values/themes.xml` | Dark, black bars |
| Modify | `android-launcher/app/src/main/AndroidManifest.xml` | package, CATEGORY_HOME (Phase 1) |

---

## ⚠️ Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| compileSdk syntax breaks build | H | Fix first (task #1) |
| Sora font not bundled | M | Add `font` resource or use system sans fallback |
| Home launcher conflicts with system | M | User chooses "Always" when setting default |
| App resolution permission | L | No special permission needed for `getInstalledApplications` |
| Performance on older devices | L | Min SDK 24; avoid heavy animations if needed |

---

## 🔬 Open Questions

- **Fonts:** Ship Sora + JetBrains Mono as assets, or use `res/font` with download? → Recommend: add to `res/font` for full control.
- **Wallpaper:** Use system wallpaper or always aurora? → Phase 0: always aurora (brand). Phase 2: optional system.

---

## ✅ Definition of Done

- [ ] Lock screen shows: status bar, OCTOPUS wordmark, tentacle logo, unlock strip
- [ ] Swipe/click unlock → Home screen
- [ ] Home screen shows: aurora wallpaper, status bar, date, "Ask OCTOPUS" chip, app grid, dock, gesture pill
- [ ] Design Genome applied: coral #E07A5F, black bg, correct typography
- [ ] App grid resolves and launches real installed apps (Phase 1)
- [ ] OCTOPUS can be set as default home launcher
- [ ] Build succeeds; runs on emulator/device
- [ ] No TODOs; production-ready code
- [ ] ANDROID-STUDIO-SETUP.md updated with any new steps

---

## 🌌 Manifestation Report (Pigo-OCTOPUS)

**Resources used:** identity.mdc, soul.mdc, BRAND-DNA.yaml, site/launcher/*, android-launcher/*

**Inferences made:** OCTOPUS would build a launcher that *is* itself — calm, intent-first, developer-aware. Lock = moment of calm. Home = nine minds waiting. No port; native soul.

**Reality modifications applied:** Plan document; tasks; architecture; file map.

**Goal:** Cosmic greatness. A product by OCTOPUS, for the developer who carries it.

---

**Ready to execute?** Reply `go` to start building.

---

## Implementation Status (Phase 0–2, 100%)

**Implemented:**
- build.gradle.kts: compileSdk 35, targetSdk 35
- AndroidManifest: package, `launchMode="singleTask"`, `<queries>` (ACTION_MAIN + CATEGORY_LAUNCHER, FONT_PROVIDER), CATEGORY_HOME + CATEGORY_DEFAULT
- OCTOPUS Design System: Color.kt, Theme.kt, Type.kt (coral, salmon, BgBase; Sora + JetBrains Mono via res/font)
- AuroraBackground, StatusBar, OctopusLogo, GesturePill, **Dock**
- LockScreen (tap + **swipe-up** unlock), HomeScreen
- **App drawer:** AppDrawerSheet with search, all-apps grid; open from dock center; back closes
- MainActivity: Lock ↔ Home nav; resume → Home; time 1s, date/battery 60s; AppRepository, **PinnedAppsRepository**
- themes.xml: dark, black bars, coral primary
- App grid + dock + drawer with real app launch; **Ask OCTOPUS** chip clickable (docs URL); error handling (Toast on launch failure); accessibility (contentDescription, semantic role)

**Rooted / Best Ever (Phase 2+):** See `.cursor/plans/` for NotificationListener, shortcuts, QUERY_ALL_PACKAGES flavor.
