import posts from "../posts.json";
import { DateLink } from "./date-link";
import { cn } from "@/lib/utils";

// Define a type for the post
type Post = {
  name: string;
  path: string;
  year: string;
};

// Ensure the imported posts are of the correct type
const typedPosts: Post[] = posts as Post[];

interface PostsProps {
  limit?: number;
  className?: string;
}

export const Posts = ({ limit = typedPosts.length, className }: PostsProps) => {
  return (
    <div className={cn("grid gap-4", className)}>
      {typedPosts
        .sort((a, b) => b.year.localeCompare(a.year))
        .slice(0, limit)
        .map((post) => (
          <DateLink
            key={post.path}
            name={post.name}
            href={post.path}
            year={post.year}
          />
        ))}
    </div>
  );
};
