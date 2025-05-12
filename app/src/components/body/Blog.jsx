import React from "react";
import '../../assets/css/main.css';
import TopBar from "./TopBar";
import Header from "../header/Header";
import { BlogBreadCrumb, BlogSection } from "../../breadcrumbs/BlogBreadcrumbs";
import Footer from "../footer/Footer";

function Blog() {

    return (
        <>
        <TopBar />
        <Header />
        <main id="main">
            <BlogBreadCrumb />
            <BlogSection />
        </main>
        <Footer />
        </>
    )
}

export default Blog;