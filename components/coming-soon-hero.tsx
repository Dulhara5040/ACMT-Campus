'use client'

import { Mail } from 'lucide-react'
import { useState } from 'react'

const ComingSoonHero = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <div className="flex-grow flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-8 border border-blue-200">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Coming Soon</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
            ACMT Campus
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          We're crafting an exceptional educational experience. Our world-class
          programs and world-class faculty are preparing to welcome you to a
          transformative journey of learning, innovation, and growth.
        </p>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 my-12">
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="font-semibold text-gray-900 mb-2">Quality Education</h3>
            <p className="text-sm text-gray-600">
              Diverse programs designed for modern learners
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="font-semibold text-gray-900 mb-2">Expert Faculty</h3>
            <p className="text-sm text-gray-600">
              Industry leaders and academic experts
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-semibold text-gray-900 mb-2">Career Ready</h3>
            <p className="text-sm text-gray-600">
              Preparing graduates for success
            </p>
          </div>
        </div>

        {/* Email Subscription */}
        <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
          <div className="flex-1 relative">
            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Notify Me
          </button>
        </form>

        {/* Success Message */}
        {subscribed && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
            ✓ Thank you! We'll notify you when we launch.
          </div>
        )}
      </div>
    </div>
  )
}

export default ComingSoonHero
