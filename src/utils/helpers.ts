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
