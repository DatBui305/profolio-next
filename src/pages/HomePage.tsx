import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />

      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section className="section">
        <h1 className="title fade-in-down">Xin chào, tôi là Bùi Anh Đạt</h1>
        <p className="subtitle fade-in-up">Web Developer</p>
        <a href="#projects" className="button">
          Xem Dự Án
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Giới thiệu</h2>
        <p className="mt-4 text-lg">
          Tôi là một lập trình viên chuyên về Next.js, React, và các công nghệ
          backend như Node.js, NestJS. Tôi là một lập trình viên phần mềm đầy
          đam mê và chủ động, luôn khao khát học hỏi và không ngừng phát triển.
          Tôi luôn nỗ lực nâng cao chuyên môn, cập nhật các xu hướng và phương
          pháp tốt nhất trong ngành. Với tinh thần nhiệt huyết và năng động, tôi
          luôn sẵn sàng đón nhận thử thách mới và đóng góp hiệu quả vào bất kỳ
          đội nhóm nào.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Kinh Nghiệm</h2>
        <div className="mt-6">
          <div className="p-4 bg-gray-800 rounded-lg mb-4">
            <h3 className="text-xl font-semibold">DevPlus MentorMe | Mentee</h3>
            <p>
              Tham gia chương trình hướng dẫn tại ST United, nhận được sự tư vấn
              từ các chuyên gia và tham gia cuộc thi Devkathon, đạt giải tư.
            </p>
            <p>
              <strong>Thời gian:</strong> 05.2024 - 07.2024
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg mb-4">
            <h3 className="text-xl font-semibold">
              Vinabook Company | Developer Intern
            </h3>
            <p>
              Tham gia phát triển nền tảng học ngôn ngữ với đội nhóm Scrum, hỗ
              trợ 18 ngôn ngữ thông qua bài học, trò chơi và bài tập tương tác.
            </p>
            <p>
              <strong>Thời gian:</strong> 10.2024 - 01.2025
            </p>
            <p>
              <strong>Công nghệ:</strong> MongoDB, i18n, JWT, React
              (TypeScript), Ant Design, SCSS, NestJS.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Dự Án</h2>
        <div className="mt-6">
          <div className="p-4 bg-gray-800 rounded-lg mb-4">
            <h3 className="text-xl font-semibold">FitNutritionHub</h3>
            <p>Diễn đàn chia sẻ công thức nấu ăn và kế hoạch tập luyện.</p>
            <p>
              <strong>Công nghệ:</strong> Node.js, Express, MongoDB, React,
              Tailwind CSS, Cloudinary, JWT.
            </p>
            <a
              href="https://github.com/DatBui305/fitnutritionhub"
              className="text-blue-400"
            >
              Xem trên GitHub →
            </a>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg mb-4">
            <h3 className="text-xl font-semibold">Heal Tracking App</h3>
            <p>Ứng dụng theo dõi sức khỏe với tính năng chat realtime.</p>
            <p>
              <strong>Công nghệ:</strong> Flutter, Firebase, Firestore.
            </p>
            <a
              href="https://github.com/DatBui305/HealTrackingApp.git"
              className="text-blue-400"
            >
              Xem trên GitHub →
            </a>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg mb-4">
            <h3 className="text-xl font-semibold">Student Management System</h3>
            <p>Hệ thống quản lý sinh viên với NestJS và Next.js.</p>
            <p>
              <strong>Công nghệ:</strong> NestJS, Next.js, PostgreSQL, TypeORM,
              Tailwind CSS.
            </p>
            <a
              href="https://github.com/DatBui305/student-manage-with-nestjs"
              className="text-blue-400"
            >
              Backend →
            </a>
            <a
              href="https://github.com/DatBui305/student-manage-with-next-frontend"
              className="text-blue-400 ml-4"
            >
              Frontend →
            </a>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg mb-4">
            <h3 className="text-xl font-semibold">Booking Hospital API</h3>
            <p>API đặt lịch khám bệnh sử dụng MongoDB và NestJS.</p>
            <p>
              <strong>Công nghệ:</strong> NestJS, MongoDB, Mongoose, JWT,
              Swagger.
            </p>
            <a
              href="https://github.com/DatBui305/booking-hospital-api-mongo"
              className="text-blue-400"
            >
              Xem trên GitHub →
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Liên Hệ</h2>
        <p className="mt-4">📧 Email: buianhdat305@gmail.com</p>
        <p>
          🔗 LinkedIn:
          <a
            href="https://www.linkedin.com/in/anh-dat-bui-b028912aa"
            className="text-blue-400"
          >
            LinkedIn
          </a>
        </p>
        <p>
          🐱 GitHub:
          <a href="https://github.com/DatBui305" className="text-blue-400">
            GitHub
          </a>
        </p>
      </section>
    </div>
  );
}
