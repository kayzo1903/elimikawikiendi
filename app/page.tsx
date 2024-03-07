import BlogPost from "./components/BlogPosts/BlogPost";
import Heropage from "./components/Herosection/Heropage";

export default function Home() {
  return (
    <main className="w-full">
      <Heropage />
      <BlogPost />
    </main>
  );
}
