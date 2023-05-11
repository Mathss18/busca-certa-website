import SearchContent from "@/app/components/search-content/SearchContent";

function Banner() {
  return (
    <div
      className="hero items-start h-80"
      style={{
        backgroundColor: "rgb(11,47,68)",
        background:
          "linear-gradient(90deg, rgba(11,47,68,1) 0%, rgba(45,93,121,1) 28%, rgba(72,124,156,1) 68%, rgba(93,153,190,1) 92%)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content pt-20">
        <div className="max-w-full">
          <h1 className="mb-1 text-2xl font-bold">
            Realize cotações diretamente com fabricantes, distribuidores,
            atacadistas e receba várias propostas!
          </h1>
          <p className="mb-5">100% gratuito e sem compromisso.</p>
          <div className="flex items-center justify-center">
            <SearchContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
