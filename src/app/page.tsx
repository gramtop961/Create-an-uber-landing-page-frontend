'use client'

import { useState } from 'react'

export default function Home() {
  const [pickupLocation, setPickupLocation] = useState('')
  const [destination, setDestination] = useState('')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="text-2xl font-bold">Uber</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-300">Ride</a>
          <a href="#" className="hover:text-gray-300">Drive</a>
          <a href="#" className="hover:text-gray-300">Business</a>
          <a href="#" className="hover:text-gray-300">About</a>
        </nav>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-sm hover:bg-gray-800 rounded">Log in</button>
          <button className="px-4 py-2 text-sm bg-white text-black rounded hover:bg-gray-200">Sign up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Go anywhere with Uber
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Request a ride, hop in, and go.
            </p>
            
            {/* Ride Booking Form */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <button className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition-colors">
                  Request now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            The Uber you know, reimagined for business
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Ride</h3>
              <p className="text-gray-400">Go anywhere with Uber. Request a ride, hop in, and go.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Drive</h3>
              <p className="text-gray-400">Make money by driving on the Uber platform.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Business</h3>
              <p className="text-gray-400">Transform the way your company moves with Uber for Business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your day belongs to you
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                You&apos;re the boss. You decide when to drive and how long. Just tap and go with Uber.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors">
                Get started
              </button>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Drive when you want</h3>
              <p className="text-gray-300 mb-6">
                Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414l-4.707-4.707a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Choose your own hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414l-4.707-4.707a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Keep 100% of your tips</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414l-4.707-4.707a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Get paid weekly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            It&apos;s easier in the apps
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div>
              <div className="text-4xl font-bold mb-2">1B+</div>
              <div className="text-gray-400">Trips completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-gray-400">Drivers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-400">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1.5B+</div>
              <div className="text-gray-400">Users worldwide</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors flex items-center space-x-2">
              <span>Download Rider App</span>
            </button>
            <button className="bg-gray-800 text-white px-8 py-3 rounded font-semibold hover:bg-gray-700 transition-colors flex items-center space-x-2">
              <span>Download Driver App</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About us</a></li>
                <li><a href="#" className="hover:text-white">Our offerings</a></li>
                <li><a href="#" className="hover:text-white">Newsroom</a></li>
                <li><a href="#" className="hover:text-white">Investors</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Ride</a></li>
                <li><a href="#" className="hover:text-white">Drive</a></li>
                <li><a href="#" className="hover:text-white">Deliver</a></li>
                <li><a href="#" className="hover:text-white">Eat</a></li>
                <li><a href="#" className="hover:text-white">Uber for Business</a></li>
                <li><a href="#" className="hover:text-white">Uber Freight</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Global citizenship</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Safety</a></li>
                <li><a href="#" className="hover:text-white">Diversity and Inclusion</a></li>
                <li><a href="#" className="hover:text-white">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Travel</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Reserve</a></li>
                <li><a href="#" className="hover:text-white">Airports</a></li>
                <li><a href="#" className="hover:text-white">Cities</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Uber Technologies Inc.
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Accessibility</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}