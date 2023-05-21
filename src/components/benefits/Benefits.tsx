import { FaSearch, FaUsers, FaFileInvoiceDollar } from "react-icons/fa";

function Benefits() {
  return (
    <div className="py-12 bg-gray-600 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase">Benefícios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Por que escolher nossa plataforma</p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
            Nós fornecemos uma solução intuitiva e eficaz para empresas se conectarem com fornecedores e gerenciarem orçamentos.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <FaSearch className="mx-auto h-12 w-12" />
              <h3 className="mt-2 text-xl leading-7 font-semibold">Pesquisa Eficiente</h3>
              <p className="mt-2 text-base leading-6">
                Encontre facilmente os fornecedores e produtos que você precisa em nosso extenso banco de dados.
              </p>
            </div>
            <div className="text-center">
              <FaUsers className="mx-auto h-12 w-12" />
              <h3 className="mt-2 text-xl leading-7 font-semibold">Rede Ampla de Fornecedores</h3>
              <p className="mt-2 text-base leading-6">Acesse uma ampla rede de fornecedores confiáveis de várias indústrias.</p>
            </div>
            <div className="text-center">
              <FaFileInvoiceDollar className="mx-auto h-12 w-12" />
              <h3 className="mt-2 text-xl leading-7 font-semibold">Gerenciar Orçamentos</h3>
              <p className="mt-2 text-base leading-6">
                Crie e gerencie orçamentos com facilidade, ajudando a otimizar as operações da sua empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
