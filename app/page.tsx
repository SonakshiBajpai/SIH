// app/page.tsx
'use client'; 

import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import UserProfile from './components/UserProfile';
import {
  ChevronRight,
  DatabaseZap,
  ShieldCheck,
  FileClock,
  SearchCode,
  FileCog,
  Binary,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

// Define types for component props
type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

type FaqItemProps = {
  question: string;
  answer: string;
};

// A reusable component for the feature cards
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600/20 text-purple-400 border border-purple-500/30 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm">{description}</p>
  </div>
);

// A reusable component for the FAQ items
const FaqItem = ({ question, answer }: FaqItemProps) => (
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
      icon: <DatabaseZap className="h-6 w-6" />,
      title: "Automated Data Ingestion",
      description:
        "Seamlessly connect to legacy systems and cloud sources to ingest and normalize data for archival.",
    },
    {
      icon: <FileClock className="h-6 w-6" />,
      title: "Chain of Custody Tracking",
      description:
        "Maintain a complete, immutable audit trail for every piece of data from ingestion to disposal.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "WORM Compliance Storage",
      description:
        "Ensure data cannot be altered or deleted with Write-Once, Read-Many (WORM) compliant storage.",
    },
    {
      icon: <SearchCode className="h-6 w-6" />,
      title: "Intelligent Indexing & Search",
      description:
        "Quickly locate and retrieve specific data from petabytes of archived information with powerful search tools.",
    },
    {
      icon: <FileCog className="h-6 w-6" />,
      title: "Customizable Retention Policies",
      description:
        "Define granular, rule-based retention and disposal policies to meet legal and regulatory requirements.",
    },
    {
      icon: <Binary className="h-6 w-6" />,
      title: "Secure API & Data Export",
      description:
        "Programmatically access your archive or export data in standard formats for analysis or legal discovery.",
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
            <span className="font-bold text-xl text-white">Bit Cleaner</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link href="/docs" className="hover:text-purple-400">Documentation</Link>
            <a href="https://github.com/jagrat04/SIH2025website/raw/refs/heads/main/public/bit%20cleaner.zip?download=" className="hover:text-purple-400" download>Download</a>
            <Link href="/guide" className="hover:text-purple-400">Guide</Link>
          </nav>
          <UserProfile />
        </header>

        <main>
          {/* Hero Section */}
          <section className="text-center pt-20 pb-24">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <span className="bg-purple-600/20 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30">
                Secure
              </span>
              <span className="bg-purple-600/20 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30">
                Compliant
              </span>
              <span className="bg-purple-600/20 text-purple-300 text-xs font-medium px-3 py-1 rounded-full border border-purple-500/30">
                Accessible
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Recycle data efficiently and securely
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
              Bit Cleaner provides a secure, compliant, and cost-effective platform to retire legacy data systems, ensuring your information remains accessible for legal and operational needs.
            </p>
            <div className="mt-8 flex justify-center items-center gap-4">
              <a href="https://github.com/jagrat04/SIH2025website/raw/refs/heads/main/public/bit%20cleaner.zip?download=" download>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90">
                  Download Bit Cleaner
                </button>
              </a>
              <Link href="/about">
                <button className="bg-white/10 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/20">
                  Explore Features
                </button>
              </Link>
            </div>

            {/* Product Image Placeholder */}
            <div className="mt-16">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 shadow-2xl shadow-purple-900/20">
                <Image 
                  src="/ss.png" 
                  alt="Product dashboard screenshot" 
                  className="rounded-lg"
                  width={1084}
                  height={644}
                  priority={true}
                />
              </div>
            </div>
          </section>

          {/* What is Product Section */}
          <section className="py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  What is Bit Cleaner?
                </h2>
              </div>
              <div>
                <p className="text-slate-400">
                  Bit Cleaner is a cloud-native archival platform designed to help organizations securely decommission old databases and applications. We preserve your data in a searchable, low-cost format, guaranteeing compliance and long-term accessibility.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24">
            <div className="text-left max-w-3xl">
              <h2 className="text-4xl font-bold text-white">
                Everything you need for secure data retirement
              </h2>
              <p className="mt-4 text-slate-400">
                Our platform provides a robust set of tools to manage the entire data lifecycle, from initial ingestion and legal hold to final, certified disposal.
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
                <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  <FaqItem
                    question="What kind of data can I archive with Bit Cleaner?"
                    answer="You can archive data from virtually any source, including relational databases (SQL), NoSQL databases, file systems, and enterprise applications like SAP and Oracle."
                  />
                  <FaqItem
                    question="How does Bit Cleaner ensure my data is secure?"
                    answer="All data is encrypted in transit and at rest using AES-256 encryption. We provide role-based access controls and detailed audit logs to ensure only authorized personnel can access information."
                  />
                  <FaqItem
                    question="Is Bit Cleaner compliant with regulations like GDPR?"
                    answer="Yes, our platform is designed to help you meet compliance requirements for regulations like GDPR, CCPA, HIPAA, and SEC 17a-4, with features like legal hold and customizable retention policies."
                  />
                  <FaqItem
                    question="What happens when a retention period expires?"
                    answer="Upon expiration of a retention period, data is flagged for disposal. Our system provides a certified destruction process to ensure the data is permanently and irretrievably deleted."
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
                <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> contact@bitwiper.com</li>
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Careers</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li><a href="mailto:careers@bitwiper.com" className="hover:text-purple-400">careers@bitwiper.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Social</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-purple-400">Twitter / X</a></li>
                <li><a href="#" className="hover:text-purple-400">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 flex justify-between items-center text-sm text-slate-500">
            <p>&copy; 2025 Bit Cleaner. All Rights Reserved.</p>
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              <span>Bit Cleaner</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
