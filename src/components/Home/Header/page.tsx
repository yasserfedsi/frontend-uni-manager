export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Universities", href: "/universities" },
    { name: "Faculties", href: "#" },
    { name: "Departments", href: "#" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white transition-all duration-300 border-b dark:border-b-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-20 flex items-center">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <h1 className="text-lg font-semibold text-black uppercase">
              University Manager
            </h1>
          </div>

          {/* Centered nav links */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-black hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 font-medium transition-colors uppercase
                before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:transform
                before:h-[2px] before:w-0 before:bg-current before:transition-all before:duration-700 hover:before:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
