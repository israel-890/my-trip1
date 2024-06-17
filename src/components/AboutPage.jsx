import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/ASweetGarden.jpg";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl z-10">
        <h2 className="text-3xl font-bold mb-4 tracking-wide text-blue-700">"My Trip"</h2>
        <p className="text-lg mb-4">
          "My Trip" הוא אתר מקצועי ופשוט לשימוש, שנועד להפוך את תכנון הטיולים
          שלך לחוויה נהדרת ומאורגנת. עם האתר הזה, תוכל לשמור ולארגן את כל
          האטרקציות והמקומות המעניינים שברצונך לבקר בצורה קלה ונוחה.
        </p>
        <p className="text-lg mb-4">
          הממשק הידידותי והעיצוב המודרני של האתר מאפשרים לך להוסיף מקומות חדשים,
          לצפות בהם על המפה ולקבל פרטים מלאים על כל אטרקציה. בנוסף, תוכל ליצור
          רשימות טיולים מותאמות אישית ולהתכונן לחופשה המושלמת שלך בקלות רבה.
        </p>
        <p className="text-lg">
          "My Trip" הוא הכלי המושלם עבור כל מי שאוהב לטייל ולחקור מקומות חדשים.
          עם האתר הזה, תוכל להפוך את החלומות שלך למציאות ולצאת לדרך בביטחון מלא,
          מבלי לפספס אף אטרקציה מעניינת.
        </p>
        <div className="mt-5 flex justify-center">
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        חזור לדף הבית
      </Link></div>
      </div>
    </div>
  );
};

export default AboutPage;
