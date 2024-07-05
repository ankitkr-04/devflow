import RenderTag from "@/components/RenderTag";
import Image from "next/image";
import Link from "next/link";

const questions = [
  {
    question:
      "What is the difference between a class and an interface in Java?",
    id: "1",
    url: "/question/" + Math.random().toString(36).substring(2, 15),
  },
  {
    question: "Explain the concept of closures in JavaScript.",
    id: "2",
    url: "/question/" + Math.random().toString(36).substring(2, 15),
  },
  {
    question:
      "What is the purpose of a virtual machine in a programming language?",
    id: "3",
    url: "/question/" + Math.random().toString(36).substring(2, 15),
  },
  {
    question: "What is the difference between a compiler and an interpreter?",
    id: "4",
    url: "/question/" + Math.random().toString(36).substring(2, 15),
  },
  {
    question:
      "What is the difference between a shallow copy and a deep copy in Python?",
    id: "5",
    url: "/question/" + Math.random().toString(36).substring(2, 15),
  },
];

const tags = [
  { _id: '1', title: "JavaScript", count: 10 },
  { _id: '2', title: "Python", count: 5 },
  { _id: '3', title: "Java", count: 8 },
  { _id: '4', title: "C++", count: 3 },
  { _id: '5', title: "C", count: 2 },
];

const RightSidebar = () => {
  return (
    <aside className="background-light900_dark200 custom-scrollbar light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300  dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {questions.map((question) => {
            return (
              <Link
                key={question.id}
                href={question.url}
                className="flex-between cursor-pointer gap-7 "
              >
                <p className="body-medium text-dark500_light700">
                  {question.question}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  width={20}
                  height={20}
                  alt="Chevron Right"
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-4">
          {tags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              title={tag.title}
              showCount={true}
              totalQuestions={tag.count}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
