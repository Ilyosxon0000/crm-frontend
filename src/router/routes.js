
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/',name:"Bosh sahifa", component: () => import('pages/Admins/AdminsPage.vue') },
      { path: '/add_admin',name:"Admin qo'shish", component: () => import('pages/Admins/AddAdminPage.vue') },
      { path: '/admin_davomat', component: () => import('pages/Admins/DavomatAdminPage.vue') },
      { path: '/uqituvchilar', component: () => import('pages/TeachersPage.vue') },
      { path: '/oquvchilar', component: () => import('pages/StudentsPage.vue') },
      { path: '/moliya', component: () => import('pages/FinancePage.vue') },
      { path: '/davomat', component: () => import('pages/DavomatPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
