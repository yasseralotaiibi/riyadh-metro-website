import rptLogo from 'figma:asset/d04f219f33b01dcb3ee5317e461ade9798098632.png';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'dark';
}

export function Logo({ className = '', variant = 'default' }: LogoProps) {
  const filterClass = variant === 'light' 
    ? 'brightness-0 invert' 
    : variant === 'dark' 
    ? 'brightness-0' 
    : '';

  return (
    <img
      src={rptLogo}
      alt="Riyadh Public Transport - النقل العام لمدينة الرياض"
      className={`${className} ${filterClass}`}
    />
  );
}
