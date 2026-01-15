'use client';

import { useEffect, useState } from 'react';
import '../styles/skillbar.css'

type SkillBarProps = {
  label: string;
  level: number; // 0 → 100
};

export default function SkillBar({ label, level }: SkillBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(level);
    }, 200);

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className='skill'>
      <span className='skill-label'>{label}</span>

      <div className='bar'>
        <div
          className='progress'
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
