import { Check, HelpCircle, Minus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function PricingTable() {
  return (
    <div className="container mx-auto px-4 mt-24">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Features</TableHead>
            <TableHead>FREE</TableHead>
            <TableHead>PRO</TableHead>
            <TableHead>TEAM</TableHead>
            <TableHead>ENTERPRISE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.name}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {feature.name}
                  {feature.tooltip && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{feature.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </TableCell>
              {feature.tiers.map((tier, i) => (
                <TableCell key={i}>
                  {tier === true && <Check className="h-4 w-4 text-primary" />}
                  {tier === false && <Minus className="h-4 w-4 text-muted-foreground" />}
                  {typeof tier === "string" && <span>{tier}</span>}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const features = [
  {
    name: "Database",
    tooltip: "Dedicated Postgres database for your application",
    tiers: [true, true, true, true],
  },
  {
    name: "Unlimited API requests",
    tiers: [true, true, true, true],
  },
  {
    name: "Database size",
    tooltip: "Total database size allowed",
    tiers: ["500 MB", "8 GB", "8 GB", "Custom"],
  },
  {
    name: "Advanced disk config",
    tiers: [false, true, true, true],
  },
  {
    name: "Automatic backups",
    tooltip: "Automated backup frequency",
    tiers: [false, "7 days", "14 days", "Custom"],
  },
  {
    name: "Point in time recovery",
    tiers: [false, "$100/mo", "$100/mo", "Custom"],
  },
  {
    name: "Pausing",
    tooltip: "Project auto-pauses after inactivity",
    tiers: ["After 1 week", "Never", "Never", "Never"],
  },
]

