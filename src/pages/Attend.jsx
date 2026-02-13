export default function Attend() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-black text-white flex flex-col items-center justify-center text-center">
      
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-2xl">

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Ticket Booking <span className="text-red-600">Paused</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-neutral-400 mb-10">
          We’re temporarily closing registrations to process current bookings.
          <br />
          Don’t worry — this is just a short break.
        </p>

        {/* Resume Time Box */}
        <div className="border border-red-600/40 bg-red-600/10 backdrop-blur-sm rounded-2xl px-10 py-8 inline-block">
          <p className="text-sm uppercase tracking-widest text-red-400 mb-3">
            Registrations Resume At
          </p>
          <p className="text-4xl md:text-5xl font-mono font-bold text-white">
            4:00 PM
          </p>
        </div>

        {/* Extra Drama Line */}
        <p className="mt-12 text-neutral-500 text-sm">
          Same place. Same energy. Be ready.
        </p>

      </div>
    </div>
  );
}





// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Pricing from "../components/Pricing";

// export default function Attend() {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     dept: "",
//     studentId: "",
//     ticketType: "",
//   });

//   const [price, setPrice] = useState(null);
//   const [qr, setQr] = useState(null);
//   const [paymentId, setPaymentId] = useState(null);
//   const [utr, setUtr] = useState("");

//   function update(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   async function generateQR() {
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(
//         "https://ted-x-paymentserver.vercel.app/buy-ticket",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(form),
//         }
//       );

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error);

//       setPrice(data.price);
//       setQr(data.qr);
//       setPaymentId(data.paymentId);
//       setStep(3);
//     } catch (err) {
//       setError(err.message);
//     }

//     setLoading(false);
//   }

//   async function submitUTR() {
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(
//         "https://ted-x-paymentserver.vercel.app/confirm-payment",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ paymentId, utr }),
//         }
//       );

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error);

//       setStep(4);
//     } catch (err) {
//       setError(err.message);
//     }

//     setLoading(false);
//   }

//   const variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
//     exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
//   };

//   return (
//     <div className="min-h-screen pt-32 pb-20 px-6 bg-black text-white flex flex-col items-center">
//       {/* Background */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/10 to-transparent" />
//         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full" />
//       </div>

//       {/* STEP 1 — PRICING */}
//       {step === 1 && (
//         <Pricing
//           onSelect={(planId) => {
//             setForm({ ...form, ticketType: planId });
//             setStep(2);
//           }}
//         />
//       )}

//       <div className="relative z-10 w-full max-w-lg mt-12">
//         <AnimatePresence mode="wait">
//           {/* STEP 2 — DETAILS */}
//           {step === 2 && (
//             <motion.div
//               key="step2"
//               variants={variants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="bg-neutral-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
//             >
//               <h2 className="text-xl font-bold mb-6 text-center">
//                 Attendee Details
//               </h2>

//               <div className="space-y-4">
//                 {[
//                   { name: "name", placeholder: "Full Name" },
//                   { name: "phone", placeholder: "Phone Number" },
//                   { name: "dept", placeholder: "Department" },
//                   {
//                     name: "studentId",
//                     placeholder: "Student ID / Roll No.",
//                   },
//                 ].map((field) => (
//                   <input
//                     key={field.name}
//                     name={field.name}
//                     placeholder={field.placeholder}
//                     value={form[field.name]}
//                     onChange={update}
//                     className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-red-600 transition placeholder:text-neutral-600"
//                   />
//                 ))}
//               </div>

//               {error && (
//                 <p className="text-red-500 text-sm mt-4 text-center">
//                   {error}
//                 </p>
//               )}

//               <div className="mt-8 flex gap-4">
//                 <button
//                   onClick={() => setStep(1)}
//                   className="px-6 py-3 rounded-lg text-sm bg-white/5 hover:bg-white/10 transition"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={generateQR}
//                   disabled={loading}
//                   className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
//                 >
//                   {loading ? "Processing..." : "Proceed to Payment"}
//                 </button>
//               </div>
//             </motion.div>
//           )}

//           {/* STEP 3 — PAYMENT */}
//           {step === 3 && (
//             <motion.div
//               key="step3"
//               variants={variants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="bg-neutral-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center"
//             >
//               <h2 className="text-xl font-bold mb-2">Complete Payment</h2>
//               <p className="text-3xl font-mono text-red-500 mb-6">
//                 ₹{price}
//               </p>

//               <div className="bg-white p-4 rounded-xl inline-block mb-6">
//                 <img src={qr} alt="UPI QR" className="w-48 h-48" />
//               </div>

//               <input
//                 className="w-full bg-black/50 border border-white/10 rounded-lg p-3 mb-4 text-center"
//                 placeholder="Enter UTR / Transaction ID"
//                 value={utr}
//                 onChange={(e) => setUtr(e.target.value)}
//               />

//               {error && (
//                 <p className="text-red-500 text-sm mb-4">{error}</p>
//               )}

//               <button
//                 onClick={submitUTR}
//                 disabled={loading}
//                 className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg"
//               >
//                 {loading ? "Verifying..." : "Confirm Payment"}
//               </button>
//             </motion.div>
//           )}

//           {/* STEP 4 — SUCCESS */}
//           {step === 4 && (
//             <motion.div
//               key="step4"
//               variants={variants}
//               initial="hidden"
//               animate="visible"
//               className="text-center py-12"
//             >
//               <h2 className="text-3xl font-bold mb-4">You're In!</h2>
//               <p className="text-neutral-400 mb-8">
//                 Your payment is being verified. You’ll be contacted soon.
//               </p>
//               <button
//                 onClick={() => (window.location.href = "/")}x
//                 className="text-sm text-red-500 underline"
//               >
//                 Return to Home
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* ================= NOTE CARD ================= */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="
//           relative z-10
//           mt-16
//           w-full max-w-lg
//           border border-red-600/40
//           bg-red-600/10
//           backdrop-blur-sm
//           rounded-2xl
//           p-6
//         "
//       >
//         <h3 className="text-lg font-semibold mb-3 text-red-500">
//           Important Note
//         </h3>
//         <ul className="text-sm text-white/80 space-y-2 list-disc list-inside">
//           <li>Buses are available on the day of the event.</li>
//           <li>The last day for registration is <strong>11th Feb</strong>.</li>
//           <li>Other college members are not allowed.</li>
//         </ul>
//       </motion.div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function Attend() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-black text-white flex flex-col items-center justify-center">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg bg-neutral-900/50 border border-white/10 p-10 rounded-2xl backdrop-blur-sm text-center"
      >
        <h1 className="text-4xl font-bold mb-6 text-red-600">
          Tickets Closed
        </h1>

        <p className="text-neutral-400 mb-8">
          Registrations for this TEDx event are now officially closed.
          Thank you for the overwhelming response.
        </p>

        <div className="border border-red-600/40 bg-red-600/10 rounded-xl p-4 text-sm text-white/80 mb-8">
          Stay tuned for future events and announcements.
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 rounded-lg text-sm bg-white/5 hover:bg-white/10 transition text-red-500 underline"
        >
          Return to Home
        </button>
      </motion.div>
    </div>
  );
}



