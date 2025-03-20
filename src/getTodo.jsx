const getTodo = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
};

export { getTodo };
