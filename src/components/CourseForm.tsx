
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
    interests: "",
    schedule: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Здесь была бы отправка данных на сервер
  };

  return (
    <section id="register" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-violet-900">Записаться на бесплатную консультацию</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-violet-900">Как проходит консультация</h3>
          <p className="text-lg text-gray-700 mb-6">
            Наши менеджеры помогут подобрать варианты подработки, подходящие именно вам, учитывая ваш возраст, интересы и график.
          </p>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Что вы получите:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">1</span>
                <span>Индивидуальную консультацию с экспертом по трудоустройству</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">2</span>
                <span>Подборку вакансий, соответствующих вашим критериям</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">3</span>
                <span>Помощь в составлении резюме и подготовке к собеседованию</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">4</span>
                <span>Поддержку на всех этапах трудоустройства</span>
              </li>
            </ul>
          </div>
          
          <img 
            src="/placeholder.svg" 
            alt="Консультация по подработке для подростков" 
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
                <Label htmlFor="interests">Сфера интересов</Label>
                <Select onValueChange={(value) => handleSelectChange("interests", value)} value={formData.interests}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите интересующую сферу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Продажи/Retail</SelectItem>
                    <SelectItem value="food">Общепит</SelectItem>
                    <SelectItem value="delivery">Курьерская доставка</SelectItem>
                    <SelectItem value="online">Онлайн-работа</SelectItem>
                    <SelectItem value="events">Мероприятия/Промо</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="schedule">Предпочтительный график</Label>
                <Select onValueChange={(value) => handleSelectChange("schedule", value)} value={formData.schedule}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите удобный график" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekends">Только выходные</SelectItem>
                    <SelectItem value="evenings">Вечера в будни</SelectItem>
                    <SelectItem value="flexible">Гибкий график</SelectItem>
                    <SelectItem value="vacation">Только на каникулах</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Дополнительная информация</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Расскажите о ваших ожиданиях или укажите другие пожелания" 
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700">
                Получить бесплатную консультацию
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
                Спасибо за обращение! Наш менеджер свяжется с вами в ближайшее время для проведения консультации и подбора вариантов подработки.
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
