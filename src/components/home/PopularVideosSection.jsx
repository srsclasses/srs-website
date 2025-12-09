"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Video Data
const popularVideos = [
  {
    id: "zxoQUCmcHb4",
    title: "BPSC Preparation Full Strategy 2025 | Best Booklist",
    channel: "SDM Rahul Sinha",
    thumbnail: "https://img.youtube.com/vi/zxoQUCmcHb4/maxresdefault.jpg",
  },
  {
    id: "crk6M54NFuE",
    title: "BPSC AEDO II Book List II Exam Date II Study Plan",
    channel: "The SRS Classes", // Assuming channel based on context or default
    thumbnail: "https://img.youtube.com/vi/crk6M54NFuE/maxresdefault.jpg",
  },
  {
    id: "Y09TyW5jkGE",
    title: "BPSC AEDO New Exam Pattern II Book List II Strategy",
    channel: "The SRS Classes",
    thumbnail: "https://img.youtube.com/vi/Y09TyW5jkGE/maxresdefault.jpg",
  },
  {
    id: "8AQlytVSAwk",
    title: "जब हिम्मत टूटे तो ये वीडियो जरूर देखना | मेरे संघर्ष की कहानी",
    channel: "SDM Rahul Sinha",
    thumbnail: "https://img.youtube.com/vi/8AQlytVSAwk/maxresdefault.jpg",
  },
  {
    id: "bs3ZzFsgMyk",
    title: "My Book List | बस इतना ही काफी है | BPSC | UPSC",
    channel: "SDM Rahul Sinha",
    thumbnail: "https://img.youtube.com/vi/bs3ZzFsgMyk/maxresdefault.jpg",
  },
  {
    id: "1Jqom4tb0h4",
    title: "One year Current Affairs Part 2 | Must-Watch | 2024-25",
    channel: "SDM Rahul Sinha",
    thumbnail: "https://img.youtube.com/vi/1Jqom4tb0h4/maxresdefault.jpg",
  },
  {
    id: "HRhsU_dzQIo",
    title: "Complete History for All Exam - Modern History",
    channel: "SDM Rahul Sinha",
    thumbnail: "https://img.youtube.com/vi/HRhsU_dzQIo/maxresdefault.jpg",
  },
  {
    id: "TaZgwFqL8Oo",
    title: "PROJECT AEDO | POLITY IN 2 SHOT | COMPLETE SYLLABUS",
    channel: "The SRS Classes",
    thumbnail: "https://img.youtube.com/vi/TaZgwFqL8Oo/maxresdefault.jpg",
  },
  {
    id: "YgTteKeyD74",
    title: "Complete Medieval History | Mughal Period Series - 5",
    channel: "The SRS Classes",
    thumbnail: "https://img.youtube.com/vi/YgTteKeyD74/maxresdefault.jpg",
  },
  {
    id: "iOCCuOA2WsU",
    title: "घटनाचक्र SERIES II POLITY CLASS-1 | All Competitive Exams",
    channel: "The SRS Classes",
    thumbnail: "https://img.youtube.com/vi/iOCCuOA2WsU/maxresdefault.jpg",
  },
  {
    id: "0wGMKVWdowI",
    title: "NCERT SERIES | BPSC TRE | HISTORY CLASS-6",
    channel: "The SRS Classes",
    thumbnail: "https://img.youtube.com/vi/0wGMKVWdowI/maxresdefault.jpg",
  }
];

const PopularVideosSection = () => {
  return (
    <section className="bg-background py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
           <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Popular Videos</h2>
            <p className="mt-2 text-lg text-foreground/70">Latest updates and strategies from our experts.</p>
          </div>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* We need two sets of the list for seamless looping */}
        <div className="animate-marquee gap-6 px-3">
          {[...popularVideos, ...popularVideos].map((video, index) => (
            <div 
              key={`${video.id}-${index}`}
              className="min-w-[300px] w-[300px] sm:min-w-[350px] sm:w-[350px] flex-none"
            >
              <div className="group relative h-full overflow-hidden rounded-2xl bg-background shadow-md border border-foreground/10 transition-all hover:shadow-xl hover:border-primary/50">
                {/* Thumbnail */}
                <a 
                  href={`https://www.youtube.com/watch?v=${video.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative aspect-video overflow-hidden bg-foreground/5"
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="rounded-full bg-background/90 p-4 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div className="p-5 flex flex-col">
                  <h3 className="mb-2 text-lg font-bold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors bg-background h-[3.5em]">
                    <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                      {video.title}
                    </a>
                  </h3>
                  <p className="text-sm font-medium text-foreground/60 mb-4">{video.channel}</p>
                  
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.id}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary/5 px-3 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-background transition-colors"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularVideosSection;
