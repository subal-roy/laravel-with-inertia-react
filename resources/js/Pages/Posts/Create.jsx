import { useState } from "react";
import { router } from "@inertiajs/react";

export default function CreatePost() {
    const [values, setValues] = useState({
        title: "",
        description: "",
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { id, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: "",
        }));
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();

        // Validation logic
        const newErrors = {};
        if (!values.title) newErrors.title = "Title is required.";
        if (!values.description)
            newErrors.description = "Description is required.";

        // If there are errors, set them and stop form submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Submit the form data using Inertia's post method
        router.post("/posts", values);

        // Reset form and errors after submission
        setValues({
            title: "",
            description: "",
        });
        setErrors({});
    }

    return (
        <div className="px-5 mx-auto lg:w-1/2">
            <h1 className="text-xl font-semibold mb-4 text-center mt-5">
                Create a New Post
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col border p-5 shadow-md">
                {/* Title Field */}
                <label htmlFor="title" className="mb-1 text-sm font-medium">
                    Title
                </label>
                <input
                    id="title"
                    value={values.title}
                    onChange={handleChange}
                    className={`border p-2 mb-1 ${
                        errors.title ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter post title"
                />
                {errors.title && (
                    <span className="text-red-500 mb-4">{errors.title}</span>
                )}

                {/* Description Field */}
                <label
                    htmlFor="description"
                    className="mt-5 mb-1 text-sm font-medium"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    value={values.description}
                    onChange={handleChange}
                    className={`border p-2 mb-1 ${
                        errors.description
                            ? "border-red-500"
                            : "border-gray-300"
                    }`}
                    placeholder="Enter post description"
                    rows="4"
                />
                {errors.description && (
                    <span className="text-red-500 mb-4">
                        {errors.description}
                    </span>
                )}

                {/* Submit Button */}
                <div className="mx-auto mt-5">
                    <button
                        type="submit"
                        className="w-[300px] bg-blue-700 px-4 py-2 text-white rounded-sm hover:bg-blue-500"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
