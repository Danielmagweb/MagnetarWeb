import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent } from "react";

export function HeroVisual() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 80, damping: 18, mass: 0.6 });

  const orbX = useTransform(sx, (v) => v * 18);
  const orbY = useTransform(sy, (v) => v * 18);
  const ring1X = useTransform(sx, (v) => v * 8);
  const ring1Y = useTransform(sy, (v) => v * 8);
  const ring2X = useTransform(sx, (v) => v * -6);
  const ring2Y = useTransform(sy, (v) => v * -6);
  const shape1X = useTransform(sx, (v) => v * -28);
  const shape1Y = useTransform(sy, (v) => v * -28);
  const shape2X = useTransform(sx, (v) => v * 24);
  const shape2Y = useTransform(sy, (v) => v * 24);
  const shape3X = useTransform(sx, (v) => v * -20);
  const shape3Y = useTransform(sy, (v) => v * 20);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      className="relative aspect-square w-full max-w-[560px]"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,80,216,0.5),transparent_60%)] blur-3xl" />

      {/* Orbiting rings */}
      <motion.div
        className="absolute inset-[10%] rounded-full border border-white/10"
        style={{ x: ring1X, y: ring1Y }}
        animate={{ rotate: 360 }}
        transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" } }}
      />
      <motion.div
        className="absolute inset-[22%] rounded-full border border-white/10"
        style={{ x: ring2X, y: ring2Y }}
        animate={{ rotate: -360 }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" } }}
      />

      {/* Central gradient orb */}
      <motion.div
        className="absolute inset-[32%] rounded-full"
        style={{
          x: orbX,
          y: orbY,
          background:
            "radial-gradient(circle at 30% 30%, #e8f5ff 0%, #4a8eff 35%, #0050d8 70%, #001a4d 100%)",
          boxShadow:
            "0 0 80px rgba(0,80,216,0.6), inset 0 0 60px rgba(232,245,255,0.3)",
        }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute right-[8%] top-[18%] h-20 w-20 rounded-2xl glass-strong"
        style={{ x: shape1X, y: shape1Y }}
        animate={{ rotate: [0, 8, 0] }}
        transition={{ rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute bottom-[14%] left-[6%] h-16 w-16 rounded-full glass-strong"
        style={{ x: shape2X, y: shape2Y }}
      />
      <motion.div
        className="absolute bottom-[24%] right-[12%] h-12 w-12 rounded-xl"
        style={{
          x: shape3X,
          y: shape3Y,
          background: "linear-gradient(135deg,#0050d8,#e8f5ff)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ rotate: { duration: 12, repeat: Infinity, ease: "linear" } }}
      />
    </div>
  );
}