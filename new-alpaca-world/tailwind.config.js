/** @type {import('tailwindcss').Config} */

module.exports = {
  // Tailwind의 class이름이 포함된 파일에 대한 경로를 구성하는 부분을 추가합니다.
  // src경로 내부에 자바스크립트, 타입스크립트, jsx를 리턴하는 파일들을 모두 작성 해줍니다.
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1280px",
    },
    extend: {
      backgroundImage: {
        alpaca01: "url('./images/temp/22KXUMU62F_6.png')",
        alpaca02: "url('./images/temp/1519dc1d77597513a40eacb90baab235.png')",
        alpaca03: "url('./images/temp/591_667_5545.jpg')",
        alpaca04: "url('./images/temp/알파카.jpg')",
        alpaca05: "url('./images/temp/images.jpeg')",
        alpaca06: "url('./images/temp/thealpaca.avif')",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(-20%)" },
          "100%": { transform: "translateY(-120%)" },
        },
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(120px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeOutDown: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(120px)",
          },
        },
      },
      animation: {
        slideUp: "slideUp 20000ms linear infinite",
        fadeInUp: "fadeInUp 1s ease forwards",
        fadeOutDown: "fadeOutDown 1s ease forwards",
      },
    },
  },
  plugins: [],
};

