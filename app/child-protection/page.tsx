import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ChildProtectionPage() {
  const highlights = [
    "Zero tolerance for child abuse, neglect and exploitation.",
    "Safe recruitment, background verification and training for all staff and volunteers.",
    "Clear reporting procedures for any safeguarding concerns.",
    "Protection of every child's privacy, dignity and personal information.",
    "Equal treatment and respect for every child regardless of background.",
    "Regular review of safeguarding policies to maintain the highest standards.",
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
              SAFEGUARDING
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#2D1A0F] mt-5">
              Child Protection Policy
            </h1>

            <div className="w-20 h-1 bg-amber-500 rounded-full mx-auto mt-8"></div>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              The safety, dignity and wellbeing of every child are at the heart
              of everything we do. Ebenezer Child Care Centre is committed to
              creating a secure, nurturing and respectful environment where
              every child can learn, grow and thrive without fear of abuse,
              neglect or exploitation.
            </p>

          </div>

          {/* Policy Highlights */}

          <div className="grid md:grid-cols-2 gap-8 mt-20">

            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-[#F2E7D8] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex gap-5"
              >

                <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
                  <i className="bi bi-shield-check text-amber-600 text-2xl"></i>
                </div>

                <p className="text-gray-700 leading-8">
                  {item}
                </p>

              </div>
            ))}

          </div>

          {/* Commitment Section */}

          <div className="mt-20 bg-white rounded-[32px] border border-[#F2E7D8] shadow-xl p-10 lg:p-14">

            <h2 className="text-3xl font-bold text-[#2D1A0F] mb-6">
              Our Commitment
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Every member of our team shares the responsibility of protecting
              children. We promote a culture of openness, accountability and
              respect, ensuring that any concerns are addressed promptly and
              appropriately. Our safeguarding practices are reviewed regularly
              to meet current child protection standards.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="/policies/child-protection-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-[#2D1A0F] px-7 py-4 rounded-xl font-semibold transition flex items-center gap-3"
              >
                <i className="bi bi-file-earmark-pdf-fill"></i>
                Download Policy
              </a>

              <Link
                href="/#visit"
                className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-7 py-4 rounded-xl font-semibold transition flex items-center gap-3"
              >
                <i className="bi bi-geo-alt-fill"></i>
                Visit Our Centre
              </Link>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}