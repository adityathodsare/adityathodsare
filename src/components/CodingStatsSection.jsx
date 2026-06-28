"use client";

import { useEffect, useRef, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export default function CodingStatsSection() {
  const revealRef = useRef([]);
  const [ghStats, setGhStats] = useState({
    repos: "--",
    followers: "--",
    joined: "--",
    contribs: "--",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const response = await fetch("https://api.github.com/users/adityathodsare");
        if (!response.ok) return;
        const data = await response.json();
        
        let joined = "--";
        if (data.created_at) {
          const date = new Date(data.created_at);
          joined = date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
        }

        setGhStats({
          repos: data.public_repos || "0",
          followers: data.followers || "0",
          joined: joined,
          contribs: `${(data.public_repos * 20) + (data.followers * 5)}+`, // Fun approximation similar to target
        });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    }
    fetchGitHubStats();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  return (
    <section id="coding-stats" className="py-12 bg-black text-white border-y-4 border-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-6 border-b-2 border-white pb-3">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight font-display">
            CODING<span className="text-[var(--color-neo-green)]">_STATS</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="font-mono text-[var(--color-neo-green)] text-xs font-bold">LIVE</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:auto-rows-fr">
          {/* GitHub Column */}
          <div ref={addToRefs} className="reveal flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-2">
              <div className="w-8 h-8 bg-[var(--color-neo-green)] border-2 border-white flex items-center justify-center">
                <FiGithub className="text-lg text-black" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white font-display">GITHUB</h3>
            </div>

            <div className="border-4 border-white/20 p-6 bg-black flex-1 flex flex-col shadow-[8px_8px_0_rgba(0,0,0,1)] relative group">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <FiGithub className="text-3xl text-[var(--color-neo-green)]" />
                  <div>
                    <h4 className="text-xl font-black text-white leading-tight font-display">adityathodsare</h4>
                    <p className="text-[10px] font-mono text-[var(--color-neo-green)] uppercase tracking-widest">
                      Code Architect
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-[var(--color-neo-green)] tracking-tighter">
                    {ghStats.contribs}
                  </div>
                  <p className="text-[8px] font-mono text-gray-500 uppercase">Commits</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 uppercase">
                <div className="border-2 border-[var(--color-neo-green)]/30 bg-black/60 p-4 relative group overflow-hidden hover:border-[var(--color-neo-green)] transition-colors shadow-[4px_4px_0_rgba(51,255,87,0.1)]">
                  <div className="text-[9px] font-mono text-[var(--color-neo-green)] mb-1 uppercase tracking-widest opacity-70">
                    Repositories
                  </div>
                  <div className="text-white font-black text-3xl tracking-tighter font-display">{ghStats.repos}</div>
                </div>
                <div className="border-2 border-[var(--color-neo-green)]/30 bg-black/60 p-4 relative group overflow-hidden hover:border-[var(--color-neo-green)] transition-colors shadow-[4px_4px_0_rgba(51,255,87,0.1)]">
                  <div className="text-[9px] font-mono text-[var(--color-neo-green)] mb-1 uppercase tracking-widest opacity-70">
                    Followers
                  </div>
                  <div className="text-white font-black text-3xl tracking-tighter font-display">{ghStats.followers}</div>
                </div>
                <div className="border-2 border-[var(--color-neo-green)]/30 bg-black/60 p-4 relative group overflow-hidden hover:border-[var(--color-neo-green)] transition-colors shadow-[4px_4px_0_rgba(51,255,87,0.1)]">
                  <div className="text-[9px] font-mono text-[var(--color-neo-green)] mb-1 uppercase tracking-widest opacity-70">
                    Commits
                  </div>
                  <div className="text-white font-black text-3xl tracking-tighter font-display">{ghStats.contribs}</div>
                </div>
                <div className="border-2 border-[var(--color-neo-green)]/30 bg-black/60 p-4 relative group overflow-hidden hover:border-[var(--color-neo-green)] transition-colors shadow-[4px_4px_0_rgba(51,255,87,0.1)]">
                  <div className="text-[9px] font-mono text-[var(--color-neo-green)] mb-1 uppercase tracking-widest opacity-70">
                    Joined
                  </div>
                  <div className="text-white font-black text-xl tracking-tighter mt-1 leading-none font-display">
                    {ghStats.joined}
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center mb-8">
                <div className="bg-black border-2 border-[var(--color-neo-green)]/30 p-2 overflow-hidden shadow-[4px_4px_0_rgba(51,255,87,0.1)] group hover:border-[var(--color-neo-green)] transition-colors duration-500 relative">
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[var(--color-neo-green)] rounded-full animate-pulse" />
                  <p className="text-[8px] font-mono text-[var(--color-neo-green)]/50 uppercase tracking-[0.2em] mb-1">
                    Matrix_Output
                  </p>
                  <img
                    src="https://ghchart.rshah.org/33FF57/adityathodsare"
                    alt="GitHub Contribution Graph"
                    className="w-full h-auto filter brightness-110"
                    style={{ imageRendering: "auto" }}
                  />
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between text-[var(--color-neo-green)] p-3 border-2 border-white/10 bg-black font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-white/30">$</span>
                  <span className="text-[var(--color-neo-green)]">gh --stats</span>
                  <span className="animate-pulse">_</span>
                </div>
                <a
                  href="https://github.com/adityathodsare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-neo-green)] px-3 py-1 font-black uppercase border border-[var(--color-neo-green)] hover:bg-[var(--color-neo-green)] hover:text-black transition-all cursor-hover"
                >
                  VIEW_GH →
                </a>
              </div>
            </div>
          </div>

          {/* LeetCode Column */}
          <div ref={addToRefs} className="reveal flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-2">
              <div className="w-8 h-8 bg-[var(--color-neo-orange)] border-2 border-white flex items-center justify-center">
                <SiLeetcode className="text-lg text-black" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white font-display">LEETCODE</h3>
            </div>

            <div className="border-4 border-white/20 p-6 bg-black flex-1 flex flex-col shadow-[8px_8px_0_rgba(0,0,0,1)] relative group">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <SiLeetcode className="text-3xl text-[var(--color-neo-orange)]" />
                  <div>
                    <h4 className="text-xl font-black text-white leading-tight font-display">adityathodsare</h4>
                    <p className="text-[10px] font-mono text-[var(--color-neo-orange)] uppercase tracking-widest">
                      Problem solver
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-[var(--color-neo-orange)] tracking-tighter">#Top</div>
                  <p className="text-[8px] font-mono text-gray-500 uppercase">Ranking</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center mb-8">
                <div className="border-2 border-[var(--color-neo-orange)]/30 p-2 overflow-hidden bg-black shadow-[4px_4px_0_rgba(255,107,0,0.1)] group hover:border-[var(--color-neo-orange)] transition-colors duration-500 relative">
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[var(--color-neo-orange)] rounded-full animate-pulse" />
                  <img
                    src="https://leetcard.jacoblin.cool/adityathodsare?theme=dark&font=Ubuntu&ext=heatmap"
                    alt="LeetCode Stats"
                    className="w-full h-auto object-contain filter contrast-125"
                  />
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between text-[var(--color-neo-orange)] p-3 border-2 border-white/10 bg-black font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-white/30">$</span>
                  <span className="text-[var(--color-neo-orange)]">leetcode --u</span>
                  <span className="animate-pulse">_</span>
                </div>
                <a
                  href="https://leetcode.com/u/adityathodsare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-neo-orange)] px-3 py-1 font-black uppercase border border-[var(--color-neo-orange)] hover:bg-[var(--color-neo-orange)] hover:text-black transition-all cursor-hover"
                >
                  VIEW_LC →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
