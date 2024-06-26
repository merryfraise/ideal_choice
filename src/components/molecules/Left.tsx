/** @jsxImportSource @emotion/react */
'use client';

import Route from '@/utils/Route';
import { ICenter } from '@/utils/type';
import { css } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const leftStyle = css`
  position: relative;
  width: 680px;
  height: 428px;

  .logo_container {
    width: 100%;
    height: 100%;
  }

  .direction_container,
  .direction_hover_container,
  .center_container,
  .center_hover_container {
    position: absolute;
    left: 50%;
    top: 50%;
  }

  .direction_container,
  .direction_hover_container {
    width: 360px;
    height: 360px;
    margin-left: -180px;
    margin-top: -180px;
  }

  .center_container,
  .center_hover_container {
    width: 32px;
    height: 32px;
    margin-left: -16px;
    margin-top: -16px;
  }

  .direction_hover_container,
  .center_hover_container {
    display: none;
  }

  .logo_container:hover {
    .direction_container,
    .center_container {
      display: none;
    }

    .direction_hover_container,
    .center_hover_container {
      display: block;
    }

    img {
      filter: drop-shadow(var(--white-glow));
    }
  }

  .text_container {
    margin-top: 68px;
    color: var(--violet3);
    font-size: 20px;
    font-weight: var(--semibold-weight);
    text-shadow: var(--white-glow);
    text-align: center;
  }

  .special {
    color: var(--violet2);
  }
`;

export default function Left() {
  const route = Route();
  const logoRef = useRef<HTMLDivElement>(null); // ref of logo container
  const centerRef = useRef<HTMLDivElement>(null); // ref of center container
  const textRef = useRef<HTMLDivElement>(null); // ref of text container

  useEffect(() => {
    const logoCurrent = logoRef.current;
    const centerCurrent = centerRef.current;
    const textCurrent = textRef.current;

    if (logoCurrent && centerCurrent && textCurrent) {
      const center: ICenter = {
        x:
          logoCurrent.getBoundingClientRect().left +
          logoCurrent.clientWidth / 2,
        y:
          logoCurrent.getBoundingClientRect().top +
          logoCurrent.clientHeight / 2,
      }; // coordinate of logo container

      window.addEventListener('mousemove', (event) => {
        const x = center.x - event.clientX;
        const y = center.y - event.clientY;

        // Outside
        if (x <= -286 || x >= 286 || y <= -286.5 || y >= 286.5) {
          textCurrent.innerText = '';
        }
        // North West
        else if (x >= 69 && y >= 69.5) {
          centerCurrent.style.cssText =
            'margin-left: -164px; margin-top: -164px;';
          textCurrent.classList.remove('special');
          textCurrent.innerText = '선택의 결과는 책임지지 않습니다.';
        }
        // North East
        else if (x <= -69 && y >= 69.5) {
          centerCurrent.style.cssText =
            'margin-left: 136px; margin-top: -164px;';
          textCurrent.classList.remove('special');
          textCurrent.innerText = '현재까지 총 100개의 선택이 완료되었습니다.';
        }
        // South East
        else if (x <= -69 && y <= -69.5) {
          centerCurrent.style.cssText =
            'margin-left: 136px; margin-top: 136px;';
          textCurrent.classList.remove('special');
          textCurrent.innerText = '...';
        }
        // South West
        else if (x >= 69 && y <= -69.5) {
          centerCurrent.style.cssText =
            'margin-left: -164px; margin-top: 136px;';
          textCurrent.classList.remove('special');
          textCurrent.innerText =
            '이상적인 선택을 통해 부디 깨달음을 얻길 바랍니다.';
        }
        // North
        else if (y >= 99.5) {
          centerCurrent.style.cssText = 'margin-top: -228px;';
          textCurrent.classList.remove('special');
          textCurrent.innerText =
            '이상을 가리키는 나침반을 통해 선택의 고통에서 벗어나세요.';
        }
        // East
        else if (x <= -99) {
          centerCurrent.style.cssText = 'margin-left: 200px;';
          textCurrent.classList.remove('special');
          textCurrent.innerText =
            '간혹 선택이 바뀌는 경우가 있으니 유의하시기 바랍니다.';
        }
        // South
        else if (y <= -99.5) {
          centerCurrent.style.cssText = 'margin-top: 200px;';
          textCurrent.classList.add('special');
          textCurrent.innerText = '쉬운 선택은 옳은 선택이 될 수 없습니다.';
        }
        // West
        else if (x >= 99) {
          centerCurrent.style.cssText = 'margin-left: -228px;';
          textCurrent.classList.remove('special');
          textCurrent.innerText =
            '새로 추가되는 선택은 간헐적으로 업데이트됩니다.';
        }
      });
    }
  }, []);

  return (
    <div css={leftStyle}>
      {route.includes('random') || route.includes('sort') ? (
        <>
          <div className="logo_container" ref={logoRef}>
            <div className="direction_container">
              <Image
                src="/images/left_direction.png"
                alt="logo"
                width={360}
                height={360}
                priority={true}
              />
            </div>
            <div className="direction_hover_container">
              <Image
                src="/images/left_direction_hover.png"
                alt="logo"
                width={360}
                height={360}
                priority={true}
              />
            </div>
            <div className="center_container">
              <Image
                className="center"
                src="/images/left_center.png"
                alt="logo"
                width={32}
                height={32}
                priority={true}
              />
            </div>
            <div className="center_hover_container" ref={centerRef}>
              <Image
                className="center_hover"
                src="/images/left_center_hover.png"
                alt="logo"
                width={32}
                height={32}
                priority={true}
              />
            </div>
          </div>
          <div className="text_container" ref={textRef}></div>
        </>
      ) : null}
    </div>
  );
}
