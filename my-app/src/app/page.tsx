import Business from "@/components/Business/Business";
import Contact from "@/components/Contact/Contact";
import Contents from "@/components/Contents/Contents";
import Introduction from "@/components/Introduction/Introduction";
import MainLogo from "@/components/MainLogo/MainLogo";
import MainVisual from "@/components/MainVisual/MainVisual";

export default function Home() {
  return (
    <div className="relative">
      <MainVisual />
      <main className="relative z-10">
        <MainLogo />
        <Introduction />
        <Business/>
        <Contents />
        <Contact />
      
      </main>
    </div>
  );
}
