import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <img src="/logo-light.png" className="hidden w-6 dark:block" alt="shadcn ui kit light logo" />
      <img src="/logo.png" className="block w-6 dark:hidden" alt="shadcn ui kit logo" />
    </Link>
  );
}
