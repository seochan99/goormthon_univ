import styled from 'styled-components';

export const BenefitWrapper = styled.div`
  height: 100vh;

  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  padding: 9.44rem;
`;

export const HeaderTitleText = styled.h2`
  color: var(--light-black-black, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  width: 100%;
  text-align: start;
`;

export const BenefitItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BenefitImgWrapper = styled.div`
  background-color: ${({ $bgColor }) => $bgColor};
  width: 19rem;
  height: 13.6rem;
  border-radius: 1rem 1rem 0rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BenefitImg = styled.img`
  width: max-content;
  height: max-content;
`;

export const BenefitContentsWrapper = styled.div`
  background-color: var(--light-white-white-light, #fff);
  border-radius: 0rem 0rem var(--Spacing-space-500, 1rem) var(--Spacing-space-500, 1rem);
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  width: 19rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 1.25rem;
`;

export const BenefitTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BenefitTitle = styled.h3`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  width: 100%;
  text-align: left;
`;

export const BenefitDescription = styled.p`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  width: 100%;
  text-align: left;
  white-space: pre-wrap;
`;

export const Icon = styled.img`
  width: var(--size-size-500, 2.5rem);
  height: var(--size-size-500, 2.5rem);
`;

export const BenefitListWrapper = styled.div`
  display: flex;
  gap: 2.06rem;
  width: 100%;
  padding: 0.44rem;
  overflow-x: scroll;
  margin-top: 3.69rem;
`;
