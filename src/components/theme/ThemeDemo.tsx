import React from 'react';
import { useTheme } from '../../lib/theme-context';
import { 
  ThemeToggle, 
  ThemeSwitcher, 
  AdvancedThemeSwitcher, 
  ThemeIndicator, 
  ThemeDropdown 
} from './ThemeSwitcher';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export const ThemeDemo: React.FC = () => {
  const { theme, colors, isDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-primary p-8 space-y-8 theme-transition">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              Cliniva SYS - Theme System Demo
            </h1>
            <p className="text-secondary">
              Complete theme system with light and dark mode support
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeIndicator showText />
            <ThemeToggle />
          </div>
        </div>

        {/* Theme Information */}
        <Card className="p-6 mb-8 bg-card border border-light">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Current Theme Information
          </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             <div>
               <label className="text-sm font-medium text-secondary">Active Theme</label>
               <p className="text-lg font-semibold text-primary capitalize">{theme}</p>
             </div>
             <div>
               <label className="text-sm font-medium text-secondary">Mode</label>
               <p className="text-lg font-semibold text-primary">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
             </div>
             <div>
               <label className="text-sm font-medium text-secondary">Primary Color</label>
               <div className="flex items-center space-x-2">
                 <div 
                   className="w-4 h-4 rounded border border-light"
                   style={{ backgroundColor: colors.primary.default }}
                 />
                 <span className="text-sm font-mono font-semibold text-primary">
                   {colors.primary.default}
                 </span>
               </div>
             </div>
           </div>
        </Card>

        {/* Theme Switcher Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-4 bg-card border border-light">
            <h3 className="font-semibold text-primary mb-3">Simple Toggle</h3>
            <div className="flex justify-center">
              <ThemeToggle size="lg" />
            </div>
          </Card>

          <Card className="p-4 bg-card border border-light">
            <h3 className="font-semibold text-primary mb-3">Theme Switcher</h3>
            <ThemeSwitcher showLabel={false} />
          </Card>

          <Card className="p-4 bg-card border border-light">
            <h3 className="font-semibold text-primary mb-3">Dropdown</h3>
            <div className="flex justify-center">
              <ThemeDropdown />
            </div>
          </Card>

          <Card className="p-4 bg-card border border-light">
            <h3 className="font-semibold text-primary mb-3">Advanced Options</h3>
            <AdvancedThemeSwitcher showLabel={false} />
          </Card>
        </div>

        {/* Color Palette Demo */}
        <Card className="p-6 mb-8 bg-card border border-light">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Color Palette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary Colors */}
            <div>
              <h3 className="font-medium text-primary mb-3">Primary</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded border border-light"
                    style={{ backgroundColor: colors.primary.light }}
                  />
                  <span className="text-sm text-secondary">Light</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded border border-light"
                    style={{ backgroundColor: colors.primary.default }}
                  />
                  <span className="text-sm text-secondary">Default</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded border border-light"
                    style={{ backgroundColor: colors.primary.dark }}
                  />
                  <span className="text-sm text-secondary">Dark</span>
                </div>
              </div>
            </div>

            {/* Secondary Colors */}
            <div>
              <h3 className="font-medium text-primary mb-3">Secondary</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded border border-light"
                    style={{ backgroundColor: colors.secondary.light }}
                  />
                  <span className="text-sm text-secondary">Light</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded border border-light"
                    style={{ backgroundColor: colors.secondary.default }}
                  />
                  <span className="text-sm text-secondary">Default</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded border border-light"
                    style={{ backgroundColor: colors.secondary.dark }}
                  />
                  <span className="text-sm text-secondary">Dark</span>
                </div>
              </div>
            </div>

            {/* Text Colors */}
            <div>
              <h3 className="font-medium text-primary mb-3">Text</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded border border-light"
                    style={{ backgroundColor: colors.text.primary }}
                  />
                  <span className="text-sm text-secondary">Primary</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded border border-light"
                    style={{ backgroundColor: colors.text.secondary }}
                  />
                  <span className="text-sm text-secondary">Secondary</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-6 h-6 rounded border border-light"
                    style={{ backgroundColor: colors.text.tertiary }}
                  />
                  <span className="text-sm text-secondary">Tertiary</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Component Examples */}
        <Card className="p-6 mb-8 bg-card border border-light">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Component Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Buttons */}
            <div>
              <h3 className="font-medium text-primary mb-3">Buttons</h3>
              <div className="space-y-2">
                <Button className="w-full btn-primary">
                  Primary Button
                </Button>
                <Button className="w-full btn-secondary">
                  Secondary Button
                </Button>
                <Button variant="ghost" className="w-full">
                  Ghost Button
                </Button>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="font-medium text-primary mb-3">Cards</h3>
              <div className="space-y-3">
                <div className="theme-card p-3 rounded-lg">
                  <h4 className="font-medium text-primary">Card Title</h4>
                  <p className="text-sm text-secondary">Card description text</p>
                </div>
                <div className="theme-card p-3 rounded-lg">
                  <h4 className="font-medium text-primary">Another Card</h4>
                  <p className="text-sm text-secondary">More card content</p>
                </div>
              </div>
            </div>

            {/* Text Examples */}
            <div>
              <h3 className="font-medium text-primary mb-3">Typography</h3>
              <div className="space-y-2">
                <p className="text-primary">Primary text</p>
                <p className="text-secondary">Secondary text</p>
                <p className="text-tertiary">Tertiary text</p>
                <p className="text-muted">Muted text</p>
                <p className="text-accent">Accent text</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Usage Instructions */}
        <Card className="p-6 bg-card border border-light">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Usage Instructions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
               <h3 className="font-medium text-primary mb-2">Setup</h3>
               <ul className="text-sm text-secondary space-y-1">
                 <li>• Wrap your app with <code className="bg-surface-secondary px-2 py-1 rounded text-primary font-mono text-xs">ThemeProvider</code></li>
                 <li>• Import theme CSS in your main CSS file</li>
                 <li>• Use the <code className="bg-surface-secondary px-2 py-1 rounded text-primary font-mono text-xs">useTheme</code> hook in components</li>
                 <li>• Add theme switcher components where needed</li>
               </ul>
             </div>
             <div>
               <h3 className="font-medium text-primary mb-2">Available Classes</h3>
               <ul className="text-sm text-secondary space-y-1">
                 <li>• <code className="bg-surface-secondary px-2 py-1 rounded text-primary font-mono text-xs">bg-primary</code> - Theme-aware backgrounds</li>
                 <li>• <code className="bg-surface-secondary px-2 py-1 rounded text-primary font-mono text-xs">text-primary</code> - Theme-aware text colors</li>
                 <li>• <code className="bg-surface-secondary px-2 py-1 rounded text-primary font-mono text-xs">border-light</code> - Theme-aware borders</li>
                 <li>• <code className="bg-surface-secondary px-2 py-1 rounded text-primary font-mono text-xs">theme-transition</code> - Smooth transitions</li>
               </ul>
             </div>
          </div>
        </Card>
      </div>
    </div>
  );
}; 