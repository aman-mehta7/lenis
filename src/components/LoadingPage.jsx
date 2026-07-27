import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import React from "react";

export default function LoadingPage({ onProgress }) {
  const { progress } = useProgress();

  useEffect(() => {
    onProgress(progress);
  }, [progress, onProgress]);

  return null;
}
