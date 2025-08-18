import React from 'react'

const Offer = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-900 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">What I Offer</h2>

        <div className="space-y-12">
          {/* Web Design */}
          <div className="flex flex-col items-start border-l-4 border-blue-500 pl-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-600">01</span>
              <h3 className="text-2xl font-semibold">Web Design</h3>
            </div>
            <p className="text-sm text-gray-600">
              Designing modern, user-focused websites using <strong>Figma</strong> for layout, prototyping,
              and reusable components. My process focuses on clean hierarchy, accessible typography, and
              mobile-first design principles.
            </p>
          </div>

          {/* Webflow Deployment */}
          <div className="flex flex-col items-start border-l-4 border-blue-500 pl-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-600">02</span>
              <h3 className="text-2xl font-semibold">Webflow Deployment</h3>
            </div>
            <p className="text-sm text-gray-600">
              Building and launching responsive websites using <strong>Webflow</strong> with smooth animations and CMS capabilities.
            </p>
          </div>

          {/* Front-End Development */}
          <div className="flex flex-col items-start border-l-4 border-blue-500 pl-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-600">03</span>
              <h3 className="text-2xl font-semibold">Front-End Development</h3>
            </div>
            <p className="text-sm text-gray-600">
              Transforming designs into fully functional websites using <strong>HTML, Tailwind CSS, and JavaScript</strong> for responsive, interactive UI.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer
