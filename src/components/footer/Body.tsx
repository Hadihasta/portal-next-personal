import React from 'react'

const Body = () => {
  return (
    <div>
      <footer className=" text-white py-12 px-6">
        <div className="max-w-screen-xl mx-auto grid  grid-cols-3 ">
          {/* Navigasi - General */}
          <div>
            <h4 className="text-lg font-semibold mb-4">General</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Goals</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>

          {/* Navigasi - The Website */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Notion</a>
              </li>
              <li>
                <a href="#">Excalidraw</a>
              </li>
              <li>
                <a href="#">Chatgpt</a>
              </li>
              <li>
                <a href="#">unsplash</a>
              </li>
              {/* <li>
                <a href="#"> radix tailwind motion dev swipper</a>
              </li> */}
            </ul>
          </div>

          {/* Navigasi - Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4"> Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Hijrihadi@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Body
