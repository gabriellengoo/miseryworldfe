export const SectionTitle = ({ children, text }) => (
    <div className="text-center pt-6 pb-5 max-w-7xl mx-auto my-md ">
      <h2 className=" sm:text-6xl inline leading-10 sm:leading-14 tracking-wider text-6xl m-auto top-0 p-15 z-0">
        {text || children}
      </h2>
    </div>
  );