import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Financial Platform Engineering",
    description:
      "Composable dashboards, trading tools, and treasury systems tailored to your operating model.",
  },
  {
    title: "Investor-Ready Launches",
    description:
      "Product, brand, and analytics packages built for data rooms, fundraising, and stakeholder updates.",
  },
  {
    title: "Operations Automation",
    description:
      "Backend services, workflow engines, and integrations that keep financial operations resilient around the clock.",
  },
  {
    title: "Security by Design",
    description:
      "Resilience reviews, scenario testing, and observability hooks shipped as part of every engagement.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#010b18] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-18rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#0eb7fb]/20 blur-[140px]" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#015ead]/35 blur-[160px]" />
      </div>
      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10 md:py-14">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/MetaFi_Simple_Dark.svg"
            alt="MetaFi Labs logomark"
            width={48}
            height={48}
            priority
          />
          <span className="hidden text-base font-semibold uppercase tracking-[0.28em] text-sky-100/80 sm:block">
            MetaFi Labs
          </span>
        </Link>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 md:pb-32">
        <section className="grid gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] md:items-center md:gap-10">
          <div className="max-w-2xl space-y-8">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.38em] text-sky-200/80">
              Financial Software Specialists
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              MetaFi Labs is a full-stack product and engineering studio
              advancing modern financial software.
            </h1>
            <p className="text-base text-sky-100/80 sm:text-lg">
              We design, build, and maintain go-to-market ready financial
              products — from portfolio dashboards and digital banking
              experiences to automation services that streamline operations.
            </p>
            <div className="flex items-center gap-4 text-sky-100/70">
              <span className="inline-block h-px w-10 bg-sky-100/30" />
              <span className="text-xs font-semibold uppercase tracking-[0.45em]">
                Build · Ship · Scale
              </span>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center rounded-3xl border border-white/15 bg-white/5 p-8 text-center shadow-[0_0_60px_-25px_rgba(14,183,251,0.6)]">
            <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-[#0eb7fb]/10 blur-3xl" />
            <Image
              src="/MetaFi_Full_Dark.svg"
              alt="MetaFi Labs wordmark"
              width={320}
              height={180}
              className="relative w-full max-w-xs"
            />
            <p className="relative mt-6 text-sm font-medium uppercase tracking-[0.3em] text-sky-200/70">
              Engineering · Brand · Launch
            </p>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#0eb7fb]/40 hover:bg-[#0eb7fb]/8"
            >
              <div className="absolute right-[-2rem] top-[-2rem] h-24 w-24 rounded-full bg-[#015ead]/25 blur-3xl transition group-hover:scale-110" />
              <div className="relative flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/10">
                  <Image
                    src="/MetaFi_Simple_Dark.svg"
                    alt="MetaFi Labs icon"
                    width={36}
                    height={36}
                  />
                </span>
                <h2 className="text-lg font-semibold text-white">
                  {item.title}
                </h2>
              </div>
              <p className="relative mt-4 text-sm leading-6 text-sky-100/80">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#001e38]/90 via-[#012f54]/85 to-[#00213d]/90 p-8">
          <div className="absolute left-1/3 top-[-6rem] h-40 w-40 rounded-full bg-[#0eb7fb]/20 blur-3xl" />
          <div className="absolute bottom-[-8rem] right-[-4rem] h-48 w-48 rounded-full bg-[#015ead]/30 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                What working with us looks like
              </h2>
              <p className="text-sm text-sky-100/85">
                Dedicated engineering pods blend product, backend, data, and
                growth capabilities. We embed with your leadership team, model
                the roadmap, and ship measurable outcomes every sprint.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-sky-100/80">
              <li className="flex items-start gap-3">
                <Image
                  src="/MetaFi_Simple_Dark.svg"
                  alt="MetaFi Labs icon"
                  width={28}
                  height={28}
                  className="mt-0.5"
                />
                <span>
                  Weekly roadmap reviews plus async Loom updates to keep
                  stakeholders aligned.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/MetaFi_Simple_Dark.svg"
                  alt="MetaFi Labs icon"
                  width={28}
                  height={28}
                  className="mt-0.5"
                />
                <span>
                  Partner ecosystem intros spanning compliance experts,
                  go-to-market teams, and strategic advisors ready to accelerate
                  adoption.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/MetaFi_Simple_Dark.svg"
                  alt="MetaFi Labs icon"
                  width={28}
                  height={28}
                  className="mt-0.5"
                />
                <span>
                  Predictable engagement models — sprints, retainers, or
                  embedded squads integrated directly with your company.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 text-sm text-sky-200/70">
            <Image
              src="/MetaFi_Simple_Dark.svg"
              alt="MetaFi Labs icon"
              width={36}
              height={36}
            />
            <span>© {new Date().getFullYear()} MetaFi Labs. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-sky-100/60">
            <Link
              href="https://x.com"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              X / Twitter
            </Link>
            <Link
              href="https://www.linkedin.com"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
