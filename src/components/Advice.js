"use client"

import React from "react";
import Image from "next/image";


export default function Advice({ clicked, advice, adviceId }) {
    return (
        <div className="shadow-2xl p-12 flex flex-col items-center justify-between bg-darkGrayishBlue h-1/2 w-full desktop:w-2/5 rounded-2xl">
            <div>
                <p className={clicked ? "text-neonGreen tracking-widest text-sm font-quoteWeight text-center" : "hidden"}>A D V I C E # {adviceId}</p>
            </div>
            <div>
                <p className="text-lightCyan text-quote font-quoteWeight text-center">{advice}</p>
            </div>
            <Image
                src='/images/pattern-divider-desktop.svg'
                width={500}
                height={70}
                className="pb-5"
            />
        </div>
    )
}