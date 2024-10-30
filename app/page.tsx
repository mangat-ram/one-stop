import Blogs from "@/components/Blogs";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Blogs />
    </main>
  );
}
