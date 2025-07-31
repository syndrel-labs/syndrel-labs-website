import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@components/ui/card'

const products = [
  {
    id: 1,
    name: 'syndrel_lattice',
    description:
      'Coordination protocol runtime for distributed multi-agent systems.',
    category: 'Coordination',
    status: 'Live',
    features: [
      'Graph-based topology',
      'Realtime reconfiguration',
      'Modular agent interface',
    ],
  },
  {
    id: 2,
    name: 'syndrel_fiber',
    description:
      'Adaptive communication fabric with dynamic topology learning.',
    category: 'Messaging',
    status: 'Beta',
    features: [
      'Learned channel routing',
      'Topology-sensitive messaging',
      'Inter-agent bandwidth shaping',
    ],
  },
  {
    id: 3,
    name: 'syndrel_strata',
    description:
      'Layered control for mission-critical, multi-level agent orchestration.',
    category: 'Control',
    status: 'Live',
    features: [
      'Hierarchical task scheduling',
      'Failover-safe delegation',
      'Composable policies',
    ],
  },
  {
    id: 4,
    name: 'syndrel_nas',
    description:
      'Multi-agent neural architecture search with communication-optimized agents.',
    category: 'Architecture',
    status: 'Coming Soon',
    features: [
      'Distributed NAS agents',
      'Multi-objective tuning',
      'Auto-learned training graphs',
    ],
  },
]

const getStatusVariant = (status: string): 'default' | 'secondary' | 'outline' => {
  switch (status) {
    case 'Live':
      return 'default'
    case 'Beta':
      return 'secondary'
    case 'Coming Soon':
    default:
      return 'outline'
  }
}

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-mono font-semibold mb-3 text-foreground">
            modules_
          </h2>
          <p className="text-muted-foreground max-w-2xl font-mono">
            Modular systems for emergent coordination, messaging, and learning in distributed environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-background border border-border hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs uppercase tracking-wider">
                    {product.category}
                  </Badge>
                  <Badge variant={getStatusVariant(product.status)} className="text-xs">
                    {product.status}
                  </Badge>
                </div>
                <CardTitle className="font-mono text-lg">{product.name}</CardTitle>
                <CardDescription className="font-mono text-sm text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mt-4 mb-6">
                  <p className="font-semibold text-sm mb-2">Capabilities:</p>
                  <ul className="space-y-1 pl-4 list-disc text-sm text-muted-foreground">
                    {product.features.map((feature, index) => (
                      <li key={index} className="font-mono">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="outline" size="sm">
                    Docs
                  </Button>
                  <Button size="sm">Demo</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline">
            full module list_
          </Button>
        </div>
      </div>
    </section>
  )
}
