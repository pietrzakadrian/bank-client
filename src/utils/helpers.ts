export const numberValidation = (value: string): boolean => {
  const isNumber = /^[0-9]*$/;
  return isNumber.test(value);
};

export const nameValidation = (name: string): boolean => {
  const isName = /^[a-z ,.'-]+$/i;
  return isName.test(name);
};

export const emailValidation = (email: string): boolean => {
  const isEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+(?:[a-z0-9-]*[a-z0-9])?/;
  return isEmail.test(email);
};

export const truncate = (string: string, maxLength: number = 190): string => {
  if (!string) {
    return '';
  }
  if (string?.length <= maxLength) {
    return string;
  }

  return `${string.substring(0, maxLength)}...`;
};

export const loadState = (): JSON | undefined => {
  try {
    const serializedState = localStorage.getItem('bank2_state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    return localStorage.setItem('bank2_state', serializedState);
  } catch (e) {
    return undefined;
  }
};

export const hasOwnProperties = (inputObject, properties): boolean => {
  if (properties.some(inputObject.hasOwnProperty, inputObject)) {
    return true;
  }

  return false;
};
