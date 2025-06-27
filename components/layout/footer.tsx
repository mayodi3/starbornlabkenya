import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-blue/10"></div>{" "}
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-6 md:mb-0 group">
            <Image
              src="/logo.jpeg"
              priority
              alt="A logo Image"
              width={100}
              height={100}
              className="w-32 h-32 rounded-full"
            />
            <div>
              <span className="text-2xl font-bold">Starbornlab</span>
              <div className="text-sm text-gray-400">Kenya</div>
            </div>
          </div>
          <div className="text-gray-400 text-center">
            <div className="text-lg mb-2">
              © {new Date().getFullYear()} Starbornlab Kenya
            </div>
            <div className="text-sm">
              Empowering Africa's Future • Building Tomorrow's Leaders
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
