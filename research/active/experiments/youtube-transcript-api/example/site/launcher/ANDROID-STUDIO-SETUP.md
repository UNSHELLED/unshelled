# OCTOPUS Launcher — Android Studio Setup

Full setup to start the native Android launcher in Android Studio.

---

## 1. Names

| Use | Value |
|-----|--------|
| **App name (display)** | **OCTOPUS** |
| **Package name** | **`io.octopus.launcher`** |

- **App name:** Short, on-brand, fits under the icon. "OCTOPUS Launcher" is optional if you want it explicit in Settings.
- **Package name:** Reverse-domain style, unique, lowercase. `io.octopus.launcher` keeps launcher separate from any future `io.octopus.app` products.

---

## 2. Android Studio — New Project

1. **File → New → New Project**
2. **Phone and Tablet** → **Empty Views Activity** (or **Empty Activity** if you prefer no template).
3. **Next.** Set:
   - **Name:** `OCTOPUS`
   - **Package name:** `io.octopus.launcher`
   - **Save location:** e.g. `…/octopus/android-launcher` (sibling to repo or inside it).
   - **Language:** Kotlin
   - **Minimum SDK:** 24 (or 26 for fewer legacy edge cases).
4. **Finish.** Let Gradle sync.

---

## 3. Project structure (after creation)

```
android-launcher/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/io/octopus/launcher/   (or kotlin/...)
│   │   │   │   └── MainActivity.kt
│   │   │   ├── res/
│   │   │   │   ├── drawable/
│   │   │   │   ├── mipmap-*/                 (app icons)
│   │   │   │   ├── values/
│   │   │   │   │   ├── colors.xml
│   │   │   │   │   ├── strings.xml
│   │   │   │   │   └── themes.xml
│   │   │   │   └── layout/
│   │   │   │       └── activity_main.xml
│   │   │   └── AndroidManifest.xml
│   │   └── test/ ...
│   └── build.gradle.kts
├── build.gradle.kts
├── settings.gradle.kts
└── gradle/
```

---

## 4. Key files to set

### 4.1 `app/src/main/res/values/strings.xml`

```xml
<resources>
    <string name="app_name">OCTOPUS</string>
</resources>
```

### 4.2 `app/src/main/AndroidManifest.xml`

- **Application** `android:label` should point to `@string/app_name` (default).
- **Launcher:** To be a **home launcher** (replaces system home), you’ll add a `<intent-filter>` for `ACTION_MAIN` + `CATEGORY_HOME` on the activity that is the home screen. Do this when you implement the launcher role; for the first run, a normal app is enough.

Minimal manifest (normal app, single activity):

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="io.octopus.launcher">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.OctopusLauncher">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

### 4.3 Theme (dark, OCTOPUS-style)

In `app/src/main/res/values/themes.xml` (and optionally `themes.xml` in `values-night`):

```xml
<resources>
    <style name="Theme.OctopusLauncher" parent="android:Theme.Material.NoActionBar">
        <item name="android:statusBarColor">@android:color/black</item>
        <item name="android:navigationBarColor">@android:color/black</item>
        <item name="android:windowBackground">@android:color/black</item>
        <item name="android:colorPrimary">#E07A5F</item>
        <item name="android:colorAccent">#E07A5F</item>
        <item name="android:windowLightStatusBar">false</item>
    </style>
</resources>
```

`#E07A5F` is OCTOPUS coral from `site/css/variables.css`.

### 4.4 `app/build.gradle.kts` (minimal)

Ensure `namespace` matches the package:

```kotlin
plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "io.octopus.launcher"
    compileSdk = 34
    defaultConfig {
        applicationId = "io.octopus.launcher"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"
    }
    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    buildFeatures {
        viewBinding = true
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.11.0")
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")
}
```

---

## 5. Run the app

1. **Device/emulator:** Connect a device or start an AVD (e.g. Pixel 6, API 34).
2. **Run:** Click the green **Run** button or **Shift+F10**.
3. You should see the default empty activity with a black background and OCTOPUS as the app name.

---

## 6. 100% features (current implementation)

The native launcher now includes:

- **MainActivity:** `launchMode="singleTask"` for correct default-home behavior; resume from another app shows Home.
- **Lock:** Status bar, OCTOPUS wordmark, tentacle logo, unlock strip with **tap and swipe-up** unlock.
- **Home:** Aurora wallpaper, status bar (time every 1s), date, **Ask OCTOPUS** chip (clickable, opens docs URL), app grid, **Dock** (5 slots: 4 pinned + center **Apps**), gesture pill.
- **App drawer:** Opens from dock center; search filter; all apps grid; back or close button dismisses.
- **Design Genome:** Sora + JetBrains Mono via `res/font/` (downloadable fonts); coral, AMOLED black.
- **Accessibility:** contentDescription on logo, status bar, app icons, unlock strip; drawer and dock focusable.
- **Pinned apps:** DataStore-backed dock pins (see `PinnedAppsRepository`).

## 7. Optional: match the web launcher

The web launcher in this repo (`site/launcher/`) defines:

- **Lock:** `index.html` + `lock.css` / `lock.js`
- **Home:** `home.html` + `home.css` / `home.js`
- **Design:** Coral `#E07A5F`, black background, Sora font, status bar, dock, app grid

The native app reuses the same colors, layout ideas, dock (5 items, center = app drawer), and Design Genome in Compose.

---

## 8. Checklist

| Step | Done |
|------|------|
| New project, Name: OCTOPUS, Package: `io.octopus.launcher` | ☐ |
| `strings.xml`: `app_name` = OCTOPUS | ☐ |
| `AndroidManifest.xml`: package, `@string/app_name`, launcher intent | ☐ |
| `themes.xml`: Theme.OctopusLauncher, black + coral | ☐ |
| `app/build.gradle.kts`: namespace, applicationId, minSdk 24+ | ☐ |
| Run on device/emulator | ☐ |

After this, you have a full Android Studio setup with the correct **package name** (`io.octopus.launcher`) and **app name** (OCTOPUS), ready to add launcher screens and behavior.
