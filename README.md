# Blog Template:

![react blog vukanig](https://res.cloudinary.com/practicaldev/image/fetch/s--a0HUdKrl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pzr3dprepwhs53mo69xh.png)
## Goals:
- Creact UI for full stack application.
- Experience making a blog application, allowing me to render mark down.
- Have a blog where I can actually show my articles on my domain.
- Experience using Zustand.
- Make login, register, forgot password functionality.
- Practice with react.

---


# PERSONAL NOTES:
THIS PROJECT IS MADE WITH NEXT ITS MADE WITH VITE + REACTJS
- MongoDB has docs for typescript which is helpful: [Typescript Guide](https://www.mongodb.com/docs/drivers/node/current/fundamentals/typescript)
- Zustand has guides for react ts: [Typescript Guide](https://docs.pmnd.rs/zustand/guides/typescript)
- React-Markdown has guide for rendering markdown -> html [react-markdown docs](https://www.npmjs.com/package/react-markdown)
- 
> Example for creating and using state for articles / Auth functionality.
```typescript
  interface BearState {
    bears: number
    increase: (by: number) => void
  }

  const useBearStore = create<BearState>()((set) => ({
    bears: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
  }))
```
- Capture state at your highest component on the DOM tree, so when you route away the store does not get re-initialized. I could be wrong about this but that's the fix i had for issue with state not being persistant. No, I did not want to use local or sesion storage at the time.  


## TODO:

- [x] Make the individual components { swiperComponent, articleasComponent, cardComponents }
- [x] Add styling to the header component
- [x] Make the side add portion of the blog
- [x] Make sections on the main component to have the add section & articles section.
- [x] Make the single article component & add edit for login.  
- [x] Add axios & pull data from public api.
- [x] Add Zustand & pull data from the official blog api.
- [ ] Solidify the functionality for the blog login & registration.
- [x] Find out why we cannot hold the login state in the store and have it on the entire app, *updating state in wrong place in the DOM hierarchy*
- [ ] Protect routes so use cannot access login without logging out.
- [x] Add error messaging for API responses + ui actions.
- [ ] Add error handling.
- [x] add markdown functionality.

