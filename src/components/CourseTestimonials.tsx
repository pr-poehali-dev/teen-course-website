
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CourseTestimonials = () => {
  const testimonials = [
    {
      text: "Курс превзошел все мои ожидания! Я никогда раньше не программировал, но за две недели создал свой первый сайт.",
      name: "Дмитрий, 16 лет",
      initials: "ДК"
    },
    {
      text: "Благодаря курсу я поняла, что хочу связать свою жизнь с программированием. Преподаватели очень доступно объясняют сложные вещи.",
      name: "Алиса, 15 лет",
      initials: "АС"
    },
    {
      text: "Это было намного интереснее, чем уроки информатики в школе. Я научился работать в команде и создал свой первый проект.",
      name: "Максим, 17 лет",
      initials: "МЛ"
    }
  ];

  return (
    <section id="testimonials" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-violet-900">Отзывы наших учеников</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 shadow-md">
            <div className="flex flex-col h-full">
              <div className="mb-4 flex-grow">
                <p className="italic text-gray-700">{testimonial.text}</p>
              </div>
              <div className="flex items-center mt-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-violet-200 text-violet-800">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CourseTestimonials;
