import { useState, useEffect } from 'react';

export default function Header() {
  return (
    <header className={`fixed top-0 left-0 w-full bg-brown-50 text-brown-900 transition-transform duration-500 z-50 `}>
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Stuti Rajeev</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#about" className="hover:text-lightbg">About</a></li>
            <li><a href="#projects" className="hover:text-lightbg">Projects</a></li>
            <li><a href="#skills" className="hover:text-lightbg">Skills</a></li>
            <li><a href="#contact" className="hover:text-lightbg">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
