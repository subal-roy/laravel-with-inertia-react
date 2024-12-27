import React from "react";
import { Link } from "@inertiajs/react";
import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";

export default function Layout({ children }) {
    return (
        <>
            {/* AppBar for the header */}
            <AppBar position="sticky">
                <Toolbar>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                    >
                        <Box>
                            {/* Logo or branding */}
                            <Button color="inherit" component={Link} href="/">
                                Home
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                href="/posts"
                            >
                                Posts
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Main content */}
            <Container>
                <main>{children}</main>
            </Container>
        </>
    );
}
