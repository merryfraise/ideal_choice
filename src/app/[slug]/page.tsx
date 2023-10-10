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
    margin-top: 16px;
    font-size: 44px;
    line-height: 60px;
    text-shadow: var(--white-glow);
  }

  p,
  ul {
    margin-top: 24px;
  }

  .strong_container {
    font-weight: var(--semibold-weight);

    p:not(:nth-of-type(2)) {
      margin-top: 40px;
    }

    p:nth-of-type(2) {
      margin-top: 0px;
    }
  }

  li {
    margin-top: 8px;
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

  p,
  li {
    line-height: 1.2;
  }

  p,
  .reason_container,
  .list_container {
    margin-top: 24px;
  }

  .question_container,
  .addition_container {
    margin-top: 64px;
    color: var(--black);
    font-weight: var(--semibold-weight);
  }

  .reason_container,
  .list_container,
  .difference_container {
    ul:first-of-type {
      margin-top: 24px;
    }

    ul:not(:first-of-type) {
      margin-top: 16px;
    }
  }

  li {
    margin-top: 8px;
  }

  table {
    width: 100%;
    margin: 34px 0;
    border: 1px solid var(--black);
    border-collapse: collapse;
    font-size: var(--small-font);
  }

  th,
  td {
    padding: 10px;
    border: 0.5px solid var(--black);
  }

  th {
    text-align: left;
  }

  .table_column {
    color: var(--black);
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
                      <Paragraph key={`answer1-${idx}`}>{answer}</Paragraph>
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
                    {data.question1.result
                      ? data.question1.result.map((result, idx) => (
                          <Paragraph key={`result1-${idx}`}>{result}</Paragraph>
                        ))
                      : null}
                    {data.question1.table ? (
                      <div className="table_container">
                        <table>
                          <thead>
                            <tr>
                              <th className="table_column">
                                {data.question1.table.thead1}
                              </th>
                              <th>{data.question1.table.thead2}</th>
                              <th>{data.question1.table.thead3}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="table_column">
                                {data.question1.table.tbody1}
                              </td>
                              <td>{data.question1.table.tbody2}</td>
                              <td>{data.question1.table.tbody3}</td>
                            </tr>
                            <tr>
                              <td className="table_column">
                                {data.question1.table.tbody4}
                              </td>
                              <td>{data.question1.table.tbody5}</td>
                              <td>{data.question1.table.tbody6}</td>
                            </tr>
                            <tr>
                              <td className="table_column">
                                {data.question1.table.tbody7}
                              </td>
                              <td>{data.question1.table.tbody8}</td>
                              <td>{data.question1.table.tbody9}</td>
                            </tr>
                            <tr>
                              <td className="table_column">
                                {data.question1.table.tbody10}
                              </td>
                              <td>{data.question1.table.tbody11}</td>
                              <td>{data.question1.table.tbody12}</td>
                            </tr>
                            {data.question1.table.tbody13 ? (
                              <tr>
                                <td className="table_column">
                                  {data.question1.table.tbody13}
                                </td>
                                <td>{data.question1.table.tbody14}</td>
                                <td>{data.question1.table.tbody15}</td>
                              </tr>
                            ) : null}
                            {data.question1.table.tbody16 ? (
                              <tr>
                                <td className="table_column">
                                  {data.question1.table.tbody16}
                                </td>
                                <td>{data.question1.table.tbody17}</td>
                                <td>{data.question1.table.tbody18}</td>
                              </tr>
                            ) : null}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                    {data.question1.information
                      ? data.question1.information.map((information, idx) => (
                          <Paragraph key={`additional inforation1-${idx}`}>
                            {information}
                          </Paragraph>
                        ))
                      : null}
                    {data.question1.list ? (
                      <div className="list_container">
                        <ul>
                          {data.question1.list.map((list, idx) => (
                            <li key={`list1-${idx}`}>{list}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {data.question1.opinion
                      ? data.question1.opinion.map((opinion, idx) => (
                          <Paragraph key={`opinion1-${idx}`}>
                            {opinion}
                          </Paragraph>
                        ))
                      : null}
                    {data.question1.difference ? (
                      <div className="difference_container">
                        <ul>
                          {data.question1.difference.map((difference, idx) => (
                            <li key={`difference1-${idx}`}>{difference}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {data.question1.conclusion
                      ? data.question1.conclusion.map((conclusion, idx) => (
                          <Paragraph key={`conclusion1-${idx}`}>
                            {conclusion}
                          </Paragraph>
                        ))
                      : null}
                  </div>
                </div>
              ) : null}
              {data.question2 ? (
                <div className="text_container">
                  <div className="question_container">
                    <Text>{data.question2.question}</Text>
                  </div>
                  <div className="answer_container">
                    {data.question2.answer.map((answer, idx) => (
                      <Paragraph key={`answer2-${idx}`}>{answer}</Paragraph>
                    ))}
                    {data.question2.reason ? (
                      <div className="reason_container">
                        <ul>
                          {data.question2.reason.map((reason, idx) => (
                            <li key={`reason2-${idx}`}>{reason}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {data.question2.table ? (
                      <div className="table_container">
                        <table>
                          <thead>
                            <tr>
                              <th className="table_column">
                                {data.question2.table.thead1}
                              </th>
                              <th>{data.question2.table.thead2}</th>
                              <th>{data.question2.table.thead3}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="table_column">
                                {data.question2.table.tbody1}
                              </td>
                              <td>{data.question2.table.tbody2}</td>
                              <td>{data.question2.table.tbody3}</td>
                            </tr>
                            <tr>
                              <td className="table_column">
                                {data.question2.table.tbody4}
                              </td>
                              <td>{data.question2.table.tbody5}</td>
                              <td>{data.question2.table.tbody6}</td>
                            </tr>
                            <tr>
                              <td className="table_column">
                                {data.question2.table.tbody7}
                              </td>
                              <td>{data.question2.table.tbody8}</td>
                              <td>{data.question2.table.tbody9}</td>
                            </tr>
                            <tr>
                              <td className="table_column">
                                {data.question2.table.tbody10}
                              </td>
                              <td>{data.question2.table.tbody11}</td>
                              <td>{data.question2.table.tbody12}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                    {data.question2.result
                      ? data.question2.result.map((result, idx) => (
                          <Paragraph key={`result2-${idx}`}>{result}</Paragraph>
                        ))
                      : null}
                  </div>
                </div>
              ) : null}
              {data.question3 ? (
                <div className="text_container">
                  <div className="question_container">
                    <Text>{data.question3.question}</Text>
                  </div>
                  <div className="answer_container">
                    {data.question3.answer.map((answer, idx) => (
                      <Paragraph key={`answer3-${idx}`}>{answer}</Paragraph>
                    ))}
                  </div>
                </div>
              ) : null}
              {data.question4 ? (
                <div className="text_container">
                  <div className="question_container">
                    <Text>{data.question4.question}</Text>
                  </div>
                  <div className="answer_container">
                    {data.question4.answer.map((answer, idx) => (
                      <Paragraph key={`answer4-${idx}`}>{answer}</Paragraph>
                    ))}
                  </div>
                </div>
              ) : null}
              {data.question5 ? (
                <div className="text_container">
                  <div className="question_container">
                    <Text>{data.question5.question}</Text>
                  </div>
                  <div className="answer_container">
                    {data.question5.answer.map((answer, idx) => (
                      <Paragraph key={`answer5-${idx}`}>{answer}</Paragraph>
                    ))}
                  </div>
                </div>
              ) : null}
              {data.question6 ? (
                <div className="text_container">
                  <div className="question_container">
                    <Text>{data.question6.question}</Text>
                  </div>
                  <div className="answer_container">
                    {data.question6.answer.map((answer, idx) => (
                      <Paragraph key={`answer6-${idx}`}>{answer}</Paragraph>
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
                      <Paragraph key={`information1-${idx}`}>
                        {information}
                      </Paragraph>
                    ))}
                  </div>
                </div>
              ) : null}
              {data.addition2 ? (
                <div className="text_container">
                  <div className="addition_container">
                    <Text>{data.addition2.addition}</Text>
                  </div>
                  <div className="inform_container">
                    {data.addition2.information.map((information, idx) => (
                      <Paragraph key={`information2-${idx}`}>
                        {information}
                      </Paragraph>
                    ))}
                  </div>
                  {data.addition2.table ? (
                    <div className="table_container">
                      <table>
                        <thead>
                          <tr>
                            <th className="table_column">
                              {data.addition2.table.thead1}
                            </th>
                            <th>{data.addition2.table.thead2}</th>
                            <th>{data.addition2.table.thead3}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="table_column">
                              {data.addition2.table.tbody1}
                            </td>
                            <td>{data.addition2.table.tbody2}</td>
                            <td>{data.addition2.table.tbody3}</td>
                          </tr>
                          <tr>
                            <td className="table_column">
                              {data.addition2.table.tbody4}
                            </td>
                            <td>{data.addition2.table.tbody5}</td>
                            <td>{data.addition2.table.tbody6}</td>
                          </tr>
                          <tr>
                            <td className="table_column">
                              {data.addition2.table.tbody7}
                            </td>
                            <td>{data.addition2.table.tbody8}</td>
                            <td>{data.addition2.table.tbody9}</td>
                          </tr>
                          <tr>
                            <td className="table_column">
                              {data.addition2.table.tbody10}
                            </td>
                            <td>{data.addition2.table.tbody11}</td>
                            <td>{data.addition2.table.tbody12}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : null}
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
