import Layout from '@/views/layout/layout'
const indexRouter = [
    {
        path: '/',
        component: Layout,
        name: 'Views',
        redirect: '/views',
        children: [
            {
                path: 'views',
                component: () => import('@/views/pages/navContent/views'),
                
            }
        ]
    },
]
export default [
    ...indexRouter
]
