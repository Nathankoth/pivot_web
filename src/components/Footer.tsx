import { Link } from "react-router-dom";

const footerColumns = [
  {
    title: "Shop",
    links: [
      { label: "Shop", href: "/shop" },
      { label: "Drills", href: "/drills" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/support#faq" },
      { label: "Contact", href: "/support#contact" },
      { label: "Shipping", href: "/support#shipping" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Follow",
    links: [
      { label: "Instagram", href: "https://instagram.com/yourhandle", external: true },
      { label: "YouTube", href: "https://youtube.com/yourchannel", external: true },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-12">
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 font-headline text-base font-semibold text-foreground">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© Pivot Guard — Built for players and coaches.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
