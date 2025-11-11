import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Shield, Zap, Monitor, Users, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import heroBackground from "@/assets/hero-bg.jpg";
import aboutBackground from "@/assets/about-bg.jpg";
import servicesBackground from "@/assets/services-bg.jpg";
import techBackground from "@/assets/tech-bg.jpg";
import benefitsBackground from "@/assets/benefits-bg.jpg";
import contactBackground from "@/assets/contact-bg.jpg";
import logoSeica from "@/assets/logo-seica.png";
import emailjs from '@emailjs/browser';
const Index = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Preparar el email para enviar a a4uca4d@gmail.com
    const emailData = {
      to_email: 'a4uca4d@gmail.com',
      from_name: formData.get('nombre'),
      from_email: formData.get('correo'),
      phone: formData.get('telefono'),
      message: formData.get('mensaje'),
    };

    try {
      // Enviar email usando EmailJS
      // Nota: Debes configurar tu cuenta en https://www.emailjs.com/
      // y reemplazar estos valores con tus IDs reales:
      // - SERVICE_ID: ID del servicio de email
      // - TEMPLATE_ID: ID de la plantilla de email
      // - PUBLIC_KEY: Tu clave pública de EmailJS
      
      await emailjs.send(
        'YOUR_SERVICE_ID', // Reemplazar con tu Service ID
        'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID
        emailData,
        'YOUR_PUBLIC_KEY' // Reemplazar con tu Public Key
      );
      
      toast.success("Mensaje enviado exitosamente. Nos pondremos en contacto pronto.");
      form.reset();
    } catch (error) {
      console.error('Error al enviar el email:', error);
      toast.error("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
    }
  };
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Section id="hero" className="pt-32" backgroundImage={heroBackground}>
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Soluciones Integrales en{" "}
            <span className="text-gradient">Seguridad Electrónica</span> y{" "}
            <span className="text-gradient">Sistemas Eléctricos</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Protegemos lo que más importa con tecnología de punta y atención personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#servicios">Conoce nuestros servicios</a>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <a href="#contacto">Contáctanos ahora</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Sobre SEICA Section */}
      <Section id="sobre" backgroundImage={aboutBackground}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Quiénes somos?</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <strong className="text-foreground">SEICA</strong> (RIF. J-41091304-5) es una empresa venezolana ubicada en{" "}
            <span className="text-primary">Cagua, Aragua</span>, especializada en soluciones integrales de seguridad
            electrónica y sistemas eléctricos. Contamos con más de una década de experiencia ofreciendo instalaciones
            confiables, configuraciones avanzadas y mantenimiento profesional para sistemas de videovigilancia y redes
            eléctricas.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Nos comprometemos con la <span className="text-primary font-semibold">calidad</span>, el{" "}
            <span className="text-secondary font-semibold">soporte técnico</span> y la atención personalizada para cada
            cliente.
          </p>
        </div>
      </Section>

      {/* Servicios Section */}
      <Section id="servicios" backgroundImage={servicesBackground}>
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Camera,
            title: "CCTV",
            description: "Instalación y mantenimiento de Circuitos Cerrados de Televisión con cámaras IP y grabadores NVR/DVR."
          }, {
            icon: Monitor,
            title: "Monitoreo Remoto",
            description: "Acceso en tiempo real vía protocolo RTSP desde cualquier dispositivo conectado."
          }, {
            icon: Shield,
            title: "Analítica de Video",
            description: "Detección de movimiento, reconocimiento facial y conteo de personas con inteligencia artificial."
          }, {
            icon: Zap,
            title: "Sistemas Eléctricos",
            description: "Diseño e instalación de redes eléctricas seguras y eficientes para hogares y empresas."
          }].map((service, index) => <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-card)]">
                <CardContent className="p-6 space-y-4">
                  <service.icon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </Section>

      {/* Tecnología Section */}
      <Section id="tecnologia" backgroundImage={techBackground}>
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Tecnología de Vanguardia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Cámaras IP de alta resolución", "Grabadores NVR/DVR inteligentes", "Analítica de video con IA", "Integración con dispositivos móviles"].map((tech, index) => <div key={index} className="flex items-center gap-4 p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-lg">{tech}</span>
              </div>)}
          </div>
          <p className="text-center text-lg text-muted-foreground mt-8">
            Utilizamos equipos de última generación para garantizar monitoreo confiable, seguro y adaptable a cualquier
            entorno.
          </p>
        </div>
      </Section>

      {/* Beneficios Section */}
      <Section id="beneficios" backgroundImage={benefitsBackground}>
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">¿Por qué confiar en SEICA?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["+10 años de experiencia", "Atención personalizada", "Soporte técnico especializado", "Soluciones a medida", "Infraestructura segura y confiable", "Tecnología de última generación"].map((benefit, index) => <Card key={index} className="bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm border-primary/30 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8 text-center">
                  <p className="text-xl font-semibold">{benefit}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </Section>

      {/* Testimonios Section */}
      <Section id="testimonios" className="bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
            quote: "SEICA instaló nuestro sistema de videovigilancia con una precisión impecable. ¡Recomendados!",
            author: "Carlos M., Gerente de Seguridad"
          }, {
            quote: "La atención técnica fue rápida y eficiente. Muy satisfechos con el servicio.",
            author: "Ana R., Propietaria de comercio"
          }].map((testimonial, index) => <Card key={index} className="bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                  <p className="text-muted-foreground">— {testimonial.author}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </Section>

      {/* Contacto Section */}
      <Section id="contacto" backgroundImage={contactBackground}>
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Contáctanos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input type="text" name="nombre" placeholder="Nombre" required className="bg-background/50" />
                  </div>
                  <div>
                    <Input type="email" name="correo" placeholder="Correo electrónico" required className="bg-background/50" />
                  </div>
                  <div>
                    <Input type="tel" name="telefono" placeholder="Teléfono" className="bg-background/50" />
                  </div>
                  <div>
                    <Textarea name="mensaje" placeholder="Mensaje" required className="bg-background/50 min-h-32" />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Ubicación</h3>
                      <p className="text-muted-foreground">Cagua, Estado Aragua, Venezuela</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">(+58) 424 243.70.97</p>
                      <p className="text-muted-foreground">(+58) 414 467.70.46</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">contacto@seica.com.ve</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="rounded-lg overflow-hidden shadow-lg h-64">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125722.85714285714!2d-67.45!3d10.186666666666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2af7e1dc5a5a5f%3A0x1234567890abcdef!2sCagua%2C%20Aragua%2C%20Venezuela!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" title="Ubicación SEICA" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-md border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src={logoSeica} alt="SEICA Logo" className="h-16 w-auto" />
              <p className="text-muted-foreground">SEICA RIF. J-41091304-5</p>
              <p className="text-muted-foreground">Cagua, Estado Aragua, Venezuela</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Facebook">
                  Facebook
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Instagram">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-muted-foreground">&copy; 2025 SEICA</p>
              <p className="text-muted-foreground">Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;