import { Link } from "@inertiajs/react";
import React from "react";

export default function Pagination({ links }) {
    return (
        <div className="pt-5">
            {links.map((link, index) =>
                link.url ? (
                    <Link
                        key={index}
                        href={link.url}
                        className={`mr-2 hover:text-blue-500 ${
                            link.active ? "font-bold" : ""
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ) : (
                    <span
                        key={index}
                        className="mr-2 text-slate-300"
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    ></span>
                )
            )}
        </div>
    );
}
