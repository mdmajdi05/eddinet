"use client";

// ============================================================================
//  FILE: components/chat/ChatBotLogo.tsx  (CHATBOT — ANIMATED 3D ROBOT LOGO)
//  Ye wahi 3D robot logo hai jo reference site par live chatbot me dikhta hai
//  (design/animations bilkul same). Saare visual styles
//  `ChatbotLogo.module.css` me hain.
//
//  Usage:
//    <ChatBotLogo size="md" onClick={toggle} />   // clickable (launcher)
//    <ChatBotLogo size="sm" animated={false} />   // header/message me static
//
//  Colors site ke red brand par set hain (teal/indigo accents hata diye).
// ============================================================================

import { useEffect, useRef } from "react";
import styles from "./ChatbotLogo.module.css";

interface ChatBotLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  showGlow?: boolean;
  onClick?: () => void;
}

// Launcher (floating button = `md` logo) ka tuning knob. Owner ne kaha tha
// "thoda bada" — isliye ek hi factor se button ka logo + uska glow dono
// proportionally bade hote hain (glowScale bhi isi `scale` se banta hai).
// 1.2 = ~20% bada. Yahan number badal kar poora button tune kar sakte ho.
const LAUNCHER_BUMP = 1.2;

const sizeScales = {
  xl: 0.5,
  lg: 0.34,
  md: 0.24 * LAUNCHER_BUMP,
  sm: 0.13,
};

const BASE_W = 220;
const BASE_H = 260;

export default function ChatBotLogo({
  size = "md",
  animated = true,
  showGlow = true,
  onClick,
}: ChatBotLogoProps) {
  const scale = sizeScales[size];
  const containerRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  const visualW = BASE_W * scale;
  const visualH = BASE_H * scale;
  // Glow ko logo ke saath chhota karo, warna chhote button par bahut bada
  // halo ban jaata hai (aur aas-paas ke widgets ko tint kar deta hai).
  const glowScale = scale * 1.6;

  useEffect(() => {
    const container = containerRef.current;
    const head = headRef.current;
    const scan = scanRef.current;
    const ball = ballRef.current;
    const group = groupRef.current;

    if (!container || !head || !scan || !ball || !group) return;

    const handleClick = () => {
      group.style.animationDuration = "1.2s";
      head.style.animationDuration = "1.2s";

      scan.style.transition = "box-shadow 0.3s ease, background 0.3s ease";
      scan.style.boxShadow =
        "0 0 60px rgba(255, 77, 77, 0.9), 0 0 120px rgba(230, 0, 0, 0.4)";

      ball.style.transition = "box-shadow 0.3s ease";
      ball.style.boxShadow =
        "0 0 70px rgba(255, 77, 77, 0.9), 0 0 140px rgba(230, 0, 0, 0.3)";

      head.style.transition = "transform 0.12s cubic-bezier(0.4, 0, 0.2, 1)";
      head.style.transform = "translateZ(20px) scale(0.88)";

      window.setTimeout(() => {
        head.style.transform = "translateZ(20px) scale(1)";
      }, 150);

      window.setTimeout(() => {
        group.style.animationDuration = "5s";
        head.style.animationDuration = "5s";
        scan.style.boxShadow =
          "0 0 25px rgba(255, 77, 77, 0.5), 0 0 60px rgba(230, 0, 0, 0.15)";
        ball.style.boxShadow =
          "0 0 40px rgba(255, 77, 77, 0.4), 0 0 80px rgba(230, 0, 0, 0.15)";
      }, 600);
    };

    const handleMouseEnter = () => {
      if (!animated) return;
      group.style.animationPlayState = "paused";
      head.style.animationPlayState = "paused";
      container.style.transition = "transform 0.4s ease";
      container.style.transform = "rotateY(6deg) rotateX(2deg)";
    };

    const handleMouseLeave = () => {
      if (!animated) return;
      group.style.animationPlayState = "running";
      head.style.animationPlayState = "running";
      container.style.transform = "";
    };

    container.addEventListener("click", handleClick);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("click", handleClick);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [animated]);

  const body = (
    <>
      {/* Glow rings — base dimensions par, taaki percentage sahi lagein */}
      {showGlow && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${glowScale})`,
            width: BASE_W,
            height: BASE_H,
            overflow: "visible",
            pointerEvents: "none",
          }}
        >
          <div className={styles.glowRing} />
          <div className={styles.glowRingOuter} />
        </div>
      )}

      {/* Scaled 3D robot */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center center",
          width: BASE_W,
          height: BASE_H,
        }}
      >
        <div className={styles.scene}>
          <div className={styles.cubeContainer} ref={containerRef}>
            <div className={styles.platformWrapper}>
              <div className={styles.platform} />
            </div>

            <div className={styles.robotWrapper}>
              <div className={styles.robotGroup} ref={groupRef}>
                <div className={styles.antennaGroup}>
                  <div className={styles.antennaStem} />
                  <div className={styles.antennaBall} ref={ballRef} />
                </div>

                <div className={styles.head} ref={headRef}>
                  <div className={styles.earLeft} />
                  <div className={styles.earRight} />
                  <div className={styles.visor}>
                    <div className={styles.scanLine} ref={scanRef} />
                  </div>
                  <div className={styles.mouth}>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className={styles.body}>
                  <span className={styles.chestLight} />
                  <span className={styles.chestLight} />
                </div>

                <div className={styles.armLeft} />
                <div className={styles.armRight} />

                <div className={styles.floatBubble}>
                  <span>Bot</span>
                  <div className={styles.loader}>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const style = { width: visualW, height: visualH };

  if (onClick) {
    return (
      <button
        type="button"
        aria-label="Open chat"
        className={styles.wrapper}
        style={style}
        onClick={onClick}
      >
        {body}
      </button>
    );
  }

  return (
    <div className={styles.wrapper} style={style} aria-hidden="true">
      {body}
    </div>
  );
}
