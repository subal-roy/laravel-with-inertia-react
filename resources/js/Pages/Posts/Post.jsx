import React, { useState } from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { route } from "../../../../vendor/tightenco/ziggy/src/js";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import ReactTimeago from "react-timeago";

export default function Post({ post }) {
    const { delete: destroy } = useForm();

    function deletePost(e) {
        e.preventDefault();
        destroy(route("posts.destroy", post.id));
    }
    return (
        <div className="my-4 mx-auto lg:5/6">
            <Head>
                <title>Post</title>
            </Head>
            <h1 className="my-5 text-center text-xl font-semibold">
                Welcome to post detail page
            </h1>
            <div className="border p-5 rounded-md shadow-md">
                <div className="flex justify-between pb-1 border-b-2">
                    <h1 className="font-semibold">Title: {post.title}</h1>
                    <div className="flex justify-end gap-4">
                        <div>
                            <Link href={route("posts.edit", post)}>
                                <button className="bg-blue-500 px-2 rounded-sm font-semibold text-white hover:bg-blue-700 flex items-center gap-1">
                                    <FiEdit />
                                    Edit
                                </button>
                            </Link>
                        </div>
                        <div>
                            <form onSubmit={deletePost}>
                                <button className="bg-red-500 px-2 rounded-sm font-semibold text-white hover:bg-red-700 flex items-center gap-1">
                                    <MdDelete />
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <h1 className="text-gray-600">
                    Posted on: <ReactTimeago date={post.created_at}/>
                </h1>
                <p className="mt-2">{post.description}</p>
            </div>
        </div>
    );
}
