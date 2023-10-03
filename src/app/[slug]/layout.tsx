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

const choicedLayoutStyle = css`
  height: 100vh !important;
  display: flex;

  aside {
    width: 682px;
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
    width: calc(100% - 682px);
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding: 34px;
  }
`;

type ChoicedLayoutProps = {
  params: {
    slug: string;
  };
  children: React.ReactNode;
};

export default function ChoiceLayout({ params, children }: ChoicedLayoutProps) {
  const route = Route();

  const chosenData = data.choice.filter(
    (choice) => choice.id.toString() === params.slug
  );

  return (
    <section css={choicedLayoutStyle}>
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
      <article>
        <nav>
          {route.includes('hidden') ? (
            <Link href={`/${params.slug}`}>
              <Image
                src="/images/nav_purewhite.png"
                alt="navigation"
                width={46}
                height={46}
              />
            </Link>
          ) : (
            <Link href="/random">
              <Image
                src="/images/nav_white.png"
                alt="navigation"
                width={46}
                height={46}
              />
            </Link>
          )}
        </nav>
        {children}
      </article>
    </section>
  );
}
