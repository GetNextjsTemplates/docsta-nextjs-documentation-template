import HeroSection from "./components/home/hero";
import DeveloperFlow from "./components/home/developer-flow";
import MarkdownEditor from "./components/home/markdown-editor";
import KeyFeature from "./components/home/key-feature";
import Sponsors from "./components/home/sponsors";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Docstra",
};

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
