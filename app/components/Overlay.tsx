"use client";

import  "../styles/overlay.css";

import { ReactNode, MouseEvent, useEffect, useState, useCallback } from "react";
import "../styles/overlay.css";

type OverlayProps = {
  children: ReactNode;
  onClose: () => void;
  disableBodyScroll?: boolean; 
  transitionMs?: number;
};

export default function Overlay({ 
  children, 
  onClose,
  disableBodyScroll = false,
  transitionMs = 300, 
}: OverlayProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(true), 10);

    const prevOverflow = document.body.style.overflow;
    if (disableBodyScroll) document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(id);
      if (disableBodyScroll) document.body.style.overflow = prevOverflow;
    };
  }, [disableBodyScroll]);

  const handleCloseRequest = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => {
      onClose();
    }, transitionMs);
  }, [onClose, transitionMs]);


  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

    useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseRequest();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleCloseRequest]);


  return (
    <div
      className={`overlay-projet ${visible ? "show" : ""}`}
      onClick={handleCloseRequest}
      role="dialog"
      aria-modal="true"
    >
      <div className="content" onClick={handleContentClick}>
        <button className="close" onClick={handleCloseRequest} aria-label="Fermer">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
