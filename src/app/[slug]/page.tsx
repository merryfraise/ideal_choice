/** @jsxImportSource @emotion/react */
'use client';

import data from '@/database/data.json';
import { css } from '@emotion/react';
import Link from 'next/link';
import Headings from '@/components/atoms/Headings';
import Paragraph from '@/components/atoms/Paragraph';
import Route from '@/utils/Route';
import Text from '@/components/atoms/Text';

const chosenStyle = css`
  height: 100%;
  padding: 150px 164px 116px 164px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  a {
    font-size: var(--small-font);
  }

  h1,
  p,
  li,
  table {
    color: var(--white);
  }

  h1 {
    padding-top: 16px;
    text-shadow: var(--white-glow);
  }

  p,
  ul {
    padding-top: 16px;
  }

  .strong_container {
    font-weight: var(--semibold-weight);

    p:not(:nth-of-type(2)) {
      padding-top: 16px;
    }
  }

  li {
    padding-top: 4px;
  }

  table {
    width: 100%;
    margin: 34px 0;
    border: 1px solid var(--violet1);
    border-collapse: collapse;
    font-size: var(--small-font);
  }

  th,
  td {
    padding: 10px;
    border: 0.5px solid var(--violet1);
  }

  th {
    text-align: left;
  }

  .table_column {
    color: var(--violet1);
  }

  .additional_container {
    margin-top: 32px;
  }
`;

const hiddenStyle = css`
  font-family: 'Pretendard';

  height: 100%;
  padding: 150px 164px 116px 164px;
  overflow-y: scroll;
  color: var(--white);
  font-size: var(--small-font);

  ::-webkit-scrollbar {
    display: none;
  }

  p {
    line-height: 1.2;
  }

  p,
  .reason_container {
    padding-top: 16px;
  }

  .question_container,
  .addition_container {
    margin-top: 64px;
    color: var(--black);
    font-weight: var(--semibold-weight);
  }

  .reason_container {
    ul:not(:first-of-type) {
      padding-top: 16px;
    }

    li {
      margin-top: 8px;
    }
  }
`;

type ChosenPageProps = {
  params: {
    slug: string;
  };
};

export default function Chosen({ params }: ChosenPageProps) {
  const route = Route();
  const paramsSlug = params.slug.includes('hidden')
    ? params.slug.slice(6)
    : params.slug;

  const chosenData = data.choice.filter(
    (choice) => choice.id.toString() === paramsSlug
  );

  const hiddenData = data.hidden.filter(
    (hidden) => hidden.id.toString() === paramsSlug
  );

  return (
    <>
      {route.includes('hidden') ? (
        <div css={hiddenStyle}>
          {hiddenData.map((data) => (
            <div key={'article'}>
              <Text>질문 횟수 : {data.number}</Text>
              {data.question1 ? (
                <div className="text_container">
                  <div className="question_container">
                    <Text>{data.question1.question}</Text>
                  </div>
                  <div className="answer_container">
                    {data.question1.answer.map((answer, idx) => (
                      <Paragraph key={`answer${idx}`}>{answer}</Paragraph>
                    ))}
                    {data.question1.comparison ? (
                      <div className="reason_container">
                        {data.question1.comparison.advantage1 ? (
                          <ul>
                            {data.question1.comparison.advantage1.map(
                              (advantage, idx) => (
                                <li key={`advantage1-${idx}`}>{advantage}</li>
                              )
                            )}
                          </ul>
                        ) : null}
                        {data.question1.comparison.disadvantage1 ? (
                          <ul>
                            {data.question1.comparison.disadvantage1.map(
                              (disadvantage, idx) => (
                                <li key={`disadvantage1-${idx}`}>
                                  {disadvantage}
                                </li>
                              )
                            )}
                          </ul>
                        ) : null}
                        {data.question1.comparison.advantage2 ? (
                          <ul>
                            {data.question1.comparison.advantage2.map(
                              (advantage, idx) => (
                                <li key={`advantage2-${idx}`}>{advantage}</li>
                              )
                            )}
                          </ul>
                        ) : null}
                        {data.question1.comparison.disadvantage2 ? (
                          <ul>
                            {data.question1.comparison.disadvantage2.map(
                              (disadvantage, idx) => (
                                <li key={`disadvantage2-${idx}`}>
                                  {disadvantage}
                                </li>
                              )
                            )}
                          </ul>
                        ) : null}
                      </div>
                    ) : null}
                    {data.question1.result.map((result, idx) => (
                      <Paragraph key={`result${idx}`}>{result}</Paragraph>
                    ))}
                  </div>
                </div>
              ) : null}
              {data.addition1 ? (
                <div className="text_container">
                  <div className="addition_container">
                    <Text>{data.addition1.addition}</Text>
                  </div>
                  <div className="inform_container">
                    {data.addition1.information.map((information, idx) => (
                      <Paragraph key={`information${idx}`}>
                        {information}
                      </Paragraph>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div css={chosenStyle}>
          {chosenData.map((data) => (
            <div key={'article'}>
              <Link href={`/hidden${data.id}`} key={'link'}>
                {data.chapter}
              </Link>
              <Headings heading="h1" key={'title'}>
                {data.title}
              </Headings>
              <div className="text_conatiner" key={'text container'}>
                <div className="strong_container" key={'strong container'}>
                  <Paragraph key={'main text1'}>{data.first1}</Paragraph>
                  {data.first2 ? (
                    <Paragraph key={'main text2'}>{data.first2}</Paragraph>
                  ) : null}
                </div>
                {data.freason ? (
                  <div className="reason_container" key={'reason container1'}>
                    <Paragraph key={'reason text'}>{data.freason}</Paragraph>
                    <ul key={'reason list'}>
                      {data.reason.map((reason, idx) => (
                        <li key={`reason list${idx}`}>{reason}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <Paragraph key={'main text3'}>{data.p1}</Paragraph>
                {data.p2 ? (
                  <Paragraph key={'main text4'}>{data.p2}</Paragraph>
                ) : null}
                {data.p3 ? (
                  <Paragraph key={'main text5'}>{data.p3}</Paragraph>
                ) : null}
                {data.p4 ? (
                  <Paragraph key={'main text6'}>{data.p4}</Paragraph>
                ) : null}
                {data.p5 ? (
                  <Paragraph key={'main text7'}>{data.p5}</Paragraph>
                ) : null}
                {data.p6 ? (
                  <Paragraph key={'main text8'}>{data.p6}</Paragraph>
                ) : null}
                {data.p7 ? (
                  <Paragraph key={'main text9'}>{data.p7}</Paragraph>
                ) : null}
                {data.ereason ? (
                  <div className="reason_container" key={'reason container1'}>
                    <Paragraph key={'reason text'}>{data.ereason}</Paragraph>
                    <ul key={'reason list'}>
                      {data.reason.map((reason, idx) => (
                        <li key={`reason list${idx}`}>{reason}</li>
                      ))}
                    </ul>
                    <Paragraph key={'reason text1'}>{data.ep1}</Paragraph>
                    {data.ep2 ? (
                      <Paragraph key={'reason text2'}>{data.ep2}</Paragraph>
                    ) : null}
                    {data.ep3 ? (
                      <Paragraph key={'reason text3'}>{data.ep3}</Paragraph>
                    ) : null}
                    {data.ep4 ? (
                      <Paragraph key={'reason text4'}>{data.ep4}</Paragraph>
                    ) : null}
                  </div>
                ) : null}
                {data.table ? (
                  <div className="table_container" key={'table container'}>
                    <Paragraph key={'table text1'}>{data.before}</Paragraph>
                    <table key={'table'}>
                      <thead key={'table head'}>
                        <tr key={'table row1'}>
                          <th className="table_column" key={'table head1'}>
                            {data.table.thead1}
                          </th>
                          <th key={'table head2'}>{data.table.thead2}</th>
                          <th key={'table head3'}>{data.table.thead3}</th>
                        </tr>
                      </thead>
                      <tbody key={'table body'}>
                        <tr key={'table row2'}>
                          <td className="table_column" key={'table body1'}>
                            {data.table.tbody1}
                          </td>
                          <td key={'table body2'}>{data.table.tbody2}</td>
                          <td key={'table body3'}>{data.table.tbody3}</td>
                        </tr>
                        <tr key={'table row3'}>
                          <td className="table_column" key={'table body4'}>
                            {data.table.tbody4}
                          </td>
                          <td key={'table body5'}>{data.table.tbody5}</td>
                          <td key={'table body6'}>{data.table.tbody6}</td>
                        </tr>
                        <tr key={'table row4'}>
                          <td className="table_column" key={'table body7'}>
                            {data.table.tbody7}
                          </td>
                          <td key={'table body8'}>{data.table.tbody8}</td>
                          <td key={'table body9'}>{data.table.tbody9}</td>
                        </tr>
                        <tr key={'table row5'}>
                          <td className="table_column" key={'table body10'}>
                            {data.table.tbody10}
                          </td>
                          <td key={'table body11'}>{data.table.tbody11}</td>
                          <td key={'table body12'}>{data.table.tbody12}</td>
                        </tr>
                      </tbody>
                    </table>
                    <Paragraph key={'table text2'}>{data.after1}</Paragraph>
                    {data.after2 ? (
                      <Paragraph key={'table text3'}>{data.after2}</Paragraph>
                    ) : null}
                  </div>
                ) : null}
                {data.additional ? (
                  <div
                    className="additional_container"
                    key={'additional container'}
                  >
                    <Paragraph key={'additional text'}>
                      {data.additional}
                    </Paragraph>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
