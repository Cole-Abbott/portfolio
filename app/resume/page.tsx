// app/resume/page.tsx  (Server component)
import Header from '../components/Header';

export const metadata = { title: 'Resume — Cole Abbott' };

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-base-bg text-content-light">
      <Header />
      <main className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-heading mb-4">Resume</h1>

        {/* Full-browser PDF viewer (browser's PDF plugin) */}
        <div className="border border-content-dark rounded-lg overflow-hidden">
          <iframe
            src="/resume.pdf"
            title="Cole Abbott Resume"
            className="w-full h-[80vh] block"
            style={{ border: 0 }}
          />
        </div>

        <p className="mt-4 text-content-light">
          Or <a href="/resume.pdf" className="text-accent">download the PDF</a>.
        </p>
      </main>
    </div>
  );
}