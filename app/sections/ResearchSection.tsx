import { Badge } from '@components/ui/badge';
import { Button } from '@components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card';

export default function ResearchSection() {
  const researchAreas = [
    {
      id: 1,
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Advancing AI capabilities for real-world applications and ethical AI development.',
      focus: ['Neural Networks', 'Natural Language Processing', 'Computer Vision'],
      publications: 12,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Sustainable Technology',
      description: 'Developing eco-friendly technologies and renewable energy solutions.',
      focus: ['Green Computing', 'Energy Efficiency', 'Carbon Reduction'],
      publications: 8,
      status: 'Active'
    },
    {
      id: 3,
      title: 'Digital Health',
      description: 'Innovating healthcare delivery through technology and data science.',
      focus: ['Telemedicine', 'Health Analytics', 'Preventive Care'],
      publications: 15,
      status: 'Active'
    },
    {
      id: 4,
      title: 'Cybersecurity & Privacy',
      description: 'Protecting digital assets and ensuring user privacy in the digital age.',
      focus: ['Zero Trust', 'Privacy-Preserving AI', 'Threat Intelligence'],
      publications: 10,
      status: 'Active'
    }
  ];

  return (
    <section id="research" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Research & Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pushing the boundaries of technology through cutting-edge research and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchAreas.map((area) => (
            <Card key={area.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="default">{area.status}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {area.publications} publications
                  </span>
                </div>
                <CardTitle className="text-xl">{area.title}</CardTitle>
                <CardDescription className="text-base">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Research Focus:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.focus.map((item, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    View Publications
                  </Button>
                  <Button variant="outline" size="sm">
                    Research Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">45+</div>
              <div className="text-muted-foreground">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Research Partners</div>
            </div>
          </div>

          <Button size="lg">
            Explore Research
          </Button>
        </div>
      </div>
    </section>
  );
}
