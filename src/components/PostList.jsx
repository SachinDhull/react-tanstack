import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { addPost, fetchPosts, fetchTags } from "../api/api";

const PostList = () => {
  const {
    data: postData = [],
    isError,
    isLoading,
    error,
    a,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  const {
    mutate,
    isError: isPostError,
    isPending,
    error: postError,
    reset,
  } = useMutation({
    mutationFn: addPost,
  });

  const { data: tagsData = [] } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });
  console.log(tagsData);

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys());
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your post..."
          className="postbox"
          name="title"
        />
        <div className="tags">
          {tagsData?.map((tag) => {
            return (
              <div key={tag}>
                <input name={tag} id={tag} type="checkbox" />
                <label htmlFor={tag}>{tag}</label>
              </div>
            );
          })}
        </div>
        <button>Post</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error?.message}</p>}
      {!isLoading && !isError && postData.length === 0 && (
        <p>No posts available.</p>
      )}
      {postData?.map((post) => {
        return (
          <div key={post.id} className="post">
            {post.title}
          </div>
        );
      })}
    </div>
  );
};

export default PostList;

// test comment to check the git commit
