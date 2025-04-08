import React from 'react'

export default function Loading() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12 bg-white space-y-16 animate-pulse">
            {[...Array(1)].map((_, i) => (
                <div key={i}>
                    {/* Header skeleton */}
                    <div className="text-center mb-8">
                        <div className="h-4 w-32 bg-gray-200 mx-auto rounded-full mb-2"></div>
                        <div className="h-6 w-64 bg-gray-300 mx-auto rounded-full mb-2"></div>
                        <div className="h-3 w-80 bg-gray-200 mx-auto rounded-full mt-2"></div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Left side skeleton */}
                        <div className="md:w-1/2 relative">
                            <div className="w-full aspect-square max-w-md mx-auto relative">
                                <div className="absolute inset-0 rounded-full bg-rose-200 opacity-60" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[300px] h-[300px] rounded-full bg-gray-300" />
                                </div>
                                <div className="absolute bottom-0 -left-1/2 flex justify-center items-start flex-col bg-rose-400 opacity-30 text-white p-8 w-[400px] h-[400px] rounded-full space-y-2">
                                    <div className="h-5 w-40 bg-white/30 rounded-full"></div>
                                    <div className="h-3 w-60 bg-white/20 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right side feature skeletons */}
                        <div className="md:w-1/2 space-y-4 w-full">
                            {[...Array(3)].map((_, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-200 rounded-full p-3 flex gap-3 items-center whitespace-nowrap"
                                >
                                    <div className="bg-rose-300 rounded-full w-24 h-8"></div>
                                    <div className="h-4 w-40 bg-gray-300 rounded-full"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
