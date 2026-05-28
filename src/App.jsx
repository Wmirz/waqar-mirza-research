const interests = [
  "Reinforcement learning",
  "Multi-agent systems",
  "Stochastic Optimization",
  "Game dynamics",
];

const work = [
  {
    title: "Finite-Time Analysis of Risk-Sensitive RL via Noisy Power Iteration",
    venue: "Preprint",
    description:
      "Studies finite-time guarantees for risk-sensitive reinforcement learning by viewing the learning dynamics through the lens of noisy power iteration.",
    tags: ["Risk-Sensitive RL", "Finite-Time Analysis", "Theory"],
    links: [    ],
  },
  {
    title: "Learning with Coupled Uncertainty",
    venue: "RLC, accepted",
    description:
      "Introduces a coupled-uncertainty framework for online learning, where coarse measurements and ground-truth feedback are statistically related. The paper proposes CUUCB, an upper-confidence-bound algorithm that learns and exploits this covariance structure.",
    tags: ["Bandits", "Coupled Uncertainty", "Theory"],
    links: [
      { label: "OpenReview", url: "https://openreview.net/forum?id=5W2NIIx3Dh&noteId=5W2NIIx3Dh" },
      { label: "Paper", url: "https://openreview.net/pdf?id=5W2NIIx3Dh" },
    ],
  },
  {
    title: "Cascaded Group Testing",
    venue: "2024 IEEE Information Theory Workshop (ITW)",
    description:
      "Introduces a variant of group testing where each ordered test returns the first defective item in the sequence. The paper studies adaptive and non-adaptive recovery guarantees, including optimal adaptive recovery in K tests and explicit non-adaptive designs with improved test complexity for constant K.",
    tags: ["Group Testing", "Information Theory", "Combinatorics"],
    links: [
      { label: "IEEE", url: "https://ieeexplore.ieee.org/document/10807006" },
      { label: "arXiv", url: "https://arxiv.org/abs/2405.17917" },
    ],
  },
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ef] text-neutral-950">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[35%] h-96 w-96 rounded-full bg-violet-200/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl space-y-8 px-6 py-12 md:py-20">
        <section className="grid gap-8 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-xl shadow-neutral-900/5 backdrop-blur md:grid-cols-[430px_1fr] md:p-8">
          <div>
            <img
              src="/profile.jpg"
              alt="Waqar Mirza"
              className="h-[30rem] w-full rounded-[1.5rem] object-cover shadow-sm"
            />

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:wmirza608@gmail.com"
                className="block rounded-full bg-neutral-950 px-4 py-3 text-center font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Email me
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://scholar.google.com/citations?user=-nwrSRoAAAAJ&hl=en"
                  className="rounded-full bg-white px-3 py-2 text-center text-neutral-700 ring-1 ring-neutral-200 transition hover:bg-neutral-100"
                >
                  Scholar
                </a>
                <a
                  href="https://github.com/Wmirz"
                  className="rounded-full bg-white px-3 py-2 text-center text-neutral-700 ring-1 ring-neutral-200 transition hover:bg-neutral-100"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-2 md:p-6">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
              Researcher
            </p>

            <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
              Waqar Mirza
            </h1>

            <p className="mt-5 text-xl leading-8 text-neutral-700">
              2nd Year PhD student at Caltech
            </p>

            <div className="mt-10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                About
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-2xl">
                I study algorithms for learning in uncertain, strategic, and
                dynamically evolving environments.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
                My work sits at the intersection of reinforcement learning,
                optimization, and game dynamics. I am especially interested in
                settings involving robustness, uncertainty, or interactions
                between multiple decision-makers.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-xl shadow-neutral-900/5 backdrop-blur md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            Research interests
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-[#fff7ed] px-4 py-2 text-sm font-medium text-neutral-800 ring-1 ring-orange-200/70"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                Selected work
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Papers
              </h2>
            </div>
          </div>

          <div className="grid gap-4">
            {work.map((item) => (
              <article
                key={item.title}
                className="group rounded-[2rem] border border-white/70 bg-white/75 p-7 shadow-xl shadow-neutral-900/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-900/10"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {item.venue}
                    </p>
                    <p className="mt-4 max-w-4xl leading-7 text-neutral-700">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition group-hover:bg-neutral-800"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white/75 p-6 shadow-xl shadow-neutral-900/5 ring-1 ring-white/70 backdrop-blur">
            <p className="text-3xl font-semibold">Theory</p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Regret bounds, finite-time guarantees, convergence of learning dynamics.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/75 p-6 shadow-xl shadow-neutral-900/5 ring-1 ring-white/70 backdrop-blur">
            <p className="text-3xl font-semibold">Algorithms</p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Designing methods for decision-making under robust and multi-agent settings.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/75 p-6 shadow-xl shadow-neutral-900/5 ring-1 ring-white/70 backdrop-blur">
            <p className="text-3xl font-semibold">Dynamics</p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Studying how learning processes evolve in games, markets, and
              multi-agent environments.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-xl shadow-neutral-900/5 backdrop-blur md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Interested in related problems?
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-neutral-700">
            I am happy to talk about research ideas, collaborations, or related
            problems in learning theory, stochastic systems, and games.
          </p>
          <a
            href="mailto:wmirza608@gmail.com"
            className="mt-6 inline-block rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            wmirza608@gmail.com
          </a>
        </section>
      </div>
    </main>
  );
}