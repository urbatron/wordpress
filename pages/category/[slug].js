import { gql } from '@apollo/client';
import client from '../../lib/apolloClient';

export async function getServerSideProps({ params }) {
    const { data } = await client.query({
        query: gql`
            query GetCategory($slug: ID!) {
                category(id: $slug, idType: SLUG) {
                    name
                    posts {
                        nodes {
                            id
                            title
                            content
                        }
                    }
                }
            }
        `,
        variables: { slug: params.slug },
    });

    return {
        props: {
            category: data.category || null,
        },
    };
}

export default function Category({ category }) {
    if (!category) {
        return <h1>Категория не найдена</h1>;
    }

    return (
        <div>
            <h1>Категория: {category.name}</h1>
            {category.posts.nodes.length === 0 ? (
                <p>В этой категории пока нет записей.</p>
            ) : (
                <ul>
                    {category.posts.nodes.map((post) => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}