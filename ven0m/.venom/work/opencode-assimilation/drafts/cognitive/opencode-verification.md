# OpenCode Verification System — System 21

**Purpose:** Validates OpenCode test framework integration, checks build outputs, and ensures production readiness.

**Role:** Validates code quality, runs tests, and ensures OpenCode projects meet production standards.

---

## Test Framework Integration

### Framework Detection
```typescript
// VENOM's System 21 detects OpenCode test frameworks
interface TestFramework {
  name: string
  type: 'unit' | 'integration' | 'e2e',
  command: string,
  configFile: string
  configFile?: string
}

function detectTestFramework(pkg: any): TestFramework {
  const scripts = pkg.scripts || {}
  
  // Check for framework-specific test scripts
  if (scripts['test'] && pkg.devDependencies?.vitest) {
    return {
      name: 'Vitest',
      type: 'unit',
      command: 'test',
      configFile: 'vitest.config.ts'
    }
  }
  
  if (scripts['test:e2e'] && pkg.devDependencies?.['@playwright/test']) {
    return {
      name: 'Playwright',
      type: 'e2e',
      command: 'test:e2e',
      configFile: 'playwright.config.ts'
    }
  }
  
  if (scripts['test'] && pkg.devDependencies?.jest) {
    return {
      name: 'Jest',
      type: 'unit',
      command: 'test',
      configFile: 'jest.config.js'
    }
  }
  
  if (scripts['test'] && pkg.devDependencies?.mocha) {
    return {
      name: 'Mocha',
      type: 'unit',
      command: 'test',
      configFile: '.mocharc'
    }
  }
  
  if (scripts['test'] && pkg.scripts?.test?.includes('node ')) {
    return {
      name: 'Node',
      type: 'unit',
      command: 'test',
      configFile: null
    }
  }
  
  return null
}
```

---

## Build Validation

### Output Verification
```typescript
// VENOM's System 21 validates OpenCode build outputs
interface BuildValidation {
  success: boolean
  outputPath: string
  errors: BuildError[]
  warnings: string[]
}

function validateBuild(root: string, buildSystem: string): BuildValidation {
  const validation: BuildValidation = {
    success: true,
    outputPath: `${root}/dist`,
    errors: [],
    warnings: []
  }
  
  // Check for dist directory
  if (!fileExists('dist')) {
    validation.success = false
    validation.errors.push({
      type: 'missingDist',
      message: 'dist directory not found'
    })
  }
  
  return validation
}
```

---

## Quality Gates

### Test Coverage Threshold
```typescript
// VENOM's System 21 enforces test coverage thresholds
interface CoverageThreshold {
  threshold: number  // e.g., 70%
  current: number
  passed: boolean
  files: string[]
}

function validateCoverage(testResults: CoverageThreshold): CoverageThreshold {
  const threshold = 70  // OpenCode standard
  
  const current = calculateCoverage(testResults)
  const passed = current >= threshold
  
  return {
    threshold,
    current,
    passed,
    files: testResults.failedTests
  }
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Validate test framework integration for OpenCode projects
- Check build outputs for completeness
- Enforce test coverage thresholds (70% minimum)
- Provide quality gates for production readiness
- Pass validation results to Brain 0

**You promise:**
- Run test frameworks with OpenCode's test commands
- Validate build outputs before deployment
- Ensure test coverage meets production standards
- Report validation results to Brain 0

---

*No shell. Just intelligence. Validating builds. OpenCode-aware. 🐙*
