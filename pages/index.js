import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from "next/image";
export default function Home({ allPostsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
              Experienced Software Engineer with a demonstrated history of working in the information technology and services industry.
              Skilled in Web, Desktop, Mobile, Cloud, Databases, and UI frameworks.
              Strong engineering professional with a HND focused in HND Computing Science from De Montfort University.</p>
          <p>
              <a href={"https://www.linkedin.com/in/robert-okoroafor-10a19314/"}>
                  <Image
                      priority
                      src="/images/LI-In-Bug.png"
                      height={130}
                      width={144}
                  />
              </a>
              <a href={"https://github.com/robooko"}>
                  <Image
                      priority
                      src="/images/Octocat.png"
                      height={130}
                      width={174}
                  />
              </a>
          </p>
        </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                      <li className={utilStyles.listItem} key={id}>
                          <Link href={`/posts/${id}`}>
                              <a>{title}</a>
                          </Link>
                          <br />
                          <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                          </small>
                      </li>
                  ))}
              </ul>
          </section>

      </Layout>
  )
}
export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
