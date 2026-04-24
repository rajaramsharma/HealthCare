import { Card } from "@/components/ui/card"
import ScrollRevealElement from "./scroll-reveal"
import { LucideIcon } from "lucide-react"

export default function StatCard({
  label,
  value,
  Icon,
}: {
  label: string
  value: string
  Icon: LucideIcon
}) {
  return (
    <ScrollRevealElement>
      <Card className="p-6 text-center">
        <Icon className="w-8 h-8 mx-auto mb-3" />
        <div className="text-3xl font-bold mb-2">{label}</div>
        <p className="text-sm opacity-70">{value}</p>
      </Card>
    </ScrollRevealElement>
  )
}