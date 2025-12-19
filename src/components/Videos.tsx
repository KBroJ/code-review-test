export default function Videos() {
  const videos = [
    {
      id: 1,
      title: "React 완벽 가이드 2024",
      thumbnail: "🎬",
      views: "15K",
      duration: "2:30:00",
      category: "React",
    },
    {
      id: 2,
      title: "TypeScript 기초부터 실전까지",
      thumbnail: "📘",
      views: "12K",
      duration: "1:45:00",
      category: "TypeScript",
    },
    {
      id: 3,
      title: "Next.js 14 새 기능 총정리",
      thumbnail: "⚡",
      views: "8K",
      duration: "45:00",
      category: "Next.js",
    },
    {
      id: 4,
      title: "코딩테스트 필수 알고리즘",
      thumbnail: "🧮",
      views: "20K",
      duration: "3:00:00",
      category: "알고리즘",
    },
    {
      id: 5,
      title: "개발자 취업 로드맵 2024",
      thumbnail: "🗺️",
      views: "25K",
      duration: "1:00:00",
      category: "커리어",
    },
    {
      id: 6,
      title: "Git & GitHub 마스터하기",
      thumbnail: "🐙",
      views: "18K",
      duration: "1:30:00",
      category: "Git",
    },
  ];

  const categories = ["전체", "React", "TypeScript", "Next.js", "알고리즘", "커리어"];

  return (
    <section id="videos" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            인기 <span className="text-gradient">영상</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            가장 많은 사랑을 받은 영상들을 모아봤어요.
            원하는 주제의 영상을 찾아보세요!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-gray-700 text-gray-300 hover:bg-primary-500 hover:text-white first:bg-primary-500 first:text-white"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href="https://youtube.com/@dingcodingco"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900 rounded-2xl overflow-hidden card-hover border border-gray-700"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {video.thumbnail}
                </span>
                {/* Duration Badge */}
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all duration-300">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-white group-hover:text-primary-400 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                  <span className="px-2 py-0.5 bg-gray-800 rounded text-gray-400">
                    {video.category}
                  </span>
                  <span>조회수 {video.views}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://youtube.com/@dingcodingco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
          >
            <span>더 많은 영상 보러가기</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
