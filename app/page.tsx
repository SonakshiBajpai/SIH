// app/page.tsx
import Link from 'next/link'; // Import the Link component
import {
  ChevronRight,
  BarChart,
  Layers,
  LayoutGrid,
  Lock,
  PenTool,
  Code,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

// A reusable component for the feature cards
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600/20 text-purple-400 border border-purple-500/30 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm">{description}</p>
  </div>
);

// A reusable component for the FAQ items
const FaqItem = ({ question, answer }) => (
  <div className="border-b border-slate-700 py-4">
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-white hover:text-purple-400">
        {question}
        <ChevronRight className="h-5 w-5 transition-transform duration-300 group-open:rotate-90" />
      </summary>
      <p className="mt-2 text-slate-400">{answer}</p>
    </details>
  </div>
);

export default function LandingPage() {
  const features = [
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Data Analytics",
      description:
        "Turpis tristique nulla posuere et amet arcu dictum. Turpis tristique nulla posuere et amet arcu.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Lead Management",
      description:
        "Turpis tristique nulla posuere et amet arcu dictum. Turpis tristique nulla posuere et amet arcu.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Archiving",
      description:
        "Turpis tristique nulla posuere et amet arcu dictum. Turpis tristique nulla posuere et amet arcu.",
    },
    {
      icon: <LayoutGrid className="h-6 w-6" />,
      title: "Custom Dashboards",
      description:
        "Turpis tristique nulla posuere et amet arcu dictum. Turpis tristique nulla posuere et amet arcu.",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Editable Templates",
      description:
        "Turpis tristique nulla posuere et amet arcu dictum. Turpis tristique nulla posuere et amet arcu.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Developer API",
      description:
        "Turpis tristique nulla posuere et amet arcu dictum. Turpis tristique nulla posuere et amet arcu.",
    },
  ];

  return (
    <div className="bg-[#0B011D] text-slate-200">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-600 opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <Link href="/" className="flex items-center">
            <Globe className="h-8 w-8 text-purple-400 mr-2" />
            <span className="font-bold text-xl text-white">Product Name</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link href="/docs" className="hover:text-purple-400">Documentation</Link>
            <Link href="/about" className="hover:text-purple-400">Download</Link>
            <Link href="/guide" className="hover:text-purple-400">Guide</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/signup" passHref>
              <button className="bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-white/20">
                Sign Up
              </button>
            </Link>
            <Link href="/signin" passHref>
               <button className="text-sm font-medium px-4 py-2 text-slate-300">Log in</button>
            </Link>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="text-center pt-20 pb-24">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <span className="bg-purple-600/20 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30">
                User-Friendly
              </span>
              <span className="bg-purple-600/20 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30">
                Tamper-Proof
              </span>
              <span className="bg-purple-600/20 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30">
                Archival
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Recycle data efficiently and securely
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor.
            </p>
            <div className="mt-8 flex justify-center items-center gap-4">
              <a href="/download-file.zip" download>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90">
                  Download for free
                </button>
              </a>
              <Link href="/about">
                <button className="bg-white/10 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/20">
                  Learn more about the product
                </button>
              </Link>
            </div>

            {/* Product Image Placeholder */}
            <div className="mt-16">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 shadow-2xl shadow-purple-900/20">
                <img src="https://i.imgur.com/k6P4IWH.png" alt="Product dashboard screenshot" className="rounded-lg"/>
              </div>
            </div>
          </section>

          {/* What is Product Section */}
          <section className="py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  What is (product name)?
                </h2>
              </div>
              <div>
                <p className="text-slate-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24">
            <div className="text-left max-w-3xl">
              <h2 className="text-4xl font-bold text-white">
                Powerful features to help you manage all your leads
              </h2>
              <p className="mt-4 text-slate-400">
                Aenean sit amet magna nec magna laoreet consequat. Aliquam
                sodales non ex et sodales. Proin vitae turpis quis ante
                ultrices mollis. Nulla neque odio, aliquet sed.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/50 flex items-center justify-center aspect-square">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold">A</span>
                  </div>
                  <p className="text-slate-400">YOUR IMAGE HERE</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">FAQs</h2>
                <div className="space-y-2">
                  <FaqItem
                    question="Orci phasellus egestas tellus rutrum?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                  />
                  <FaqItem
                    question="Eu tincidunt tortor aliquam nulla?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                  />
                  <FaqItem
                    question="Cras vitae ac nunc egestas convallis?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                  />
                  <FaqItem
                    question="Semper auctor lobortis id commodo?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-white">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> info@work@vaultflow.com</li>
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> (111) 222-3333</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Careers</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li><a href="mailto:careers@example.com" className="hover:text-purple-400">carees@gmail.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Social</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-purple-400">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-400">Instagram</a></li>
                <li><a href="#" className="hover:text-purple-400">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 flex justify-between items-center text-sm text-slate-500">
            <p>&copy; 2024 Product Name. All Rights Reserved.</p>
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              <span>Product name</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}