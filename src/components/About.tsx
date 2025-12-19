export default function About() {
  const features = [
    {
      icon: "🎯",
      title: "쉬운 설명",
      description: "복잡한 개념도 누구나 이해할 수 있게 쉽고 재미있게 설명해요",
    },
    {
      icon: "💡",
      title: "실전 프로젝트",
      description: "이론만이 아닌 실제로 만들어보며 배우는 프로젝트 중심 강의",
    },
    {
      icon: "🔥",
      title: "최신 트렌드",
      description: "개발 업계의 최신 기술과 트렌드를 빠르게 다뤄요",
    },
    {
      icon: "🤝",
      title: "소통하는 채널",
      description: "댓글과 커뮤니티를 통해 구독자분들과 적극적으로 소통해요",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 95, color: "bg-yellow-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-500" },
    { name: "React", level: 92, color: "bg-cyan-500" },
    { name: "Next.js", level: 88, color: "bg-white" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "Python", level: 80, color: "bg-blue-400" },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">딩코딩코</span>를 소개합니다
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            코딩의 재미를 알려주는 유튜브 채널!
            초보자부터 현직 개발자까지 모두를 위한 콘텐츠를 만들고 있어요.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 card-hover"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Skills & About */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              코딩, 어렵지 않아요! 🙌
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                안녕하세요! 딩코딩코 채널을 운영하고 있는 개발자입니다.
                저는 코딩이 어렵고 재미없다는 편견을 깨고 싶어요.
              </p>
              <p>
                프로그래밍은 누구나 배울 수 있고, 무엇이든 만들 수 있는
                마법 같은 도구라고 생각합니다. 저와 함께 그 마법을 배워보지 않으실래요?
              </p>
              <p>
                JavaScript, TypeScript, React, Next.js 등 웹 개발 기술부터
                알고리즘, 자료구조, 컴퓨터 과학 기초까지 다양한 주제를 다루고 있어요.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["웹개발", "프론트엔드", "백엔드", "풀스택", "튜토리얼", "코딩입문"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">주요 기술 스택</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
