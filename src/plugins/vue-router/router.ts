import Router, { RouterOptions } from 'vue-router';

function createRouter({ routes, base, ...rest }: RouterOptions): Router {
  const router = new Router({
    mode: 'history',
    base,
    // Note: showing in Routing tab: devtools@^5.0.1
    routes,
    ...rest,
  });

  // Note: not showing in Routing tab: devtools@^5.0.1
  // IMPORTANT: этот метод утадяют из api роутера
  // router.addRoutes(routes);
  return router;
}

export default createRouter;
