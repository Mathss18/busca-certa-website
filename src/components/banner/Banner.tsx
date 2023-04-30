import HomeSearchContent from "../home-search-content/HomeSearchContent";

function Banner() {
  return (
    <div
      className="hero items-start min-h-screen"
      style={{ backgroundImage: `url('assets/images/banner-bg.jpg')` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content pt-28">
        <div className="max-w-full">
          <h1 className="mb-5 text-5xl font-bold">
            Realize cotações diretamente com fabricantes, distribuidores,
            atacadistas e receba várias propostas sem nenhum custo!
          </h1>
          <p className="mb-5">100% gratuito e sem compromisso.</p>
          <div className="flex items-center justify-center">
            <HomeSearchContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
