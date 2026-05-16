import Link from "next/link";

const WHATSAPP_NUMBER = "919XXXXXXXXXX";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Ali, I found STAR Web Design Agency online and would like to discuss a website for my business."
);

const FOOTER_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Footer() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <footer className="bg-darker text-bg">
      <div className="container py-16 md:py-20">
        <FooterTop whatsappHref={whatsappHref} />

        <div className="mt-14 pt-8 border-t border-ink-800 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-ui text-small text-ink-400 hover:text-bg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="font-ui text-small text-ink-400">
            <span className="text-saffron" aria-hidden>
              ✦
            </span>{" "}
            Ali Asgar · Jaipur, India
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-ink-600 text-small font-ui">
          <p>
            © {new Date().getFullYear()} STAR Web Design Agency. All rights
            reserved.
          </p>
          <p className="font-display italic text-ink-400">Built with intent.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterTop({ whatsappHref }: { whatsappHref: string }) {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <div className="max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-1 font-ui font-extrabold text-lg text-bg"
        >
          STAR
          <span className="text-saffron" aria-hidden>
            ✦
          </span>
        </Link>
        <p className="mt-4 font-display italic text-h3 text-ink-200 leading-snug">
          Websites built with intent — for businesses ready to be impossible to
          ignore.
        </p>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-saffron shrink-0"
      >
        WhatsApp Ali
      </a>
    </div>
  );
}
