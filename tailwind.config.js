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
          20: "#A0A6B1",
          50: "#D3D3D3",
          60: "#6C6C6C",
        },
        black: {
          100: "#202020",
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
        400: ["32px", "42px"],
      },
      boxShadow: {
        upcomingeventcard:
          "0px 9.577824592590332px 19.155649185180664px 0px #00000005",
        calenderorange:
          "0px 4.352644443511963px 10.881610870361328px 0px #F56C2233",
        calendergreen:
          "box-shadow: 0px 4.352644443511963px 10.881610870361328px 0px #39BA6233",
      },
      padding: {
        5.5: "22px",
      },
      gap: {
        5.5: "22px",
      },
      screens:{
        bigger:"1632px",
        big:"1533px",
        albig:"1288px",
        medium:"1160px",
        mid:"1096px",
        short:"1080px",
      }
    },
  },
  plugins: [],
};