import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-12 bg-primary border-t border-primary px-4 py-4 text-sm text-text"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          Instant Cardano APIs from Plutus Blueprints
        </p>
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FacebookIcon size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <TwitterIcon size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition-colors"
          >
            <GithubIcon size={18} />
          </a>
        </div>

        <p className="text-center md:text-right">
          &copy; {new Date().getFullYear()} TxBuild. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
