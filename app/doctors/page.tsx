import DoctorsClient from "@/components/doctors/DoctorsClient"
import { doctors } from "@/lib/data/doctors"

export default function DoctorsPage() {
  return <DoctorsClient doctors={doctors} />
}