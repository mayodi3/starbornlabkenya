export function AnimatedBackground() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-royal-blue/10 to-bright-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-lime-green/10 to-royal-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-bright-orange/10 to-lime-green/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-royal-blue to-bright-orange rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
}
