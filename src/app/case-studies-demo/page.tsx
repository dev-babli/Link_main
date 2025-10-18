import { CaseStudiesShowcase } from '@/components/CaseStudiesShowcase';
import LinkInnovationsNavbar from '@/components/LinkInnovationsNavbar';
import { Footer } from '@/components/Footer';

export default function CaseStudiesDemo() {
    return (
        <div className="min-h-screen bg-black">
            <LinkInnovationsNavbar />
            <CaseStudiesShowcase />
            <Footer />
        </div>
    );
}
