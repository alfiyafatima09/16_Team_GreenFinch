"use client";

import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useState } from "react";
import Feature from "../components/Feature";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const growthData = [
  { month: "Jan", growth: 20 },
  { month: "Feb", growth: 35 },
  { month: "Mar", growth: 45 },
  { month: "Apr", growth: 60 },
  { month: "May", growth: 75 },
  { month: "Jun", growth: 85 },
];

const impactData = [
  { year: "2020", impact: 30 },
  { year: "2021", impact: 45 },
  { year: "2022", impact: 65 },
  { year: "2023", impact: 85 },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-green-600 text-xl font-bold"
                >
                  Eco-Friendly
                </button>
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="border-green-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("statistics")}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Statistics
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="bg-green-50 border-green-500 text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("statistics")}
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left"
            >
              Statistics
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left"
            >
              Contact
            </button>
            <Link
              href="/register"
              className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mx-2"
            >
              Register as User
            </Link>
            <Link
              href="/adminlogin"
              className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mx-2"
            >
              Register as Admin
            </Link>
          </div>
        </div>
      </nav>

      <div id="home" className="pt-16">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Welcome to</span>
                    <span className="block text-green-600">
                      Eco-Friendly Products
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Join us in making the world a better place. Register your
                    eco-friendly products and be part of the sustainable
                    revolution.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        href="/register"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                      >
                        Register as User
                      </Link>
                      <br />
                      <Link
                        href="/adminlogin"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                      >
                        Login as Admin
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <div className="lg:block lg:w-1/2 flex items-center justify-center">
              <img
                // src="/images/image.png"
                src="/icons/favicon-32x32.png"
                alt="Eco-Friendly"
                className="w-4/5 h-[450px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <Feature />
          </div>
        </div>
      </div>

      <div id="statistics" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Impact & Growth
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Growth over the Past Year
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={growthData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="growth" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Environmental Impact
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={impactData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="impact" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />

      <Footer />
    </div>
  );
}
