export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('bankapp_state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    return localStorage.setItem('bankapp_state', serializedState);
  } catch (e) {
    return undefined;
  }
};
