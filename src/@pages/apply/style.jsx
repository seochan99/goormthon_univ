import styled from 'styled-components';
import { Input } from '@goorm-dev/gds-components';

export const RecuritBody = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const BodyTitle = styled.h1`
  margin-bottom: 4rem;
  margin-top: 6.5rem;
`;

export const ApplyHeaderContainer = styled.div`
  background: var(--light-gray-gray-050, #f7f7fa);
  height: 20rem;
  width: 30%;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 1rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 11rem;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;

export const CautionTitle = styled.h3`
  margin-left: 1.5rem;
  margin-bottom: 1.25rem;
`;

export const FormDescription = styled.div`
  width: 100%;
  font-size: 1rem;
  color: #333;
  text-align: left;
  border-radius: var(--space-500);
  border: 1px solid var(--gray-300);
  background: var(--gray-050);
  margin-bottom: 8rem;
  padding: 1.5rem;

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 0.5rem;
  }

  h4 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const CautionWrapper = styled.div`
  margin-top: 2.5rem;
  line-height: 1.25rem;
`;
export const Caution2Li = styled.li`
  color: var(--hint);
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ApplyTitle = styled.h3`
  margin-bottom: 1rem;
`;

export const ApplyTextArea = styled(Input)`
  padding: 0.88rem 1.5rem;
  color: var(--hint);
  /* KOR/paragraph-lgㅣ1rem */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.00625rem;
`;

export const ApplyInput = styled(Input)`
  width: 20rem;
`;
