// pages/privacy-policy.tsx

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacyPolicy = () => {
   return (
      <div className="min-h-screen bg-gray-50 text-gray-800">
         <Head>
            <title>Privacy Policy - FadeFlow</title>
         </Head>
         <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-8">
               Privacy Policy
            </h1>
            <p className="text-gray-600 mb-4">
               Effective Date: <strong>09/31/2024</strong>
            </p>
            <p className="mb-4">
               Thank you for choosing FadeFlow! We are committed to
               protecting your privacy and ensuring the security of your
               personal information. This Privacy Policy explains how we
               collect, use, and share information when you use our barber
               booking app.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
               1. Information We Collect
            </h2>
            <p className="mb-4">
               We collect the following types of information to provide and
               improve our services:
            </p>
            <ul className="list-disc list-inside mb-4">
               <li>
                  <strong>Personal Information:</strong> Name, email, phone
                  number, profile picture.
               </li>
               <li>
                  <strong>Location Information:</strong> Your location to show
                  nearby barbers.
               </li>
               <li>
                  <strong>Appointment Details:</strong> Information about your
                  bookings with barbers.
               </li>
               <li>
                  <strong>Usage Data:</strong> Device information and app
                  interactions.
               </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
               2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information to:</p>
            <ul className="list-disc list-inside mb-4">
               <li>Manage and facilitate your barber appointments.</li>
               <li>Send appointment confirmations and reminders.</li>
               <li>Process secure payments.</li>
               <li>Improve app features and user experience.</li>
               <li>Provide customer support.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
               3. How We Share Your Information
            </h2>
            <p className="mb-4">
               We may share your information in the following cases:
            </p>
            <ul className="list-disc list-inside mb-4">
               <li>
                  <strong>With Barbers:</strong> To facilitate your
                  appointments.
               </li>
               <li>
                  <strong>Service Providers:</strong> For payment processing and
                  analytics.
               </li>
               <li>
                  <strong>Legal Obligations:</strong> When required by law or to
                  protect our users.
               </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">
               4. Security of Your Information
            </h2>
            <p className="mb-4">
               We take security seriously and use various measures to protect
               your data, but no system is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Your Data Rights</h2>
            <p className="mb-4">
               You have rights to access, update, or delete your data, opt-out
               of promotional communications, and more.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
               6. Third-Party Links
            </h2>
            <p className="mb-4">
               FadeFlow may contain links to third-party services, and we are
               not responsible for their privacy practices.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
               7. Children’s Privacy
            </h2>
            <p className="mb-4">
               Our app is not intended for users under 13, and we do not
               knowingly collect data from children.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
               8. Changes to This Policy
            </h2>
            <p className="mb-4">
               We may update this Privacy Policy from time to time, and any
               changes will be posted in the app.
            </p>

            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="mb-4">
               If you have any questions about this Privacy Policy, please
               contact us at:
            </p>
            <p className="mb-4">
               <strong>Email:</strong>{' '}
               <Link target="_blank" href={'mailto:melendez@robertdev.net'}>
                  melendez@robertdev.net
               </Link>
            </p>

            <p className="text-gray-600 mt-8">
               <strong>FadeFlow</strong>
               <br />
               Robert Dev
               <br />
            </p>
         </div>
      </div>
   );
};

export default PrivacyPolicy;
