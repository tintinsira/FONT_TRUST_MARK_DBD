import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json"; // ไฟล์ JSON ของภาษาอังกฤษ
import th from "./locales/th.json"; // ไฟล์ JSON ของภาษาไทย

i18n
  .use(initReactI18next) // เชื่อมต่อ i18next กับ react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      th: {
        translation: th,
      },
    },
    lng: "th", // ค่าเริ่มต้นเป็นภาษาไทย
    fallbackLng: "en", // ถ้าไม่มีคำแปลในภาษาไทย ให้ใช้ภาษาอังกฤษ
    interpolation: {
      escapeValue: false, // ไม่ต้อง escape เพราะ React ป้องกัน XSS เองแล้ว
    },
  });

export default i18n;
