import React, { useState } from "react";
import Pagination from "../../Components/Pagination";
import { Link, usePage, Head } from "@inertiajs/react";
import { useRoute } from "../../../../vendor/tightenco/ziggy";

export default function Posts({ posts }) {
    const route = useRoute();
    const { flash } = usePage().props;

    const [flasMessage, setFlashMessage] = useState(flash.message);

    setTimeout(() => {
        setFlashMessage(null);
    }, 2000);

    return (
        
        <div className="my-4 mx-auto w-3/5 xl:w-1/2">
            <Head><title>Posts</title></Head>
            <div className="mx-4 flex justify-between items-center">
                <h1 className="font-semibold">Welcome to post page...</h1>
                <Link
                    href="/posts/create"
                    className="bg-blue-700 text-white px-4 py-1 rounded-md hover:bg-blue-500"
                >
                    New Post
                </Link>
            </div>
            {flasMessage && (
                <div className="mt-5 bg-red-500 text-white text-center py-1 rounded-sm">{flasMessage}</div>
            )}

            <div>
                {posts.data.map((post) => (
                    <div
                        key={post.id}
                        className="my-4 p-4 border rounded-md shadow-md"
                    >
                        <div className="flex justify-between">
                            <h1 className="font-bold">Title: {post.title}</h1>
                            <span className="text-gray-600">
                                Posted on:
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>

                        <p>
                            <b>Description:</b>{" "}
                            {post.description
                                ? post.description
                                      .split(" ")
                                      .slice(0, 10)
                                      .join(" ")
                                : "No description availbale"}{" "}
                            ...
                        </p>
                        <div className="flex justify-end">
                            {/* <Link href={`/posts/${post.id}`} className="text-blue-500">
                                Read More...
                            </Link> */}
                            <Link
                                href={route("posts.show", post)}
                                className="text-blue-500"
                            >
                                Read More...
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination links={posts.links} />
        </div>
    );
}
