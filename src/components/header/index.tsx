"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-primary border-b border-primary px-4 py-2 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs lg:text-sm text-text">
            Introducing <span className="font-bold">TxBuild</span> Upload your
            Plutus Blueprint & get Instant Cardano APIs.{" "}
            <a href="/docs" className="text-link hover:text-blue-500 underline">
              Learn more
            </a>
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-border-color px-4 py-2 lg:py-4 bg-white/70 dark:bg-black/70 backdrop-blur-md relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 lg:w-4 lg:h-4 border border-logo-color transform rotate-45"></div>
            <span className="text-xl lg:text-2xl font-bold text-logo">
              TxBuild
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
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

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline">REQUEST A DEMO</Button>
            <Button variant="default">VIEW DEMO</Button>
          </div>

          <button
            className="lg:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-4 shadow-lg z-30">
            <Link
              href="#features"
              className="block text-logo text-sm hover:text-primary uppercase py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#howWorks"
              className="block text-logo text-sm hover:text-primary uppercase py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="#exampleSection"
              className="block text-logo text-sm hover:text-primary uppercase py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DOCS
            </Link>
            <Link
              href="#contact"
              className="block text-logo text-sm hover:text-primary uppercase py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex gap-4 mt-4">
              <Button variant="outline">REQUEST A DEMO</Button>
              <Button variant="default">VIEW DEMO</Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
