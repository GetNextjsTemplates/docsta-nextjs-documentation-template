import Image from "next/image";
import HeroSection from "./components/home/hero";
import DeveloperFlow from "./components/home/developer-flow";
import MarkdownEditor from "./components/home/markdown-editor";
import KeyFeature from "./components/home/key-feature";
import Sponsors from "./components/home/sponsors";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <DeveloperFlow/>
      <MarkdownEditor/>
      <KeyFeature/>
      <Sponsors/>
    </>
  );
}
