import React from "react";
import { useForm, Head } from "@inertiajs/react";
import { route } from "../../../../vendor/tightenco/ziggy/src/js";

export default function Post({ post }) {
    const { delete: destroy } = useForm();

    function submit(e) {
        e.preventDefault();
        destroy(route("posts.destroy", post.id));
    }
    return (
        <div className="my-4 mx-auto w-3/5 xl:w-1/2">
            <Head>
                <title>Post</title>
            </Head>
            <h1 className="my-5 text-center text-xl font-semibold">
                Welcome to post detail page
            </h1>
            <div className="border p-5 rounded-md shadow-md">
                <div className="flex justify-between pb-1 border-b-2 mx-5">
                    <h1 className="font-semibold">Title: {post.title}</h1>
                    <h1 className="text-gray-600">
                        Posted on:{" "}
                        {new Date(post.created_at).toLocaleTimeString()}
                    </h1>
                </div>
                <p className="mt-2">{post.description}</p>
                <div className="flex justify-end">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 px-2 rounded-sm font-semibold text-white hover:bg-red-700">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
