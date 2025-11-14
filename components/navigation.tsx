'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const programs = {
    'Undergraduate Studies': [
      'Foundation in Arts',
      "Bachelor's in Business Administration",
      'Bachelor of Science in Information Technology',
    ],
    'Postgraduate Studies': [
      'MBA',
      'Master of Education',
      'Master of Science in Data Science',
    ],
    'Doctoral Studies': [
      'Doctoral in Business Administration',
      'Doctoral in Education',
      'PhD in Computer Science',
    ],
    'Professional Studies': [
      'Executive Master In Project Management',
      'Executive Master in Human Resource',
      'Professional Diploma in Finance',
    ],
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              ACMT Campus
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </Link>

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('programs')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors font-medium">
                Programs
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    openDropdown === 'programs' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {openDropdown === 'programs' && (
                <div className="absolute left-0 mt-0 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  {Object.entries(programs).map(([category, items]) => (
                    <div key={category} className="px-4 py-3 border-b border-gray-200 last:border-b-0">
                      <h3 className="text-sm font-bold text-blue-600 mb-2">
                        {category}
                      </h3>
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <li key={item}>
                            <Link
                              href={`/programs/${category
                                .toLowerCase()
                                .replace(/\s+/g, '-')}`}
                              className="text-sm text-gray-900 hover:text-blue-600 transition-colors block py-1"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/partners"
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium"
            >
              Academic Partners
            </Link>

            <Link
              href="/contact"
              className="text-gray-900 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-blue-600">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
