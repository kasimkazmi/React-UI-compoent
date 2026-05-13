import Link from "next/link"
import { AnimatedButton } from "@/components/ui/animated-button"
import { RotatingCard } from "@/components/ui/rotating-card"
import { FloatingText } from "@/components/ui/floating-text"
import { PulseButton } from "@/components/ui/pulse-button"
import { ComponentPreview } from "@/components/component-preview"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Custom UI Components</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        A collection of animated UI components built with React and Framer Motion.
      </p>

      <div className="mb-8">
        <Link
          href="/docs"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          View Documentation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ComponentPreview
          title="Animated Button"
          component={<AnimatedButton>Click Me</AnimatedButton>}
          code={`<AnimatedButton>Click Me</AnimatedButton>`}
        />
        <ComponentPreview
          title="Rotating Card"
          component={
            <RotatingCard>
              <h4>Hover to Rotate</h4>
              <p>This card rotates on hover.</p>
            </RotatingCard>
          }
          code={`<RotatingCard>
  <h4>Hover to Rotate</h4>
  <p>This card rotates on hover.</p>
</RotatingCard>`}
        />
        <ComponentPreview
          title="Floating Text"
          component={<FloatingText>Floating Text</FloatingText>}
          code={`<FloatingText>Floating Text</FloatingText>`}
        />
        <ComponentPreview
          title="Pulse Button"
          component={<PulseButton>Pulse</PulseButton>}
          code={`<PulseButton>Pulse</PulseButton>`}
        />
      </div>
    </div>
  )
}