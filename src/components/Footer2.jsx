import React, { useState } from "react";

const CollapsibleSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="text-lg">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <ul className="list-none space-y-2 mt-2">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Footer2 = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      {/* بخش بالا */}
      <div className="flex justify-center mb-8">
        <div className="text-center">
          ما را در فضای مجازی دنبال کنید
        </div>
      </div>

      {/* بخش‌های پایین */}
      <CollapsibleSection
        title="خدمات مشتریان"
        items={[
          "پرسش‌های متداول",
          "راهنمای خرید و پرداخت",
          "رویه‌های ارسال",
          "شرایط مرجوعی",
          "خرید کالای شانس",
          "ارتباط با پشتیبانی",
        ]}
      />
      <CollapsibleSection
        title="شرکت خانومی"
        items={[
          "تماس با ما",
          "درباره ما",
          "فرصت‌های شغلی",
          "حریم خصوصی",
          "مجله خانومی",
          "خانومی بیزینس",
          "خانومی TV",
        ]}
      />
      <CollapsibleSection
        title="محصولات"
        items={[
          "محصول ۱",
          "محصول ۲",
          "محصول ۳",
          "محصول ۴",
          "محصول ۵",
        ]}
      />
      <CollapsibleSection
        title="اطلاعات تماس"
        items={[
          "تلفن: ۰۲۱۹۱۲۰۰۵۰۰",
          "ایمیل: info@example.com",
          "آدرس: خیابان مثال، شهر مثال",
        ]}
      />
    </div>
  );
};

export default Footer2;
