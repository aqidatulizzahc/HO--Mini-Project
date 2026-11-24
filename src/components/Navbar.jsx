import { useState } from "react";

function Icon({ children, className = "size-[18px]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const icons = {
  dashboard: (
    <Icon>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </Icon>
  ),
  products: (
    <Icon>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </Icon>
  ),
  orders: (
    <Icon>
      <path d="M9 4h6v3H9z" />
      <path d="M8 5.5H6.5A1.5 1.5 0 0 0 5 7v12.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V7a1.5 1.5 0 0 0-1.5-1.5H16" />
      <path d="M9 12h6M9 16h4" />
    </Icon>
  ),
  marketing: (
    <Icon>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z" />
      <path d="M15 9.5a3.5 3.5 0 0 1 0 5M18 7a7 7 0 0 1 0 10" />
    </Icon>
  ),
  analytics: (
    <Icon>
      <path d="M21 12a9 9 0 1 1-9-9" />
      <path d="M12 3v9h9" />
    </Icon>
  ),
  search: (
    <Icon className="size-5">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.5-4.5" />
    </Icon>
  ),
  help: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5M12 17h.01" />
    </Icon>
  ),
  settings: (
    <Icon>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  ),
};

function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#logo-grad)"
        strokeWidth="3.2"
        strokeLinecap="round"
      >
        <circle cx="16" cy="8.5" r="4.5" />
        <circle cx="23.5" cy="16" r="4.5" />
        <circle cx="16" cy="23.5" r="4.5" />
        <circle cx="8.5" cy="16" r="4.5" />
      </g>
    </svg>
  );
}

const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "products", label: "Products" },
  { id: "orders", label: "Orders" },
  { id: "marketing", label: "Marketing" },
  { id: "analytics", label: "Analytics" },
];

export default function Navbar({
  brand = "Sellora",
  items = navItems,
  initialActive = "products",
  onNavigate,
  avatarSrc,
  userName = "User",
}) {
  const [active, setActive] = useState(initialActive);

  const handleClick = (id) => {
    setActive(id);
    onNavigate?.(id);
  };

  const pill = "rounded-full bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]";
  const roundBtn =
    "grid size-9 shrink-0 place-items-center rounded-full bg-neutral-100 text-neutral-600 " +
    "transition-colors hover:bg-neutral-200 hover:text-neutral-900 " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

  return (
    <header className="flex flex-wrap items-center gap-3 p-3 lg:flex-nowrap">
      <a
        href="/"
        className={`${pill} flex h-14 shrink-0 items-center gap-2.5 px-5 text-lg font-semibold text-neutral-900`}
      >
        <LogoMark />
        {brand}
      </a>

      <nav
        aria-label="Navigasi utama"
        className={`${pill} order-last flex h-14 w-full items-center gap-1 overflow-x-auto px-1.5 lg:order-none lg:w-auto lg:flex-1 lg:justify-center`}
      >
        {items.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleClick(id)}
              aria-current={isActive ? "page" : undefined}
              className={
                "flex h-11 shrink-0 items-center gap-2 rounded-full px-5 text-[15px] transition-colors " +
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 " +
                (isActive
                  ? "bg-gradient-to-r from-neutral-950 via-neutral-900 to-indigo-950 text-white shadow-md"
                  : "text-neutral-400 hover:text-neutral-800")
              }
            >
              {icons[id]}
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      {/* Pencarian + aksi */}
      <div
        className={`${pill} ml-auto flex h-14 min-w-0 flex-1 items-center gap-2 p-2 pl-2.5 lg:ml-0 lg:flex-none`}
      >
        <label className="flex h-10 min-w-0 flex-1 items-center gap-2.5 rounded-full bg-neutral-100 px-3 text-neutral-400 focus-within:ring-2 focus-within:ring-indigo-500 lg:w-64 lg:flex-none">
          {icons.search}
          <input
            type="search"
            placeholder="Search Anything..."
            className="w-full min-w-0 bg-transparent text-[15px] text-neutral-800 outline-none placeholder:text-neutral-400"
          />
        </label>

        <button type="button" aria-label="Bantuan" className={roundBtn}>
          {icons.help}
        </button>
        <button type="button" aria-label="Pengaturan" className={roundBtn}>
          {icons.settings}
        </button>

        <button
          type="button"
          aria-label={`Profil ${userName}`}
          className="size-9 shrink-0 overflow-hidden rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          {avatarSrc ? (
            <img src={avatarSrc} alt="" className="size-full object-cover" />
          ) : (
            <span className="grid size-full place-items-center bg-gradient-to-br from-amber-300 to-rose-400 text-sm font-semibold text-white">
              {userName.charAt(0).toUpperCase()}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
