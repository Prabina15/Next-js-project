# Next-js

- React-js full stack framework for development
- In addition to building UI, next-js is also provides features like routing, rendering optimization, data fetching etc.
- It uses react server component.
- Opinonment framework(file, folder conventions)

## Features

1. Routing: file based routing
2. Rendering: Server side rendering(SSRI), Client side rendering(CSSRI), Static side Rendering(SSG)
3. Optimization: image file
4. Data fetching/File system
5. Styling

## React server component

1. Server Component(default)

- All react component in Next-js are server component by default
- Server side tasks like data fetching, files read, database data fetching, async tasks.
- Cannot use react, hooks, events, user interactions.

2. Client Component

- Can use react, hooks events, user interactions.
- Traditional react components.
- Use the directive `use client` at the top of component file.


## Routing 

- File based routing
- All routes must be inside `src/app` directory
- Every route must have `page.js` or `page.tsx` file
- `page.js` or `page.tsx` must have a default export

1. Simple routes

- Create a folder inside /src/app and add a page.js file
- /src/app/about/page.js
- /src/app/contact/page.js

2. Nested routes

- Create a folder inside a folder for nested routes
- src/app/courses/frontend/react/page.js
- src/app/courses/frontend/next/page.js
- src/app/courses/backend/express/page.js

3. Dynamic routes

- Create a folder enclosed by []
- /src/app/products/[id]/page.js

4. Nested dynamic routes

- /src/app/products/[id]/reviews/[reviewId]/page.js

5. Catch all segments

- /src/app/blogs/[...slug]/page.js 

7. Private folders
- /src/app/_folder/

8. Route groups

- /src/app/(auth)

## Layouts

- UI components that is share among different pages
- `layout.js` or `layout.tsx`

## Special files or Next.js

- page.js
- layout.js
- not-found.js
- loading.js
- error.js

## Link

- <Link> for navigation, similar to <a>
- For programmatic navigation, use the `useRouter` hook.


## Params & SearchParams

1. For Server component

- params: dynamic route params, available on page.js & layout.js
- searchParams: query, available on page.js

2. For client component

- useParams()
- useSearchParams()

## Metadata

- Metadata api is used to define metadata of the page
- page.js /layout.js
- Useful for search engine optimization(SEO)
- static: metadata
- dynamic: generateMetadata





