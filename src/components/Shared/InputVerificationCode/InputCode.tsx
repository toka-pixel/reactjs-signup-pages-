import { ChangeEvent, createRef, useCallback, useMemo } from "react";
import "./InputCode.scss";

const InputVerificationCode = () => {
  const inputsRefs = useMemo(
    () => new Array(4).fill(null).map(() => createRef<HTMLInputElement>()),
    [4]
  );

  const focusInput = useCallback(
    (index: number) => {
      const input = inputsRefs[index]?.current;

      if (input) {
        requestAnimationFrame(() => {
          input.focus();
        });
      }
    },
    [inputsRefs]
  );

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    focusInput(index + 1);
  };

  return (
    <div className={"inputCodeContainer"}>
      <div className={"inputs"}>
        {inputsRefs.map((ref, i) => (
          <input
            autoComplete="one-time-code"
            className={"input"}
            key={i}
            onChange={(event) => onInputChange(event, i)}
            ref={ref}
            type="text"
          />
        ))}
      </div>
    </div>
  );
};

export default InputVerificationCode;
