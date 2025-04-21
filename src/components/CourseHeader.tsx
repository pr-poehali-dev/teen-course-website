
import { Button } from "@/components/ui/button";

const CourseHeader = () => {
  return (
    <header className="bg-violet-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo-b.svg" alt="Логотип" className="h-10 w-10 mr-2" />
            <span className="text-xl font-bold">TeenWork</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-violet-300 transition">Главная</a>
            <a href="#features" className="hover:text-violet-300 transition">О сервисе</a>
            <a href="#register" className="hover:text-violet-300 transition">Консультация</a>
          </nav>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-violet-800">
            Связаться с нами
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Подработка для подростков от 14 до 18 лет</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Получи бесплатную консультацию и найди идеальный вариант подработки с помощью наших менеджеров!
        </p>
        <Button className="bg-white text-violet-900 hover:bg-violet-100 text-lg px-8 py-6" size="lg">
          Бесплатная консультация
        </Button>
      </div>
    </header>
  );
};

export default CourseHeader;
