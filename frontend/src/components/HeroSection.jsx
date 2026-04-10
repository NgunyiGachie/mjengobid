import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="border-b border-neutral-200 bg-white px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600">
          <Clock className="h-4 w-4" />
          <span>48-hour turnaround time</span>
        </div>

        {/* Heading */}
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl">
          Get a Professional Bill Of Quantities in 48 Hours
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
          Upload your architectural drawings and receive a detailed, accurate BoQ
          prepared by certified quantity surveyors. Fast, reliable, and affordable.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          {/* Primary CTA */}
          <Link
            to="/request-boq"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Request BoQ
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;