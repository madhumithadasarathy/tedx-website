import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Attend() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    dept: "",
    studentId: "",
    ticketType: "",
  });

  const [price, setPrice] = useState(null);
  const [qr, setQr] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const [utr, setUtr] = useState("");

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function generateQR() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://ted-x-paymentserver.vercel.app/buy-ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setPrice(data.price);
      setQr(data.qr);
      setPaymentId(data.paymentId);
      setStep(3);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  async function submitUTR() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://ted-x-paymentserver.vercel.app/confirm-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId, utr }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setStep(4);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    // <div className="min-h-screen pt-32 pb-20 px-6 bg-black text-white selection:bg-red-600 selection:text-white flex flex-col items-center">

    //   {/* Background Ambience */}
    //   <div className="fixed inset-0 pointer-events-none">
    //     <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/10 to-transparent" />
    //     <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full" />
    //   </div>

    //   <motion.div
    //     initial={{ opacity: 0, y: -20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     className="relative z-10 text-center mb-12"
    //   >
    //     <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
    //       <span className="text-red-600">TEDx</span> Sairam
    //     </h1>
    //     <p className="text-white/60 tracking-[0.2em] text-sm md:text-base uppercase">Reserve Your Experience</p>
    //   </motion.div>

    //   <div className="relative z-10 w-full max-w-lg">
    //     <AnimatePresence mode="wait">

    //       {/* STEP 1: SELECT PASS */}
    //       {step === 1 && (
    //         <motion.div
    //           key="step1"
    //           variants={variants}
    //           initial="hidden"
    //           animate="visible"
    //           exit="exit"
    //           className="space-y-4"
    //         >
    //           <h2 className="text-2xl font-bold mb-6 text-center">Select Your Access</h2>

    //           {[
    //             { id: "A", label: "DIAMOND PASS", desc: "Exclusively for 150 members only", color: "border-red-600 hover:bg-red-600/10" },
    //             { id: "B", label: "GOLD PASS", desc: "Standard seating", color: "border-white/30 hover:border-white hover:bg-white/5" },
    //             { id: "C", label: "SILVER PASS", desc: "Balcony seating", color: "border-white/10 hover:border-white/50 text-white/70" }
    //           ].map((ticket) => (
    //             <button
    //               key={ticket.id}
    //               onClick={() => {
    //                 setForm({ ...form, ticketType: ticket.id });
    //                 setStep(2);
    //               }}
    //               className={`group w-full p-6 border ${ticket.color} rounded-xl text-left transition-all duration-300 flex flex-col`}
    //             >
    //               <span className="text-xl font-bold tracking-widest group-hover:text-white transition-colors">{ticket.label}</span>
    //               <span className="text-sm opacity-60 mt-1">{ticket.desc}</span>
    //             </button>
    //           ))}
    //         </motion.div>
    //       )}

    //       {/* STEP 2: DETAILS FORM */}
    //       {step === 2 && (
    //         <motion.div
    //           key="step2"
    //           variants={variants}
    //           initial="hidden"
    //           animate="visible"
    //           exit="exit"
    //           className="bg-neutral-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
    //         >
    //           <h2 className="text-xl font-bold mb-6 text-center">Attendee Details</h2>

    //           <div className="space-y-4">
    //             <input
    //               className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-red-600 transition-colors placeholder:text-neutral-600"
    //               name="name"
    //               placeholder="Full Name"
    //               onChange={update}
    //             />
    //             <input
    //               className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-red-600 transition-colors placeholder:text-neutral-600"
    //               name="email"
    //               placeholder="Email ID"
    //               onChange={update}
    //             />
    //             <input
    //               className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-red-600 transition-colors placeholder:text-neutral-600"
    //               name="dept"
    //               placeholder="Department"
    //               onChange={update}
    //             />
    //             <input
    //               className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-red-600 transition-colors placeholder:text-neutral-600"
    //               name="studentId"
    //               placeholder="Student ID / Roll No."
    //               onChange={update}
    //             />
    //           </div>

    //           {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}

    //           <div className="mt-8 flex gap-4">
    //             <button
    //               onClick={() => setStep(1)}
    //               className="px-6 py-3 rounded-lg text-sm bg-white/5 hover:bg-white/10 transition"
    //             >
    //               Back
    //             </button>
    //             <button
    //               onClick={generateQR}
    //               disabled={loading}
    //               className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
    //             >
    //               {loading ? "Processing..." : "Proceed to Payment"}
    //             </button>
    //           </div>
    //         </motion.div>
    //       )}

    //       {/* STEP 3: PAYMENT */}
    //       {step === 3 && (
    //         <motion.div
    //           key="step3"
    //           variants={variants}
    //           initial="hidden"
    //           animate="visible"
    //           exit="exit"
    //           className="bg-neutral-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center"
    //         >
    //           <h2 className="text-xl font-bold mb-2">Complete Payment</h2>
    //           <p className="text-3xl font-mono text-red-500 mb-6">₹{price}</p>

    //           <div className="bg-white p-4 rounded-xl inline-block mb-6 mx-auto">
    //             {/* Placeholder for QR if null, practically QR should be base64 or URL */}
    //             {qr ? (
    //               <img src={qr} alt="UPI QR" className="w-48 h-48 object-contain" />
    //             ) : (
    //               <div className="w-48 h-48 bg-gray-200 animate-pulse flex items-center justify-center text-black/20 text-xs">QR Code</div>
    //             )}
    //           </div>

    //           <p className="text-xs text-neutral-400 mb-6">Scan with any UPI App<br />(GPay, PhonePe, Paytm)</p>

    //           <input
    //             className="w-full bg-black/50 border border-white/10 rounded-lg p-3 mb-4 focus:outline-none focus:border-red-600 transition-colors placeholder:text-neutral-600 text-center"
    //             placeholder="Enter UTR / Transaction ID"
    //             value={utr}
    //             onChange={(e) => setUtr(e.target.value)}
    //           />

    //           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

    //           <button
    //             onClick={submitUTR}
    //             disabled={loading}
    //             className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
    //           >
    //             {loading ? "Verifying..." : "Confirm Payment"}
    //           </button>
    //         </motion.div>
    //       )}

    //       {/* STEP 4: SUCCESS */}
    //       {step === 4 && (
    //         <motion.div
    //           key="step4"
    //           variants={variants}
    //           initial="hidden"
    //           animate="visible"
    //           className="text-center py-12"
    //         >
    //           <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
    //             <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
    //           </div>
    //           <h2 className="text-3xl font-bold mb-4">You're In!</h2>
    //           <p className="text-neutral-400 mb-8 max-w-xs mx-auto">Your payment is being verified. You will receive your ticket via email shortly.</p>

    //           <button
    //             onClick={() => window.location.href = '/'}
    //             className="text-sm text-red-500 hover:text-red-400 underline underline-offset-4"
    //           >
    //             Return to Home
    //           </button>
    //         </motion.div>
    //       )}

    //     </AnimatePresence>
    //   </div>
    // </div>
<div>WAIT TILL 4.02.2026
</div>
      );
}

