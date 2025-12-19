export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">💻</span>
              <span className="text-xl font-bold text-gradient">딩코딩코</span>
            </div>
            <p className="text-gray-400 text-sm">
              코딩을 재미있게 배우는 유튜브 채널
              <br />
              함께 성장하는 코딩 여행을 떠나봐요!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  홈
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  소개
                </a>
              </li>
              <li>
                <a href="#videos" className="text-gray-400 hover:text-white transition-colors">
                  영상
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-white transition-colors">
                  응원
                </a>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-bold text-white mb-4">채널 링크</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://youtube.com/@dingcodingco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2"
                >
                  <span>▶</span> YouTube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <span>💬</span> Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>📧</span> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} 딩코딩코 팬 페이지. Made with ❤️ by fans.
          </p>
          <p className="text-gray-600 text-xs">
            이 사이트는 딩코딩코 채널의 비공식 팬 페이지입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
