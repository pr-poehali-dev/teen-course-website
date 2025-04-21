
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    parent: "",
    experience: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, experience: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Здесь была бы отправка данных на сервер
  };

  return (
    <section id="register" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-violet-900">Записаться на бесплатный курс</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-violet-900">Не упустите свой шанс!</h3>
          <p className="text-lg text-gray-700 mb-6">
            Количество мест на бесплатном курсе ограничено. Заполните форму, и наш менеджер свяжется с вами в ближайшее время для подтверждения участия.
          </p>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Что вас ждет на курсе:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">1</span>
                <span>8 занятий по 2 часа (всего 16 часов интенсивного обучения)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">2</span>
                <span>Практические задания после каждого занятия</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">3</span>
                <span>Создание собственного проекта к концу курса</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">4</span>
                <span>Сертификат о прохождении курса</span>
              </li>
            </ul>
          </div>
          
          <img 
            src="/placeholder.svg" 
            alt="Программирование для подростков" 
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <Card className="p-6 shadow-lg">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя и фамилия*</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Введите ваше имя и фамилию" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="age">Возраст*</Label>
                <Input 
                  id="age" 
                  name="age" 
                  placeholder="Укажите ваш возраст" 
                  required 
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email*</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон*</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  placeholder="+7 (___) ___-__-__" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="parent">ФИО родителя/законного представителя*</Label>
                <Input 
                  id="parent" 
                  name="parent" 
                  placeholder="Для участников младше 18 лет" 
                  required 
                  value={formData.parent}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Опыт в программировании</Label>
                <Select onValueChange={handleSelectChange} value={formData.experience}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите уровень опыта" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Нет опыта</SelectItem>
                    <SelectItem value="basic">Начальный уровень</SelectItem>
                    <SelectItem value="intermediate">Средний уровень</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Дополнительная информация</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Расскажите о своих ожиданиях от курса или задайте вопрос" 
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700">
                Отправить заявку
              </Button>
              
              <p className="text-sm text-gray-500 mt-2">
                Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-4 text-violet-900">Заявка успешно отправлена!</h3>
              <p className="text-lg text-gray-700 mb-6">
                Спасибо за интерес к нашему курсу. Мы свяжемся с вами в ближайшее время для подтверждения участия.
              </p>
              <Button 
                onClick={() => setSubmitted(false)} 
                variant="outline" 
                className="border-violet-600 text-violet-600 hover:bg-violet-50"
              >
                Отправить еще одну заявку
              </Button>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default CourseForm;
