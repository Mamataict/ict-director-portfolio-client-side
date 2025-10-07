"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname();

  const crumbs = pathname
    .split("/")
    .filter((part) => part)
    .map((part, index, arr) => {
      const href = "/" + arr.slice(0, index + 1).join("/");
      return { name: decodeURIComponent(part), href };
    });

  return (
    <div className="text-xl text-gray-700 py-2">
      <ol className="list-reset flex">
        <li>
          <Link href="/mdms/home" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, idx) => {
          const cleanName = crumb.name.replace(/-/g, " ");
          if (cleanName === "mdms" || cleanName === "home") return null;

          return (
            <li key={idx} className="flex items-center">
              <span className="mx-2">/</span>
              <Link
                href={crumb.href}
                className={`hover:underline capitalize ${
                  idx === crumbs.length - 1
                    ? "text-gray-500 pointer-events-none"
                    : "text-blue-600"
                }`}
              >
                {cleanName}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
