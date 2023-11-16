/** @jsxImportSource @emotion/react */
'use client';

import data from '@/database/data.json';
import Route from '@/utils/Route';
import { css } from '@emotion/react';
import Headings from '@/components/atoms/Headings';
import Text from '@/components/atoms/Text';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const chosenLayoutStyle = css`
  height: 100vh !important;
  display: flex;

  aside {
    width: 682px;
    min-width: 682px;
    height: 100%;
    border-right: solid 2px var(--violet1);
  }

  header {
    padding: 34px;
  }

  .logo {
    position: relative;
    width: 100%;
    height: calc(100% - 116px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo_box {
    width: 100%;
    height: 680px;
  }

  .row_container,
  .col_container {
    color: var(--white);
    font-size: var(--small-font);
  }

  .row_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .col_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .chosen_container {
    text-shadow: var(--white-glow);
  }

  .list1_container,
  .list2_container,
  .list3_container,
  .list4_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list1_container,
  .list2_container {
    width: 160px;
  }

  .list3_container,
  .list4_container {
    flex-direction: column;
    height: 160px;
  }

  .logo_container {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -180px;
    margin-top: -180px;
  }

  article {
    background-image: url(/images/intro_bg.jpg);
    background-size: cover;
    background-position: center;
    width: calc(100% - 682px);
    min-width: 682px;
  }

  article.hidden {
    background-image: none;
    background-color: var(--violet1);
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
    font-size: var(--small-font);
    font-weight: var(--semibold-weight);
    cursor: pointer;
  }

  .chosen_button {
    font-family: 'Eulyoo1945';
    margin-top: 40px;
    color: var(--violet1);
  }

  .hidden_button {
    font-family: 'Pretendard';
    margin-top: 64px;
    color: var(--black);
  }
`;

type ChosenLayoutProps = {
  params: {
    slug: string;
  };
  children: React.ReactNode;
};

export default function ChosenLayout({ params, children }: ChosenLayoutProps) {
  const route = Route();
  const paramsSlug = params.slug.includes('hidden')
    ? params.slug.slice(6)
    : params.slug;

  const chosenData = data.choice.filter(
    (choice) => choice.id.toString() === paramsSlug
  );

  return (
    <section css={chosenLayoutStyle}>
      <aside>
        <header>
          <Link href="/">
            <Headings heading="h1">아마도 이상적인 선택들</Headings>
          </Link>
        </header>
        <div className="logo">
          <div className="logo_box">
            {chosenData.map((data) =>
              data.direction === 'row' ? (
                <div className="row_container" key={'row container'}>
                  <div
                    className={
                      (chosenData[0].bard ? '' : 'chosen_container ') +
                      'list1_container'
                    }
                  >
                    <Text key={'list1'}>{data.list[0]}</Text>
                  </div>
                  <div className="logo_container">
                    {data.bard ? (
                      <Image
                        src="/images/left_right.png"
                        alt="logo"
                        width={360}
                        height={360}
                      />
                    ) : (
                      <Image
                        src="/images/left_left.png"
                        alt="logo"
                        width={360}
                        height={360}
                      />
                    )}
                  </div>
                  <div
                    className={
                      (chosenData[0].bard ? 'chosen_container ' : '') +
                      'list2_container'
                    }
                  >
                    <Text key={'list2'}>{data.list[1]}</Text>
                  </div>
                </div>
              ) : (
                <div className="col_container" key={'col container'}>
                  <div
                    className={
                      (chosenData[0].bard ? '' : 'chosen_container ') +
                      'list3_container'
                    }
                  >
                    <Text key={'list3'}>{data.list[0]}</Text>
                  </div>
                  <div className="logo_container">
                    {data.bard ? (
                      <Image
                        src="/images/left_down.png"
                        alt="logo"
                        width={360}
                        height={360}
                      />
                    ) : (
                      <Image
                        src="/images/left_up.png"
                        alt="logo"
                        width={360}
                        height={360}
                      />
                    )}
                  </div>
                  <div
                    className={
                      (chosenData[0].bard ? 'chosen_container ' : '') +
                      'list4_container'
                    }
                  >
                    <Text key={'list4'}>{data.list[1]}</Text>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </aside>
      <article className={route.includes('hidden') ? 'hidden' : ''}>
        {children}
      </article>
    </section>
  );
}
