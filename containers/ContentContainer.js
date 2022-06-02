function ContentContainer({ children }) {
  return (
    <div className="w-[90vw] max-w-[920px] sm:w-[80vw] md:w-[90vw] mx-auto space-y-16 xl:pt-16">
      {children}
    </div>
  );
}

export default ContentContainer;
