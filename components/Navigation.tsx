'use client'

typescript
export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#home" className="text-xl font-semibold text-slate-900 tracking-tight">
                Elevate Fitness Studio
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none group"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-slate-900 transition-all duration-500 ease-out origin-center ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-slate-900 transition-all duration-500 ease-out origin-center ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ease-out ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-all duration-700 ease-out ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="flex flex-col h-full pt-32 pb-12 px-8">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-slate-900 hover:text-slate-600 transition-all duration-500 text-3xl font-light tracking-tight py-4 border-b border-slate-100 ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 80 + 100}ms` : '0ms',
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto">
              <div
                className={`text-sm text-slate-400 transition-all duration-500 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: isOpen ? '500ms' : '0ms' }}
              >
                Transform your fitness journey
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

```typescript

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#home" className="text-xl font-semibold text-slate-900 tracking-tight">
                Elevate Fitness Studio
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none group"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-slate-900 transition-all duration-500 ease-out origin-center ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-slate-900 transition-all duration-500 ease-out origin-center ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ease-out ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-all duration-700 ease-out ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="flex flex-col h-full pt-32 pb-12 px-8">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-slate-900 hover:text-slate-600 transition-all duration-500 text-3xl font-light tracking-tight py-4 border-b border-slate-100 ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 80 + 100}ms` : '0ms',
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto">
              <div
                className={`text-sm text-slate-400 transition-all duration-500 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: isOpen ? '500ms' : '0ms' }}
              >
                Transform your fitness journey
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
```