import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FCF8F2] pt-36 pb-24 min-h-screen">

        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 font-medium transition mb-8"
          >
            <i className="bi bi-arrow-left"></i>
            Back to Home
          </Link>

          {/* Heading */}

          <p className="uppercase tracking-[0.35em] text-amber-500 font-semibold mb-4">
            LEGAL
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-[#2D1A0F] mb-6">
            Privacy Policy
          </h1>

          <div className="w-20 h-1 rounded-full bg-amber-500 mb-10"></div>

          <p className="text-lg text-gray-600 leading-8 mb-14">
            Ebenezer Child Care Centre values your privacy and is committed to
            protecting any personal information you share with us. This Privacy
            Policy explains how we collect, use and safeguard your information.
          </p>

          {/* Content */}

          <div className="space-y-12 text-gray-700">

            <section>

              <h2 className="text-3xl font-bold text-[#2D1A0F] mb-5">
                Information We Collect
              </h2>

              <p className="leading-8 text-lg">
                We may collect personal information such as your name,
                email address, phone number, donation details and any
                information you voluntarily submit through our contact
                forms or donation pages.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-bold text-[#2D1A0F] mb-5">
                How We Use Your Information
              </h2>

              <p className="leading-8 text-lg">
                Your information is used to process donations,
                communicate with you, respond to enquiries,
                improve our services and keep you informed
                about our activities where appropriate.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-bold text-[#2D1A0F] mb-5">
                Data Security
              </h2>

              <p className="leading-8 text-lg">
                We implement appropriate administrative,
                technical and physical safeguards to protect
                your personal information from unauthorized
                access, disclosure or misuse.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-bold text-[#2D1A0F] mb-5">
                Cookies
              </h2>

              <p className="leading-8 text-lg">
                Our website may use cookies and similar
                technologies to improve website performance,
                analyze visitor behavior and enhance the
                overall browsing experience.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-bold text-[#2D1A0F] mb-5">
                Policy Updates
              </h2>

              <p className="leading-8 text-lg">
                We may update this Privacy Policy from time
                to time. Any changes will be posted on this
                page with the revised effective date.
              </p>

            </section>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}