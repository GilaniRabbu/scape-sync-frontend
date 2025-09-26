// import React, { useRef, useState } from "react";
// import Head from "next/head";

// export default function VerifyPage() {
//   const [values, setValues] = useState(Array(6).fill(""));
//   const inputsRef = useRef([]);

//   const handleChange = (i, e) => {
//     const val = e.target.value.replace(/[^0-9]/g, "");
//     const newValues = [...values];
//     newValues[i] = val.slice(0, 1);
//     setValues(newValues);
//     if (val && i < 5) inputsRef.current[i + 1].focus();
//   };

//   const handleKeyDown = (i, e) => {
//     if (e.key === "Backspace" && !values[i] && i > 0) {
//       inputsRef.current[i - 1].focus();
//     }
//   };

//   const handlePaste = (e) => {
//     const paste = e.clipboardData
//       .getData("text")
//       .replace(/\D/g, "")
//       .slice(0, 6);
//     if (!paste) return;
//     const newValues = Array(6).fill("");
//     paste.split("").forEach((ch, idx) => (newValues[idx] = ch));
//     setValues(newValues);
//     const last = Math.min(paste.length - 1, 5);
//     inputsRef.current[last].focus();
//     e.preventDefault();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const code = values.join("");
//     alert("Submitted code: " + code);
//   };

//   return (
//     <>
//       <Head>
//         <title>Verify - ScapeSync</title>
//       </Head>

//       <div className="min-h-screen bg-white flex flex-col">
//         {/* Top-left logo */}
//         <header className="p-6">
//           <div className="max-w-[1200px] mx-auto">
//             <div className="flex items-center gap-3">
//               <div className="w-14 h-14 flex items-center justify-center rounded-md border-2 border-green-700">
//                 {/* simple leaf/svg logo placeholder */}
//                 <svg
//                   width="28"
//                   height="28"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M6 3C6 3 4 8 10 11C16 14 18 11 18 11C18 11 15 9 13 7C11 5 6 3 6 3Z"
//                     fill="#2F7A2E"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <div className="font-semibold text-gray-800">ScapeSync</div>
//                 <div className="text-xs text-gray-400">
//                   LANDSCAPING MANAGEMENT SOFTWARE
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Center card area */}
//         <main className="flex-1 flex items-center justify-center">
//           <div className="w-full max-w-xl px-6">
//             <div className="bg-white">
//               <a
//                 href="#"
//                 className="inline-flex items-center text-sm text-green-700 font-medium mb-6"
//               >
//                 <svg
//                   className="w-4 h-4 mr-2"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12 4L6 10L12 16"
//                     stroke="#2F7A2E"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 Back
//               </a>

//               <h1 className="text-3xl font-bold text-gray-800 mb-3">
//                 Please check your email!
//               </h1>
//               <p className="text-sm text-gray-500 mb-8">
//                 We&rsquo;ve emailed a 6-digit confirmation code to{" "}
//                 <span className="font-medium text-gray-700">acb@domain</span>,
//                 please enter the code in below box to verify your email.
//               </p>

//               <form
//                 onSubmit={handleSubmit}
//                 onPaste={handlePaste}
//                 className="flex flex-col items-center"
//               >
//                 <div className="flex gap-4 mb-8">
//                   {values.map((v, i) => (
//                     <input
//                       key={i}
//                       ref={(el) => (inputsRef.current[i] = el)}
//                       value={v}
//                       onChange={(e) => handleChange(i, e)}
//                       onKeyDown={(e) => handleKeyDown(i, e)}
//                       inputMode="numeric"
//                       pattern="[0-9]*"
//                       maxLength={1}
//                       className="w-14 h-14 rounded-lg border border-gray-200 shadow-sm text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-200"
//                       aria-label={`Digit ${i + 1}`}
//                     />
//                   ))}
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full max-w-md py-3 rounded-lg bg-[#2F7A2E] text-white font-semibold shadow-lg hover:opacity-95 transition-all"
//                 >
//                   Verify
//                 </button>

//                 <div className="mt-4 text-sm text-gray-500">
//                   Don&rsquo;t have a code?{" "}
//                   <a href="#" className="text-green-600 font-medium">
//                     Resend code
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }
