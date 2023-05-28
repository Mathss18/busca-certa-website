import Copyright from "../components/copyright/Copyright";
import Footer from "../components/footer/Footer";
import "../global.css";
import GlobalProviders from "../GlobalProviders";

export const metadata = {
  title: {
    default: "Busca Certa",
    template: "%s | Busca Certa",
  },
  description: "Busca Certa - Solicite seu orçamento gratuitamente",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Busca Certa, Aplicativo de Orçamentos, Pesquisa de produtos, Fornecedores confiáveis, Orçamentos online, Encontre fornecedores, Compare preços, Melhor aplicativo de cotação, Orçamentos instantâneos, Busca de fornecedores, Serviço de cotação, Fornecedores de produtos, Orçamentos de produtos, Aplicativo Busca Certa, Compra inteligente, Economize com Busca Certa, Encontre os melhores preços, Melhor app para Orçamentos, Fornecedores perto de mim, Faça um orçamento agora"
        />
        <meta property="og:title" content="Busca Certa: Seu Aplicativo de Orçamentos" />
        <meta
          property="og:description"
          content="Pesquise produtos de fornecedores confiáveis e peça um orçamento online com o Busca Certa. Economize tempo e dinheiro com a nossa plataforma fácil de usar."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://buscacertaweb.com.br" />
        <meta property="og:image" content="https://busca-certa-bucket.s3.sa-east-1.amazonaws.com/website/BuscaCertaLogo.svg" />
        <meta property="og:locale" content="pt_BR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:title" content="Busca Certa: Seu Aplicativo de Orçamentos" />
        <meta
          name="twitter:description"
          content="Pesquise produtos de fornecedores confiáveis e peça um orçamento online com o Busca Certa. Economize tempo e dinheiro com a nossa plataforma fácil de usar."
        />
        <meta name="twitter:image" content="https://busca-certa-bucket.s3.sa-east-1.amazonaws.com/website/BuscaCertaLogo.svg"></meta>
      </head>
      <body id="root">
        <GlobalProviders>{children}</GlobalProviders>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
