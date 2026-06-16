"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/config";

export default function WhatsAppButton() {
  const href = whatsappLink("Hi Sprouts! I'd like to know more about admissions for my child.");
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-[75] flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] sm:bottom-7 sm:right-7"
    >
      {/* pulse ring */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <span className="grid h-7 w-7 place-items-center">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M16.01 3C9.39 3 4 8.38 4 15c0 2.12.56 4.16 1.62 5.97L4 29l8.23-1.6A12 12 0 0 0 16.01 27C22.63 27 28 21.62 28 15S22.63 3 16.01 3Zm0 21.8c-1.83 0-3.62-.49-5.18-1.42l-.37-.22-4.88.95.96-4.76-.24-.39A9.78 9.78 0 0 1 6.2 15c0-5.41 4.4-9.8 9.81-9.8 5.41 0 9.79 4.39 9.79 9.8 0 5.41-4.38 9.8-9.79 9.8Zm5.38-7.34c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.29-.76.96-.93 1.16-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.51l-.56-.01c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.02c.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.2-.56-.34Z" />
        </svg>
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:pr-1 group-hover:opacity-100">
        Chat with us
      </span>
    </motion.a>
  );
}
