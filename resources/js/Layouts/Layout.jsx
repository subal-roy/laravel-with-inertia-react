import { Link } from "@inertiajs/react";

export default function Layout({children}) {
    return (
        <>
            <header>
                <div className="bg-gray-300 p-4 flex justify-center space-x-5 text-xl">
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    <Link className="nav-link" href="/posts">
                        Posts
                    </Link>
                </div>
            </header>
            <main>{children}</main>
        </>
    );
}
