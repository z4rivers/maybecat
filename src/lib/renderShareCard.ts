import { config } from '../config';

export interface ShareCardData {
  catImage: string;
  catName: string;
  question: string;
  responseText: string;
  attribution?: string;
  needsBrightening?: boolean;
}

const W = 1080;
const H = 1350;  // 4:5 portrait — Instagram's default feed format
const CX = W / 2;

const CREAM = '#FEF3C7';
const DARK_BROWN = '#78350F';
const PILL_BROWN = '#7C2D12';
const GOLD = '#FBBF24';
const BORDER_BROWN = '#92400E';

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Image load failed'));
    img.src = src;
  });
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(' ');
  if (words.length === 0) return [''];
  const lines: string[] = [];
  let current = words[0];
  for (let i = 1; i < words.length; i++) {
    const test = current + ' ' + words[i];
    if (ctx.measureText(test).width <= maxWidth) {
      current = test;
    } else {
      lines.push(current);
      current = words[i];
    }
  }
  lines.push(current);
  return lines;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const cr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + cr, y);
  ctx.arcTo(x + w, y, x + w, y + h, cr);
  ctx.arcTo(x + w, y + h, x, y + h, cr);
  ctx.arcTo(x, y + h, x, y, cr);
  ctx.arcTo(x, y, x + w, y, cr);
  ctx.closePath();
}

function star4(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  const ir = r * 0.35;
  ctx.beginPath();
  ctx.moveTo(cx, cy - r);
  ctx.lineTo(cx + ir, cy - ir);
  ctx.lineTo(cx + r, cy);
  ctx.lineTo(cx + ir, cy + ir);
  ctx.lineTo(cx, cy + r);
  ctx.lineTo(cx - ir, cy + ir);
  ctx.lineTo(cx - r, cy);
  ctx.lineTo(cx - ir, cy - ir);
  ctx.closePath();
  ctx.fill();
}

function reset(ctx: CanvasRenderingContext2D) {
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.globalAlpha = 1;
  ctx.filter = 'none';
}

/** Corner vine accent with leaf accents — top corners only */
function drawCornerVine(ctx: CanvasRenderingContext2D, corner: 'tl' | 'tr') {
  const vinePixels = 110;
  const sc = vinePixels / 200;

  ctx.save();

  switch (corner) {
    case 'tl': ctx.translate(0, 0); ctx.scale(sc, sc); break;
    case 'tr': ctx.translate(W, 0); ctx.scale(-sc, sc); break;
  }

  ctx.strokeStyle = BORDER_BROWN;
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.globalAlpha = 0.6;

  ctx.beginPath();
  ctx.moveTo(0, 200);
  ctx.quadraticCurveTo(0, 150, 30, 120);
  ctx.quadraticCurveTo(60, 90, 40, 60);
  ctx.quadraticCurveTo(20, 30, 50, 10);
  ctx.quadraticCurveTo(80, 0, 100, 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(200, 0);
  ctx.quadraticCurveTo(150, 0, 120, 30);
  ctx.quadraticCurveTo(90, 60, 60, 40);
  ctx.quadraticCurveTo(30, 20, 10, 50);
  ctx.quadraticCurveTo(0, 80, 20, 100);
  ctx.stroke();

  // Leaf accents
  ctx.fillStyle = BORDER_BROWN;
  ctx.globalAlpha = 0.45;
  const leaf = (cx: number, cy: number, rx: number, ry: number, deg: number) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(deg * Math.PI / 180);
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };
  leaf(30, 120, 10, 5, -45);
  leaf(50, 60, 8, 4, 30);
  leaf(120, 30, 10, 5, 45);
  leaf(60, 40, 8, 4, -30);

  ctx.restore();
}

export async function renderShareCard(data: ShareCardData): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2d context');

  // ─── MEASUREMENT PASS ─────────────────────────────────────────
  const PAD_TOP = 30;
  const PAD_BOTTOM = 24;

  // Header (title block: stars + logo + divider)
  const STARS_H = 48;
  const STARS_LOGO_GAP = 2;
  const LOGO_H = 180;
  const LOGO_DIV_GAP = -8;
  const DIV_H = 40;
  const HEADER_H = STARS_H + STARS_LOGO_GAP + LOGO_H + LOGO_DIV_GAP + DIV_H; // 202

  // Photo
  const PHOTO_SIZE = 460;
  const FRAME_PAD = 6;
  const FRAME_BORDER = 4;
  const FRAME_TOTAL = PHOTO_SIZE + (FRAME_PAD + FRAME_BORDER) * 2; // 440

  // Name pill overlaps bottom of photo frame
  const PILL_H = 36;
  const PILL_OVERLAP = PILL_H / 2;

  // Measure text
  const displayQ = data.question.length > 80 ? data.question.slice(0, 77) + '...' : data.question;
  const rText = '\u201C' + data.responseText + '\u201D';
  ctx.font = 'italic 32px Georgia, serif';
  const qLines = wrapText(ctx, displayQ, 760);
  ctx.font = 'bold 42px Georgia, serif';
  const rLines = wrapText(ctx, rText, 800);

  const Q_LINE_H = 42;
  const R_LINE_H = 54;
  const Q_FRAME_PAD_V = 12;
  const QR_GAP = 16;
  const PANEL_PAD_V = 20;

  const qFrameInnerH = qLines.length * Q_LINE_H;
  const qFrameH = Q_FRAME_PAD_V * 2 + qFrameInnerH;
  const rBlockH = rLines.length * R_LINE_H;
  const attribH = data.attribution ? 26 : 0;
  const panelInnerH = qFrameH + QR_GAP + rBlockH + attribH;
  const panelH = PANEL_PAD_V * 2 + panelInnerH;

  const FOOTER_H = 46;

  const fixedH = PAD_TOP + HEADER_H + FRAME_TOTAL + PILL_OVERLAP + panelH + FOOTER_H + PAD_BOTTOM;
  // 3 distributable gaps: header→photo, pill→panel, panel→footer
  const gap = Math.max((H - fixedH) / 3, 14);

  // ─── CLIP to rounded card shape ──────────────────────────────
  roundRect(ctx, 0, 0, W, H, 16);
  ctx.clip();

  // ─── BACKGROUND ───────────────────────────────────────────────
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, '#EC4899');
  grad.addColorStop(0.2, '#F472B6');
  grad.addColorStop(0.5, '#FBBF24');
  grad.addColorStop(0.8, '#F59E0B');
  grad.addColorStop(1, '#D97706');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Dot pattern
  const pc = document.createElement('canvas');
  pc.width = 80;
  pc.height = 80;
  const p = pc.getContext('2d')!;
  p.fillStyle = '#000';
  for (const [dx, dy, dr] of [[40,40,3],[40,10,2],[40,70,2],[10,40,2],[70,40,2],[20,20,1.5],[60,20,1.5],[20,60,1.5],[60,60,1.5]] as [number,number,number][]) {
    p.beginPath(); p.arc(dx, dy, dr, 0, Math.PI * 2); p.fill();
  }
  const pattern = ctx.createPattern(pc, 'repeat');
  if (pattern) {
    ctx.globalAlpha = 0.10;
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, W, H);
  }
  reset(ctx);

  // ─── BORDERS ──────────────────────────────────────────────────
  ctx.strokeStyle = BORDER_BROWN;
  ctx.globalAlpha = 0.7;
  ctx.lineWidth = 5;
  roundRect(ctx, 2, 2, W - 4, H - 4, 16);
  ctx.stroke();
  reset(ctx);
  ctx.strokeStyle = BORDER_BROWN;
  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 2.5;
  roundRect(ctx, 18, 18, W - 36, H - 36, 12);
  ctx.stroke();
  reset(ctx);

  // ─── CORNER VINES (top only) ──────────────────────────────────
  drawCornerVine(ctx, 'tl');
  drawCornerVine(ctx, 'tr');

  // ─── CONTENT ──────────────────────────────────────────────────
  let y = PAD_TOP;

  // ── HEADER ────────────────────────────────────────────────────
  // Stars row — scaled up
  const starCY = y + STARS_H / 2;
  ctx.fillStyle = CREAM;
  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.shadowBlur = 6;
  ctx.shadowOffsetY = 2;
  star4(ctx, CX - 190, starCY, 11);
  star4(ctx, CX, starCY, 16);
  star4(ctx, CX + 190, starCY, 11);
  reset(ctx);
  // Tapered star-row lines via gradient — thin like site (h-0.5)
  const starLineL = ctx.createLinearGradient(CX - 166, 0, CX - 36, 0);
  starLineL.addColorStop(0, 'rgba(254,243,199,0)');
  starLineL.addColorStop(0.5, 'rgba(254,243,199,0.6)');
  starLineL.addColorStop(1, 'rgba(254,243,199,0)');
  const starLineR = ctx.createLinearGradient(CX + 36, 0, CX + 166, 0);
  starLineR.addColorStop(0, 'rgba(254,243,199,0)');
  starLineR.addColorStop(0.5, 'rgba(254,243,199,0.6)');
  starLineR.addColorStop(1, 'rgba(254,243,199,0)');
  ctx.lineWidth = 2;
  ctx.strokeStyle = starLineL;
  ctx.beginPath(); ctx.moveTo(CX - 166, starCY); ctx.lineTo(CX - 36, starCY); ctx.stroke();
  ctx.strokeStyle = starLineR;
  ctx.beginPath(); ctx.moveTo(CX + 36, starCY); ctx.lineTo(CX + 166, starCY); ctx.stroke();
  y += STARS_H + STARS_LOGO_GAP;

  // Logo "Maybe Cat" — large Cinzel Decorative
  const logoFont = '900 120px "Cinzel Decorative", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = logoFont;
  const logoCY = y + LOGO_H / 2;
  ctx.fillStyle = 'rgba(0,0,0,0.15)';
  ctx.fillText('Maybe Cat', CX + 5, logoCY + 5);
  ctx.fillStyle = GOLD;
  ctx.fillText('Maybe Cat', CX + 3, logoCY + 3);
  ctx.shadowColor = 'rgba(251,191,36,0.4)';
  ctx.shadowBlur = 40;
  ctx.fillStyle = DARK_BROWN;
  ctx.fillText('Maybe Cat', CX, logoCY);
  reset(ctx);
  y += LOGO_H + LOGO_DIV_GAP;

  // Divider — line ☽ ✧ ☾ line, matching site (straight lines, tight to title)
  const divY = y + DIV_H / 2 - 20;
  ctx.strokeStyle = 'rgba(255,255,255,0.7)';
  ctx.lineWidth = 4.5;
  ctx.lineCap = 'butt';
  ctx.beginPath(); ctx.moveTo(CX - 140, divY); ctx.lineTo(CX - 60, divY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(CX + 60, divY); ctx.lineTo(CX + 140, divY); ctx.stroke();
  // Symbols: ☽ ✧ ☾
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.globalAlpha = 0.8;
  ctx.font = '38px Georgia, serif';
  ctx.fillText('\u263D', CX - 40, divY);   // ☽
  ctx.globalAlpha = 0.9;
  ctx.font = '30px Georgia, serif';
  ctx.fillText('\u2727', CX, divY);         // ✧
  ctx.globalAlpha = 0.8;
  ctx.font = '38px Georgia, serif';
  ctx.fillText('\u263E', CX + 40, divY);    // ☾
  reset(ctx);
  y += DIV_H;

  y += gap; // header → photo

  // ── PHOTO ─────────────────────────────────────────────────────
  const frameX = CX - FRAME_TOTAL / 2;
  const frameY = y;

  ctx.shadowColor = 'rgba(0,0,0,0.25)';
  ctx.shadowBlur = 32;
  ctx.shadowOffsetY = 8;
  ctx.fillStyle = 'rgba(255,251,235,0.9)';
  roundRect(ctx, frameX, frameY, FRAME_TOTAL, FRAME_TOTAL, 12);
  ctx.fill();
  reset(ctx);

  ctx.strokeStyle = BORDER_BROWN;
  ctx.globalAlpha = 0.85;
  ctx.lineWidth = FRAME_BORDER + 1;
  roundRect(ctx, frameX, frameY, FRAME_TOTAL, FRAME_TOTAL, 12);
  ctx.stroke();
  reset(ctx);

  try {
    const catImg = await loadImage(data.catImage);
    const px = frameX + FRAME_BORDER + FRAME_PAD;
    const py = frameY + FRAME_BORDER + FRAME_PAD;
    ctx.save();
    roundRect(ctx, px, py, PHOTO_SIZE, PHOTO_SIZE, 8);
    ctx.clip();
    if (data.needsBrightening) ctx.filter = config.brightness.enhanceFilter;
    ctx.drawImage(catImg, px, py, PHOTO_SIZE, PHOTO_SIZE);
    ctx.restore();
    reset(ctx);
  } catch (e) {
    console.error('[ShareCard] Photo failed:', e);
    reset(ctx);
  }

  y += FRAME_TOTAL;

  // ── NAME PILL (overlapping frame bottom) ───────────────────────
  const pillY = y - PILL_OVERLAP;
  ctx.font = 'bold 22px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const nameW = ctx.measureText(data.catName).width;
  const pillW = nameW + 56;
  const pillX = CX - pillW / 2;
  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.shadowBlur = 16;
  ctx.shadowOffsetY = 4;
  ctx.fillStyle = PILL_BROWN;
  roundRect(ctx, pillX, pillY, pillW, PILL_H, PILL_H / 2);
  ctx.fill();
  reset(ctx);
  ctx.fillStyle = CREAM;
  ctx.font = 'bold 22px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(data.catName, CX, pillY + PILL_H / 2);

  y += PILL_OVERLAP;
  y += gap; // pill → text panel

  // ── TEXT BACKING PANEL ─────────────────────────────────────────
  const panelX = 56;
  const panelW = W - 112;
  const panelY = y;
  ctx.shadowColor = 'rgba(0,0,0,0.12)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetY = 4;
  ctx.fillStyle = 'rgba(255, 251, 235, 0.80)';
  roundRect(ctx, panelX, panelY, panelW, panelH, 16);
  ctx.fill();
  reset(ctx);
  ctx.strokeStyle = BORDER_BROWN;
  ctx.globalAlpha = 0.6;
  ctx.lineWidth = 3;
  roundRect(ctx, panelX, panelY, panelW, panelH, 16);
  ctx.stroke();
  reset(ctx);

  let panelContentY = panelY + PANEL_PAD_V;

  // ── QUESTION FRAME ─────────────────────────────────────────────
  const qFrameX = panelX + 24;
  const qFrameW = panelW - 48;
  ctx.strokeStyle = 'rgba(120, 53, 15, 0.25)';
  ctx.lineWidth = 1.5;
  roundRect(ctx, qFrameX, panelContentY, qFrameW, qFrameH, 10);
  ctx.stroke();

  // Question text — dark, full opacity
  ctx.font = 'italic 32px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#1a1a1a';
  let qTextY = panelContentY + Q_FRAME_PAD_V;
  for (const line of qLines) {
    ctx.fillText(line, CX, qTextY);
    qTextY += Q_LINE_H;
  }

  panelContentY += qFrameH + QR_GAP;

  // ── ANSWER TEXT — Georgia bold, black ──────────────────────────
  ctx.font = 'bold 42px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#000000';
  for (const line of rLines) {
    ctx.fillText(line, CX, panelContentY);
    panelContentY += R_LINE_H;
  }

  // Attribution
  if (data.attribution) {
    ctx.font = 'italic 16px Georgia, serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillStyle = DARK_BROWN;
    ctx.globalAlpha = 0.5;
    ctx.fillText('\u2190 ' + data.attribution, panelX + panelW - 20, panelContentY + 2);
    reset(ctx);
  }

  // ── FOOTER ────────────────────────────────────────────────────
  const footerY = H - PAD_BOTTOM;
  ctx.textBaseline = 'bottom';
  ctx.textAlign = 'left';
  const prefix = 'Cats answer questions at ';
  const domain = 'maybecat.com';
  ctx.font = 'bold 34px Georgia, serif';
  const pw = ctx.measureText(prefix).width;
  const dw = ctx.measureText(domain).width;
  const startX = CX - (pw + dw) / 2;

  ctx.fillStyle = DARK_BROWN;
  ctx.font = 'bold 34px Georgia, serif';
  ctx.fillText(prefix, startX, footerY);
  ctx.fillText(domain, startX + pw, footerY);
  reset(ctx);

  // ─── EXPORT ───────────────────────────────────────────────────
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      blob => (blob ? resolve(blob) : reject(new Error('toBlob returned null'))),
      'image/png',
    );
  });
}
