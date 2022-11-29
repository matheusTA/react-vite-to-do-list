import styled from 'styled-components';

interface TextType {
  type: 'TotalTasks' | 'FinishedTasks';
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
`;

export const Badge = styled.span`
  background-color: var(--gray-400);
  color: var(--white);
  padding: 0.125rem 0.5rem;
  border-radius: 62.438rem;
`;

export const Text = styled.p<TextType>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  color: ${({ type }) =>
    type === 'TotalTasks' ? 'var(--blue-400)' : 'var(--purple-400)'};
  font-weight: 700;
`;
