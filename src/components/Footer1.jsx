import React from "react";
import '../index.css'; // وارد کردن فایل CSS سفارشی

const Footer1 = () => {
    return (
        <div className="flex bg-gray-800 text-white pt-12 pb-4">
            {/* بخش سمت چپ */}
            <div className="mt-2 flex-1 flex flex-col justify-center items-center border-r border-gray-700">
                <div className="flex items-center justify-center w-full h-full text-center">
                    <div>
                        <p>!ما را در شبکه‌های اجتماعی دنبال کنید</p>
                        <p>هفت روز هفته، از ساعت ۸ الی ۲۴ پاسخگوی سوالات شما هستیم.</p>
                        <p>تلفن: ۰۲۱۹۱۲۰۰۵۰۰</p>
                    </div>
                </div>
            </div>
            {/* بخش سمت راست */}
            <div className="flex-1 flex p-4">
                {/* نیمه اول لیست */}
                <div className="flex-1 text-right">
                    <h2 className="mb-4 font-bold">خدمات مشتریان</h2>
                    <ul className="list-none space-y-2">
                        <a href=""><li>پرسش‌های متداول</li></a>
                        <a href=""><li>راهنمای خرید و پرداخت</li></a>
                        <a href=""><li>رویه‌های ارسال</li></a>
                        <a href=""><li>شرایط مرجوعی</li></a>
                        <a href=""><li>خرید کالای شانس</li></a>
                        <a href=""><li>ارتباط با پشتیبانی</li></a>
                    </ul>
                </div>
                {/* نیمه دوم لیست */}
                <div className="flex-1 text-right">
                    <h2 className="mb-4 font-bold">شرکت نی نی</h2>
                    <ul className="list-none space-y-2">
                        <a href=""><li>تماس با ما</li></a>
                        <a href=""><li>درباره ما</li></a>
                        <a href=""><li>فرصت‌های شغلی</li></a>
                        <a href=""><li>حریم خصوصی</li></a>
                        <a href=""><li>مجله خانومی</li></a>
                        <a href=""><li>خانومی بیزینس</li></a>
                        <a href=""><li>خانومی TV</li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer1;
