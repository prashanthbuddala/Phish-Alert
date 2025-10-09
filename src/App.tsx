import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, XCircle, Eye, Lock, Globe, ChevronRight } from 'lucide-react';

interface PhishingIndicator {
  id: string;
  title: string;
  description: string;
  category: 'url' | 'design' | 'content' | 'security';
}

const indicators: PhishingIndicator[] = [
  {
    id: 'url-mismatch',
    title: 'Suspicious URL',
    description: 'Check for misspellings, extra characters, or unusual domains',
    category: 'url'
  },
  {
    id: 'no-https',
    title: 'Missing HTTPS',
    description: 'Legitimate login pages always use secure HTTPS connections',
    category: 'security'
  },
  {
    id: 'poor-design',
    title: 'Poor Design Quality',
    description: 'Low-resolution logos, misaligned elements, or inconsistent styling',
    category: 'design'
  },
  {
    id: 'urgent-language',
    title: 'Urgent Language',
    description: 'Pressure tactics like "Act now!" or "Account will be suspended"',
    category: 'content'
  },
  {
    id: 'unusual-domain',
    title: 'Unusual Domain',
    description: 'Domain doesn\'t match the company (e.g., paypa1.com instead of paypal.com)',
    category: 'url'
  },
  {
    id: 'generic-greeting',
    title: 'Generic Greeting',
    description: 'Uses "Dear Customer" instead of your actual name',
    category: 'content'
  }
];

function App() {
  const [selectedExample, setSelectedExample] = useState<'google' | 'bank'>('google');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-800">PhishAlert</h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn to identify fake login pages and protect yourself from phishing attacks
          </p>
        </header>

        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-blue-600" />
              Key Warning Signs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {indicators.map((indicator) => (
                <div
                  key={indicator.id}
                  className="p-4 border-2 border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">{indicator.title}</h3>
                      <p className="text-sm text-slate-600">{indicator.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            Compare: Real vs Fake Login Pages
          </h2>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedExample('google')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedExample === 'google'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Google Example
            </button>
            <button
              onClick={() => setSelectedExample('bank')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedExample === 'bank'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Bank Example
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Legitimate Page
                </h3>
              </div>

              {selectedExample === 'google' ? (
                <div className="border-4 border-green-500 rounded-lg overflow-hidden shadow-xl">
                  <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b-2 border-green-500">
                    <Lock className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-mono text-green-700">https://accounts.google.com</span>
                  </div>
                  <div className="bg-white p-8">
                    <div className="max-w-md mx-auto">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold mb-2">
                          <span className="text-blue-500">G</span>
                          <span className="text-red-500">o</span>
                          <span className="text-yellow-500">o</span>
                          <span className="text-blue-500">g</span>
                          <span className="text-green-500">l</span>
                          <span className="text-red-500">e</span>
                        </div>
                        <h2 className="text-2xl text-slate-700">Sign in</h2>
                        <p className="text-sm text-slate-600 mt-1">Use your Google Account</p>
                      </div>
                      <div className="space-y-4">
                        <input
                          type="email"
                          placeholder="Email or phone"
                          className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="text-blue-600 text-sm hover:bg-blue-50 px-2 py-1 rounded">
                          Forgot email?
                        </button>
                        <div className="pt-4 flex justify-between items-center">
                          <button className="text-blue-600 font-medium hover:bg-blue-50 px-4 py-2 rounded">
                            Create account
                          </button>
                          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium">
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 border-t-2 border-green-200">
                    <div className="flex items-start gap-2 text-sm text-green-800">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Why this is safe:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Correct domain: accounts.google.com</li>
                          <li>• HTTPS with valid certificate</li>
                          <li>• Professional design and branding</li>
                          <li>• No spelling errors or urgent language</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border-4 border-green-500 rounded-lg overflow-hidden shadow-xl">
                  <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b-2 border-green-500">
                    <Lock className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-mono text-green-700">https://secure.bankofamerica.com</span>
                  </div>
                  <div className="bg-white p-8">
                    <div className="max-w-md mx-auto">
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xl">
                            BA
                          </div>
                          <span className="text-xl font-semibold text-slate-800">Bank of America</span>
                        </div>
                        <h2 className="text-2xl text-slate-700 font-semibold">Sign In</h2>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Online ID</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Passcode</label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                          />
                        </div>
                        <button className="w-full bg-red-600 text-white py-3 rounded font-medium hover:bg-red-700">
                          Sign In
                        </button>
                        <div className="flex justify-between text-sm">
                          <a href="#" className="text-blue-600 hover:underline">Forgot ID/Passcode?</a>
                          <a href="#" className="text-blue-600 hover:underline">Enroll</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 border-t-2 border-green-200">
                    <div className="flex items-start gap-2 text-sm text-green-800">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Why this is safe:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Official domain: bankofamerica.com</li>
                          <li>• Secure HTTPS connection</li>
                          <li>• Consistent branding and design</li>
                          <li>• No pressure tactics or errors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-red-700 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Phishing Page
                </h3>
              </div>

              {selectedExample === 'google' ? (
                <div className="border-4 border-red-500 rounded-lg overflow-hidden shadow-xl">
                  <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b-2 border-red-500">
                    <Globe className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-mono text-red-700">http://go0gle-verify.net/signin</span>
                  </div>
                  <div className="bg-white p-8">
                    <div className="max-w-md mx-auto">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold mb-2 blur-[0.5px]">
                          <span className="text-blue-500">G</span>
                          <span className="text-red-500">o</span>
                          <span className="text-yellow-500">o</span>
                          <span className="text-blue-500">g</span>
                          <span className="text-green-500">l</span>
                          <span className="text-red-500">e</span>
                        </div>
                        <h2 className="text-2xl text-slate-700">Sign in</h2>
                        <p className="text-sm text-red-600 mt-2 font-semibold">URGENT: Verify your account now!</p>
                      </div>
                      <div className="space-y-4">
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none"
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none"
                        />
                        <button className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium">
                          Sign In Now
                        </button>
                        <p className="text-xs text-slate-500 text-center">
                          Your account will be suspended in 24 hours if not verified
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 border-t-2 border-red-200">
                    <div className="flex items-start gap-2 text-sm text-red-800">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Red flags detected:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Suspicious URL: "go0gle" instead of "google"</li>
                          <li>• No HTTPS security</li>
                          <li>• Urgent threat language</li>
                          <li>• Asks for password on first page</li>
                          <li>• Slightly blurry logo quality</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border-4 border-red-500 rounded-lg overflow-hidden shadow-xl">
                  <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b-2 border-red-500">
                    <Globe className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-mono text-red-700">http://bankofamerica-secure.info/login</span>
                  </div>
                  <div className="bg-white p-8">
                    <div className="max-w-md mx-auto">
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-12 h-12 bg-red-700 rounded flex items-center justify-center text-white font-bold text-xl">
                            BA
                          </div>
                          <span className="text-xl font-semibold text-slate-800">Bank of America</span>
                        </div>
                        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 mb-4">
                          <p className="text-sm font-semibold text-yellow-800">
                            Security Alert: Unusual activity detected. Verify now!
                          </p>
                        </div>
                        <h2 className="text-2xl text-slate-700 font-semibold">Verify Your Account</h2>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Online ID</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-slate-400 rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Passcode</label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-slate-400 rounded"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Social Security Number</label>
                          <input
                            type="text"
                            placeholder="XXX-XX-XXXX"
                            className="w-full px-4 py-2 border border-slate-400 rounded"
                          />
                        </div>
                        <button className="w-full bg-red-600 text-white py-3 rounded font-medium hover:bg-red-700">
                          Verify Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 border-t-2 border-red-200">
                    <div className="flex items-start gap-2 text-sm text-red-800">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Red flags detected:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Wrong domain: .info instead of .com</li>
                          <li>• No HTTPS encryption</li>
                          <li>• Alarming "security alert" message</li>
                          <li>• Requests SSN (never legitimate)</li>
                          <li>• Creates false urgency</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-7 h-7" />
            Stay Protected
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <ChevronRight className="w-5 h-5" />
                Before You Login
              </h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• Always check the URL carefully</li>
                <li>• Look for HTTPS and the padlock icon</li>
                <li>• Be suspicious of urgent messages</li>
                <li>• Verify emails came from official addresses</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <ChevronRight className="w-5 h-5" />
                If Something Seems Off
              </h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• Don't enter your credentials</li>
                <li>• Close the page immediately</li>
                <li>• Go directly to the official website</li>
                <li>• Report the phishing attempt</li>
              </ul>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-slate-600 text-sm">
          <p>PhishAlert is an educational tool. Always stay vigilant online.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
