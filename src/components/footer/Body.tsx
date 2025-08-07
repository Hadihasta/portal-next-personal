import React from 'react'

const Body = () => {
  return (
    <div >
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigasi - General */}
          <div>
            <h4 className="text-lg font-semibold mb-4">General</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Shorts</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>

          {/* Navigasi - The Website */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Bucket List</a>
              </li>
              <li>
                <a href="#">Uses</a>
              </li>
              <li>
                <a href="#">Side Quests</a>
              </li>
              <li>
                <a href="#">Attribution</a>
              </li>
              <li>
                <a href="#">Statistics</a>
              </li>
              <li>
                <a href="#">Guest Book</a>
              </li>
            </ul>
          </div>

          {/* Navigasi - Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4"> Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Book Notes</a>
              </li>
              <li>
                <a href="#">Starter Templates</a>
              </li>
              <li>
                <a href="#">RSS</a>
              </li>
              <li>
                <a href="#">Mentorship</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Body
