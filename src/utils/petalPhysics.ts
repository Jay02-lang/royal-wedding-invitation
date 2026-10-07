export interface PetalColors {
  primary: string;
  shadow: string;
  highlight: string;
}

export interface PetalParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
  oscillation: number;
  oscillationSpeed: number;
  type: 'rose' | 'marigold';
  colors: PetalColors;
  opacity: number;
}

const ROSE_PALETTES: PetalColors[] = [
  { primary: '#8B1428', shadow: '#530A17', highlight: '#C42042' },
  { primary: '#9E1B32', shadow: '#610F1E', highlight: '#D83A56' },
  { primary: '#720F22', shadow: '#420813', highlight: '#A8233C' }
];

const MARIGOLD_PALETTES: PetalColors[] = [
  { primary: '#F59E0B', shadow: '#B45309', highlight: '#FDE68A' },
  { primary: '#EA580C', shadow: '#9A3412', highlight: '#FCD34D' },
  { primary: '#D97706', shadow: '#78350F', highlight: '#FEF08A' }
];

export function getMobileAdjustedPetalCount(screenWidth: number, density: 'normal' | 'burst'): number {
  const isMobile = screenWidth < 768;
  if (density === 'burst') {
    return isMobile ? 36 : 72;
  }
  return isMobile ? 18 : 36;
}

export function createPetal(
  screenWidth: number,
  screenHeight: number,
  type?: 'rose' | 'marigold'
): PetalParticle {
  const selectedType = type || (Math.random() > 0.4 ? 'rose' : 'marigold');
  const palette =
    selectedType === 'rose'
      ? ROSE_PALETTES[Math.floor(Math.random() * ROSE_PALETTES.length)]
      : MARIGOLD_PALETTES[Math.floor(Math.random() * MARIGOLD_PALETTES.length)];

  const size = selectedType === 'rose' ? 12 + Math.random() * 14 : 9 + Math.random() * 10;

  return {
    x: Math.random() * screenWidth,
    y: Math.random() * -screenHeight, // Start above the viewport
    size,
    speedX: (Math.random() - 0.5) * 1.5,
    speedY: 1.2 + Math.random() * 1.8,
    rotationX: Math.random() * Math.PI * 2,
    rotationY: Math.random() * Math.PI * 2,
    rotationZ: Math.random() * Math.PI * 2,
    rotSpeedX: 0.015 + Math.random() * 0.02,
    rotSpeedY: 0.02 + Math.random() * 0.025,
    rotSpeedZ: 0.01 + Math.random() * 0.015,
    oscillation: Math.random() * Math.PI * 2,
    oscillationSpeed: 0.02 + Math.random() * 0.03,
    type: selectedType,
    colors: palette,
    opacity: 0.75 + Math.random() * 0.25
  };
}

export function updatePetalPosition(
  petal: PetalParticle,
  screenWidth: number,
  screenHeight: number
): PetalParticle {
  const nextOscillation = petal.oscillation + petal.oscillationSpeed;
  const windSway = Math.sin(nextOscillation) * 0.8;

  let nextX = petal.x + petal.speedX + windSway;
  let nextY = petal.y + petal.speedY;

  // Screen wrapping
  if (nextY > screenHeight + 20) {
    nextY = -20 - Math.random() * 40;
    nextX = Math.random() * screenWidth;
  }
  if (nextX < -30) nextX = screenWidth + 20;
  if (nextX > screenWidth + 30) nextX = -20;

  return {
    ...petal,
    x: nextX,
    y: nextY,
    rotationX: petal.rotationX + petal.rotSpeedX,
    rotationY: petal.rotationY + petal.rotSpeedY,
    rotationZ: petal.rotationZ + petal.rotSpeedZ,
    oscillation: nextOscillation
  };
}

/**
 * Draws a botanically realistic 3D tumbling petal onto HTML5 Canvas
 */
export function drawPetal(ctx: CanvasRenderingContext2D, petal: PetalParticle): void {
  ctx.save();
  ctx.translate(petal.x, petal.y);
  ctx.rotate(petal.rotationZ);

  // 3D scale transformation to simulate tumbling in perspective
  const scaleX = Math.cos(petal.rotationX);
  const scaleY = Math.sin(petal.rotationY);
  ctx.scale(scaleX, scaleY);

  ctx.globalAlpha = petal.opacity;

  if (petal.type === 'rose') {
    // Elegant teardrop curve for Kashmiri Rose petal
    const w = petal.size;
    const h = petal.size * 1.35;

    const grad = ctx.createRadialGradient(0, -h * 0.2, 2, 0, 0, h);
    grad.addColorStop(0, petal.colors.highlight);
    grad.addColorStop(0.5, petal.colors.primary);
    grad.addColorStop(1, petal.colors.shadow);

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, -h / 2);
    ctx.bezierCurveTo(w / 1.5, -h / 2, w, h / 3, 0, h / 2);
    ctx.bezierCurveTo(-w, h / 3, -w / 1.5, -h / 2, 0, -h / 2);
    ctx.fill();

    // Subtle petal vein highlight
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(0, -h * 0.35);
    ctx.quadraticCurveTo(w * 0.1, 0, 0, h * 0.35);
    ctx.stroke();
  } else {
    // Ruffled fan curve for Genda / Marigold petal
    const r = petal.size * 0.75;
    const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, r);
    grad.addColorStop(0, petal.colors.highlight);
    grad.addColorStop(0.6, petal.colors.primary);
    grad.addColorStop(1, petal.colors.shadow);

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();

    // Ruffled inner detail
    ctx.strokeStyle = petal.colors.shadow;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  ctx.restore();
}
