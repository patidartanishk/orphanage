import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TermsPage() {
  const terms = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using this website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using this website.",
      icon: "bi-check-circle-fill",
    },
    {
      title: "Donations",
      content:
        "Donations made through this website are voluntary and directly support our programs for children. Unless required by applicable law, donations are generally non-refundable.",
      icon: "bi-heart-fill",
    },
    {
      title: "Intellectual Property",
      content:
        "All content including text, images, graphics, logos and website design belongs to Ebenezer Child Care Centre unless otherwise stated. Unauthorized copying, reproduction or distribution is prohibited.",
      icon: "bi-shield-lock-fill",
    },
    {
      title: "Child Protection",
      content:
        "Images, stories and information relating to children are shared responsibly and only with appropriate permission. Any unauthorized use or redistribution of this content is strictly prohibited.",
      icon: "bi-shield-check",
    },
    {
      title: "External Links",
      content:
        "This website may contain links to third-party websites for your convenience. Ebenezer Child Care Centre is not responsible for the content, availability or privacy practices of external websites.",
      icon: "bi-box-arrow-up-right",
    },
    {
      title: "Changes to These Terms",
      content:
        "We may update these Terms & Conditions from time to time. Continued use of this website after changes are published constitutes your acceptance of the revised terms.",
      icon: "bi-arrow-repeat",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FCF8F2] pt-36 pb-24">

        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 font-medium transition mb-10"
          >
            <i className="bi bi-arrow-left"></i>
            Back to Home
          </Link>

          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-amber-500 font-semibold">
              LEGAL
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#2D1A0F] mt-5">
              Terms & Conditions
            </h1>

            <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mt-8"></div>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              These Terms & Conditions govern the use of the Ebenezer Child Care
              Centre website. By accessing this website, you agree to abide by
              these terms and use the website responsibly and respectfully.
            </p>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">

            {terms.map((term, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-[#F2E7D8] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex gap-5"
              >

                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
                  <i className={`bi ${term.icon} text-amber-600 text-2xl`}></i>
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-[#2D1A0F] mb-3">
                    {term.title}
                  </h2>

                  <p className="text-gray-700 leading-8">
                    {term.content}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* Bottom Section */}
          <div className="mt-20 bg-white rounded-[32px] border border-[#F2E7D8] shadow-xl p-10 lg:p-14">

            <h2 className="text-3xl font-bold text-[#2D1A0F] mb-6">
              Questions About These Terms?
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              If you have any questions regarding these Terms & Conditions,
              please feel free to contact us or visit our centre. We are happy
              to assist you.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/#visit"
                className="bg-amber-500 hover:bg-amber-400 text-[#2D1A0F] px-7 py-4 rounded-xl font-semibold transition flex items-center gap-3"
              >
                <i className="bi bi-geo-alt-fill"></i>
                Visit Our Centre
              </Link>

              <Link
                href="/privacy-policy"
                className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-7 py-4 rounded-xl font-semibold transition flex items-center gap-3"
              >
                <i className="bi bi-shield-lock-fill"></i>
                Privacy Policy
              </Link>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}