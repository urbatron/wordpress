import { gql } from '@apollo/client';
import client from '../lib/apolloClient';

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
            query GetCategories {
                categories {
                    nodes {
                        id
                        name
                        slug
                    }
                }
            }
        `,
    });

    // Лог данных для проверки
    console.log("DEBUG: Categories data:", data);

    return {
        props: {
            categories: data?.categories?.nodes || [], // Если данные пустые, вернуть пустой массив
        },
    };
}

export default function Categories({ categories }) {
    if (!categories || categories.length === 0) {
        return <h1>Категории отсутствуют</h1>;
    }

    return (
        <div>
            <h1>Категории</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <a href={`/category/${category.slug}`}>{category.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}