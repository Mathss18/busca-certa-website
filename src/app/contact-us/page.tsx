function ContactUs() {
  return (
    <div className="py-12 bg-gray-100 text-gray-700 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Entre em contato conosco</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-gray-700">Busca Certa</p>
        </div>
        <div className="mt-10">
          <div className="text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-700">Endereço</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">Rua Vilmar Rodrigues, 124, Piracicaba SP, Brasil</p>
          </div>
          <div className="mt-10 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-700">Email</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">contato@buscacertaweb.com</p>
          </div>
          <div className="mt-10 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-700">Telefone</h3>
            <p className="mt-2 text-base leading-6 text-gray-600">(19) 98313-6930</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
