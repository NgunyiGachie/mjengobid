import BoQForm from "../components/BoQForm";

function RequestBoQ() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
            Request a Bill of Quantities
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Upload your drawings and share your project details. We’ll review
            the request and prepare your BoQ.
          </p>
        </div>

        <BoQForm />
      </div>
    </section>
  );
}

export default RequestBoQ;