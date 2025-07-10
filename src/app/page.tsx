'use client'

import { useState, useEffect } from 'react'
import { ThemeSwitcher } from '@/components/theme-switcher'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'os' | 'arch'>('os')
  const [baseUrl, setBaseUrl] = useState('')

  useEffect(() => {
    setBaseUrl(window.location.origin)
  }, [])

  const tabs = [
    { id: 'os' as const, label: 'Operating System' },
    { id: 'arch' as const, label: 'Architecture' },
  ]

  return (
    <div className="outline-border rounded-base w500:grid-cols-1 grid h-[800px] max-h-[100dvh] w-[1000px] max-w-[1000px] shadow-[10px_10px_0_0_#000] outline-4 portrait:h-[100dvh]">
      {/* <header className="border-r-border rounded-l-base bg-main w500:hidden relative flex items-center justify-center border-r-4 portrait:rounded-none">
        <h1 className="smallHeight:text-[30px] smallHeight:tracking-[2px] w600:text-[30px] w600:tracking-[2px] -rotate-90 text-[40px] font-bold tracking-[4px] whitespace-nowrap">
          <span className="text-main-foreground inline-block">
            JOHN DOE
          </span>
        </h1>
      </header> */}
      <main className="rounded-br-base rounded-tr-base bg-background relative h-[800px] max-h-[100dvh] flex-col font-semibold portrait:h-[100dvh] portrait:max-h-[100dvh] portrait:rounded-none">
        {/* Tab Navigation */}
        <nav className="border-b-border rounded-tr-base w600:text-lg w400:h-10 w400:text-base grid h-[50px] grid-cols-[1fr_1fr_50px] border-b-4 bg-black text-xl portrait:rounded-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex h-full items-center justify-center uppercase transition-colors ${activeTab === tab.id
                  ? 'bg-black text-white'
                  : 'text-main-foreground bg-main hover:bg-main/80'
                }`}
            >
              {tab.label}
            </button>
          ))}
          <ThemeSwitcher />
        </nav>

        <div className="main h-full max-h-[750px] overflow-y-auto portrait:max-h-[calc(100dvh-50px)] flex">
          {activeTab === 'os' && (
            <div className="p-10 space-y-8 w-full">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Operating System (GOOS)</h1>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Using curl:</h3>
                  <div className="relative group">
                    <div className="bg-gray-900 dark:bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-white font-mono text-sm whitespace-pre-wrap">
                        <code>GOOS=$(curl -sf {baseUrl}/api/os/$(uname -s))</code>
                      </pre>
                    </div>
                    <button 
                      className="absolute top-3 right-3 px-3 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      onClick={() => navigator.clipboard.writeText(`GOOS=$(curl -sf ${baseUrl}/api/os/$(uname -s))`)}
                    >
                      📋 Copy
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Alternative using wget:</h3>
                  <div className="relative group">
                    <div className="bg-gray-900 dark:bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-white font-mono text-sm whitespace-pre-wrap">
                        <code>GOOS=$(wget -qO- {baseUrl}/api/os/$(uname -s))</code>
                      </pre>
                    </div>
                    <button 
                      className="absolute top-3 right-3 px-3 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      onClick={() => navigator.clipboard.writeText(`GOOS=$(wget -qO- ${baseUrl}/api/os/$(uname -s))`)}
                    >
                      📋 Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'arch' && (
            <div className="p-10 space-y-8 w-full">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Architecture (GOARCH)</h1>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Using curl:</h3>
                  <div className="relative group">
                    <div className="bg-gray-900 dark:bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-white font-mono text-sm whitespace-pre-wrap">
                        <code>GOARCH=$(curl -sf {baseUrl}/api/arch/$(uname -m))</code>
                      </pre>
                    </div>
                    <button 
                      className="absolute top-3 right-3 px-3 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      onClick={() => navigator.clipboard.writeText(`GOARCH=$(curl -sf ${baseUrl}/api/arch/$(uname -m))`)}
                    >
                      📋 Copy
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Alternative using wget:</h3>
                  <div className="relative group">
                    <div className="bg-gray-900 dark:bg-gray-800 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-white font-mono text-sm whitespace-pre-wrap">
                        <code>GOARCH=$(wget -qO- {baseUrl}/api/arch/$(uname -m))</code>
                      </pre>
                    </div>
                    <button 
                      className="absolute top-3 right-3 px-3 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      onClick={() => navigator.clipboard.writeText(`GOARCH=$(wget -qO- ${baseUrl}/api/arch/$(uname -m))`)}
                    >
                      📋 Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>

  )
}
