const usefulContext = [
  {
    title: "Current process",
    description: "What happens today, including the manual steps or friction.",
  },
  {
    title: "Desired result",
    description: "What the system should make clearer, faster, or more reliable.",
  },
  {
    title: "Tools and data",
    description: "The services, APIs, files, or databases already involved.",
  },
  {
    title: "Constraints",
    description: "Important requirements, dependencies, or operating limits.",
  },
];

const discussionTopics = [
  "AI-assisted workflows",
  "Telegram assistants",
  "API integrations",
  "Data processing",
  "Internal web applications",
  "CRM automation",
];

export function ProjectBriefGuide() {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          Useful context for a first message
        </p>
        <span className="font-mono text-[9px] text-zinc-700">04</span>
      </div>

      <ol>
        {usefulContext.map((item, index) => (
          <li
            key={item.title}
            className="grid grid-cols-[30px_1fr] gap-3 border-b border-white/[0.07] py-5 sm:grid-cols-[36px_1fr]"
          >
            <span className="pt-0.5 font-mono text-[9px] text-zinc-700">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-xs font-medium text-zinc-300">{item.title}</p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-700">
          Relevant problems
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {discussionTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-md border border-white/[0.06] px-2.5 py-1.5 font-mono text-[8px] text-zinc-600"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
