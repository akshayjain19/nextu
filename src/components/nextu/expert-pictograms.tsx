import type { ReactNode } from "react";

const grad = (id: string) => (
  <defs>
    <linearGradient id={`${id}-g`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#5eead4" />
      <stop offset="100%" stopColor="#2563eb" />
    </linearGradient>
    <linearGradient id={`${id}-skin`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#fde8d4" />
      <stop offset="100%" stopColor="#f5c4a8" />
    </linearGradient>
  </defs>
);

export function ExpertPictogram({ id, className }: { id: string; className?: string }) {
  const maps: Record<string, ReactNode> = {
    "public-speaking": (
      <svg viewBox="0 0 200 160" className={className} aria-hidden>
        {grad("ps")}
        <ellipse cx="100" cy="145" rx="70" ry="12" fill="#1e3a5f" opacity="0.5" />
        <rect x="88" y="95" width="24" height="50" rx="8" fill={`url(#ps-skin)`} />
        <circle cx="100" cy="78" r="22" fill={`url(#ps-skin)`} />
        <path d="M55 55 Q100 20 145 55" stroke={`url(#ps-g)`} strokeWidth="6" fill="none" />
        <rect x="42" y="48" width="18" height="32" rx="9" fill="#334155" />
        <circle cx="51" cy="42" r="10" fill="#475569" />
        <path d="M130 70 L175 55 L175 85 L130 95 Z" fill={`url(#ps-g)`} opacity="0.9" />
        <rect x="168" y="52" width="8" height="36" rx="3" fill="#1e293b" />
      </svg>
    ),
    nutritionist: (
      <svg viewBox="0 0 200 160" className={className} aria-hidden>
        {grad("nu")}
        <ellipse cx="100" cy="145" rx="65" ry="10" fill="#1e3a5f" opacity="0.4" />
        <circle cx="95" cy="72" r="20" fill={`url(#nu-skin)`} />
        <path d="M75 92 Q95 110 115 92 L110 130 L80 130 Z" fill="#38bdf8" opacity="0.8" />
        <circle cx="140" cy="100" r="18" fill="#f97316" opacity="0.85" />
        <circle cx="155" cy="88" r="12" fill="#84cc16" />
        <ellipse cx="58" cy="105" rx="14" ry="18" fill="#a3e635" />
        <path d="M125 55 Q145 45 160 60" stroke="#22d3ee" strokeWidth="4" fill="none" />
      </svg>
    ),
    dermatologist: (
      <svg viewBox="0 0 200 160" className={className} aria-hidden>
        {grad("de")}
        <ellipse cx="100" cy="148" rx="60" ry="8" fill="#1e3a5f" opacity="0.35" />
        <ellipse cx="100" cy="85" rx="38" ry="48" fill={`url(#de-skin)`} />
        <path d="M72 70 Q100 55 128 70" stroke="#0ea5e9" strokeWidth="3" fill="none" opacity="0.6" />
        <path d="M85 95 Q100 88 115 95" stroke="#c4b5fd" strokeWidth="2" fill="none" />
        <circle cx="88" cy="78" r="3" fill="#64748b" />
        <circle cx="112" cy="78" r="3" fill="#64748b" />
        <path d="M145 50 L165 40 L168 75 Q155 85 140 70 Z" fill={`url(#de-g)`} opacity="0.7" />
      </svg>
    ),
    fitness: (
      <svg viewBox="0 0 200 160" className={className} aria-hidden>
        {grad("fi")}
        <ellipse cx="100" cy="148" rx="70" ry="10" fill="#1e3a5f" opacity="0.4" />
        <circle cx="105" cy="58" r="18" fill={`url(#fi-skin)`} />
        <path d="M85 76 L70 120 L95 125 L100 85 L115 130 L140 115 L120 76 Z" fill="#38bdf8" opacity="0.85" />
        <rect x="45" y="100" width="50" height="8" rx="4" fill="#64748b" />
        <rect x="108" y="100" width="50" height="8" rx="4" fill="#64748b" />
      </svg>
    ),
    career: (
      <svg viewBox="0 0 200 160" className={className} aria-hidden>
        {grad("ca")}
        <ellipse cx="100" cy="148" rx="75" ry="10" fill="#0f172a" opacity="0.5" />
        <circle cx="70" cy="75" r="16" fill={`url(#ca-skin)`} />
        <circle cx="130" cy="75" r="16" fill={`url(#ca-skin)`} />
        <path d="M55 95 L85 95 L85 125 L55 125 Z" fill="#334155" />
        <path d="M115 95 L145 95 L145 125 L115 125 Z" fill="#334155" />
        <rect x="88" y="88" width="24" height="18" rx="3" fill={`url(#ca-g)`} opacity="0.9" />
        <path d="M60 60 L75 45 L90 60" stroke="#7dd3fc" strokeWidth="3" fill="none" />
        <path d="M110 60 L125 45 L140 60" stroke="#7dd3fc" strokeWidth="3" fill="none" />
      </svg>
    ),
    "mental-health": (
      <svg viewBox="0 0 200 160" className={className} aria-hidden>
        {grad("mh")}
        <ellipse cx="100" cy="148" rx="62" ry="8" fill="#1e3a5f" opacity="0.35" />
        <circle cx="75" cy="80" r="17" fill={`url(#mh-skin)`} />
        <circle cx="125" cy="80" r="17" fill={`url(#mh-skin)`} />
        <path d="M60 105 Q75 95 90 105" stroke="#94a3b8" strokeWidth="3" fill="none" />
        <path d="M110 105 Q125 95 140 105" stroke="#94a3b8" strokeWidth="3" fill="none" />
        <path
          d="M100 45 C85 55 82 75 100 88 C118 75 115 55 100 45Z"
          fill={`url(#mh-g)`}
          opacity="0.75"
        />
      </svg>
    ),
    image: (
      <svg viewBox="0 0 200 160" className={className} aria-hidden>
        {grad("im")}
        <ellipse cx="100" cy="148" rx="55" ry="8" fill="#1e3a5f" opacity="0.35" />
        <ellipse cx="118" cy="88" rx="42" ry="52" fill="#e2e8f0" opacity="0.25" />
        <ellipse cx="115" cy="85" rx="35" ry="45" fill="#cbd5e1" opacity="0.4" />
        <circle cx="82" cy="72" r="18" fill={`url(#im-skin)`} />
        <path d="M65 95 L75 125 L95 120 L88 92 Z" fill="#a78bfa" opacity="0.8" />
        <rect x="130" y="55" width="6" height="70" rx="2" fill="#64748b" />
      </svg>
    ),
    "digital-detox": (
      <svg viewBox="0 0 200 160" className={className} aria-hidden>
        {grad("dd")}
        <ellipse cx="100" cy="148" rx="60" ry="8" fill="#1e3a5f" opacity="0.35" />
        <circle cx="88" cy="78" r="18" fill={`url(#dd-skin)`} />
        <path d="M70 100 L85 130 L105 125 L95 98 Z" fill="#38bdf8" opacity="0.7" />
        <rect x="115" y="50" width="48" height="78" rx="8" fill="#1e293b" />
        <rect x="122" y="58" width="34" height="58" rx="4" fill="#334155" />
        <path d="M128 95 L145 75 M145 95 L128 75" stroke="#f87171" strokeWidth="4" />
      </svg>
    ),
    communication: (
      <svg viewBox="0 0 200 160" className={className} aria-hidden>
        {grad("co")}
        <ellipse cx="100" cy="148" rx="70" ry="10" fill="#1e3a5f" opacity="0.4" />
        <circle cx="70" cy="85" r="16" fill={`url(#co-skin)`} />
        <circle cx="130" cy="85" r="16" fill={`url(#co-skin)`} />
        <path
          d="M45 55 Q55 35 75 45 L70 65 L50 62 Z"
          fill={`url(#co-g)`}
          opacity="0.85"
        />
        <path
          d="M155 55 Q145 35 125 45 L130 65 L150 62 Z"
          fill="#7dd3fc"
          opacity="0.85"
        />
        <path d="M88 100 L112 100" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  };

  return maps[id] ?? null;
}
