#!/usr/bin/env python3
"""
VENOM - ADB Hotspot Control
Opens Android hotspot settings via ADB
"""

import subprocess
import sys
from pathlib import Path


def run_command(cmd: list) -> tuple[bool, str]:
    """Run command and return (success, output)."""
    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=10
        )
        return result.returncode == 0, result.stdout + result.stderr
    except subprocess.TimeoutExpired:
        return False, "Command timed out"
    except FileNotFoundError:
        return False, f"Command not found: {cmd[0]}"


def check_adb() -> bool:
    """Check if ADB is available."""
    success, _ = run_command(['adb', 'version'])
    return success


def check_device() -> bool:
    """Check if device is connected."""
    success, output = run_command(['adb', 'devices'])
    if not success:
        return False
    return 'device' in output and len(output.split('\n')) > 2


def open_hotspot_settings() -> bool:
    """Open hotspot settings on device."""
    commands = [
        # Method 1: Direct tether settings
        ['adb', 'shell', 'am', 'start', '-a', 'android.intent.action.MAIN',
         '-n', 'com.android.settings/.TetherSettings'],
        # Method 2: Wireless settings fallback
        ['adb', 'shell', 'am', 'start', '-a', 'android.settings.WIRELESS_SETTINGS'],
        # Method 3: Network settings fallback
        ['adb', 'shell', 'am', 'start', '-a', 'android.settings.NETWORK_OPERATOR_SETTINGS'],
    ]

    for cmd in commands:
        success, _ = run_command(cmd)
        if success:
            return True
    return False


def main():
    """Main entry point."""
    print()
    print("=" * 50)
    print("  ADB Hotspot Control")
    print("=" * 50)
    print()

    # Step 1: Check ADB
    print("[1/3] Checking ADB...")
    if not check_adb():
        print("[ERROR] adb not found")
        print()
        print("Install Android Platform Tools:")
        print("https://developer.android.com/tools/releases/platform-tools")
        sys.exit(1)
    print("[OK] ADB found")

    # Step 2: Check device
    print()
    print("[2/3] Checking device...")
    if not check_device():
        print("[ERROR] No device found")
        print()
        print("Make sure:")
        print("  - USB debugging is ON")
        print("  - Phone is connected")
        print("  - Authorized on phone popup")
        sys.exit(1)
    print("[OK] Device connected")

    # Step 3: Open settings
    print()
    print("[3/3] Opening hotspot settings...")
    if open_hotspot_settings():
        print("[OK] Settings opened on phone")
    else:
        print("[WARN] Could not open settings automatically")
        print()
        print("Try opening manually: Settings → Network & Internet → Hotspot")

    print()
    print("=" * 50)
    print("  Toggle hotspot on your device")
    print("=" * 50)
    print()


if __name__ == '__main__':
    main()
