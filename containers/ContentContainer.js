function ContentContainer({ children, style }) {
  return (
    <div
      className={`${
        style ? style : "space-y-16"
      } w-[90vw] max-w-[920px] sm:w-[80vw] md:w-[90vw] mx-auto  xl:pt-16`}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
