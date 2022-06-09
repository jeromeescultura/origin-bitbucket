import Image from "next/image";

function LeafRating({ count }) {
  return (
    <div className="inline-block z-50">
      <div className="flex  bg-leafBG gap-1 py-2 px-3 justify-center rounded-xl ">
        {[...Array(count)].map((x, i) => (
          <Image
            key={i}
            src="/icons/leaf-green.svg"
            width={15}
            height={15}
            objectFit="contain"
          />
        ))}
      </div>
    </div>
  );
}

export default LeafRating;
