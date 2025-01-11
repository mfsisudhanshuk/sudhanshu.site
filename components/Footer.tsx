
import Link from 'next/link';
import { Theme } from '../styles/themes'

export default function Footer({ theme }: { theme: Theme }) {
  return (
    <footer className={`py-8 ${theme.header}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className={`text-center ${theme.text}`}>
            © {new Date().getFullYear()} Sudhanshu.site. All rights reserved.
          </p>
          <p className="mt-2 text-center text-[#FF5722]">
          <p>Made with ❤️ by <span><a href={'/'}>sudhanshu.site</a></span></p>
          </p>
        </div>
      </div>
    </footer>
  )
}

