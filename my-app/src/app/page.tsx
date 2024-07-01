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
        <Contents />
        <section className="min-h-screen p-24 bg-gray-900 text-white">
          <h1 className="text-4xl mb-4">サービス内容</h1>
          <p className="text-lg">
            ここに提供するサービスの詳細が入ります。各サービスの特徴や利点を説明します。
          </p>
        </section>
        <section className="min-h-screen p-24 bg-gray-800 text-white">
          <h1 className="text-4xl mb-4">お問い合わせ</h1>
          <p className="text-lg">
            ここにお問い合わせ方法や連絡先情報が入ります。
          </p>
        </section>
      </main>
    </div>
  );
}
