import MagicShowcase from '@/components/MagicShowcase';
import LinkInnovationsNavbar from '@/components/LinkInnovationsNavbar';
import { Footer } from '@/components/Footer';

export default function MagicDemoPage() {
  return (
    <div className="min-h-screen bg-black">
      <LinkInnovationsNavbar />
      <MagicShowcase />
      <Footer />
    </div>
  );
}

