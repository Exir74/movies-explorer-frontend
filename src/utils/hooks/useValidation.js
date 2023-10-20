// import { useEffect, useState } from 'react';
//
// const useValidation = (value, validations, validity) => {
//   const [isEmpty, setIsEmpty] = useState(true);
//   const [minLengthError, setMinLengthError] = useState(false);
//   const [isEmailError, setIsEmailError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   // const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]
//   // +)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
//   const re = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
//   useEffect(() => {
//     // eslint-disable-next-line guard-for-in,no-restricted-syntax
//     for (const validation in validations) {
//       switch (validation) {
//         case 'minLength':
//           if (value.length < validations[validation]) {
//             setMinLengthError(true);
//           } else {
//             setMinLengthError(false);
//           }
//           break;
//         case 'isEmpty':
//           if (value) {
//             setIsEmpty(false);
//           } else {
//             setIsEmpty(true);
//           }
//           break;
//         case 'isEmail':
//           setIsEmailError(re.test(String(value)));
//           break;
//         default:
//       }
//       if (minLengthError) {
//         setErrorMessage(`Длина дожна быть длинее ${validations.minLength} символов `);
//       } else if (isEmpty) {
//         setErrorMessage('Поле не может быть пустым');
//       } else if (isEmailError) {
//         setErrorMessage('Введите корректный email');
//       }
//     }
//   }, [value]);
//   return {
//     isEmpty,
//     minLengthError,
//     isEmailError,
//     errorMessage,
//     validity,
//   };
// };
// export default useValidation;

import React, { useCallback, useState } from 'react';

function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false); //+

  const defaultError = (input) => {
    if (input.validity.valid) {
      return ('');
    }
    return ('Что-то пошло не так...');
  };
  const handleChange = (evt) => {
    const input = evt.target;
    const { value } = input;
    const { name } = input;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: defaultError(input) }); //+
    setIsValid(input.closest('form').checkValidity());
  };

  const resetFrom = useCallback((newValues = {}, newErrors = {}, newIsValid = {}) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);
  return {
    values, setValues, handleChange, resetFrom, errors, isValid, setIsValid,
  };
}

export default useFormWithValidation;
