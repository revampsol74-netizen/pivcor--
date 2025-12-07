"use client"

import { Canvas } from "@react-three/fiber"

import { Environment, OrbitControls } from "@react-three/drei"

import dynamic from "next/dynamic"

const HologramOrb = dynamic(() => import("@/components/three/hologram-orb").then((m) => m.HologramOrb), { ssr: false })

const NeonNetwork = dynamic(() => import("@/components/three/neon-network").then((m) => m.NeonNetwork), { ssr: false })

export function HeroAnimation() {
  return (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/60 glass">
      <Canvas className="canvas-overlay" dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={2} color={"#00ffff"} />
        <HologramOrb />
        <NeonNetwork />
        <Environment preset="night" />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
      
      {/* Locked PIVCOR Button */}
      <a
        href="https://pivcor.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 px-3 py-2 bg-primary/80 text-primary-foreground text-sm rounded-md hover:bg-primary transition-colors neon-glow"
        aria-label="Powered by PIVCOR"
      >
        PIVCOR
      </a>
    </div>
  )
}
