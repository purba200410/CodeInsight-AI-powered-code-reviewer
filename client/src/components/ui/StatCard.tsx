interface Props {
  title: string;
  value: number | string;
  color?: string;
}

const colorClasses: Record<string, string> = {
  blue: "text-blue-400",
  green: "text-green-400",
  red: "text-red-400",
  yellow: "text-yellow-400",
};

export default function StatCard({
  title,
  value,
  color = "blue",
}: Props) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h2 className={`mt-3 text-4xl font-bold ${colorClasses[color] ?? colorClasses.blue}`}>
        {value}
      </h2>

    </div>
  );
}