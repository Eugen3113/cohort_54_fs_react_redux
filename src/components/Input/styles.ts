import styled from "@emotion/styled";

interface InputComponentProps {
  $error?: string | undefined;
  disabled?: boolean;
}

const generateInputBorder = (
  error: string | undefined,
  disabled: boolean | undefined
) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (!!error) {              // с двумя !! проверяем на true или false
      return "#ff6868ff";
    } else {
      return "#3f3f3f";
    }
  }
};



const getBackground = ({ disabled }: InputComponentProps) => {
  if (disabled) {
    return "#f3f4f6";
  } else {
    return "#ffffff";
  }
};

const getColor = ({ disabled }: InputComponentProps) => {
  if (disabled) {
    return "#6b7280";
  } else {
    return "#111827";
  }
};

const getCursor = ({ disabled }: InputComponentProps) => {
  if (disabled) {
    return "not-allowed";
  } else {
    return "text";
  }
};

const getFocusBorderColor = ({ $error, disabled }: InputComponentProps) => {
  if (disabled) {
    return "#d1d5db";
  } else if ($error) {
    return "#dc2626";
  } else {
    return "#2563eb";
  }
};

const getFocusBoxShadow = ({ $error, disabled }: InputComponentProps) => {
  if (disabled) {
    return "transparent";
  } else if ($error) {
    return "rgba(239,68,68,0.15)";
  } else {
    return "rgba(37,99,235,0.15)";
  }
};

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 50px;
  border: 1px solid
    ${({ disabled, $error }) => generateInputBorder($error, disabled)};
  border-radius: 4px;
  padding: 12px;
  outline: none;

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }

      &:focus {
    border-color: ${getFocusBorderColor};
    box-shadow: 0 0 0 3px ${getFocusBoxShadow};
    outline: none;
  }
`;

export const ErrorText = styled.div`
  height: 18px;
  font-size: 16px;
  color: #ff6868ff;
`;

