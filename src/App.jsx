export default function TrialChambersHosting() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b,transparent_40%)] opacity-60"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

      {/* Navbar */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-md bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-wider text-cyan-400">
              MAGNETHOST
            </h1>
            <p className="text-xs text-zinc-400">Trial Chambers Edition</p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#features" className="hover:text-cyan-400 transition">Features</a>
            <a href="#plans" className="hover:text-cyan-400 transition">Plans</a>
            <a href="#stats" className="hover:text-cyan-400 transition">Status</a>
            <a href="https://panel.magnethost.qzz.io" className="hover:text-cyan-400 transition">Panel</a>
          </nav>

          <div className="flex gap-3">
            <a
              href="https://panel.magnethost.qzz.io"
              className="px-5 py-2 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black"
            >
              Dashboard
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
              ⚡ Minecraft Hosting Powered by Pterodactyl
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Enter The
              <span className="block text-cyan-400">Trial Chambers</span>
            </h2>

            <p className="mt-6 text-zinc-300 text-lg leading-relaxed max-w-xl">
              Ultra-fast Minecraft hosting with Ryzen CPUs, instant setup,
              DDoS protection, and a futuristic Trial Chambers inspired control
              panel.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://panel.magnethost.qzz.io"
                className="px-7 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition shadow-2xl shadow-cyan-500/30"
              >
                Deploy Server
              </a>

              <a
                href="#plans"
                className="px-7 py-4 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:bg-white/5 transition"
              >
                View Plans
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                <h3 className="text-3xl font-black text-cyan-400">99.9%</h3>
                <p className="text-sm text-zinc-400 mt-1">Uptime</p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                <h3 className="text-3xl font-black text-cyan-400">1Gbps</h3>
                <p className="text-sm text-zinc-400 mt-1">Network</p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                <h3 className="text-3xl font-black text-cyan-400">24/7</h3>
                <p className="text-sm text-zinc-400 mt-1">Support</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-cyan-500/20 rounded-full"></div>

            <div className="relative rounded-[32px] border border-cyan-500/20 bg-zinc-900/80 backdrop-blur-xl p-6 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-bold text-xl">Server Dashboard</h3>
                  <p className="text-sm text-zinc-400">trial-survival-01</p>
                </div>

                <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm border border-green-500/30">
                  Online
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-zinc-300">
                    <span>CPU Usage</span>
                    <span>42%</span>
                  </div>
                  <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full w-[42%] bg-cyan-400"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2 text-zinc-300">
                    <span>RAM Usage</span>
                    <span>5.2GB / 8GB</span>
                  </div>
                  <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full w-[65%] bg-cyan-400"></div>
                  </div>
                </div>

                <div className="rounded-2xl bg-black/40 border border-white/10 p-4 font-mono text-sm text-green-400 h-52 overflow-hidden">
                  <p>[Server thread/INFO]: Loading Trial Chambers...</p>
                  <p>[Server thread/INFO]: Preparing spawn area...</p>
                  <p>[Server thread/INFO]: Done (4.281s)</p>
                  <p>[Async Chat Thread]: Player joined the server</p>
                  <p>[System]: Anti-DDoS enabled</p>
                  <p>[System]: Backups scheduled</p>
                  <p>[Server]: TPS stable at 20.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">Why Choose MagnetHost?</h2>
            <p className="text-zinc-400 mt-4 text-lg">
              Built for survival, modpacks, SMPs, and massive communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ['⚡', 'Instant Setup', 'Deploy Minecraft servers in seconds.'],
              ['🛡️', 'DDoS Protection', 'Protected network with advanced filtering.'],
              ['🌍', 'Global Performance', 'Low latency gameplay worldwide.'],
              ['🎮', 'Modpack Support', 'Forge, Fabric, Paper, Purpur & more.'],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-cyan-500/40 hover:-translate-y-1 transition"
              >
                <div className="text-5xl mb-5">{icon}</div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-zinc-400 mt-3 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="plans" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">Server Plans</h2>
            <p className="text-zinc-400 mt-4 text-lg">
              Pick your chamber difficulty.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Copper',
                ram: '4GB RAM',
                price: '$2/mo',
                featured: false,
              },
              {
                name: 'Trial Elite',
                ram: '8GB RAM',
                price: '$5/mo',
                featured: true,
              },
              {
                name: 'Vault Master',
                ram: '16GB RAM',
                price: '$10/mo',
                featured: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[32px] p-8 border transition hover:-translate-y-1 ${
                  plan.featured
                    ? 'border-cyan-500 bg-cyan-500/10 shadow-2xl shadow-cyan-500/20'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <h3 className="text-3xl font-black">{plan.name}</h3>
                <p className="text-zinc-400 mt-2">{plan.ram}</p>

                <div className="mt-8 text-5xl font-black text-cyan-400">
                  {plan.price}
                </div>

                <ul className="mt-8 space-y-3 text-zinc-300">
                  <li>✔ NVMe SSD Storage</li>
                  <li>✔ Full FTP Access</li>
                  <li>✔ Free Backups</li>
                  <li>✔ Instant Setup</li>
                </ul>

                <button className="mt-8 w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold">
                  Start Hosting
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-cyan-400">MAGNETHOST</h3>
            <p className="text-zinc-500 text-sm mt-1">
              Minecraft Hosting • Trial Chambers Theme
            </p>
          </div>

          <div className="flex gap-6 text-zinc-400 text-sm">
            <a href="#" className="hover:text-cyan-400 transition">Discord</a>
            <a href="#" className="hover:text-cyan-400 transition">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
