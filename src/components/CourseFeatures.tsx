
import { Card } from "@/components/ui/card";
import { DollarSign, Clock, ShieldCheck, Users } from "lucide-react";

const CourseFeatures = () => {
  const features = [
    {
      icon: <DollarSign className="h-10 w-10 text-violet-600" />,
      title: "Достойный доход",
      description: "Подберём варианты подработки с конкурентной оплатой, соответствующей возрасту и навыкам."
    },
    {
      icon: <Clock className="h-10 w-10 text-violet-600" />,
      title: "Гибкий график",
      description: "Работа, которая не помешает учёбе: вечером, в выходные или на каникулах."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-violet-600" />,
      title: "Безопасность",
      description: "Только проверенные работодатели, соблюдающие трудовое законодательство для несовершеннолетних."
    },
    {
      icon: <Users className="h-10 w-10 text-violet-600" />,
      title: "Опыт работы",
      description: "Первый официальный опыт работы, который можно добавить в резюме для будущей карьеры."
    }
  ];

  return (
    <section id="features" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-violet-900">Как мы поможем</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src="/placeholder.svg" 
            alt="Подростки на подработке" 
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-violet-900">Наш сервис для тех, кто хочет:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">✓</span>
              <span>Найти официальную подработку в свободное от учёбы время</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">✓</span>
              <span>Начать зарабатывать первые собственные деньги</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">✓</span>
              <span>Получить ценный опыт работы для будущего резюме</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">✓</span>
              <span>Понять, какие профессии подходят именно вам</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
