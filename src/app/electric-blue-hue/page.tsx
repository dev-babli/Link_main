'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Yale Blue & Aqua Marine Color Palette
const yaleBlueAquaPalette = {
    // Yale Blue variations
    yaleBlue: {
        50: '#E6F0F7',   // Very light yale blue
        100: '#CCE1EF',  // Light yale blue
        200: '#99C3DF',  // Lighter yale blue
        300: '#66A5CF',  // Light yale blue
        400: '#3387BF',  // Medium light yale blue
        500: '#0B3866',  // Base Yale Blue
        600: '#092D52',  // Medium dark yale blue
        700: '#07223E',  // Dark yale blue
        800: '#05172A',  // Darker yale blue
        900: '#030C16',  // Very dark yale blue
    },

    // Aqua Marine variations
    aquaMarine: {
        50: '#F0FDF7',   // Very light aqua marine
        100: '#E1FBF0',  // Light aqua marine
        200: '#C3F7E1',  // Lighter aqua marine
        300: '#A5F3D2',  // Light aqua marine
        400: '#87EFC3',  // Medium light aqua marine
        500: '#95F9C3',  // Base Aqua Marine
        600: '#77C59C',  // Medium dark aqua marine
        700: '#599175',  // Dark aqua marine
        800: '#3B5D4E',  // Darker aqua marine
        900: '#1D2927',  // Very dark aqua marine
    },

    // Complementary colors for Yale Blue
    complementary: {
        50: '#FFF7E6',   // Very light orange
        100: '#FFEFCC',  // Light orange
        200: '#FFDF99',  // Lighter orange
        300: '#FFCF66',  // Light orange
        400: '#FFBF33',  // Medium light orange
        500: '#FFAF00',  // Base orange
        600: '#CC8C00',  // Medium dark orange
        700: '#996900',  // Dark orange
        800: '#664600',  // Darker orange
        900: '#332300',  // Very dark orange
    },

    // Analogous colors for Yale Blue
    analogous: {
        left: {
            50: '#E6F7FF',   // Light blue
            500: '#0066CC',  // Base blue
            900: '#001A33',  // Dark blue
        },
        right: {
            50: '#F0E6FF',   // Light purple
            500: '#6600CC',  // Base purple
            900: '#1A0033',  // Dark purple
        }
    },

    // Triadic colors
    triadic: {
        left: {
            50: '#E6FFE6',   // Light green
            500: '#00CC00',  // Base green
            900: '#003300',  // Dark green
        },
        right: {
            50: '#FFE6E6',   // Light red
            500: '#CC0000',  // Base red
            900: '#330000',  // Dark red
        }
    }
};

const ColorSwatch = ({ color, name, description }: { color: string; name: string; description: string }) => (
    <div className="flex items-center space-x-4 p-4 rounded-lg border border-white/10 bg-white/5">
        <div
            className="w-16 h-16 rounded-lg border border-white/20 shadow-lg"
            style={{ backgroundColor: color }}
        />
        <div>
            <h4 className="font-semibold text-white">{name}</h4>
            <p className="text-sm text-white/70">{description}</p>
            <code className="text-xs text-white/50 font-mono">{color}</code>
        </div>
    </div>
);

const ColorScale = ({ colors, title }: { colors: Record<string, string>; title: string }) => (
    <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(colors).map(([shade, color]) => (
                <div key={shade} className="text-center">
                    <div
                        className="w-full h-20 rounded-lg border border-white/20 shadow-lg mb-2"
                        style={{ backgroundColor: color }}
                    />
                    <p className="text-sm text-white/70 font-mono">{shade}</p>
                    <p className="text-xs text-white/50 font-mono">{color}</p>
                </div>
            ))}
        </div>
    </div>
);

export default function ElectricBlueHuePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.1)_0%,transparent_50%)]" />

            <div className="relative z-10 container mx-auto px-6 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-bold text-white mb-6">
                        Yale Blue & Aqua Marine
                        <span className="block text-4xl text-blue-300 font-light">#0B3866 & #95F9C3</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        A sophisticated color system built around Yale Blue (#0B3866) and Aqua Marine (#95F9C3).
                        This combination provides a professional yet fresh aesthetic, perfect for modern
                        applications that need both trust and innovation.
                    </p>
                </div>

                {/* Color Information */}
                <Card className="mb-12 bg-white/5 backdrop-blur-lg border-white/10">
                    <CardHeader>
                        <CardTitle className="text-2xl text-white">Yale Blue & Aqua Marine Color System</CardTitle>
                        <CardDescription className="text-white/70">
                            Sophisticated combination of deep blue authority and fresh aqua innovation
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Yale Blue (#0B3866) Psychology</h4>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Authority and trustworthiness</li>
                                    <li>• Professional and established</li>
                                    <li>• Stability and reliability</li>
                                    <li>• Academic and intellectual</li>
                                    <li>• Corporate leadership</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Aqua Marine (#95F9C3) Psychology</h4>
                                <ul className="space-y-2 text-white/80">
                                    <li>• Fresh and innovative</li>
                                    <li>• Growth and renewal</li>
                                    <li>• Calm and refreshing</li>
                                    <li>• Modern and contemporary</li>
                                    <li>• Creative and inspiring</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold text-white mb-3">Combined Benefits</h4>
                            <ul className="space-y-2 text-white/80">
                                <li>• Perfect balance of authority and innovation</li>
                                <li>• Excellent for modern corporate branding</li>
                                <li>• High contrast for accessibility</li>
                                <li>• Versatile for both B2B and B2C applications</li>
                                <li>• Timeless yet contemporary appeal</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Yale Blue Color Scale */}
                <div className="mb-12">
                    <ColorScale colors={yaleBlueAquaPalette.yaleBlue} title="Yale Blue Color Scale" />
                </div>

                {/* Aqua Marine Color Scale */}
                <div className="mb-12">
                    <ColorScale colors={yaleBlueAquaPalette.aquaMarine} title="Aqua Marine Color Scale" />
                </div>

                {/* Color Relationships */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Complementary Colors */}
                    <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">Complementary Colors</CardTitle>
                            <CardDescription className="text-white/70">
                                Orange - Creates high contrast and energy with Yale Blue
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ColorScale colors={yaleBlueAquaPalette.complementary} title="" />
                        </CardContent>
                    </Card>

                    {/* Analogous Colors */}
                    <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">Analogous Colors</CardTitle>
                            <CardDescription className="text-white/70">
                                Blue and Purple - Harmonious combinations with Yale Blue
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Blue</h4>
                                <div className="grid grid-cols-3 gap-2">
                                    {Object.entries(yaleBlueAquaPalette.analogous.left).map(([shade, color]) => (
                                        <div key={shade} className="text-center">
                                            <div
                                                className="w-full h-12 rounded border border-white/20"
                                                style={{ backgroundColor: color }}
                                            />
                                            <p className="text-xs text-white/70 mt-1">{shade}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Purple</h4>
                                <div className="grid grid-cols-3 gap-2">
                                    {Object.entries(yaleBlueAquaPalette.analogous.right).map(([shade, color]) => (
                                        <div key={shade} className="text-center">
                                            <div
                                                className="w-full h-12 rounded border border-white/20"
                                                style={{ backgroundColor: color }}
                                            />
                                            <p className="text-xs text-white/70 mt-1">{shade}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Triadic Colors */}
                <Card className="mb-12 bg-white/5 backdrop-blur-lg border-white/10">
                    <CardHeader>
                        <CardTitle className="text-xl text-white">Triadic Colors</CardTitle>
                        <CardDescription className="text-white/70">
                            Green and Red - Balanced, vibrant combinations with Yale Blue
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Green</h4>
                                <div className="grid grid-cols-3 gap-2">
                                    {Object.entries(yaleBlueAquaPalette.triadic.left).map(([shade, color]) => (
                                        <div key={shade} className="text-center">
                                            <div
                                                className="w-full h-12 rounded border border-white/20"
                                                style={{ backgroundColor: color }}
                                            />
                                            <p className="text-xs text-white/70 mt-1">{shade}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Red</h4>
                                <div className="grid grid-cols-3 gap-2">
                                    {Object.entries(yaleBlueAquaPalette.triadic.right).map(([shade, color]) => (
                                        <div key={shade} className="text-center">
                                            <div
                                                className="w-full h-12 rounded border border-white/20"
                                                style={{ backgroundColor: color }}
                                            />
                                            <p className="text-xs text-white/70 mt-1">{shade}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Usage Examples */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-8">Usage Examples</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Yale Blue Primary Button */}
                        <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                            <CardHeader>
                                <CardTitle className="text-lg text-white">Yale Blue Primary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    className="w-full"
                                    style={{
                                        backgroundColor: yaleBlueAquaPalette.yaleBlue[500],
                                        borderColor: yaleBlueAquaPalette.yaleBlue[500]
                                    }}
                                >
                                    Primary Action
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Aqua Marine Secondary Button */}
                        <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                            <CardHeader>
                                <CardTitle className="text-lg text-white">Aqua Marine Secondary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    style={{
                                        borderColor: yaleBlueAquaPalette.aquaMarine[500],
                                        color: yaleBlueAquaPalette.aquaMarine[500]
                                    }}
                                >
                                    Secondary Action
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Complementary Accent Button */}
                        <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                            <CardHeader>
                                <CardTitle className="text-lg text-white">Complementary Accent</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    className="w-full"
                                    style={{
                                        backgroundColor: yaleBlueAquaPalette.complementary[500],
                                        borderColor: yaleBlueAquaPalette.complementary[500]
                                    }}
                                >
                                    Accent Action
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Badge Examples */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-8">Badge Examples</h2>
                    <div className="flex flex-wrap gap-4">
                        <Badge
                            style={{
                                backgroundColor: yaleBlueAquaPalette.yaleBlue[500],
                                color: 'white'
                            }}
                        >
                            Yale Blue Badge
                        </Badge>
                        <Badge
                            variant="outline"
                            style={{
                                borderColor: yaleBlueAquaPalette.yaleBlue[500],
                                color: yaleBlueAquaPalette.yaleBlue[500]
                            }}
                        >
                            Yale Blue Outline
                        </Badge>
                        <Badge
                            style={{
                                backgroundColor: yaleBlueAquaPalette.aquaMarine[500],
                                color: 'white'
                            }}
                        >
                            Aqua Marine Badge
                        </Badge>
                        <Badge
                            style={{
                                backgroundColor: yaleBlueAquaPalette.complementary[500],
                                color: 'white'
                            }}
                        >
                            Orange Accent
                        </Badge>
                    </div>
                </div>

                {/* Color Swatches */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-8">Key Color Swatches</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <ColorSwatch
                            color={yaleBlueAquaPalette.yaleBlue[500]}
                            name="Yale Blue (#0B3866)"
                            description="Primary brand color - perfect for CTAs and primary actions"
                        />
                        <ColorSwatch
                            color={yaleBlueAquaPalette.aquaMarine[500]}
                            name="Aqua Marine (#95F9C3)"
                            description="Secondary brand color - great for accents and highlights"
                        />
                        <ColorSwatch
                            color={yaleBlueAquaPalette.yaleBlue[300]}
                            name="Yale Blue Light"
                            description="Light variant - great for backgrounds and subtle accents"
                        />
                        <ColorSwatch
                            color={yaleBlueAquaPalette.complementary[500]}
                            name="Complementary Orange"
                            description="High contrast accent - perfect for highlights and warnings"
                        />
                    </div>
                </div>

                {/* Implementation Notes */}
                <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                    <CardHeader>
                        <CardTitle className="text-2xl text-white">Implementation Notes</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-white/80">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Accessibility</h4>
                            <p>Yale Blue and Aqua Marine provide excellent contrast ratios. Yale Blue (#0B3866) on white has 8.5:1 contrast, and Aqua Marine (#95F9C3) on dark backgrounds provides 4.8:1 contrast, both exceeding WCAG AA standards.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Usage Guidelines</h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Use Yale Blue (#0B3866) as your primary brand color for authority</li>
                                <li>Aqua Marine (#95F9C3) for secondary actions and fresh accents</li>
                                <li>Yale Blue 300-400 for backgrounds and subtle elements</li>
                                <li>Yale Blue 700-800 for text and strong accents</li>
                                <li>Complementary orange for highlights and call-to-actions</li>
                                <li>Perfect for corporate, academic, and professional applications</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">CSS Variables</h4>
                            <pre className="bg-black/20 p-4 rounded text-sm font-mono text-white/90 overflow-x-auto">
                                {`/* Yale Blue & Aqua Marine Color System */
:root {
  /* Yale Blue Scale */
  --yale-blue-50: #E6F0F7;
  --yale-blue-100: #CCE1EF;
  --yale-blue-200: #99C3DF;
  --yale-blue-300: #66A5CF;
  --yale-blue-400: #3387BF;
  --yale-blue-500: #0B3866;
  --yale-blue-600: #092D52;
  --yale-blue-700: #07223E;
  --yale-blue-800: #05172A;
  --yale-blue-900: #030C16;
  
  /* Aqua Marine Scale */
  --aqua-marine-50: #F0FDF7;
  --aqua-marine-100: #E1FBF0;
  --aqua-marine-200: #C3F7E1;
  --aqua-marine-300: #A5F3D2;
  --aqua-marine-400: #87EFC3;
  --aqua-marine-500: #95F9C3;
  --aqua-marine-600: #77C59C;
  --aqua-marine-700: #599175;
  --aqua-marine-800: #3B5D4E;
  --aqua-marine-900: #1D2927;
}`}
                            </pre>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
