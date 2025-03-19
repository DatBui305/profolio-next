import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed w-full bg-gray-800 p-4 shadow-md flex justify-between px-10">
      <Link href="/" className="text-xl font-bold">
        Bùi Anh Đạt
      </Link>
      <div className="space-x-4">
        <Link href="#about" className="hover:text-blue-400">
          Giới thiệu
        </Link>
        <Link href="#projects" className="hover:text-blue-400">
          Dự Án
        </Link>
        <Link href="#experience" className="hover:text-blue-400">
          Kinh Nghiệm
        </Link>
        <Link href="#contact" className="hover:text-blue-400">
          Liên Hệ
        </Link>
      </div>
    </nav>
  );
}
