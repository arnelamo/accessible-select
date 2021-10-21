import styled from "styled-components";

export const DropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.componentWidth};
  font-size: 1rem;
  background-color: white;
  padding: 6px 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey40};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const List = styled.ul`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  list-style: none;
  padding: 0;
  margin-top: 2px;
  width: ${({ theme }) => theme.componentWidth};
  border: 1px solid ${({ theme }) => theme.colors.grey40};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Arrow = styled.span`
  display: inline-block; 
  align-self: center;
  width: 0; 
  height: 0; 
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid ${({ theme }) => theme.colors.grey70};
`

export const ListOption = styled.li`
  padding: 6px;
  cursor: pointer;
  &:focus {
    background-color: ${({ theme }) => theme.colors.grey30};
    outline: none;
  }

  &:hover, &[aria-selected="true"] {
    background-color: ${({ theme }) => theme.colors.grey30};
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.grey100};
`

export const Dot = styled.span`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;

  background-color: ${({ color, theme }) => {
    if (color === 'green') {
      return theme.colors.green
    } else if ( color === 'blue') {
      return theme.colors.blue
    } else if (color === 'orange') {
      return theme.colors.orange
    } else if (color === 'red') {
      return theme.colors.red
    }
  }};
`