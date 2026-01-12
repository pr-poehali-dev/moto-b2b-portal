import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const motorcycles = [
    {
      name: "BMW R 1250 GS Adventure",
      image: "https://cdn.poehali.dev/projects/cc4e136b-6915-4b9c-8b27-20cba7aa7b55/files/aa4f40a2-d48a-4020-816d-5d378a7671f7.jpg",
      engine: "1254 куб.см",
      power: "136 л.с.",
      range: "500+ км",
      luggage: "47 л",
      features: ["Круиз-контроль", "Подогрев рукояток", "Регулируемая подвеска", "Защита от падения"]
    },
    {
      name: "Honda Gold Wing Tour",
      image: "https://cdn.poehali.dev/projects/cc4e136b-6915-4b9c-8b27-20cba7aa7b55/files/2db4f454-0a4c-4e81-a08d-a8842fc7e066.jpg",
      engine: "1833 куб.см",
      power: "126 л.с.",
      range: "550+ км",
      luggage: "110 л",
      features: ["Apple CarPlay", "Airbag", "7-ступ. коробка DCT", "Навигация"]
    },
    {
      name: "Yamaha Tracer 9 GT+",
      image: "https://cdn.poehali.dev/projects/cc4e136b-6915-4b9c-8b27-20cba7aa7b55/files/e853e5ee-6eac-49fe-8c54-49dd7686c42d.jpg",
      engine: "890 куб.см",
      power: "119 л.с.",
      range: "400+ км",
      luggage: "25 л + кофры",
      features: ["TFT дисплей", "Быстрое зарядное USB", "Электронная подвеска", "Круиз-контроль"]
    }
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "Надежность",
      description: "Официальная гарантия, сертифицированный сервис по всей России"
    },
    {
      icon: "Wrench",
      title: "Сервис",
      description: "Обслуживание в дилерских центрах с оригинальными запчастями"
    },
    {
      icon: "TrendingDown",
      title: "Выгода",
      description: "Специальные условия для корпоративных клиентов и автопарков"
    },
    {
      icon: "Users",
      title: "Поддержка",
      description: "Личный менеджер и круглосуточная техподдержка в пути"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-secondary text-secondary-foreground py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Bike" size={32} />
            <span className="text-2xl font-bold">TourMoto</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#bikes" className="hover:text-primary transition-colors">Мотоциклы</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.7)), url('https://cdn.poehali.dev/projects/cc4e136b-6915-4b9c-8b27-20cba7aa7b55/files/aa4f40a2-d48a-4020-816d-5d378a7671f7.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Свобода без границ</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Туристические мотоциклы для дальних путешествий с максимальным комфортом
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
            Узнать подробнее
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="bikes" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши мотоциклы</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Профессиональная техника для путешествий любой сложности
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorcycles.map((bike, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{bike.name}</CardTitle>
                  <CardDescription className="flex gap-4 text-sm pt-2">
                    <span className="flex items-center gap-1">
                      <Icon name="Gauge" size={16} />
                      {bike.engine}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Zap" size={16} />
                      {bike.power}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Fuel" size={18} className="text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Запас хода</div>
                        <div className="font-semibold">{bike.range}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Package" size={18} className="text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Багаж</div>
                        <div className="font-semibold">{bike.luggage}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {bike.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Почему выбирают нас</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Надежный партнер для вашего бизнеса
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-secondary-foreground/80 text-lg mb-12">
            Оставьте заявку и получите персональное предложение
          </p>
          
          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email"
                    placeholder="ivan@company.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Интересуют условия для корпоративных клиентов..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Bike" size={28} />
                <span className="text-xl font-bold">TourMoto</span>
              </div>
              <p className="text-secondary-foreground/80">
                Официальный дилер туристических мотоциклов премиум-класса
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-secondary-foreground/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@tourmoto.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <nav className="space-y-2 text-secondary-foreground/80">
                <a href="#bikes" className="block hover:text-primary transition-colors">Мотоциклы</a>
                <a href="#benefits" className="block hover:text-primary transition-colors">Преимущества</a>
                <a href="#contact" className="block hover:text-primary transition-colors">Контакты</a>
              </nav>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60 text-sm">
            © 2024 TourMoto. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
