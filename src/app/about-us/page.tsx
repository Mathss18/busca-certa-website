import { FaBuilding, FaHandshake, FaLightbulb } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="py-12 bg-gray-100 text-gray-700 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Sobre Nós</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-gray-700">Busca Certa</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Somos uma empresa especializada em conectar fornecedores a clientes, facilitando o processo de orçamento e compra de produtos.
          </p>
        </div>
        <div className="mt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center">
          <div className="text-center bg-gray-200 p-6 rounded-lg shadow-lg">
            <FaBuilding className="mx-auto h-12 w-12 text-gray-700" />
            <h3 className="mt-2 text-lg leading-6 font-medium text-gray-700">Nossa Missão</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">
              Facilitar a comunicação entre clientes e fornecedores, criando um ambiente seguro e prático para negócios.
            </p>
          </div>
          <div className="text-center bg-gray-200 p-6 rounded-lg shadow-lg">
            <FaHandshake className="mx-auto h-12 w-12 text-gray-700" />
            <h3 className="mt-2 text-lg leading-6 font-medium text-gray-700">Nossos Valores</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">
              Compromisso com a qualidade, integridade nas negócios e respeito ao cliente e fornecedor.
            </p>
          </div>
          <div className="text-center bg-gray-200 p-6 rounded-lg shadow-lg">
            <FaLightbulb className="mx-auto h-12 w-12 text-gray-700" />
            <h3 className="mt-2 text-lg leading-6 font-medium text-gray-700">Nossa Visão</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">
              Ser referência no mercado como plataforma intermediária para negócios, oferecendo sempre a melhor experiência.
            </p>
          </div>
        </div>
        <div className="lg:text-center mt-10">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Nossa História</h2>
          <p className="mt-2 text-xl text-gray-500 lg:mx-auto">
            A Busca Certa nasceu com o propósito de simplificar as transações entre fornecedores e clientes, tornando-se a principal
            plataforma de orçamento e compra de produtos no mercado.
          </p>
        </div>
        <div className="lg:text-center mt-10">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Conheça a nossa equipe</h2>
          <p className="mt-2 text-xl text-gray-500 lg:mx-auto">
            Nossa equipe é formada por profissionais dedicados que trabalham incansavelmente para oferecer a melhor experiência aos nossos
            usuários.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
