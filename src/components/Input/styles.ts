import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
`;

export const InputText = styled.input`
  flex: 1;
  font-family: 'Inter';
  font-size: 1rem;
  padding: 1rem;
  color: var(--gray-300);
  border: 0.063rem solid var(--gray-700);
  background-color: var(--gray-500);
  border-radius: 0.5rem;
  outline: none;
`;

export const Button = styled.button`
  font-family: 'Inter';
  font-size: 0.875rem;
  background-color: var(--blue-900);
  color: var(--white);
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: var(--blue-400);
    transition: 0.3s;
  }
`;
