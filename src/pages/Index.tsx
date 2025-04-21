
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import CourseHeader from "@/components/CourseHeader";
import CourseFeatures from "@/components/CourseFeatures";
import CourseForm from "@/components/CourseForm";
import { useState } from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <CourseHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Основная информация о курсе */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-violet-900">Старт в программировании для подростков</h2>
              <p className="text-lg text-gray-700 mb-6">
                Наш бесплатный курс разработан специально для молодых людей от 14 до 18 лет, 
                которые хотят сделать первые шаги в мире программирования и технологий.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Никакого скучного теоретического материала — только 
                интересные проекты и практические навыки, которые можно применить прямо сейчас!
              </p>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                Записаться на курс
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Подростки на курсе программирования" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Особенности курса */}
        <CourseFeatures />

        {/* Форма записи */}
        <CourseForm />
      </main>

      <footer className="bg-violet-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">О нас</h3>
              <p>Мы помогаем подросткам освоить современные IT-навыки с 2018 года.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p>Email: info@teencoding.ru</p>
              <p>Телефон: +7 (999) 123-45-67</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Адрес</h3>
              <p>г. Москва, ул. Примерная, д. 123</p>
            </div>
          </div>
          <Separator className="my-6 bg-violet-700" />
          <p className="text-center">© 2023 Курсы программирования для подростков. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
