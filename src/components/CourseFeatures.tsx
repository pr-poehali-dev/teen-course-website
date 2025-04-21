
import { Card } from "@/components/ui/card";
import { Code, Globe, Cpu, Users } from "lucide-react";

const CourseFeatures = () => {
  const features = [
    {
      icon: <Code className="h-10 w-10 text-violet-600" />,
      title: "Основы программирования",
      description: "Изучение базовых принципов и концепций программирования на примере современных языков."
    },
    {
      icon: <Globe className="h-10 w-10 text-violet-600" />,
      title: "Веб-разработка",
      description: "Создание собственных сайтов с использованием HTML, CSS и JavaScript."
    },
    {
      icon: <Cpu className="h-10 w-10 text-violet-600" />,
      title: "Основы алгоритмов",
      description: "Решение интересных задач и построение эффективных алгоритмов."
    },
    {
      icon: <Users className="h-10 w-10 text-violet-600" />,
      title: "Работа в команде",
      description: "Развитие навыков коммуникации и совместной работы над проектами."
    }
  ];

  return (
    <section id="features" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-violet-900">Чему вы научитесь</h2>
      
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
            alt="Интерактивное обучение" 
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-violet-900">Курс для тех, кто хочет:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">✓</span>
              <span>Сделать первые шаги в программировании</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">✓</span>
              <span>Понять, интересна ли ему сфера IT</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">✓</span>
              <span>Развить логическое мышление</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-violet-100 text-violet-800 rounded-full h-6 w-6 text-sm mr-3 mt-0.5">✓</span>
              <span>Определиться с будущей профессией</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
