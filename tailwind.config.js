/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#E2FAE9",
          100: "#39BA62",
        },
        orange: {
          50: " #FCE7DC",
          100: "#F56C22",
        },
        gray: {
          10: "#F4F4F4",
          20: "#A0A6B1",
          50: "#D3D3D3",
          60: "#6C6C6C",
          100: "#E9E9E9",
        },
        black: {
          10: "#F9FAFC",
          100: "#202020",
        },
        yellow: {
          100: "#FFBC00",
        },
        purple: {
          10: "#F0EBFF",
          20: "#ECE6FF",
          70: "#A281FF",
          80: "#8F67FF",
          90: "#8F67FF",
          100: "#6A35FF",
          150: "#F9F8FF",
        },
        yellow: {
          100: "#FFBC00",
        },
      },
      fontSize: {
        50: ["8px", "10px"],
        100: ["14px", "18.23px"],
        150: ["11px", "14.32px"],
        150: ["15px", "19.25px"],
        200: ["10px", "13.02px"],
        250: ["9px", "12.09px"],
        300: ["17px", "22.13px"],
        350: ["13px", "16.97px"],
        400: ["32px", "42px"],
      },
      boxShadow: {
        upcomingeventcard:
          "0px 9.577824592590332px 19.155649185180664px 0px #00000005",
        calenderorange:
          "0px 4.352644443511963px 10.881610870361328px 0px #F56C2233",
        calendergreen:
          "box-shadow: 0px 4.352644443511963px 10.881610870361328px 0px #39BA6233",
        mobilecta:
          "0px 2.089552164077759px 5.223880290985107px 1.0447760820388794px #6A35FF33",
        dahboardpanel: "0px -10px 30px 0px #0000000D",
        modalinput: "0px 4px 26px 0px #0000000D",
      },
      padding: {
        5.5: "22px",
      },
      gap: {
        5.5: "22px",
      },
      backgroundImage: {
        dropdownselected:
          "linear-gradient(0deg, #E9E9E9, #E9E9E9), linear-gradient(0deg, #F6F6F6, #F6F6F6)",
      },
      screens: {
        bigger: "1632px",
        big: "1533px",
        albig: "1288px",
        medium: "1160px",
        mid: "1096px",
        short: "1080px",
        nshorty: "890px",
        fshorty: "830px",
        pshorty: "692px",
        kshorty: "554px",
        mini: "516px",
        vmini: "458px",
      },
    },
  },
  plugins: [],
};
