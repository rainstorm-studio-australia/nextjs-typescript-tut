import { useRouter } from "next/router";

const BlogDetails = () => {
    const router = useRouter()
    const slug = router.query

    return <p>Blog Detail: {slug}</p>
}

export default BlogDetails