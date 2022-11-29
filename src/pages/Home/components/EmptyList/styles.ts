import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem;
  row-gap: 1rem;

  border-top: 0.063rem solid var(--gray-400);
  border-radius: 0.5rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const Title = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gray-300);
  font-weight: 400;
  line-height: 140%;
  text-align: center;

  strong {
    font-weight: 700;
  }
`;
