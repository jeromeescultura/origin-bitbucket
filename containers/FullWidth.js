function FullWidth({ children }) {
  return (
    <div className="w-full md:w-[90vw] lg:w-[90vw] xl:w-[1400px] mx-auto pl-4 md:pl-0">
      {children}
    </div>
  );
}

export default FullWidth;
