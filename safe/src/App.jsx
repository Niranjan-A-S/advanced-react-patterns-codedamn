import { Children, cloneElement, useState } from "react";

const CheckBox = (props) => {
  const [checked, setChecked] = useState(false);
  const { children } = props;

  const allChildren = Children.map(children, (child) => {
    const clone = cloneElement(child, {
      checked,
      setChecked,
    });
    return clone;
  });

  return allChildren;
};

const CheckBoxInput = (props) => {
  const { checked, setChecked } = props;

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    />
  );
};

const Label = (props) => {
  const { children, setChecked } = props;
  // By this way we can pass the props from parent to child

  return (
    <label htmlFor="something" onClick={() => setChecked((prev) => !prev)}>
      {children}
    </label>
  );
};

export const App = () => {
  return (
    <CheckBox>
      <CheckBoxInput />
      <Label>Check box Label </Label>
    </CheckBox>
  );
};
