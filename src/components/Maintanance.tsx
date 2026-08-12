// Maintenance.tsx
import logo from '../assets/logo_mark.png';

export function Maintenance() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-900 px-4 text-white">
      <div className="max-w-md space-y-5 text-center">
        <img
          src={logo}
          alt="Inkuthazo Social Club logo"
          className="mx-auto h-14 w-14 object-contain"
          width="56"
          height="56"
        />
        <h1 className="text-3xl font-bold tracking-tight">We&rsquo;ll be right back</h1>
        <p className="text-lg text-brand-100">
          Inkuthazo Social Club&rsquo;s website is undergoing scheduled maintenance. We should be
          back shortly. Thank you for your patience.
        </p>
        <p className="text-sm text-brand-200">
          If you need us urgently, call{' '}
          <a href="tel:+27734715116" className="font-semibold text-white underline underline-offset-4">
            +27 73 471 5116
          </a>
        </p>
      </div>
    </div>
  );
}
