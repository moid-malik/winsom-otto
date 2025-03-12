import Image from "next/image"
const Banner = () => {
  return (
    <div className="relative min-w-full  z-10">
        <Image src="/temp-banner.webp" width={1350} height={400} alt="banner" />
    </div>
  )
}

export default Banner