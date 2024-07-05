import QuestionCard, {
  QuestionCardProps,
} from "@/components/card/QuestionCard";
import Filter from "@/components/Filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";


const questions: QuestionCardProps[] = [
  {
    _id: "1",
    title: "How to set up a development environment?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "TypeScript" },
      { _id: "3", name: "Webpack" },
    ],
    author: { _id: "a1", name: "John Doe", picture: "/john_doe_picture_url" },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2022-01-02T00:00:00.000Z"),
  },
  {
    _id: "2",
    title: "What are the best practices for code organization?",
    tags: [
      { _id: "4", name: "JavaScript" },
      { _id: "5", name: "ESLint" },
      { _id: "6", name: "Folder Structure" },
    ],
    author: { _id: "a2", name: "Jane Smith", picture: "/jane_smith_picture_url" },
    upvotes: 15,
    views: 200,
    answers: [],
    createdAt: new Date("2022-01-02T00:00:00.000Z"),
  },
  {
    _id: "3",
    title: "How to handle asynchronous operations in React?",
    tags: [
      { _id: "7", name: "React" },
      { _id: "8", name: "Async/Await" },
      { _id: "9", name: "Promises" },
    ],
    author: { _id: "a3", name: "Mike Johnson", picture: "/mike_johnson_picture_url" },
    upvotes: 5,
    views: 50,
    answers: [],
    createdAt: new Date("2022-01-03T00:00:00.000Z"),
  },
  {
    _id: "4",
    title: "What are the benefits of using TypeScript?",
    tags: [
      { _id: "10", name: "TypeScript" },
      { _id: "11", name: "Static Typing" },
      { _id: "12", name: "Type Inference" },
    ],
    author: { _id: "a4", name: "Sarah Thompson", picture: "/sarah_thompson_picture_url" },
    upvotes: 20,
    views: 300,
    answers: [],
    createdAt: new Date("2022-01-04T00:00:00.000Z"),
  },
  {
    _id: "5",
    title: "How to optimize performance in React applications?",
    tags: [
      { _id: "13", name: "React" },
      { _id: "14", name: "Performance" },
      { _id: "15", name: "Memoization" },
    ],
    author: { _id: "a5", name: "David Wilson", picture: "/david_wilson_picture_url" },
    upvotes: 8,
    views: 150,
    answers: [],
    createdAt: new Date("2022-01-05T00:00:00.000Z"),
  },
];
const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search Questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[50px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no questions to show"
            description="Be the first one to break the silence! 🚀 Ask a question to kickstart
            the discussion. Our query could be the next big thing that others can
            learn. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
