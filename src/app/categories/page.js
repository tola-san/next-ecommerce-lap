
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCategories } from "@/services/api";

export default function CategoriesPage() {
    
    const [categories, setCategories] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function loadCategories() {
            const data = await getCategories();
            setCategories(data || []);
        }

        loadCategories();
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-6 py-10">
            <div className="mb-10">
                <h1 className="text-4xl font-bold">
                    Product Categories
                </h1>
                <p className="text-gray-500 mt-2">
                    Explore our product categories
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div    
                        key={category}
                        className="border border-zinc-300 rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition"
                        onClick={() => router.push(`/categories/${category}`)}
                    >
                        <h2 className="text-xl font-semibold capitalize">
                            {category}  
                        </h2>
                    </div>
                ))}
            </div>
        </section>
    );
}