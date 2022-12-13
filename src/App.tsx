import { useState } from "react";

interface IButton {
  color: string;
  incrementValue: number;
  underline: boolean;
}

export const App = () => {
  //simple pattern
  const props = { incrementValue: 2, underline: true };

  return (
    <>
      <Button color="black" {...props} />
      <Button color="blue" {...props} />
      <Button color="green" {...props} />
    </>
  );
};

export const Button = (props: IButton) => {
  const [count, setCount] = useState<number>(0);
  const { color, incrementValue, underline } = props;

  return (
    <button
      style={{ color, textDecoration: underline ? "underline" : undefined }}
      onClick={() => setCount(count + incrementValue)}
    >
      Button {count}
    </button>
  );
};
