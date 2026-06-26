import Link from "next/link";

export default function ChildProtectionPage() {
  const highlights = [
    "Zero tolerance for child abuse, neglect and exploitation.",
    "Safe recruitment and training for staff and volunteers.",
    "Clear reporting and response procedures for concerns.",
    "Protection of children's privacy and personal information.",
    "Respect for every child's dignity, rights and wellbeing.",
    "Regular review and continuous improvement of safeguarding practices.",
  ];

  return (
    <main className="min-h-screen bg-[#FCF8F2] py-20">
      <div className="max-w-6xl mx-auto px-8">

        {/* Hero */}
        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-amber-600 font-semibold">
            SAFEGUARDING
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold text-[#2D1A0F] mt-4">
            Child Protection Policy
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            The safety, dignity and wellbeing of every child are at the heart
            of everything we do. We are committed to maintaining a secure,
            respectful and nurturing environment for all children in our care.
          </p>

        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">

          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md border border-[#F2E7D8] flex gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                <i className="bi bi-shield-check text-amber-500 text-2xl"></i>
              </div>

              <p className="text-gray-700 leading-7">
                {item}
              </p>
            </div>
          ))}

        </div>

        {/* Download Section */}
        <div className="mt-20 bg-white rounded-[32px] p-10 shadow-lg border border-[#F2E7D8]">

          <h2 className="text-3xl font-bold text-[#2D1A0F] mb-4">
            Read the Full Policy
          </h2>

          <p className="text-gray-600 leading-8 mb-8">
            Our complete Child Protection Policy explains our safeguarding
            standards, reporting procedures, staff responsibilities and our
            commitment to protecting every child.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="/policies/child-protection-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-[#2D1A0F] px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2"
            >
              <i className="bi bi-file-earmark-pdf-fill"></i>
              Download PDF
            </a>

            <Link
              href="/contact"
              className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2"
            >
              <i className="bi bi-envelope-fill"></i>
              Contact Us
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}