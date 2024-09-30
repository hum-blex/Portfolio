import Image from "next/image";

export default function NotFound() {
  return (
    <div className=" flex flex-col h-screen w-screen justify-start items-end gap-20  bg-white">
      <div className="h-1/2 w-full flex place-items-end justify-center">
        <h1 className=" text-3xl md:text-4xl font-bold lg:text-5xl text-gray z-50 text-black-100">
          {" "}
          Page Not found{" "}
        </h1>
      </div>

      <div className=" h-1/2 w-1/2 lg:h-1/2 lg:w-full flex absolute bottom-0 items-end justify-end">
        <Image
          src={"/cat-not-found.jpg"}
          alt="sdf"
          width={500}
          height={500}
          className="object-cover z-10"
        />
      </div>
    </div>
  );
}
