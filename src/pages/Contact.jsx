import React from "react";

export default function Contact() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Have any questions? Feel free to reach out to us at{" "}
          <a
            href="https://yordanostechweb.netlify.app/"
            target="_blank"
            className="text-blue-500 font-bold text-2xl"
          >
            contact the developer
          </a>
          .
        </p>
      </div>
    </div>
  );
}
