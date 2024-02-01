export const sanatizeUsername = (username) => {
  return (
    username.split(" ").join("").toLowerCase() +
    Math.random().toString(36).slice(-4)
  );
};
