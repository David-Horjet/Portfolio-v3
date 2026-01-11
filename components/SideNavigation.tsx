import Link from "next/link";
import React from "react";

const SideNavigation: React.FC = () => {
  return (
    <div className="fixed right-0 top-0 h-full hidden lg:flex flex-col items-center gap-4 z-50 mr-4 pointer-events-none">
      <div className="w-px h-32 bg-gray"></div>

      <div className="flex flex-col gap-4 pointer-events-auto">
        {/* GitHub */}
        <Link
          href="https://github.com/David-Horjet"
          target="_blank"
          className="group"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-gray group-hover:text-primary transition-colors"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://linkedin.com/in/davidhorjet"
          target="_blank"
          className="group"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-gray group-hover:text-primary transition-colors"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.366-1.85 3.599 0 4.267 2.368 4.267 5.451v6.29zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
          </svg>
        </Link>

        {/* Telegram */}
        <Link
          href="https://t.me/davidhorjet"
          target="_blank"
          className="group"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-gray group-hover:text-primary transition-colors"
          >
            <path d="M9.993 15.674l-.396 5.58c.567 0 .813-.244 1.107-.536l2.655-2.528 5.5 4.02c1.01.557 1.723.265 1.986-.93l3.603-16.93c.336-1.56-.564-2.17-1.547-1.81L1.114 9.634c-1.524.594-1.5 1.44-.26 1.825l5.743 1.793L19.9 6.364c.622-.41 1.19-.183.723.227" />
          </svg>
        </Link>

        {/* X (Twitter) */}
        <Link
          href="https://x.com/david_horjet"
          target="_blank"
          className="group"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-gray group-hover:text-primary transition-colors"
          >
            <path d="M18.244 2H21.556L14.325 10.236L22.845 22H16.017L10.71 14.718L4.545 22H1.23L8.94 13.199L0.845 2H7.845L12.644 8.635L18.244 2ZM17.08 20.02H18.914L6.85 3.88H4.88L17.08 20.02Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SideNavigation;
