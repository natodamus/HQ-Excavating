import Image from "next/image";

export function Logo() {
  return (
    <div className="logo">
      <Image
        src="/images/brand/hq-logo.png"
        alt="High Quality Excavating, Inc."
        width={225}
        height={130}
        priority
      />
    </div>
  );
}
