import { Card } from "@/components/ui/card"
import ScrollRevealElement from "./scroll-reveal"
import { ArrowRight, LucideIcon } from "lucide-react"

export default function ServicePreviewCard({
  title,
  description,
  Icon,
}: {
  title: string
  description: string
  Icon: LucideIcon
}) {
  return (
    <ScrollRevealElement>
      <Card className="p-6 cursor-pointer">
        <Icon className="w-6 h-6 mb-3" />
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-70">{description}</p>

        <div className="mt-4 flex items-center text-sm font-semibold">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </Card>
    </ScrollRevealElement>
  )
}