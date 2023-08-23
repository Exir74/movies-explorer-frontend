import { useState } from 'react';

function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (evt) => {
    const input = evt.target;
    const { value } = input;
    const { name } = input;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}

export default useForm;
