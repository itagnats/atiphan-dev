import { personal } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-border-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-7 md:px-16">
        <div className="text-[12.5px] text-text-dim">
          © {year} {personal.fullName}
        </div>
      </div>
    </footer>
  );
}
