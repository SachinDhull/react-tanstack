import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { fetchPosts } from "./api/api";
import PostList from "./components/PostList";
import Student from "./components/Student";

function App() {
  const { data, isLoading, isError, error, status } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // console.log(data, isLoading, status);

  return (
    <div className="mainDiv">
      {/* <h2>My Posts</h2> */}
      {/* <PostList /> */}
      <Student name="Sachin" age={30} isStudent={true} />
    </div>
  );
}

export default App;
