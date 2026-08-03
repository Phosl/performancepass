"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { usePageTransition } from "./PageTransitionProvider";

type TransitionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children?: ReactNode;
};

export function TransitionLink({ href, children, onClick, ...props }: TransitionLinkProps) {
  const pathname = usePathname();
  const { navigate } = usePageTransition();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    const destinationPath = href.split(/[?#]/)[0] || "/";

    if (
      event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      props.download || props.target === "_blank" || destinationPath === pathname ||
      document.documentElement.classList.contains("is-page-transitioning")
    ) return;

    event.preventDefault();
    navigate(href);
  }

  return <Link href={href} onClick={handleClick} {...props}>{children}</Link>;
}
