import Image from "next/image";
import HeroSection from "./components/home/hero";
import DeveloperFlow from "./components/home/developer-flow";
import MarkdownEditor from "./components/home/markdown-editor";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <DeveloperFlow/>
      <MarkdownEditor/>
    </>
  );
}
