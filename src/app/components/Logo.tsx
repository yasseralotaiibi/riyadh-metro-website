interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'dark';
}

export function Logo({ className = '', variant = 'default' }: LogoProps) {
  // Color scheme based on variant
  const colors = {
    primary: variant === 'light' ? '#FFFFFF' : '#0F2847', // Navy
    secondary: variant === 'light' ? '#FFFFFF' : '#5DD329', // Bright green
    text: variant === 'light' ? '#FFFFFF' : '#0F2847',
  };

  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      role="img"
      aria-label="Riyadh Public Transport - النقل العام لمدينة الرياض"
    >
      {/* Metro Lines Icon - Simplified version */}
      <g>
        {/* Outer circle */}
        <circle cx="30" cy="30" r="22" fill="none" stroke={colors.primary} strokeWidth="2" />
        
        {/* Metro lines as simplified paths */}
        <line x1="15" y1="30" x2="45" y2="30" stroke={colors.secondary} strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="15" x2="30" y2="45" stroke={colors.secondary} strokeWidth="3" strokeLinecap="round" />
        <line x1="19" y1="19" x2="41" y2="41" stroke={colors.secondary} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        
        {/* Center dot */}
        <circle cx="30" cy="30" r="4" fill={colors.primary} />
      </g>

      {/* Text: RPT in English */}
      <text x="62" y="24" fontSize="18" fontWeight="700" fill={colors.primary} fontFamily="system-ui, -apple-system, sans-serif">
        RPT
      </text>
      
      {/* Text: Riyadh Public Transport */}
      <text x="62" y="38" fontSize="7" fill={colors.text} fontFamily="system-ui, -apple-system, sans-serif" opacity="0.8">
        Riyadh Public Transport
      </text>

      {/* Arabic text: النقل العام */}
      <text x="62" y="48" fontSize="8" fill={colors.text} fontFamily="system-ui, -apple-system, sans-serif" opacity="0.8" direction="rtl">
        النقل العام لمدينة الرياض
      </text>
    </svg>
  );
}
