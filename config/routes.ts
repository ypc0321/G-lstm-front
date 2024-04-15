export default [
  {
    path: "/",
    component: "@/layouts/index",
    layout: false,
    routes: [
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "/home",
        component: "home",
      },
      {
        path: "/detection",
        component: "detection",
      },
      {
        path: "/finishoff",
        component: "finishoff",
      },
    ],
  },
];
