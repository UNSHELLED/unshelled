/**
 * OCTOPUS Neural Particle System
 * Creates animated particles with connections representing neural networks
 */

/**
 * Spatial Grid for O(k) proximity checking
 * Divides space into cells for efficient neighbor lookups
 */
class SpatialGrid {
  constructor(cellSize) {
    this.cellSize = cellSize;
    this.grid = new Map();
  }

  getKey(x, y) {
    const cellX = Math.floor(x / this.cellSize);
    const cellY = Math.floor(y / this.cellSize);
    return `${cellX},${cellY}`;
  }

  insert(particle) {
    const key = this.getKey(particle.x, particle.y);
    if (!this.grid.has(key)) {
      this.grid.set(key, []);
    }
    this.grid.get(key).push(particle);
  }

  getNearby(x, y, radius) {
    const nearby = [];
    const cellRadius = Math.ceil(radius / this.cellSize);
    const centerX = Math.floor(x / this.cellSize);
    const centerY = Math.floor(y / this.cellSize);

    // Check surrounding cells
    for (let dx = -cellRadius; dx <= cellRadius; dx++) {
      for (let dy = -cellRadius; dy <= cellRadius; dy++) {
        const key = `${centerX + dx},${centerY + dy}`;
        const cells = this.grid.get(key);
        if (cells) {
          nearby.push(...cells);
        }
      }
    }

    return nearby;
  }

  clear() {
    this.grid.clear();
  }
}

class ParticleSystem {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.canvas.style.display = 'none';
      return;
    }

    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) {
      console.warn('Canvas 2D context not available');
      return;
    }

    this.particles = [];
    this.isDestroyed = false;

    // Store bound event handlers for cleanup
    this.handleResize = this.handleResize.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    // Configuration
    this.config = {
      particleCount: options.particleCount || 60,
      particleColor: options.particleColor || 'rgba(224, 122, 95, 0.6)',
      lineColor: options.lineColor || 'rgba(224, 122, 95, 0.15)',
      particleSize: options.particleSize || { min: 1, max: 3 },
      speed: options.speed || { min: 0.2, max: 0.5 },
      connectionDistance: options.connectionDistance || 150,
      mouseInteraction: options.mouseInteraction !== false,
      mouseRadius: options.mouseRadius || 200
    };

    this.mouse = { x: null, y: null, radius: this.config.mouseRadius };
    this.animationId = null;

    // Spatial grid for O(k) instead of O(n²) connection checking
    this.spatialGrid = new SpatialGrid(this.config.connectionDistance);

    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];

    for (let i = 0; i < this.config.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * this.config.speed.max,
        vy: (Math.random() - 0.5) * this.config.speed.max,
        radius: Math.random() * (this.config.particleSize.max - this.config.particleSize.min) + this.config.particleSize.min,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
  }

  handleResize() {
    this.resize();
    this.createParticles();
  }

  handleMouseMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  handleMouseLeave() {
    this.mouse.x = null;
    this.mouse.y = null;
  }

  bindEvents() {
    window.addEventListener('resize', this.handleResize, { passive: true });

    if (this.config.mouseInteraction) {
      this.canvas.addEventListener('mousemove', this.handleMouseMove, { passive: true });
      this.canvas.addEventListener('mouseleave', this.handleMouseLeave, { passive: true });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.updateParticles();
    this.drawConnections();
    this.drawParticles();

    if (!this.isDestroyed) {
      this.animationId = requestAnimationFrame(() => this.animate());
    }
  }

  updateParticles() {
    this.particles.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x < 0 || particle.x > this.canvas.width) {
        particle.vx *= -1;
        particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
      }

      if (particle.y < 0 || particle.y > this.canvas.height) {
        particle.vy *= -1;
        particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
      }

      // Mouse interaction - push particles away
      if (this.mouse.x && this.mouse.y) {
        const dx = particle.x - this.mouse.x;
        const dy = particle.y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.mouse.radius) {
          const force = (this.mouse.radius - distance) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          particle.x += Math.cos(angle) * force * 2;
          particle.y += Math.sin(angle) * force * 2;
        }
      }
    });
  }

  drawParticles() {
    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = this.config.particleColor.replace(')', `, ${particle.opacity})`).replace('rgba', 'rgba');
      this.ctx.fill();
    });
  }

  drawConnections() {
    // Update spatial grid with current particle positions
    this.spatialGrid.clear();
    this.particles.forEach((particle, idx) => {
      particle._idx = idx; // Store index for comparison
      this.spatialGrid.insert(particle);
    });

    // Use spatial grid to find nearby particles (O(k) instead of O(n²))
    const checkedPairs = new Set();
    
    this.particles.forEach((particle, i) => {
      const nearby = this.spatialGrid.getNearby(particle.x, particle.y, this.config.connectionDistance);
      
      nearby.forEach(other => {
        const j = other._idx;
        if (i >= j) return; // Skip self and already-checked pairs
        
        const pairKey = `${i}-${j}`;
        if (checkedPairs.has(pairKey)) return;
        checkedPairs.add(pairKey);

        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.config.connectionDistance) {
          const opacity = (1 - distance / this.config.connectionDistance) * 0.4;

          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(224, 122, 95, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(other.x, other.y);
          this.ctx.stroke();
        }
      });

      // Connect to mouse if close enough
      if (this.mouse.x && this.mouse.y) {
        const dx = particle.x - this.mouse.x;
        const dy = particle.y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.mouse.radius) {
          const opacity = (1 - distance / this.mouse.radius) * 0.6;

          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(234, 139, 114, ${opacity})`;
          this.ctx.lineWidth = 1.5;
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.stroke();
        }
      }
    });
  }

  destroy() {
    this.isDestroyed = true;

    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }

    // Remove event listeners
    window.removeEventListener('resize', this.handleResize);

    if (this.canvas) {
      this.canvas.removeEventListener('mousemove', this.handleMouseMove);
      this.canvas.removeEventListener('mouseleave', this.handleMouseLeave);
    }

    // Clear particles
    this.particles = [];

    // Clear canvas
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// Initialize particle system when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.particleSystem = new ParticleSystem('particles-canvas');
  });
} else {
  window.particleSystem = new ParticleSystem('particles-canvas');
}
