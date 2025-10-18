import { StickyTabsDemoPage } from '@/components/ui/sticky-tabs-demo';
import LinkInnovationsNavbar from '@/components/LinkInnovationsNavbar';
import { Footer } from '@/components/Footer';

export default function StickyTabsDemo() {
    return (
        <div className="min-h-screen bg-black">
            <LinkInnovationsNavbar />
            <StickyTabsDemoPage />
            <Footer />
        </div>
    );
}

