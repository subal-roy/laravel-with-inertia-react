import React, { useState } from "react";
import Pagination from "../../Components/Pagination";
import { Link, usePage, Head } from "@inertiajs/react";
import { useRoute } from "../../../../vendor/tightenco/ziggy";
import { FiEdit } from "react-icons/fi";
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactTimeago from "react-timeago";

export default function Posts({ posts, message }) {
    const route = useRoute();
    const { flash } = usePage().props;
    const [open, setOpen] = useState(true);

    const [flashMessage, setFlashMessage] = useState(flash.message);
    const [createMessage, setCreateMessage] = useState(message);
    console.log(flash);

    return (
        <div className="my-4 mx-auto lg:w-5/6">
            <Head>
                <title>Posts</title>
            </Head>
            <div className="mx-4 flex justify-between items-center">
                <h1 className="font-semibold text-xl">
                    Welcome to post page...
                </h1>
                <Link
                    href="/posts/create"
                    className="bg-blue-500 px-2 py-1 rounded-sm font-semibold text-white hover:bg-blue-700 flex items-center gap-1"
                >
                    <FiEdit />
                    New Post
                </Link>
            </div>
            {createMessage && (
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                    setCreateMessage(null);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mt: 2 }}
                    >
                        {createMessage}
                    </Alert>
                </Collapse>
                // <div className="mt-5 bg-red-200 text-red-700 text-center py-2 rounded-sm">
                //     {flashMessage}
                // </div>
            )}
            {flashMessage && (
                <Collapse in={open}>
                    <Alert
                        severity="success"
                        color="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="error"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                    setFlashMessage(null);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mt: 2 }}
                    >
                        {flashMessage}
                    </Alert>
                </Collapse>
            )}

            <div>
                {posts.data.map((post) => (
                    <div
                        key={post.id}
                        className="my-4 p-4 border rounded-md shadow-md"
                    >
                        <div className="flex justify-between">
                            <h1 className="font-bold">Title: {post.title}</h1>
                            <h1 className="text-gray-600">
                                Posted on:{" "}
                                <ReactTimeago date={post.created_at} />
                            </h1>
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
