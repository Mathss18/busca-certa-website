import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        {/* <div>
          <span className="footer-title">Serviços</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
        </div> */}
        <div>
          <span className="footer-title">Empresa</span>
          <Link href="/about-use" className="link link-hover">
            Sobre Nós
          </Link>
          <Link href="/contact-us" className="link link-hover">
            Contato
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link href="/terms-of-use" className="link link-hover">
            Termos de uso
          </Link>
          <Link href="/privacy-policy" className="link link-hover">
            Politicas de Privacidade
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
