export const MAX_RANDOM_ID = 1e6;

export const randomId = () => (
  Math.floor(Math.random() * MAX_RANDOM_ID).toString(16)
);
