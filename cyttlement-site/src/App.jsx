export default function App() {
  const services = [
    {
      title: "Stablecoin Settlement Infrastructure",
      description:
        "Move value with speed and clarity using institutional-grade stablecoin settlement workflows designed for modern treasury operations.",
    },
    {
      title: "Cross-Border Payment Rails",
      description:
        "Enable faster international business payments with programmable, transparent rails that reduce friction across jurisdictions.",
    },
    {
      title: "Treasury & Workflow Design",
      description:
        "We help businesses design approval flows, wallet structures, controls, and operating models for secure digital asset movement.",
    },
    {
      title: "Compliance-Ready Integration",
      description:
        "Build with governance in mind through structured onboarding, transaction screening alignment, and auditable payment operations.",
    },
  ];

  const features = [
    "Faster global settlement cycles",
    "Transparent transaction visibility",
    "Programmable payment workflows",
    "Business-grade controls and approvals",
    "Stablecoin-native treasury operations",
    "Designed for enterprise adoption",
  ];

  const stats = [
    { value: "24/7", label: "settlement readiness" },
    { value: "Global", label: "payment reach" },
    { value: "Stablecoin", label: "enabled rails" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white selection:bg-blue-300/30">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#3757ff]/25 blur-3xl" />
        <div className="absolute left-[10%] top-[28rem] h-72 w-72 rounded-full bg-[#1130c7]/20 blur-3xl" />
        <div className="absolute right-[8%] top-[16rem] h-80 w-80 rounded-full bg-[#6889ff]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,119,255,0.13),transparent_38%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_20%)]" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-4">
            <img
              src="/Copy of Your paragraph text (1).png"
              alt="Cyttlement logo"
              className="h-14 w-auto object-contain"
            />
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#why" className="transition hover:text-white">Why Cyttlement</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-medium text-[#08112b] transition hover:scale-[1.02]"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[#7f97ff]/25 bg-[#0b1536]/80 px-4 py-2 text-xs font-medium text-[#bbcbff] backdrop-blur">
              Cross-border payments powered by stablecoins
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
              The modern settlement layer for businesses moving value globally.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              Cyttlement helps businesses execute digital asset settlements and cross-border payments through stablecoin-enabled rails with greater speed, visibility, and control.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#3757ff] px-6 py-3.5 text-sm font-semibold shadow-2xl shadow-blue-900/40 transition hover:scale-[1.02]"
              >
                Talk to Us
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="mt-1 text-sm text-white/55">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-[#5473ff]/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07102a]/90 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#0c173d] via-[#091229] to-[#060b1c] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/50">Live workflow</div>
                    <div className="mt-1 text-xl font-semibold">Cross-border settlement</div>
                  </div>
                  <div className="rounded-full border border-[#6f87ff]/30 bg-[#10205a] px-3 py-1 text-xs text-[#c8d4ff]">
                    Stablecoin Rail
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    "Client funds approved",
                    "Settlement instruction created",
                    "Stablecoin transfer initiated",
                    "Recipient confirmed",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3757ff] text-sm font-semibold">
                        0{index + 1}
                      </div>
                      <div className="text-sm text-white/80">{step}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="text-sm text-white/55">Operational outcome</div>
                      <div className="mt-2 text-3xl font-semibold">Faster settlement, fewer intermediaries</div>
                    </div>
                  </div>
                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-[#6f87ff] to-[#3757ff]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/75">
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#93a9ff]">Services</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Built for businesses adopting digital asset settlement.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              We structure practical payment and treasury workflows around stablecoin-enabled movement of value, with a focus on speed, transparency, and enterprise readiness.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#6f87ff]/40 hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0c163b] text-[#c7d4ff]">
                  ✦
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/65">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[#07102a]/80 p-8 backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#93a9ff]">Why Cyttlement</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                A cleaner way to explain and execute modern settlement.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Purpose-built positioning for digital asset payments",
                "Clear service language for corporate adoption",
                "Enterprise-style user journeys and calls to action",
                "Ultramarine visual identity with a modern fintech feel",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#93a9ff]">Process</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                From inquiry to settlement design.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                We work with clients to understand their payment corridors, operational requirements, and control expectations before shaping the right settlement model.
              </p>
            </div>

            <div className="space-y-4">
              {[
                ["01", "Discovery", "Understand business flows, jurisdictions, counterparties, and current settlement pain points."],
                ["02", "Structuring", "Map stablecoin-based payment workflows and define operational controls for execution."],
                ["03", "Integration", "Align reporting, approvals, and treasury processes for a practical working model."],
                ["04", "Execution", "Support implementation of cross-border settlement rails with clearer visibility and speed."],
              ].map(([num, title, desc]) => (
                <div key={num} className="flex gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-xl font-semibold text-[#90a7ff]">{num}</div>
                  <div>
                    <div className="text-xl font-semibold">{title}</div>
                    <div className="mt-2 text-white/65">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="overflow-hidden rounded-[2.25rem] border border-[#6f87ff]/20 bg-gradient-to-br from-[#0f1a46] via-[#09122b] to-[#050816] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#a8b8ff]">Get started</div>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                  Explore how Cyttlement can modernize your settlement workflows.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                  Whether you are looking at stablecoin-based treasury movement, cross-border business payments, or a broader digital asset settlement strategy, we can help structure the right approach.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                <div className="text-sm text-white/55">Contact</div>
                <div className="mt-3 text-2xl font-semibold">test@cyttlement.com</div>
                <div className="mt-2 text-white/60">Kuala Lumpur, Malaysia</div>
                <a
                  href="mailto:hello@cyttlement.com"
                  className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#08112b] transition hover:scale-[1.02]"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
