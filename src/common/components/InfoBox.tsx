export function InfoBox({ icon, title, children }: { icon: JSX.Element; title: string; children?: React.ReactNode }) {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-xl">
      <div className="flex items-center space-x-4 opacity-90">
        <div className="w-5">{icon}</div>
        <h3 className="text-md font-medium">{title}</h3>
      </div>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
