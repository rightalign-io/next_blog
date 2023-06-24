
const Trending = () => {
    const trendintItems = [{title: 'trend 1', author: 'Author 1'} ,{title: 'trend 2', author: 'Author 2'} ,{title: 'trend 3', author: 'Author3 '} , {title: 'trend 4', author: 'Author 4'}, {title: 'trend 5', author: 'Author 5'}];
    return <div className="w-1/5 md:">
      <div className="trending">
        <h3>Trending</h3>
        <ul className="trending-post">
          {      
            trendintItems.map((trend, index) => {
              return <li>
                <a href="single-post.html">
                  <span className="number">{index + 1}</span>
                  <h3>{trend.title}</h3>
                  <span className="author">{trend.author}</span>
                </a>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  }
  
export default Trending