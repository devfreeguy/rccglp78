import TextReveal from "../animations/TextReveal";

interface IHeroStat {
  label: string;
  value: string;
}

const HeroStat = ({ label, value }: IHeroStat) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-7 sm:first:pl-0">
      <TextReveal
        noMargin
        style="bg-gray-800"
        delay={0}
        className="flex flex-col items-center justify-center"
      >
        <h4 className="text-2xl sm:text-3xl font-bold text-white">{value}</h4>
      </TextReveal>

      <TextReveal
        noMargin
        style="bg-gray-800"
        className="flex flex-col items-center justify-center"
      >
        <h4 className="text-sm font-medium text-gray-200">{label}</h4>{" "}
      </TextReveal>
    </div>
  );
};

export default HeroStat;
