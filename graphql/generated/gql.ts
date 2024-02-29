/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
	'\n\tfragment BannerFragment on Banner {\n\t\tTitle\n\t\tSubTitle\n\t\tImage {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tButton {\n\t\t\tLabel\n\t\t\tLink\n\t\t}\n\t\tRibbon {\n\t\t\tText\n\t\t\tColor\n\t\t\tSize\n\t\t}\n\t}\n':
		types.BannerFragmentFragmentDoc,
	'\n\tfragment GameFragment on Game {\n\t\tname\n\t\tslug\n\t\tcover {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdevelopers {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tprice\n\t}\n':
		types.GameFragmentFragmentDoc,
	'\n\tquery GetGames($limit: Int!) {\n\t\tgames(pagination: { limit: $limit }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t\tcover {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdevelopers {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tprice\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetGamesDocument,
	'\n\tquery GetGameBySlug($slug: String!) {\n\t\tgames(filters: { slug: { eq: $slug } }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tshort_description\n\t\t\t\t\tdescription\n\t\t\t\t\tprice\n\t\t\t\t\trating\n\t\t\t\t\trelease_date\n\t\t\t\t\tgallery {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\talternativeText\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tcover {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdevelopers {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tpublisher {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tcategories {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tplatforms {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetGameBySlugDocument,
	'\n\tquery GetHome {\n\t\tbanners {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\t...BannerFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tnewGames: games(\n\t\t\tfilters: { release_date: { lte: "2024-02-29" } }\n\t\t\tsort: "release_date:desc"\n\t\t\tpagination: { limit: 8 }\n\t\t) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\t...GameFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tupcomingGames: games(\n\t\t\tfilters: { release_date: { gt: "2024-02-29" } }\n\t\t\tsort: "release_date:asc"\n\t\t\tpagination: { limit: 8 }\n\t\t) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\t...GameFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tfreeGames: games(\n\t\t\tfilters: { price: { eq: 0 } }\n\t\t\tsort: "release_date:desc"\n\t\t\tpagination: { limit: 8 }\n\t\t) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\t...GameFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t\n':
		types.GetHomeDocument
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tfragment BannerFragment on Banner {\n\t\tTitle\n\t\tSubTitle\n\t\tImage {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tButton {\n\t\t\tLabel\n\t\t\tLink\n\t\t}\n\t\tRibbon {\n\t\t\tText\n\t\t\tColor\n\t\t\tSize\n\t\t}\n\t}\n'
): (typeof documents)['\n\tfragment BannerFragment on Banner {\n\t\tTitle\n\t\tSubTitle\n\t\tImage {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tButton {\n\t\t\tLabel\n\t\t\tLink\n\t\t}\n\t\tRibbon {\n\t\t\tText\n\t\t\tColor\n\t\t\tSize\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tfragment GameFragment on Game {\n\t\tname\n\t\tslug\n\t\tcover {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdevelopers {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tprice\n\t}\n'
): (typeof documents)['\n\tfragment GameFragment on Game {\n\t\tname\n\t\tslug\n\t\tcover {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tdevelopers {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tprice\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery GetGames($limit: Int!) {\n\t\tgames(pagination: { limit: $limit }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t\tcover {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdevelopers {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tprice\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery GetGames($limit: Int!) {\n\t\tgames(pagination: { limit: $limit }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t\tcover {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdevelopers {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tprice\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery GetGameBySlug($slug: String!) {\n\t\tgames(filters: { slug: { eq: $slug } }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tshort_description\n\t\t\t\t\tdescription\n\t\t\t\t\tprice\n\t\t\t\t\trating\n\t\t\t\t\trelease_date\n\t\t\t\t\tgallery {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\talternativeText\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tcover {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdevelopers {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tpublisher {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tcategories {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tplatforms {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'
): (typeof documents)['\n\tquery GetGameBySlug($slug: String!) {\n\t\tgames(filters: { slug: { eq: $slug } }) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\tname\n\t\t\t\t\tshort_description\n\t\t\t\t\tdescription\n\t\t\t\t\tprice\n\t\t\t\t\trating\n\t\t\t\t\trelease_date\n\t\t\t\t\tgallery {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\talternativeText\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tcover {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdevelopers {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tpublisher {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tcategories {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tplatforms {\n\t\t\t\t\t\tdata {\n\t\t\t\t\t\t\tattributes {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery GetHome {\n\t\tbanners {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\t...BannerFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tnewGames: games(\n\t\t\tfilters: { release_date: { lte: "2024-02-29" } }\n\t\t\tsort: "release_date:desc"\n\t\t\tpagination: { limit: 8 }\n\t\t) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\t...GameFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tupcomingGames: games(\n\t\t\tfilters: { release_date: { gt: "2024-02-29" } }\n\t\t\tsort: "release_date:asc"\n\t\t\tpagination: { limit: 8 }\n\t\t) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\t...GameFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tfreeGames: games(\n\t\t\tfilters: { price: { eq: 0 } }\n\t\t\tsort: "release_date:desc"\n\t\t\tpagination: { limit: 8 }\n\t\t) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\t...GameFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t\n'
): (typeof documents)['\n\tquery GetHome {\n\t\tbanners {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\t...BannerFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tnewGames: games(\n\t\t\tfilters: { release_date: { lte: "2024-02-29" } }\n\t\t\tsort: "release_date:desc"\n\t\t\tpagination: { limit: 8 }\n\t\t) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\t...GameFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tupcomingGames: games(\n\t\t\tfilters: { release_date: { gt: "2024-02-29" } }\n\t\t\tsort: "release_date:asc"\n\t\t\tpagination: { limit: 8 }\n\t\t) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\t...GameFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tfreeGames: games(\n\t\t\tfilters: { price: { eq: 0 } }\n\t\t\tsort: "release_date:desc"\n\t\t\tpagination: { limit: 8 }\n\t\t) {\n\t\t\tdata {\n\t\t\t\tattributes {\n\t\t\t\t\t...GameFragment\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t\n'];

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
