export default function StatsBar() {
  const stats = [
    { value: "Est. 2024", label: "Established" },
    { value: "100%", label: "Satisfaction Guaranteed" },
    { value: "Premium", label: "Products Only" },
  ];

  return (
    <section className="bg-black/80 border-y border-white/5 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-red-primary">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
