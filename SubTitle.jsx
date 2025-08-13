const SubTitle = ({ children,color }) => {
     const colorObj = {
    white: "text-white",
    blue: "text-blue-500",
gray: "text-gray-500"};

  return <h4 className="text-base text-white lg:text-2xl">{children}</h4>;
};

export default SubTitle;