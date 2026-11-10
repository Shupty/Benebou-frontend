"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const ShopBreadcrumb = () => {
  const pathname = usePathname();

  // Split the pathname into segments and filter out empty strings
  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Helper function to format the breadcrumb text
  // e.g., "blog-posts" -> "Blog Posts", "nextjs" -> "Nextjs"
  const formatLabel = (segment) => {
    return segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <nav aria-label="breadcrumb" className="py-4">
      <ul className="flex items-center space-x-2 text-sm text-gray-600">
        {/* Root / Home Link */}
        <li>
          <Link
            href="/"
            className="hover:text-blue-600 hover:underline transition-colors"
          >
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          // Construct the nested path dynamically for each segment
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;
          const label = formatLabel(segment);

          return (
            <React.Fragment key={href}>
              {/* Separator */}
              <li className="text-gray-400 select-none" aria-hidden="true">
                /
              </li>

              {/* Crumb Item */}
              <li>
                {isLast ? (
                  // Active / Last item is rendered as text, not a link
                  <span
                    className="font-semibold text-gray-900"
                    aria-current="page"
                  >
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-blue-600 hover:underline transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default ShopBreadcrumb;
