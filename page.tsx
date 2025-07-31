'use client';

// Import necessary Next.js components and custom components
import Link from 'next/link'; // Next.js Link component for client-side navigation
import Image from 'next/image'; // Next.js optimized Image component
import { useState, useEffect } from 'react'; // React hooks
import { ThemeToggle } from '@/components/theme-toggle'; // Custom theme toggle component
import { ContactForm } from '@/components/contact-form'; // Custom contact form component

/**
 * Home Page Component
 * 
 * This is the main page component that renders the entire portfolio website.
 * It includes all sections: header, hero, about, skills, projects, experience, education, contact, and footer.
 * 
 * @returns {JSX.Element} The complete home page layout
 */
export default function Home(): JSX.Element {
  const [isHealthModalOpen, setIsHealthModalOpen] = useState(false);
  
  const showHealthAppDetails = () => {
    setIsHealthModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeHealthAppDetails = () => {
    setIsHealthModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHealthAppDetails();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Header Section - Navigation bar with logo and menu items */}
      <header className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
        {/* Logo/Brand section */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl">Saideep Guddla</span>
        </div>
        
        {/* Navigation menu - hidden on mobile, visible on medium screens and up */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/#about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            About
          </Link>
          <Link href="/#skills" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Skills
          </Link>
          <Link href="/#projects" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Projects
          </Link>
          <Link href="/#experience" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Experience
          </Link>
          <Link href="/#education" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Education
          </Link>
          {/* Contact navigation link */}
          <Link href="/#contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Contact
          </Link>
        </nav>
        
        {/* Header actions - theme toggle and mobile menu button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {/* Mobile menu button - only visible on small screens */}
          <button className="md:hidden" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section - Main landing area with introduction and call-to-action buttons */}
      <section className="w-full py-20 px-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
          Android Developer with ~6 years of expertise
        </h1>
        
        {/* Subtitle/description */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          I design, develop, and maintain native Android apps with a strong focus on performance and user experience.
        </p>
        
        {/* Call-to-action buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/#projects" 
            className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            View Projects
          </Link>
          <Link 
            href="/Saideep_Guddla_Resume.pdf" 
            className="px-6 py-3 bg-white text-primary-600 border border-primary-600 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gray-200 dark:bg-gray-700">
                {/* Profile picture placeholder */}
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                Hi, I'm Saideep Guddla, an Android Developer with ~6 years of hands-on expertise in the full mobile lifecycle from design to deployment.
              </p>
              <p className="text-lg mb-4">
                I'm proficient with Kotlin/Java, Android Jetpack (ViewModel, LiveData, Room, WorkManager, Navigation), and Compose. I have strong architecture skills using MVVM/MVI/MVP/Clean Architecture and dependency injection (Hilt/Dagger).
              </p>
              <p className="text-lg mb-4">
                My expertise includes Coroutines/Flow, offline-first strategies, background work optimization, and creating adaptive UIs with a track record of improving stability and performance (crash-free sessions &gt;99%).
              </p>
              <p className="text-lg">
                I have a Master of Science in Information Systems from Cleveland State University (May 2024).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3 text-primary-600 dark:text-primary-400">Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kotlin
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Java
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  XML
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  C
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3 text-primary-600 dark:text-primary-400">Android</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Jetpack (ViewModel, LiveData, Room, WorkManager, Navigation)
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Compose
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Bluetooth, Maps, View Binding
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Architecture Components
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3 text-primary-600 dark:text-primary-400">Architecture</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Clean Architecture
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  MVVM
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  MVI
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  MVP
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3 text-primary-600 dark:text-primary-400">Testing</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  JUnit
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Espresso
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mockito
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3 text-primary-600 dark:text-primary-400">Libraries</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Retrofit, OkHttp
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Room, SQLite
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Hilt, Dagger 2
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Coroutines, Flow, RxJava
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-3 text-primary-600 dark:text-primary-400">Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Android Studio
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Git, GitHub, Bitbucket
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Jenkins, Bitrise
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Crashlytics, LeakCanary
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="space-y-12">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Offline-First E-Commerce App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A fully featured e-commerce application with offline capabilities, synchronization, and a modern UI using Jetpack Compose.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Kotlin</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Jetpack Compose</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Room</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">WorkManager</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Retrofit</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">View Details</a>
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
            
            {/* Project 2 - Health Tracking App */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">FitLife - Health Tracking App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A comprehensive health and fitness tracking application featuring personalized workout plans, nutrition monitoring, calorie tracking, and detailed progress analytics with Material 3 design.
                </p>
                
                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2 text-primary-600 dark:text-primary-400">Key Features:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Custom workout plans with 100+ exercises and video demonstrations</li>
                    <li>• Nutrition tracking with barcode scanning and macro counting</li>
                    <li>• Daily calorie intake monitoring and meal planning</li>
                    <li>• Progress visualization with charts and body measurement tracking</li>
                    <li>• Water intake reminders and sleep pattern analysis</li>
                    <li>• Integration with wearable devices and Google Fit</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Kotlin</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Jetpack Compose</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">MVVM</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Room Database</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">HealthConnect API</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Material 3</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Coroutines</span>
                </div>
                <div className="flex gap-4">
                  <button className="text-primary-600 dark:text-primary-400 hover:underline cursor-pointer" onClick={showHealthAppDetails}>View Details</button>
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          
          <div className="space-y-8">
            {/* Job 1 */}
            <div className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-1">Android Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">MASTERCARD, USA | Jul 2024 - Present</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Implement features using Kotlin/Java within MVVM + Hilt architecture</li>
                  <li>Create reusable modules and custom UI components for high-performance flows</li>
                  <li>Integrate Coroutines/Flow with Retrofit/OkHttp and Navigation</li>
                  <li>Ensure feature parity and UX alignment with Figma deliverables</li>
                  <li>Optimize performance and memory, driving crash-free sessions &gt;99%</li>
                  <li>Strengthen security and follow compliance/training guidelines</li>
                </ul>
              </div>
            </div>
            
            {/* Job 2 */}
            <div className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-1">Android Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">KRANION TECHNOLOGIES, INDIA | Feb 2018 - Jul 2022</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Built core Android features using Kotlin/Java, Jetpack, and XML</li>
                  <li>Designed responsive UIs with ConstraintLayout/RecyclerView/custom views</li>
                  <li>Implemented robust REST integrations with Retrofit + GSON</li>
                  <li>Applied Room/SQLite for offline-first behaviors</li>
                  <li>Developed PDF export and summary/reporting features</li>
                  <li>Applied DI (Dagger/Hilt) and modular architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section removed as requested */}

      {/* Education Section */}
      <section id="education" className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-1">Master of Science; Information Systems</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Cleveland State University, Cleveland, Ohio | May 2024</p>
          </div>
        </div>
      </section>

      {/* Health App Details Modal */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 ${isHealthModalOpen ? '' : 'hidden'}`} onClick={closeHealthAppDetails}>
        <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400">FitLife - Health Tracking App</h2>
              <button onClick={closeHealthAppDetails} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Exercise Features */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">🏋️ Exercise & Fitness</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Workout Plans</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Beginner to Advanced workout routines</li>
                      <li>• Strength training, cardio, and flexibility programs</li>
                      <li>• Custom workout builder with 100+ exercises</li>
                      <li>• Video demonstrations and proper form guides</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Progress Tracking</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Exercise history and performance analytics</li>
                      <li>• Weight lifting progress charts</li>
                      <li>• Cardio performance metrics (distance, pace, heart rate)</li>
                      <li>• Body measurements and photo progress</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Smart Features</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Rest timer with customizable intervals</li>
                      <li>• Workout reminders and scheduling</li>
                      <li>• Integration with fitness wearables</li>
                      <li>• Social sharing and workout challenges</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Diet Features */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">🥗 Diet & Nutrition</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Nutrition Tracking</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Calorie counting with extensive food database</li>
                      <li>• Macro tracking (proteins, carbs, fats)</li>
                      <li>• Barcode scanning for easy food logging</li>
                      <li>• Custom recipe creation and nutritional analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Meal Planning</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Weekly meal planning with shopping lists</li>
                      <li>• Healthy recipe suggestions based on goals</li>
                      <li>• Dietary restriction support (vegan, keto, etc.)</li>
                      <li>• Meal prep guidance and portion control</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Health Monitoring</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Water intake tracking with reminders</li>
                      <li>• Vitamin and supplement logging</li>
                      <li>• Blood sugar and blood pressure monitoring</li>
                      <li>• Sleep quality analysis and recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technical Implementation */}
            <div className="mt-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Technical Implementation</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Architecture</h4>
                  <ul className="text-sm space-y-1">
                    <li>• MVVM with Clean Architecture</li>
                    <li>• Jetpack Compose for modern UI</li>
                    <li>• Room Database for local storage</li>
                    <li>• Retrofit for API communication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Libraries</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Kotlin Coroutines for async operations</li>
                    <li>• Dagger Hilt for dependency injection</li>
                    <li>• MPAndroidChart for data visualization</li>
                    <li>• CameraX for barcode scanning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Integrations</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Google Fit API for health data</li>
                    <li>• Firebase for user authentication</li>
                    <li>• Nutritionix API for food database</li>
                    <li>• Wear OS companion app</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
               <button onClick={closeHealthAppDetails} className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors">
                 Close
               </button>
             </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out using the form below.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="w-full py-8 px-6 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-xl">Saideep Guddla</p>
            <p className="text-gray-300">Microsoft 365 Developer</p>
            <p className="text-gray-300 mt-2">
              <a href="tel:2163338466" className="hover:text-white transition-colors">
                (216) 333-8466
              </a>
            </p>
            <p className="text-gray-300">
              <a href="mailto:saideepg94@gmail.com" className="hover:text-white transition-colors">
                saideepg94@gmail.com
              </a>
            </p>
            <p className="text-gray-300">
              Dallas, TX - 75234
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/saideep0531" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="GitHub Profile">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/saideep-gudla-68550b200" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn Profile">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Saideep Guddla. All rights reserved.</p>
        </div>
      </footer>
      

    </div>
  );
}