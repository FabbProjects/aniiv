export default function Sparkle() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <svg className="absolute top-10 left-10 animate-pulse" width="20" height="20" fill="#FFD700" viewBox="0 0 24 24">
        <path d="M12 2l1.09 4.26L17 7l-3.41 2.74L14.18 14 12 11.27 9.82 14l.59-4.26L7 7l3.91-.74L12 2z"/>
      </svg>
      <svg className="absolute top-24 right-8 animate-ping" width="14" height="14" fill="#FFD700" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="6" />
      </svg>
      <svg className="absolute bottom-20 left-16 animate-bounce" width="24" height="24" fill="#FFE066" viewBox="0 0 24 24">
        <path d="M12 0l3 7h7l-5.5 4.5L18 24l-6-4-6 4 2.5-12.5L2 7h7z"/>
      </svg>
    </div>
  );
}
