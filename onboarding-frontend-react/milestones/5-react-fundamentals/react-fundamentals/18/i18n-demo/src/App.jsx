import React from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8">
      <h1 className="text-3xl font-bold mb-6">{t("welcome")}</h1>
      <div className="space-x-4">
        <button
          onClick={() => changeLanguage("en")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("es")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Español
        </button>
      </div>
    </div>
  );
}

export default App;
