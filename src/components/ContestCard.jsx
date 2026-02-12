export default function ContestCard({ name, startTimeSeconds }) {
  const date = new Date(startTimeSeconds * 1000);

  return (
    <div className="p-4 rounded-xl border transition
        bg-white border-gray-200 hover:shadow-md
        dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-purple-500">

      <h3 className="font-medium">{name}</h3>
      <p className="text-sm text-gray-500 dark:text-zinc-400">
        {date.toLocaleString()}
      </p>
    </div>
  );
}
