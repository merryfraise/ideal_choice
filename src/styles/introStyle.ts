import { css } from '@emotion/react';

const introStyle = css`
  height: 100%;
  text-align: center;
  font-size: 28px;
  color: var(--violet3);
  font-weight: var(--semibold-weight);
  text-shadow: var(--violet-glow50);

  .p_intro {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default introStyle;
