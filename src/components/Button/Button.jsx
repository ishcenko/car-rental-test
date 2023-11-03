import { StyledButton, TextButton } from './Button.styled';

export default function Button({ text, onClick, width }) {
  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      style={{ width: width }}
    >
      <TextButton>{text}</TextButton>
    </StyledButton>
  );
}
