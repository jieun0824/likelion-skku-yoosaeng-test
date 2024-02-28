import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative top-20 flex justify-center flex-col items-center">
      <Image src="/image/skkuLogo.png" alt="logo" width={130} height={50} />
      <Link href="https://www.instagram.com/likelion_skku/">
        <Image
          src="/image/instagram.svg"
          alt="instagram"
          width={50}
          height={30}
        />
      </Link>
    </div>
  );
}
