
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CourseHeader from "@/components/CourseHeader";
import CourseFeatures from "@/components/CourseFeatures";
import CourseForm from "@/components/CourseForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <CourseHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Основная информация о сервисе */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-violet-900">Подработка для подростков от 14 до 18 лет</h2>
              <p className="text-lg text-gray-700 mb-6">
                Наш сервис помогает подросткам найти официальную подработку с учётом возраста, 
                интересов и графика учёбы. Мы проводим бесплатные консультации и помогаем 
                подобрать лучшие варианты трудоустройства.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Наши опытные менеджеры знают все тонкости трудоустройства несовершеннолетних 
                и помогут найти работу, которая будет соответствовать вашим ожиданиям.
              </p>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                Записаться на консультацию
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Подростки на подработке" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Особенности сервиса */}
        <CourseFeatures />

        {/* Форма записи */}
        <CourseForm />
      </main>

      <footer className="bg-violet-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">О нас</h3>
              <p>Мы помогаем подросткам найти подходящую подработку с 2018 года.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p>Email: info@teenwork.ru</p>
              <p>Телефон: +7 (999) 123-45-67</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Адрес</h3>
              <p>г. Москва, ул. Примерная, д. 123</p>
            </div>
          </div>
          <Separator className="my-6 bg-violet-700" />
          <p className="text-center">© 2023 Подработка для подростков TeenWork. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
