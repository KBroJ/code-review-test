export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-4xl animate-float" style={{ animationDelay: "0s" }}>{"</>"}</div>
          <div className="absolute top-40 right-20 text-3xl animate-float" style={{ animationDelay: "1s" }}>{"{ }"}</div>
          <div className="absolute bottom-40 left-20 text-3xl animate-float" style={{ animationDelay: "2s" }}>{"( )"}</div>
          <div className="absolute bottom-20 right-10 text-4xl animate-float" style={{ animationDelay: "0.5s" }}>{"#"}</div>
          <div className="absolute top-1/3 left-5 text-2xl animate-float opacity-50" style={{ animationDelay: "1.5s" }}>{"&&"}</div>
          <div className="absolute top-1/2 right-5 text-2xl animate-float opacity-50" style={{ animationDelay: "2.5s" }}>{"||"}</div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Avatar/Logo */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full shadow-2xl shadow-primary-500/30 animate-rainbow-glow hover:animate-wiggle transition-all duration-300">
              <span className="text-6xl animate-heartbeat">👨‍💻</span>
            </div>
            {/* Orbiting Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-48 h-48 animate-spin-slow" style={{ animationDuration: "15s" }}>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 text-2xl">⚡</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl">🚀</span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl">💡</span>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl">✨</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 animate-slide-up">
            <span className="text-white">안녕하세요!</span>
            <br />
            <span className="text-gradient animate-gradient bg-gradient-to-r from-primary-400 via-accent-400 to-pink-400">딩코딩코</span>
            <span className="text-white"> 입니다</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up delay-100">
            코딩을 재미있게 배우고 싶으신가요? <br />
            함께 성장하는 코딩 여행을 떠나봐요! 🚀
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in delay-300">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-400">10K+</div>
              <div className="text-gray-500">구독자</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent-400">100+</div>
              <div className="text-gray-500">영상</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-400">500K+</div>
              <div className="text-gray-500">조회수</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
            <a
              href="https://youtube.com/@dingcodingco"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
            >
              <span className="text-2xl group-hover:animate-bounce">▶</span>
              <span>유튜브 채널 방문하기</span>
            </a>
            <a
              href="#videos"
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 border border-gray-700"
            >
              <span>인기 영상 보기</span>
              <span>→</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <div className="text-gray-500 text-sm mb-2">스크롤하여 더 보기</div>
            <svg
              className="w-6 h-6 mx-auto text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
