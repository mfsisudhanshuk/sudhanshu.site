'use client';

import { GitlabIcon as GitHub, Linkedin, Mail, Lock } from 'lucide-react'
import Link from 'next/link'
import { Theme } from '../styles/themes'

export default function Header({ theme }: { theme: Theme }) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${theme.header}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className={`text-2xl font-bold ${theme.text}`}>Sudhanshu.site</a>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className={theme.headerLink}>About</a></li>
              <li><a href="#experience" className={theme.headerLink}>Experience</a></li>
              <li><a href="#services" className={theme.headerLink}>Services</a></li>
              <li><a href="#skills" className={theme.headerLink}>Skills</a></li>
              <li><a href="#activities" className={theme.headerLink}>Activities</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/sd8917" target="_blank" rel="noopener noreferrer" className={theme.headerLink}>
              <GitHub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sudhanshu-site/" target="_blank" rel="noopener noreferrer" className={theme.headerLink}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:sudhanshuraj8917@email.com" className={theme.headerLink}>
              <Mail size={20} />
            </a>
            <Link href="/admin" className={theme.headerLink}>
              <Lock size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

