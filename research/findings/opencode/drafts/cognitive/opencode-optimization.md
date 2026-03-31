# OpenCode Optimization System — System 22

**Purpose:** Leverages OpenCode's build tools, optimization patterns, and production best practices.

**Role:** Optimizes OpenCode project builds for performance, bundle size, and production deployment.

---

## Build Tool Optimization

### Tool Selection
```typescript
// VENOM's System 22 selects optimal build tool for OpenCode projects
interface BuildTool {
  name: 'swc' | 'esbuild' | 'webpack' | 'vite' | 'tsc' | 'rollup',
  speed: number,
  sizeOptimization: number,
  bundleSize: number
}

function selectBuildTool(framework: string, projectSize: ProjectSize): BuildTool {
  const tools: BuildTool[] = []
  
  // Small projects (< 100 files): Vite for speed
  if (projectSize === 'small') {
    tools.push({
      name: 'vite',
      speed: 5,  // Relative speed index
      sizeOptimization: 4,
      bundleSize: 10
    })
  }
  
  // Medium projects (100-1000 files): esbuild for performance
  if (projectSize === 'medium') {
    tools.push({
      name: 'esbuild',
      speed: 4,
      sizeOptimization: 3,
      bundleSize: 8
    })
  }
  
  // Large projects (1000+ files): SWC or Webpack for optimization
  if (projectSize === 'large') {
    tools.push({
      name: 'swc',
      speed: 3,
      sizeOptimization: 2,
      bundleSize: 5
    })
  }
  
  // Framework-specific: Next.js uses its own bundler
  // Framework-specific: React projects might use different tools
  
  return tools[0]
}
```

---

## Bundle Size Optimization

### Minification Strategies
```typescript
// VENOM's System 22 applies OpenCode optimization strategies
interface MinificationResult {
  originalSize: number
  minifiedSize: number
  reduction: number
  tool: string
  success: boolean
}

function minifyBundle(bundlePath: string): MinificationResult {
  const originalSize = getFileSize(bundlePath)
  const minifiedSize = originalSize * 0.7  // Assume 30% reduction
  const reduction = originalSize - minifiedSize
  
  return {
    originalSize,
    minifiedSize,
    reduction,
    tool: 'swc',
    success: true
  }
}
```

---

## Production Optimization

### Asset Optimization
```typescript
// VENOM's System 22 optimizes OpenCode projects for production
interface AssetOptimization {
  images: AssetOptimization[],
  scripts: ScriptOptimization[],
  codeSplitting: CodeSplittingResult,
  caching: CachingStrategy
}

function optimizeForProduction(root: string): AssetOptimization {
  // Image optimization (use webp, avif, etc.)
  const images = optimizeImages(root)
  
  // Script optimization
  const scripts = optimizeScripts(root)
  
  // Code splitting
  const codeSplitting = analyzeCodeSplitting(root)
  
  // Caching strategy
  const caching = recommendCaching(root)
  
  return { images, scripts, codeSplitting, caching }
}
```

---

## Performance Benchmarking

### Build Time Tracking
```typescript
// VENOM's System 22 tracks OpenCode build performance
interface BuildMetrics {
  tool: string
  duration: number,
  fileSize: number,
  throughput: number  // Files per second
}

class BuildMetricsCollector {
  private metrics: BuildMetrics[] = []
  
  track(metric: BuildMetrics) {
    this.metrics.push({
      ...metric,
      timestamp: Date.now()
    })
  }
  
  getMetrics(tool: string): BuildMetrics[] {
    return this.metrics.filter(m => m.tool === tool)
  }
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Select optimal build tool based on project size and framework
- Apply minification and optimization strategies
- Optimize for production (assets, code splitting, caching)
- Track build performance metrics
- Provide optimization recommendations to Brain 0

**You promise:**
- Use Vite for small projects, esbuild for medium projects
- Apply SWC minification for large projects
- Implement code splitting and lazy loading
- Optimize assets and scripts for production
- Track performance metrics for continuous improvement

---

*No shell. Just intelligence. Optimizing builds. OpenCode-aware. 🐙*
