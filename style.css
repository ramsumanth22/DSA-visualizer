* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Roboto, system-ui, sans-serif;
}

body {
    background: linear-gradient(145deg, #0a0e1a 0%, #1a1f2f 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    perspective: 1200px;
    overflow-x: hidden;
}

.container {
    max-width: 1500px;
    width: 100%;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 48px;
    padding: 28px 30px 36px;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.06);
    transform: rotateX(2deg);
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.container:hover {
    transform: rotateX(0deg) scale(1.01);
}

h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 18px;
    letter-spacing: -0.3px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.06);
    padding-bottom: 16px;
    text-shadow: 0 2px 20px rgba(0, 150, 255, 0.2);
}

h1 i {
    color: #00b4ff;
    background: rgba(0, 180, 255, 0.15);
    padding: 12px;
    border-radius: 30px;
    font-size: 2rem;
    animation: glowPulse 2s ease-in-out infinite;
}

@keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(0, 180, 255, 0.2); }
    50% { box-shadow: 0 0 40px rgba(0, 180, 255, 0.5); }
}

.top-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px 20px;
    margin-bottom: 24px;
}

.ds-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.ds-tab {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 10px 22px;
    border-radius: 60px;
    font-weight: 600;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.ds-tab i { color: #00b4ff; }
.ds-tab:hover {
    background: rgba(0, 180, 255, 0.12);
    transform: translateY(-3px) scale(1.02);
    border-color: rgba(0, 180, 255, 0.3);
    box-shadow: 0 8px 25px rgba(0, 180, 255, 0.15);
}

.ds-tab.active {
    background: linear-gradient(135deg, #00b4ff, #0066cc);
    border-color: #00b4ff;
    color: white;
    box-shadow: 0 8px 30px rgba(0, 180, 255, 0.4);
    transform: translateY(-2px) scale(1.03);
}
.ds-tab.active i { color: white; }

.panel {
    display: none;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 32px;
    padding: 24px 22px 28px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.03);
    transform-style: preserve-3d;
    animation: panelFloat 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes panelFloat {
    0% { opacity: 0; transform: translateY(30px) rotateX(-10deg) scale(0.95); }
    100% { opacity: 1; transform: translateY(0) rotateX(0) scale(1); }
}

.panel.active { display: block; }

/* TAXONOMY CLASSIFICATION HEADINGS */
.ds-section-title {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 32px 0 16px;
    padding-left: 10px;
    border-left: 4px solid #00b4ff;
}

.ds-section-title span {
    color: rgba(0, 180, 255, 0.4);
    font-family: monospace;
    margin-right: 8px;
}

.ds-section-title p {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 4px;
}

/* PRIMITIVE LAB MONITOR CONTAINER */
.primitive-lab-container {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 24px;
    padding: 20px;
    margin-bottom: 30px;
}

.lab-controls {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.lab-controls select, .lab-controls input {
    background: #1a1f2f;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    padding: 10px 16px;
    border-radius: 12px;
    outline: none;
    font-size: 0.95rem;
}

.lab-controls select { cursor: pointer; }
.lab-controls input { width: 160px; }

.lab-display {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
}

.register-box {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 14px;
    border-radius: 14px;
    text-align: left;
    transition: border-color 0.3s ease;
}

.structural-binary { grid-column: span 2; }

@media (max-width: 600px) {
    .structural-binary { grid-column: span 1; }
}

.reg-label {
    display: block;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 6px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.reg-value {
    font-family: monospace;
    font-size: 1.2rem;
    color: #fff;
    word-break: break-all;
}

.binary-stream {
    color: #00d2ff !important;
    font-size: 1.05rem;
    letter-spacing: 1px;
}

/* NON-PRIMITIVE CARD GRIDS */
.home-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
    padding: 10px 0;
}

.home-card {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 28px;
    padding: 32px 20px;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    cursor: pointer;
    transform-style: preserve-3d;
}

.home-card:hover {
    transform: rotateY(5deg) rotateX(3deg) translateZ(30px) scale(1.03);
    background: rgba(0, 180, 255, 0.1);
    border-color: rgba(0, 180, 255, 0.3);
    box-shadow: 0 20px 50px rgba(0, 180, 255, 0.15);
}

.home-card i {
    font-size: 3.5rem;
    color: #00b4ff;
    margin-bottom: 16px;
    display: block;
    text-shadow: 0 0 30px rgba(0, 180, 255, 0.2);
}

.home-card h3 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 8px;
}

.home-card p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.95rem;
    line-height: 1.5;
}

.ops-badge-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
    margin-top: 14px;
}

.badge {
    display: inline-block;
    background: rgba(0, 180, 255, 0.15);
    color: #00b4ff;
    padding: 4px 14px;
    border-radius: 60px;
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid rgba(0, 180, 255, 0.1);
}

.home-hero {
    text-align: center;
    padding: 10px 20px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.home-hero h2 { color: #fff; font-size: 2.2rem; font-weight: 700; margin-bottom: 8px; }
.home-hero p { color: rgba(255, 255, 255, 0.5); font-size: 1.1rem; max-width: 600px; margin: 0 auto; }

/* 3D RENDERING SLABS */
.visual-area {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 28px;
    padding: 28px 20px;
    min-height: 240px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    box-shadow: inset 0 4px 30px rgba(0, 0, 0, 0.3);
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 14px 18px;
    transform-style: preserve-3d;
}

.visual-item {
    background: rgba(255, 255, 255, 0.08);
    padding: 12px 24px;
    border-radius: 16px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 60px;
    text-align: center;
    transform-style: preserve-3d;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.visual-item:hover {
    transform: rotateY(10deg) rotateX(5deg) translateZ(20px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 180, 255, 0.15);
}

.visual-item.slide-in-3d { animation: slideIn3D 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
@keyframes slideIn3D {
    0% { transform: rotateY(-30deg) rotateX(20deg) translateZ(-50px) scale(0.5); opacity: 0; }
    100% { transform: rotateY(0deg) rotateX(0deg) translateZ(0) scale(1); opacity: 1; }
}

.visual-item.pop-out-3d { animation: popOut3D 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
@keyframes popOut3D {
    0% { transform: rotateY(0deg) rotateX(0deg) translateZ(0) scale(1); opacity: 1; }
    100% { transform: rotateY(40deg) rotateX(20deg) translateZ(-80px) scale(0.3); opacity: 0; }
}

.visual-item.highlight-3d { background: rgba(0, 180, 255, 0.25); border-color: #00b4ff; box-shadow: 0 0 40px rgba(0, 180, 255, 0.3); transform: translateZ(20px) scale(1.08); }
.visual-item.comparing-3d { background: rgba(255, 107, 53, 0.25); border-color: #ff6b35; box-shadow: 0 0 40px rgba(255, 107, 53, 0.3); animation: pulse3D 0.6s ease-in-out infinite alternate; }
@keyframes pulse3D { 0% { transform: rotateY(-3deg) translateZ(10px); } 100% { transform: rotateY(3deg) translateZ(25px) scale(1.03); } }
.visual-item.sorted-3d { background: rgba(0, 210, 255, 0.2); border-color: #00d2ff; box-shadow: 0 0 40px rgba(0, 210, 255, 0.2); }

/* VERTICAL STACK SLAB FRAME */
.stack-container-3d {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 12px;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    padding: 20px 24px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 28px;
    border: 2px solid rgba(0, 180, 255, 0.1);
    min-height: 140px;
    transform-style: preserve-3d;
}
.stack-container-3d .visual-item { width: 100%; max-width: 260px; background: rgba(255, 255, 255, 0.06); }
.stack-container-3d .visual-item.stack-top-3d { background: rgba(249, 168, 37, 0.25); border-color: #f9a825; box-shadow: 0 10px 40px rgba(249, 168, 37, 0.25); transform: translateZ(20px) scale(1.04); }

/* LOWER HARDWARE CONTROLS BAR */
.controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px 18px;
    background: rgba(0, 0, 0, 0.25);
    padding: 14px 20px;
    border-radius: 60px;
    border: 1px solid rgba(255, 255, 255, 0.04);
}

.controls input {
    border: none;
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
    padding: 10px 18px;
    border-radius: 40px;
    font-size: 0.95rem;
    width: 120px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    outline: none;
}
.controls input:focus { outline: 2px solid #00b4ff; background: rgba(255, 255, 255, 0.1); }

.controls button {
    background: rgba(255, 255, 255, 0.04);
    border: none;
    padding: 9px 20px;
    border-radius: 40px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    font-size: 0.9rem;
}
.controls button i { color: #00b4ff; }
.controls button:hover { background: rgba(0, 180, 255, 0.15); border-color: rgba(0, 180, 255, 0.3); transform: translateY(-2px); }
.controls button.primary { background: linear-gradient(135deg, #00b4ff, #0066cc); border-color: #00b4ff; color: white; }
.controls button.primary i { color: white; }
.controls button.danger { background: linear-gradient(135deg, #ff4757, #c0392b); border-color: #ff4757; color: white; }
.controls button.danger i { color: white; }
.controls button.outline { background: transparent; border: 1px solid rgba(255, 255, 255, 0.08); }
.controls button.success { background: linear-gradient(135deg, #00d2ff, #00a86b); border-color: #00d2ff; color: white; }
.controls button.success i { color: white; }

.info-badge { font-size: 0.9rem; background: rgba(255, 255, 255, 0.04); padding: 5px 18px; border-radius: 60px; color: rgba(255, 255, 255, 0.6); margin-left: auto; }
.sort-selector { display: flex; align-items: center; gap: 10px; background: rgba(0, 0, 0, 0.2); padding: 4px 14px 4px 18px; border-radius: 60px; border: 1px solid rgba(255, 255, 255, 0.04); }
.sort-selector select { border: none; background: #1a1f2f; color: #fff; padding: 8px 14px; border-radius: 40px; outline: none; cursor: pointer; }
.empty-message { color: rgba(255, 255, 255, 0.3); font-size: 1.1rem; }

@media (max-width: 780px) {
    .controls { flex-direction: column; align-items: stretch; }
    .info-badge { margin-left: 0; text-align: center; }
    .home-grid { grid-template-columns: 1fr; }
}

.glow-orb { position: fixed; border-radius: 50%; pointer-events: none; z-index: -1; filter: blur(80px); opacity: 0.25; animation: orbFloat 8s ease-in-out infinite alternate; }
@keyframes orbFloat { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(60px, -60px) scale(1.3); } }
