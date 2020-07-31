export const nameValidation = (name: string): boolean => {
  const isName = /^[a-z ,.'-]+$/i;
  return isName.test(name);
};
