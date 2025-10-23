import NavigationMenuDemo from '@/components/ui/navigation-menu-demo';

export default function NavigationDemoPage() {
    return (
        <div className="min-h-screen bg-background">
            <NavigationMenuDemo />

            {/* Demo content to show scrolling */}
            <div className="container mx-auto px-4 py-16 space-y-16">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Navigation Menu Demo</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        This demonstrates the new navigation menu component with dropdown menus,
                        mobile responsive design, and modern UI patterns.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Product Features</h3>
                        <div className="space-y-2">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">Website Builder</h4>
                                <p className="text-sm text-muted-foreground">Create responsive websites with ease</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">Cloud Platform</h4>
                                <p className="text-sm text-muted-foreground">Deploy and scale apps in the cloud</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">Team Collaboration</h4>
                                <p className="text-sm text-muted-foreground">Tools to help your teams work better together</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Company Info</h3>
                        <div className="space-y-2">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">About Us</h4>
                                <p className="text-sm text-muted-foreground">Learn more about our story and team</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">Customer Stories</h4>
                                <p className="text-sm text-muted-foreground">See how we've helped our clients succeed</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">Blog</h4>
                                <p className="text-sm text-muted-foreground">Insights, tutorials, and company news</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Navigation Features</h3>
                        <div className="space-y-2">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">Responsive Design</h4>
                                <p className="text-sm text-muted-foreground">Works perfectly on desktop and mobile</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">Smooth Animations</h4>
                                <p className="text-sm text-muted-foreground">Beautiful transitions and hover effects</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium">Accessibility</h4>
                                <p className="text-sm text-muted-foreground">Built with accessibility in mind</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold">Try the Navigation</h2>
                    <p className="text-muted-foreground">
                        Hover over the "Product" and "Company" menu items to see the dropdown menus.
                        On mobile, tap the hamburger menu to see the mobile navigation.
                    </p>
                </div>
            </div>
        </div>
    );
}
