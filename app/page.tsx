import Header from "./_components/header";
import Footer from "./_components/footer";
import SearchUsername from "./_components/search-username-button";
import FeaturedPins from "./_components/featured-pins";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-6 md:py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-balance text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Get Your Pinned GitHub Repos
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Get a quick overview of your most important GitHub repositories,
                all in one place.
              </p>
            </div>
            <SearchUsername />
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-24">
        {/* <FeaturedPins /> */}
      </section>
    </main>
  );
}
