const InformationSummary = ({ item }) => {
  return (
    <div className={`bg-[#F6EBFE] text-center`}>
      <div className="w-auto h-auto mx-2 sm:mx-4 my-5 xxs:my-5 sm:my-[17px]">
        <p
          className={`text-[20px] xxs:text-[24px] sm:text-[38px] font-bold text-gray-700`}
        >
          {item.description}
        </p>
        <p
          className={`text-[10px] xxs:text-[12px] sm:text-[17px] font-medium px-[0.90rem] sm:px-[1rem] text-wrap text-gray-500`}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;
