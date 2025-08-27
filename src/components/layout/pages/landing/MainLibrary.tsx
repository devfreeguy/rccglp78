import { useEffect, useState } from "react";
import { MainLibraryBgImage } from "../../../../assets/images";
import { LandingData } from "../../../../data";
import Tabs from "../../../elements/tabs/Tabs";
import PageWrapper from "../../../wrappers/PageWrapper";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import InfoCard from "../../../elements/cards/InfoCard";
import type { labelType } from "../../../../types/global.types";
import Button from "../../../elements/buttons/Button";

interface IAction {
  label: string;
  outlinedBtn?: boolean;
}

interface IMainLibraryData {
  label: labelType;
  title: string;
  desc?: string;
  actions?: IAction[];
}

const MainLibrary = () => {
  const [singleActionList, setSingleActionList] = useState<
    IMainLibraryData[] | null
  >(null);
  const [currentPos, setCurrentPos] = useState(0);

  const filterList = (data: IMainLibraryData[]) => {
    let filterData = [...data];

    const { tabList } = LandingData.mainLibrary;

    const id = tabList[currentPos].id;

    if (id) filterData = filterData.filter((item) => item.label == id);

    return filterData;
  };

  useEffect(() => {
    const { data } = LandingData.mainLibrary;
    setSingleActionList(filterList(data as unknown as IMainLibraryData[]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPos]);

  return (
    <PageWrapper backgroundImageUrl={MainLibraryBgImage} className="min-h-fit">
      <div className="flex w-full h-full bg-black/70 backdrop-blur-2xl py-8">
        <SectionWrapper className="flex-col gap-8">
          {/* Header */}
          <div className="flex w-full flex-col md:flex-row gap-4 md:items-center justify-between text-white">
            <h2 className="text-2xl font-bold">
              Prayer Request, Online giving, Testimonies
            </h2>

            {/* Tab layout */}
            <Tabs
              list={LandingData.mainLibrary.tabList}
              getActivePos={(pos) => setCurrentPos(pos)}
              isDark
            />
          </div>

          {/* Body */}
          <div className="flex w-full flex-col gap-3">
            {singleActionList && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {singleActionList.map(
                  ({ title, desc, actions, label }: IMainLibraryData, i) => (
                    <InfoCard
                      key={i}
                      label={label}
                      headingText={title}
                      textContent={desc}
                      actions={
                        actions?.map(({ label, outlinedBtn }) => ({
                          label,
                          btnOutlined: outlinedBtn,
                        })) || []
                      }
                    />
                  )
                )}
              </div>
            )}
          </div>

          <div className="flex mx-auto [&_*]:border-gray-200 [&_*]:text-gray-200!">
            <Button
              outlined
              label="Read More"
              variant="neutral"
              iconName="right_line text-xs "
              className="flex-row-reverse"
              size="sm"
            />
          </div>
        </SectionWrapper>
      </div>
    </PageWrapper>
  );
};

export default MainLibrary;
