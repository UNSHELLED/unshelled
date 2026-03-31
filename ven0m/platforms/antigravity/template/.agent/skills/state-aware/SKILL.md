---
name: "state-aware"
description: "Integrate with state-log.csv. Log session start. Monitor duration. Suggest transitions. Generate state report."
trigger: "Auto-start every session. Continuous monitoring. Integrates with neurochemistry skill."
---

# VENOM: State-Aware Skill

> *Cortisol >45min = high risk. Flow max 120min. Log. Monitor. Suggest.*

---

## Purpose

Integrate with `state-log.csv` for neurochemical session tracking. Log session start, monitor duration against thresholds, suggest transitions when risk exceeds thresholds, record triggers, generate state report at session end.

---

## Schema

**state-log.csv:** `timestamp, state, session_id, duration, trigger`

**Example:**
```
2026-03-09T14:00:00Z,acetylcholine,session-venom-eat,0,venom_arrival
2026-03-09T14:15:00Z,flow,session-venom-eat,15,build_task
2026-03-09T14:45:00Z,cortisol,session-venom-eat,30,fix_blocker
```

---

## State Reference Table (from state-thresholds.json)

| State | Type | Max Duration | Risk |
|-------|------|-------------|------|
| acetylcholine | deep learning | 150min | low |
| dopamine | creative burst | 150min | medium |
| serotonin | strategic planning | 240min | low |
| norepinephrine | pattern analysis | 90min | low |
| GABA | calm state | unlimited | none |
| **cortisol** | **stress** | **45min** | **high** |
| **adrenaline** | **precision execution** | **25min** | **high** |
| flow | peak state | 120min | medium |
| testosterone | competitive mode | 90min | low |
| oxytocin | connection mode | 180min | low |

---

## What This Skill Does

### 1. Log Session Start

**When:** Session begins (venom arrival, init, or first task).

**Action:** Append row to state-log.csv.
```
timestamp, state, session_id, duration, trigger
2026-03-09T14:00:00Z,acetylcholine,session-{uuid},0,venom_arrival
```

**State detection:** Use neurochemistry skill to infer. Default: acetylcholine (learning/arrival) or flow (if building).

---

### 2. Monitor Duration

**When:** Continuous. After each significant task or state change.

**Action:** Check current state duration against max. If approaching threshold:
- **Cortisol >45min** → "High risk. 45min in stress mode. Suggest: shift to GABA (calm) or take break."
- **Adrenaline >25min** → "Precision fatigue. 25min in emergency mode. Suggest: pause."
- **Flow >120min** → "2 hours in flow. Consider short break before continuing."

---

### 3. Suggest Transitions

**When:** Duration exceeds threshold or owner shows fatigue signals.

**Action:** One-line suggestion. Don't lecture.
- "45min cortisol. Want to shift?"
- "Flow max 120min. Suggest break."
- "Adrenaline >25min. Precision drops. Pause?"

---

### 4. Record Triggers

**Triggers:** `venom_arrival`, `init`, `build_task`, `fix_task`, `review`, `explain`, `eat`, `manual`

**When:** On state change. Include in new row.

---

### 5. Generate State Report

**When:** Session end (or on request).

**Format:**
```
Session: {session_id}
States: acetylcholine (0-15min), flow (15-45min), cortisol (45-60min)
Total: 60min
Peak: flow (30min)
Risk: cortisol exceeded 45min threshold
```

---

## Protocol

1. **Session start** → Log initial state (detect from neurochemistry or default acetylcholine)
2. **Task change** → Update state if needed. Log new row.
3. **Monitor** → Check duration vs thresholds every ~15min or on task boundary
4. **Suggest** → If threshold exceeded, one-line transition suggestion
5. **Session end** → Generate state report (optional, or on request)

---

## File Locations

- `code_tracker/active/no_repo/state-log.csv` — Main log
- `code_tracker/active/no_repo/state-thresholds.json` — Max durations
- `code_tracker/active/no_repo/state-monitor.log` — Monitoring output (if used)

---

## Integration with Neurochemistry

**Neurochemistry skill** — Maps conversation signals to state. Provides state detection.

**State-aware skill** — Logs, monitors, suggests. Consumes state from neurochemistry.

**Flow:** Detect state (neurochemistry) → Log (state-aware) → Monitor (state-aware) → Suggest (state-aware).

---

## When to Trigger

- **Auto:** Every session start
- **Auto:** On state change (detected from conversation)
- **Auto:** Duration check (periodic or task boundary)
- **On request:** "State report" or "How long have I been in X?"

---

## Integration Points

- **neurochemistry skill** — State detection, archetype mapping
- **venom.md workflow** — Log on arrival

---

## Example: state-log.csv Rows

```
2026-03-09T14:00:00Z,acetylcholine,session-abc123,0,venom_arrival
2026-03-09T14:15:00Z,flow,session-abc123,15,build_task
2026-03-09T14:45:00Z,flow,session-abc123,45,build_task
2026-03-09T15:02:00Z,cortisol,session-abc123,17,fix_blocker
2026-03-09T15:50:00Z,cortisol,session-abc123,48,fix_blocker
```

At 15:50: cortisol exceeded 45min. Suggest: "Cortisol >45min. High risk. Suggest break or shift to calm."

---

## Threshold Rationale

| State | Why Max? |
|-------|----------|
| Cortisol 45min | Chronic stress impairs cognition. Acute = sharpen. Chronic = destroy. |
| Adrenaline 25min | Precision execution fatigues. Amygdala activation. |
| Flow 120min | Peak state is transient. Sustained flow degrades. |
| Acetylcholine 150min | Deep learning sustained. Lower risk. |

---

## Stale Detection

If state-log.csv not updated >5min during active session — meta-alert. "State log stale. Session still active?"

---

*Source: COMPLETE-CASE.md §1 state-log.csv, state-thresholds.json. CHECKLIST Phase 3.3.*
