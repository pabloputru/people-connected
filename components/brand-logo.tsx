export function BrandLogo({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm91.31 283.31a16 16 0 01-22.62 0l-42.84-42.83a88.08 88.08 0 1122.63-22.63l42.83 42.84a16 16 0 010 22.62z"
        fill="currentColor"
      />
      <path d="M222.45 222.45a48 48 0 1067.88 67.88 48 48 0 00-67.88-67.88z" fill="currentColor" />
    </svg>
  )
}

export function BrandLogoWithText({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <BrandLogo className="h-8 w-8 text-blue-400" />
      <span className="font-semibold text-blue-600 text-lg">People Connected</span>
    </div>
  )
}

