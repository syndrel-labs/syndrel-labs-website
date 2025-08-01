'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

function TopologicalGrid(): React.JSX.Element {
  const meshRef = useRef<THREE.Points>(null)
  const count = 50 // Reduced for better performance
  const sep = 0.5
  const grid: [number, number, number][] = []

  for (let xi = 0; xi < count; xi++) {
    for (let zi = 0; zi < count; zi++) {
      const x = sep * (xi - count / 2)
      const z = sep * (zi - count / 2)
      grid.push([x, 0, z])
    }
  }

  const positions = new Float32Array(grid.length * 3)
  grid.forEach((p, i) => {
    positions[i * 3] = p[0]
    positions[i * 3 + 1] = p[1]
    positions[i * 3 + 2] = p[2]
  })

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const mesh = meshRef.current
    if (!mesh) return

    const pos = mesh.geometry.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const z = pos.getZ(i)
      const y = 0.3 * Math.sin(0.5 * x + t) * Math.cos(0.5 * z + t) + 0.5
      pos.setY(i, y)
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color="#00ff00"
        size={0.1}
        sizeAttenuation={false}
        transparent
        opacity={1.0}
      />
    </points>
  )
}

export default function TopologicalBackground(): React.JSX.Element {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1, // Changed from -1 to 1 to test
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
    }}>
      {/* Test div to see if component is rendering */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        color: 'red',
        zIndex: 1000,
        fontSize: '20px',
        fontWeight: 'bold'
      }}>
      </div>

      <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <TopologicalGrid />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
