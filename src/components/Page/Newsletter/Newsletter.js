import React from 'react';

const Newsletter = () => {
  return (
    <div>
      <section class="relative pb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold text-black">
              Subscribe to our newsletter
            </h1>
            <h1 class="mb-9 text-2xl font-semibold text-gray-900">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autocomplete="email"
              class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <a
              class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-black border rounded-lg bg-black"
              href="/"
            >
              <span class="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;