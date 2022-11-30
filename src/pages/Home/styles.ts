import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--gray-600);
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 85%;
  }
`;

export const Content = styled.div`
  max-width: 46rem;
  margin-top: -1.8rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;
