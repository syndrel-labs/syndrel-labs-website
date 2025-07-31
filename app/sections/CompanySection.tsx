import { Button } from '@components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card';

export default function CompanySection() {
  const values = [
    {
      id: 1,
      title: 'Innovation',
      description: 'Pushing boundaries and exploring new possibilities in technology.',
      icon: '🚀'
    },
    {
      id: 2,
      title: 'Impact',
      description: 'Creating solutions that make a real difference in people\'s lives.',
      icon: '💡'
    },
    {
      id: 3,
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards in everything we do.',
      icon: '🛡️'
    },
    {
      id: 4,
      title: 'Collaboration',
      description: 'Working together with partners and communities to achieve more.',
      icon: '🤝'
    }
  ];

  const stats = [
    { label: 'Team Members', value: '50+' },
    { label: 'Countries', value: '12' },
    { label: 'Projects Completed', value: '100+' },
    { label: 'Years Experience', value: '8' }
  ];

  return (
    <section id="company" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Syndrel Labs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of innovators, researchers, and problem-solvers dedicated to creating technology that serves humanity.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To harness the power of technology to solve the world's most pressing challenges,
              creating sustainable, equitable, and innovative solutions that improve lives globally.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.id} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Ready to make a difference? We're always looking for talented individuals who share our passion for innovation and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                View Careers
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
