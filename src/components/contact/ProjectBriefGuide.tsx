const usefulContext = [
  {
    title: "What currently requires manual work?",
  },
  {
    title: "What result should the system produce?",
  },
  {
    title: "Which tools or services are already involved?",
  },
  {
    title: "Are there important constraints or deadlines?",
  },
];

const discussionTopics = [
  "AI workflows",
  "Telegram bots",
  "API integrations",
  "Web applications",
  "Data processing",
  "CRM automation",
];

export function ProjectBriefGuide() {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          Useful context
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
              <p className="text-xs leading-relaxed text-zinc-300">
                {item.title}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-700">
          Typical discussions
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
