/** @jsxImportSource @emotion/react */
'use client';

import data from '@/database/data.json';
import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';

const RandomStyle = css`
  height: 100%;
  overflow: hidden;

  li {
    padding: 12px;
  }

  .before,
  .after {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .before {
    animation: infiniteBefore 80s linear infinite;
  }

  .after {
    animation: infiniteAfter 80s linear infinite;
  }

  .slow {
    animation-play-state: paused;
  }

  a {
    color: var(--white);
    font-size: 46px;
    font-weight: var(--semibold-weight);
    transition: transform ease-out 0.5s;
  }

  a:hover {
    text-shadow: var(--white-glow);
  }

  @keyframes infiniteBefore {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(-100%);
    }

    50.01% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0%);
    }
  }

  @keyframes infiniteAfter {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(-200%);
    }
  }
`;

export default function Random() {
  const [animate, setAnimate] = useState<Boolean>(true);
  const onSlow = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <div css={RandomStyle}>
      <ul className="slide_container">
        <div className={(animate ? '' : 'slow ') + 'before'}>
          {data.choice.map((choice) => (
            <li key={choice.id} onMouseEnter={onSlow} onMouseLeave={onRun}>
              <Link href={`/${choice.id}`}>{choice.question}</Link>
            </li>
          ))}
        </div>
        <div className={(animate ? '' : 'slow ') + 'after'}>
          {data.choice.map((choice) => (
            <li key={choice.id} onMouseEnter={onSlow} onMouseLeave={onRun}>
              <Link href={`/${choice.id}`}>{choice.question}</Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
