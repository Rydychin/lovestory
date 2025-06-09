import Navigation from "@/components/navigation";
import FloatingHearts from "@/components/floating-hearts";
import HeroSection from "@/components/hero-section";
import LoveLetterSection from "@/components/love-letter-section";
import MemoriesSection from "@/components/memories-section";
import TimelineSection from "@/components/timeline-section";
import { Heart } from "lucide-react";

interface HomeProps {
  onLogout?: () => void;
}

export default function Home({ onLogout }: HomeProps) {
  return (
    <div className="font-inter">
      <FloatingHearts />
      <Navigation onLogout={onLogout} />
      <HeroSection />
      <LoveLetterSection />
      <MemoriesSection />
      <TimelineSection />
      
      {/* Footer */}
      <footer className="py-16 px-6 bg-deep-rose text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-10 h-10 text-rose-gold mb-4 mx-auto" />
            <h3 className="font-playfair text-3xl font-bold mb-4">Forever and Always</h3>
            <p className="text-lg opacity-90">Here's to many more months, years, and lifetimes of love</p>
          </div>
          
          <div className="border-t border-rose-gold/30 pt-8">
            <p className="opacity-80">Made with ❤️ for the most amazing person in the world</p>
            <p className="text-sm opacity-60 mt-2">Three months down, forever to go</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
