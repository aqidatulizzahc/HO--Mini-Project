import { useMemo, useState } from "react";

function Icon({ children, className = "size-4" }) {
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

const PlusIcon = () => (
  <Icon>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);
const FilterIcon = () => (
  <Icon>
    <path d="M3 7h9M16 7h5M3 17h5M12 17h9" />
    <circle cx="14" cy="7" r="2" />
    <circle cx="10" cy="17" r="2" />
  </Icon>
);
const GridIcon = () => (
  <Icon>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M12 3v18M3 12h18" />
  </Icon>
);
const ListIcon = () => (
  <Icon>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M3 12h18" />
  </Icon>
);
const SortIcon = () => (
  <Icon>
    <path d="M8 4v16m0 0-3-3m3 3 3-3M16 20V4m0 0-3 3m3-3 3 3" />
  </Icon>
);
const ArrowLeft = () => (
  <Icon>
    <path d="M19 12H5m0 0 6-6m-6 6 6 6" />
  </Icon>
);
const ArrowRight = () => (
  <Icon>
    <path d="M5 12h14m0 0-6-6m6 6-6 6" />
  </Icon>
);
const DotsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="size-4"
    fill="currentColor"
    aria-hidden="true"
  >
    <circle cx="5" cy="12" r="1.6" />
    <circle cx="12" cy="12" r="1.6" />
    <circle cx="19" cy="12" r="1.6" />
  </svg>
);
const CubeIcon = () => (
  <Icon className="size-10">
    <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
    <path d="m3 8 9 5 9-5M12 13v8" />
  </Icon>
);

export const sampleProducts = [
  {
    id: 1,
    name: "Apple iPad (Gen 10)",
    category: "Smartphone",
    price: 499,
    stock: 24,
  },
  {
    id: 2,
    name: "Apple iPhone 13",
    category: "Smartphone",
    price: 599,
    stock: 12,
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    category: "Smartphone",
    price: 999,
    stock: 0,
  },
  {
    id: 4,
    name: "Razer Kraken Headset",
    category: "Accessories",
    price: 99,
    stock: 40,
  },
  {
    id: 5,
    name: "Dell XPS 15",
    category: "Laptop & PC",
    price: 1799,
    stock: 0,
  },
  {
    id: 6,
    name: "Apple iMac 2023",
    category: "Laptop & PC",
    price: 5196,
    stock: 4,
  },
  {
    id: 7,
    name: "Logitech MX Master 3S",
    category: "Accessories",
    price: 99,
    stock: 31,
  },
  {
    id: 8,
    name: "AirPods Pro (2nd Gen)",
    category: "Accessories",
    price: 249,
    stock: 0,
  },
  {
    id: 9,
    name: "MacBook Air M3",
    category: "Laptop & PC",
    price: 1099,
    stock: 18,
  },
  {
    id: 10,
    name: "Sony WH-1000XM5",
    category: "Accessories",
    price: 399,
    stock: 7,
  },
  {
    id: 11,
    name: "Google Pixel 8",
    category: "Smartphone",
    price: 699,
    stock: 15,
  },
  {
    id: 12,
    name: "Keychron K2 Keyboard",
    category: "Accessories",
    price: 89,
    stock: 0,
  },
];

const LOW_STOCK_LIMIT = 10;

function getStatus(stock) {
  if (stock <= 0)
    return {
      label: "Sold Out",
      box: "bg-red-50 text-red-600 border-red-100",
      dot: "bg-red-500",
    };
  if (stock <= LOW_STOCK_LIMIT)
    return {
      label: "Low Stock",
      box: "bg-amber-50 text-amber-600 border-amber-100",
      dot: "bg-amber-400",
    };
  return {
    label: "In Stock",
    box: "bg-green-50 text-green-600 border-green-100",
    dot: "bg-green-500",
  };
}

const formatPrice = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

function ProductCard({ product, view, onAction }) {
  const status = getStatus(product.stock);
  const isList = view === "list";

  return (
    <article
      className={
        "rounded-2xl border border-neutral-200 bg-white p-3 " +
        (isList
          ? "flex flex-wrap items-center gap-4 sm:flex-nowrap"
          : "flex flex-col gap-4")
      }
    >
      <div
        className={
          "grid place-items-center overflow-hidden rounded-xl bg-neutral-50 text-neutral-300 " +
          (isList ? "size-20 shrink-0" : "aspect-[4/3] w-full")
        }
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="size-full object-contain p-4"
          />
        ) : (
          <CubeIcon />
        )}
      </div>

      <div
        className={
          "flex items-start justify-between gap-3 " +
          (isList ? "min-w-0 flex-1" : "px-1")
        }
      >
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-medium text-neutral-900">
            {product.name}
          </h3>
          <p className="mt-0.5 text-xs text-neutral-400">{product.category}</p>
        </div>
        <p className="text-lg font-medium tabular-nums text-neutral-900">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Status + menu */}
      <div
        className={
          "flex items-center gap-2 " + (isList ? "w-full sm:w-64" : "px-1 pb-1")
        }
      >
        <div
          className={`flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border text-xs ${status.box}`}
        >
          <span className={`size-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </div>
        <button
          type="button"
          aria-label={`Opsi untuk ${product.name}`}
          onClick={() => onAction?.(product)}
          className="grid size-9 shrink-0 place-items-center rounded-lg border border-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <DotsIcon />
        </button>
      </div>
    </article>
  );
}

function getPages(current, total) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages]
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);
  const result = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) result.push("gap-" + p);
    result.push(p);
  });
  return result;
}

function Pagination({ page, totalPages, onChange }) {
  const base =
    "grid size-9 place-items-center rounded-lg border text-sm transition-colors " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

  return (
    <nav aria-label="Pagination" className="flex items-center gap-2">
      <button
        type="button"
        aria-label="Halaman sebelumnya"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={`${base} border-neutral-200 text-neutral-700 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:text-neutral-300 disabled:hover:bg-transparent`}
      >
        <ArrowLeft />
      </button>

      {getPages(page, totalPages).map((p) =>
        typeof p === "string" ? (
          <span
            key={p}
            className={`${base} border-neutral-100 text-neutral-400`}
          >
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={
              base +
              (p === page
                ? " border-neutral-900 bg-neutral-900 text-white"
                : " border-neutral-200 text-neutral-700 hover:bg-neutral-50")
            }
          >
            {p}
          </button>
        ),
      )}

      <button
        type="button"
        aria-label="Halaman berikutnya"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className={`${base} border-neutral-200 text-neutral-700 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:text-neutral-300 disabled:hover:bg-transparent`}
      >
        <ArrowRight />
      </button>
    </nav>
  );
}

const PAGE_SIZES = [4, 8, 12];

export default function ProductList({
  products = sampleProducts,
  onAddProduct,
  onFilter,
  onProductAction,
}) {
  const [view, setView] = useState("grid");
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const visible = useMemo(
    () => products.slice((page - 1) * pageSize, page * pageSize),
    [products, page, pageSize],
  );

  const cyclePageSize = () => {
    const next =
      PAGE_SIZES[(PAGE_SIZES.indexOf(pageSize) + 1) % PAGE_SIZES.length];
    setPageSize(next);
    setPage(1);
  };

  const outlineBtn =
    "inline-flex h-10 items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3.5 text-sm text-neutral-900 " +
    "transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

  const toggleBtn = (name) =>
    "grid size-8 place-items-center rounded-md transition-colors " +
    (view === name
      ? "bg-white text-neutral-900 shadow-sm ring-1 ring-neutral-200"
      : "text-neutral-400 hover:text-neutral-700");

  return (
    <section className="rounded-3xl bg-white p-5 sm:p-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-medium text-neutral-900">
            Product List
          </h2>
          <p className="mt-1 text-xs text-neutral-400">
            Track stock levels, availability, and restocking needs in real time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={onAddProduct} className={outlineBtn}>
            <PlusIcon />
            Add Product
          </button>
          <button type="button" onClick={onFilter} className={outlineBtn}>
            <FilterIcon />
            Filter
          </button>

          <div
            role="group"
            aria-label="Tampilan"
            className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-neutral-50 p-1"
          >
            <button
              type="button"
              aria-label="Tampilan grid"
              aria-pressed={view === "grid"}
              onClick={() => setView("grid")}
              className={toggleBtn("grid")}
            >
              <GridIcon />
            </button>
            <button
              type="button"
              aria-label="Tampilan daftar"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
              className={toggleBtn("list")}
            >
              <ListIcon />
            </button>
          </div>
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-center text-sm text-neutral-400">
          Belum ada produk. Klik “Add Product” untuk menambahkan.
        </p>
      ) : (
        <div
          className={
            "mt-6 grid gap-4 " +
            (view === "grid"
              ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
              : "grid-cols-1")
          }
        >
          {visible.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              view={view}
              onAction={onProductAction}
            />
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={cyclePageSize}
          className={outlineBtn}
          aria-label="Ubah jumlah produk per halaman"
        >
          Show: {pageSize}
          <SortIcon />
        </button>
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </section>
  );
}
