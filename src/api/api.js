const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_sort=-id"
  );
  const postData = await response.json();
  return postData;
};

const fetchTags = async () => {
  const response = await fetch("http://localhost:3000/tags");
  const tagsData = await response.json();
  return tagsData;
};

const addPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
};

export { fetchPosts, addPost, fetchTags };
