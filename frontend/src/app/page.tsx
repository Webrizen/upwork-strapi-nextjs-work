import Image from "next/image"

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h5 className="text-sm text-gray-600 mb-1">Why Choose Us</h5>
        <h2 className="text-3xl font-bold">We Are Different From Others</h2>
        <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam venenatis accumsan consequat. Sed ut non odio
          felis. Fusce sed massa molestie, sit ut ac, nulla felis.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left side with circular image */}
        <div className="md:w-1/2 relative">
          <div className="w-full aspect-square max-w-md mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-rose-300 opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <Image
                src="/globe.svg"
                alt="Professional woman working on laptop"
                width={400}
                height={400}
                className="rounded-full object-cover"
              />
            </div>
            <div className="absolute bottom-10 left-10 bg-rose-600 text-white p-4 rounded-lg max-w-[250px]">
              <h4 className="font-semibold mb-1">Industry Experts</h4>
              <p className="text-sm">
                Expert team of professionals with years of experience in delivering top-notch solutions for your
                business.
              </p>
            </div>
          </div>
        </div>

        {/* Right side with feature cards */}
        <div className="md:w-1/2 space-y-4">
          <div className="bg-gray-200 rounded-full p-3 flex items-center">
            <div className="bg-rose-600 text-white rounded-full w-40 py-2 text-center font-medium">
              Industry Experts
            </div>
            <div className="ml-4 text-sm text-gray-700">Expert team ready to help</div>
          </div>

          <div className="bg-gray-200 rounded-full p-3 flex items-center">
            <div className="bg-rose-600 text-white rounded-full w-40 py-2 text-center font-medium">Outcome Focused</div>
            <div className="ml-4 text-sm text-gray-700">Results-driven approach</div>
          </div>

          <div className="bg-gray-200 rounded-full p-3 flex items-center">
            <div className="bg-rose-600 text-white rounded-full w-40 py-2 text-center font-medium">
              High-Quality Service
            </div>
            <div className="ml-4 text-sm text-gray-700">Premium solutions delivered</div>
          </div>

          <div className="bg-gray-200 rounded-full p-3 flex items-center">
            <div className="bg-rose-600 text-white rounded-full w-40 py-2 text-center font-medium">
              Cyber Security Expert
            </div>
            <div className="ml-4 text-sm text-gray-700">Protecting your digital assets</div>
          </div>
        </div>
      </div>
    </section>
  )
}
