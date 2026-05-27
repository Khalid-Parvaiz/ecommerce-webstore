"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const FloatingBackButton = () => {

    const router = useRouter();

    return (
        <button
            onClick={() => router.push("/")}
            className="
        fixed
        top-20
        left-6
        z-50
        bg-green-600
        hover:bg-green-700
        text-white
        w-14
        h-14
        rounded-full
        shadow-2xl
        flex
        items-center
        justify-center
        transition
      "
        >
            <FaArrowLeft size={20} />
        </button>
    );
};

export default FloatingBackButton;