import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="bg-primary border-b border-primary px-4 py-2">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-text">
            Introducing <span className="font-bold">TxBuild</span> Upload your
            Plutus Blueprint & get Instant Cardano APIs.{" "}
            <a href="/docs" className="text-link hover:text-blue-500 underline">
              Learn more
            </a>
          </p>
        </div>
      </div>
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border-color px-4 py-4 bg-white/70 dark:bg-black/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 border border-logo-color transform rotate-45"></div>
            <span className="text-2xl font-bold text-logo">TxBuild</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-logo hover:text-primary transition-colors uppercase"
            >
              Features
            </Link>

            <Link
              href="#howWorks"
              className="text-logo hover:text-primary transition-colors uppercase"
            >
              How it works
            </Link>
            <Link
              href="#exampleSection"
              className="text-logo hover:text-primary transition-colors uppercase"
            >
              DOCS
            </Link>
            <a
              href="#contact"
              className="text-logo hover:text-primary transition-colors uppercase"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline">REQUEST A DEMO</Button>
            <Button variant="default">VIEW DEMO</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
