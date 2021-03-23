import Link from 'next/link'
import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'

export default function index() {
    return (
        <MainLayout>
        <Head>
            <title>Next</title>
            <meta name = 'keywords' content = 'next,javascript, nextjs,react'></meta>
            <meta name = 'description' content = 'turtorial'></meta>
            <meta charSet = 'utf-8'/>
        </Head>
            <h1>
                Next.JS
            </h1>
            <p><Link href = {'/about'}><a>About</a></Link></p>
            <p><Link href  = '/posts'><a>Posts</a></Link></p>
            <p>Lorem ipsum  </p>
        </MainLayout>
    )
}
