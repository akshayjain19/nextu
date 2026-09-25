/** Stylized editorial avatars — not depictions of real individuals */
const palettes: Record<
  string,
  { skin: string; hair: string; top: string; accent: string }
> = {
  aarav: { skin: "#f5d0b5", hair: "#1e293b", top: "#1d4ed8", accent: "#38bdf8" },
  riya: { skin: "#f0c9a8", hair: "#0f172a", top: "#0e7490", accent: "#67e8f9" },
  kunal: { skin: "#ddb896", hair: "#334155", top: "#2563eb", accent: "#93c5fd" },
  ananya: { skin: "#f5d5bc", hair: "#1e1b4b", top: "#1e40af", accent: "#7dd3fc" },
  arjun: { skin: "#e8c4a8", hair: "#0c1a3a", top: "#0369a1", accent: "#bae6fd" },
};

function EditorialAvatarSvg({ avatarKey }: { avatarKey: string }) {
  const p = palettes[avatarKey] ?? palettes.aarav;
  const hairOffset = avatarKey === "riya" ? 8 : avatarKey === "kunal" ? -4 : 0;

  return (
    <svg viewBox="0 0 280 340" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={`bg-${avatarKey}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8f2fc" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
        <radialGradient id={`glow-${avatarKey}`} cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor={p.accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={p.accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="280" height="340" fill={`url(#bg-${avatarKey})`} />
      <circle cx="140" cy="120" r="100" fill={`url(#glow-${avatarKey})`} />
      <ellipse cx="140" cy="300" rx="95" ry="22" fill="#2563eb" opacity="0.08" />
      <path
        d="M55 310 Q140 250 225 310 L225 340 L55 340 Z"
        fill={p.top}
        opacity="0.95"
      />
      <ellipse cx="140" cy="200" rx="58" ry="68" fill={p.skin} />
      <path
        d={`M82 ${118 + hairOffset} Q140 ${72 + hairOffset} 198 ${118 + hairOffset} Q175 55 140 48 Q105 55 82 ${118 + hairOffset}`}
        fill={p.hair}
      />
      <ellipse cx="140" cy="128" rx="48" ry="52" fill={p.skin} />
      <circle cx="122" cy="125" r="4" fill="#0f172a" opacity="0.65" />
      <circle cx="158" cy="125" r="4" fill="#0f172a" opacity="0.65" />
      <path
        d="M128 148 Q140 156 152 148"
        stroke="#0f172a"
        strokeOpacity="0.35"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="200" cy="80" r="28" fill={p.accent} opacity="0.2" />
    </svg>
  );
}

export function TestimonialAvatarIllustration({ avatarKey }: { avatarKey: string }) {
  return <EditorialAvatarSvg avatarKey={avatarKey} />;
}
