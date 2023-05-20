import Image from "next/image";

function Copyright() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-white">&copy; Busca Certa - Todos direitos reservados.</p>
        <div>
          <Image src="/assets/images/methods.png" alt="methods" className="h-5" width={250} height={56} />
        </div>
      </div>
    </div>
  );
}

export default Copyright;
