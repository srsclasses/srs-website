"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SocialMediaFloatingButton = () => {

  const socialLinks = [
    {
      name: "Telegram",
      url: "https://t.me/sdmrahulsinhaofficialgroup",
      color: "#0088cc",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.568 8.169l-2.078 9.778c-.154.697-.573.87-1.162.54l-3.213-2.368-1.55 1.492c-.171.171-.314.314-.643.314l.229-3.271 5.954-5.385c.259-.229-.057-.356-.4-.128L8.033 13.25l-3.174-.993c-.69-.214-.704-.69.144-1.018l12.42-4.787c.563-.223 1.056.136.855 1.037z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/thesrsclasses?igsh=bGZ5ZHdnZHV2b2c4",
      color: "#E1306C",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2zm-2.008 2H12.3c.005 0 .01.001.015.001 2.446 0 2.756.012 3.732.057.973.045 1.504.207 1.855.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.351.3.882.344 1.855.045.92.056 1.25.056 3.84v.258c0 2.515-.01 2.898-.056 3.84-.045.973-.207 1.504-.344 1.855-.182.467-.398.8-.748 1.15-.35.35-.683.566-1.15.748-.351.137-.882.3-1.855.344-.975.045-1.29.057-3.856.057h-.24c-2.52 0-2.883-.011-3.857-.057-.973-.045-1.504-.207-1.855-.344-.467-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.351-.3-.882-.344-1.855-.045-.975-.057-1.29-.057-3.856v-.24c0-2.52.011-2.883.057-3.857.045-.973.207-1.504.344-1.855.182-.467.398-.8.748-1.15.35-.35.683-.566 1.15-.748.351-.137.882-.3 1.855-.344.893-.041 1.243-.054 3.233-.054zM12.315 6.879a5.122 5.122 0 100 10.243 5.122 5.122 0 000-10.243zm0 8.243a3.122 3.122 0 110-6.243 3.122 3.122 0 010 6.243zm5.328-9.205a1.18 1.18 0 100 2.359 1.18 1.18 0 000-2.359z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube (SDM Rahul Sinha)",
      url: "https://youtube.com/@sdmrahulsinha26?si=kEuJTdSZd8qg8M-n",
      color: "#FF0000",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "YouTube (SRS Classes)",
      url: "https://youtube.com/@thesrsclasses?si=8LLEMe5mGjZvTUzC",
      color: "#FF0000",
      icon: (
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div className="flex flex-col gap-3">
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.1, x: -5 }}
          >
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-white p-3 shadow-lg hover:shadow-xl transition-all"
              style={{ color: link.color }}
            >
              <span className="sr-only">{link.name}</span>
              <span className="whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 absolute right-12 z-50">
                {link.name}
              </span>
              {link.icon}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaFloatingButton;
