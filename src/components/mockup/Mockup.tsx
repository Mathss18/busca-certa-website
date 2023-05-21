"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function Mockup() {
  return (
    <div className="py-12 bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Entenda como funciona</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-gray-700">Seu facilitador de negócios</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nossa solução atua como ponto intermediário, facilitando a comunicação entre clientes e fornecedores.
          </p>
        </div>
        <div className="mt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center">
          <div className="text-center sm:text-left bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg leading-6 font-medium text-gray-700">Visão do Fornecedor</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">
              Quando você cria um novo orçamento, o fornecedor recebe uma notificação imediatamente.
            </p>
            <div className="mt-4 flex justify-center sm:justify-start">
              <Image src="/assets/images/mockup-1.png" alt="Hero" width={400} height={200} />
            </div>
          </div>
          <div className="text-center sm:text-right bg-gray-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg leading-6 font-medium text-gray-700">Visão do Cliente</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">
              Quando o fornecedor responde a seu orçamento, você recebe uma notificação com o preço.
            </p>
            <div className="mt-4 flex justify-center sm:justify-end">
              <Image src="/assets/images/mockup-2.png" alt="Hero" width={400} height={200} />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="px-8 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Comece agora <FaArrowRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mockup;
