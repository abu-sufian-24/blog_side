import { useState } from 'react';

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleClear = () => {
    setValue('');
  };
  return {
    Attr: {
      value: value,
      onChange: handleChange,
    },
    onClear: handleClear,
  };
}
