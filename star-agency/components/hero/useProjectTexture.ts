"use client";

import { useEffect, useState } from "react";
import * as THREE from "three";
import type { Project } from "@/lib/data/projects";

function createFallbackTexture(project: Project): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 960;
  canvas.height = 600;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const [bg, accent] = project.palette;
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = accent;
  ctx.globalAlpha = 0.35;
  ctx.fillRect(0, canvas.height * 0.62, canvas.width, canvas.height * 0.38);
  ctx.globalAlpha = 1;

  ctx.fillStyle = "#FAFAF8";
  ctx.font = "600 42px system-ui, sans-serif";
  ctx.fillText(project.title, 48, 96);
  ctx.font = "400 22px system-ui, sans-serif";
  ctx.fillStyle = accent;
  ctx.fillText(project.industry, 48, 140);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function useProjectTexture(project: Project) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    let active = true;
    const loader = new THREE.TextureLoader();

    loader.load(
      project.screenshot,
      (loaded) => {
        if (!active) {
          loaded.dispose();
          return;
        }
        loaded.colorSpace = THREE.SRGBColorSpace;
        setTexture(loaded);
      },
      undefined,
      () => {
        if (active) {
          setTexture(createFallbackTexture(project));
        }
      }
    );

    return () => {
      active = false;
    };
  }, [project]);

  return texture;
}
