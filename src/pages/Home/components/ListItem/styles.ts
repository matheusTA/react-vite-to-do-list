import styled from 'styled-components';

interface StyleProps {
  isCheck: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.75rem;
  padding: 1rem;
  background-color: var(--gray-500);
  border: 0.063rem solid #333333;
  border-radius: 0.5rem;
`;

export const Title = styled.p`
  flex: 1;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--gray-100);
  text-decoration-line: line-through;
`;

export const CheckButton = styled.button<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: transparent;
  color: ${({ isCheck }) =>
    isCheck ? 'var(--purple-900)' : 'var(--blue-400)'};
  border: none;

  :hover {
    color: ${({ isCheck }) =>
      isCheck ? 'var(--purple-400)' : 'var(--blue-900)'};
    transition: 0.3s;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  color: var(--gray-300);
  background-color: transparent;
  border-radius: 0.25rem;
  border: none;
  padding: 0.313rem;

  :hover {
    color: var(--red-500);
    background-color: var(--gray-400);
    transition: 0.3s;
  }
`;
