"use client";

import { useState } from "react";

export default function Support() {
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setIsSubmitted(true);
      setMessage("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const fanMessages = [
    {
      name: "코딩러버",
      message: "덕분에 개발자로 취업했어요! 정말 감사합니다 😭",
      date: "2024.12.15",
    },
    {
      name: "주니어개발자",
      message: "영상 퀄리티가 너무 좋아요. 항상 응원합니다!",
      date: "2024.12.14",
    },
    {
      name: "취준생화이팅",
      message: "React 강의 보고 프로젝트 완성했어요! 최고의 채널입니다",
      date: "2024.12.13",
    },
    {
      name: "IT스타터",
      message: "비전공자인데 딩코딩코님 영상으로 코딩 시작했어요!",
      date: "2024.12.12",
    },
  ];

  const supportLinks = [
    {
      icon: "☕",
      name: "커피 한 잔 사주기",
      description: "영상 제작을 응원해주세요",
      link: "#",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: "❤️",
      name: "채널 멤버십 가입",
      description: "특별한 혜택을 받아보세요",
      link: "#",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "🔔",
      name: "구독 & 알림설정",
      description: "새 영상을 놓치지 마세요",
      link: "https://youtube.com/@dingcodingco",
      color: "from-primary-500 to-accent-500",
    },
  ];

  return (
    <section id="support" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">응원</span>하기
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            딩코딩코 채널을 응원해주시는 모든 분들께 감사드려요!
            여러분의 응원이 더 좋은 콘텐츠를 만드는 원동력이 됩니다 💪
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {supportLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center card-hover overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Fan Messages */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Message Board */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">팬 응원 메시지 💌</h3>
            <div className="space-y-4">
              {fanMessages.map((fan, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-medium text-primary-400">{fan.name}</span>
                    <span className="text-xs text-gray-500">{fan.date}</span>
                  </div>
                  <p className="text-gray-300">{fan.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leave a Message */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">응원 메시지 남기기 ✍️</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="딩코딩코님에게 응원의 메시지를 남겨주세요!"
                  className="w-full h-40 bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-500/30"
              >
                응원 메시지 보내기 💕
              </button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mt-4 bg-green-500/20 border border-green-500 text-green-400 rounded-xl p-4 text-center animate-fade-in">
                메시지가 전송되었습니다! 감사합니다 🎉
              </div>
            )}

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-4">SNS에서도 만나요!</p>
              <div className="flex gap-4">
                <a
                  href="https://youtube.com/@dingcodingco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors"
                >
                  <span>▶</span>
                  <span>YouTube</span>
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors"
                >
                  <span>📧</span>
                  <span>Email</span>
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
                >
                  <span>💬</span>
                  <span>Discord</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
