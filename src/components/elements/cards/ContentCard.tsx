import TextReveal from "../animations/TextReveal";

interface IContentCard {
  title: string;
  content: string;
  number: number;
}

const ContentCard = ({ title, content, number }: IContentCard) => {
  return (
    <div className="relative h-full flex w-full items-center justify-center px-3">
      {/* Number */}
      <span className="absolute left-0 flex text-xs p-1 items-center justify-center size-6 font-bold bg-main-orange rounded-full text-white">
        {number}
      </span>
      {/* Card */}
      <div className="w-full h-full flex flex-col gap-2 bg-pink-200 rounded-2xl p-5">
        <TextReveal style="bg-pink-300">
          <h6 className="md:text-lg font-bold">{title}</h6>
        </TextReveal>
        <TextReveal style="bg-pink-300">
          <p className="flex items-center h-full text-xs md:text-sm font-semibold text-base-content/80">
            {content}
          </p>
        </TextReveal>
      </div>
    </div>
  );
};

export default ContentCard;
