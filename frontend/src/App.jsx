// App.jsx
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        
        {/* TOP SECTION - Centered Headline and CTAs */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Run Your Entire SaaS From One Simple Dashboad
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            A clean, all-in-one workspace to managge; your social media, ads; SEO, and uset analytics—without switching tabs.
          </p>
          
          {/* CTA Buttons - Centered */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <button className="px-8 py-3 bg-black text-white rounded font-medium hover:opacity-90 transition">
              Get Started Free
            </button>
            
            <button className="px-8 py-3 bg-white border-2 border-gray-900 rounded font-medium hover:bg-gray-50 transition">
              ▷ Watch Demo
            </button>
          </div>
          
          <p className="text-gray-500 text-sm">
            No credit card required. Takes 30 seconds to niboard.
          </p>
        </div>

        {/* MIDDLE SECTION - Dashboard Visualization */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            {/* Dashboard Mockup */}
            <div className="bg-white rounded-xl border-2 border-gray-200 shadow-lg p-6 lg:p-8">
              {/* Dashboard Frame */}
              <div className="bg-gray-50 rounded-lg p-6">
                {/* Sidebar Navigation */}
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex flex-row lg:flex-col gap-4 lg:w-48">
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      <span className="text-sm text-gray-700">Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      <span className="text-sm text-gray-700">Social Media</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      <span className="text-sm text-gray-700">Ads</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                      <div className="w-5 h-5 bg-gray-300 rounded"></div>
                      <span className="text-sm text-gray-700">Analytics</span>
                    </div>
                  </div>
                  
                  {/* Main Content Area */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Name</h3>
                      
                      {/* Data Cards */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">Location</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-800">12.4k</div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-4 h-4 bg-orange-500 rounded"></div>
                            <span className="text-xs text-gray-600">Metric</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-800">$9,240</div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-4 h-4 bg-blue-500 rounded"></div>
                            <span className="text-xs text-gray-600">Growth</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-800">+42%</div>
                        </div>
                      </div>
                      
                      {/* Chart Visualization */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-end justify-between h-32 gap-2">
                          <div className="flex-1 bg-blue-400 rounded-t" style={{height: '60%'}}></div>
                          <div className="flex-1 bg-green-400 rounded-t" style={{height: '80%'}}></div>
                          <div className="flex-1 bg-orange-400 rounded-t" style={{height: '45%'}}></div>
                          <div className="flex-1 bg-blue-400 rounded-t" style={{height: '70%'}}></div>
                          <div className="flex-1 bg-green-400 rounded-t" style={{height: '90%'}}></div>
                          <div className="flex-1 bg-orange-400 rounded-t" style={{height: '55%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Text */}
            <p className="text-center text-gray-500 text-sm mt-4">
              Trusted by indie founders & micro-SaatS-builders
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION - Features */}
        <div className="mt-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Everything You Need to Grow — In One Place
          </h2>
          
          {/* Features Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Feature 1 - Social Media */}
            <div className="p-6 bg-white border border-gray-300 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Social Media</h3>
                  <p className="text-gray-600 text-sm">
                    Post, schedule, a track Reddit & Linkedin from one dashboard.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 2 - Ads Overview */}
            <div className="p-6 bg-white border border-gray-300 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Ads Overview</h3>
                  <p className="text-gray-600 text-sm">
                    See all your ad performance— spend, clicks, conversions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 3 - SEO Insights */}
            <div className="p-6 bg-white border border-gray-300 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">SEO Insights</h3>
                  <p className="text-gray-600 text-sm">
                    Monitor keywords, rankings, impressions, and search tren
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 4 - User Analytics */}
            <div className="p-6 bg-white border border-gray-300 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">User Analytics</h3>
                  <p className="text-gray-600 text-sm">
                    Track DAU, signups. funels, and retention with instant clarity.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
