import React, { lazy, Suspense } from 'react'
import { Router } from "@reach/router"
import LoadingScreenContent from '../components/LoadingScreenContent'

const routesTree = [
    {
        component: lazy(() => import("../screens/AccountScreen")),
        path: "/"
    },
    {
        component: lazy(() => import("../screens/PasswordScreen")),
        path: "/password"
    },
    {
        component: lazy(() => import("../screens/AppsScreen")),
        path: "/apps"
    },
    {
        component: lazy(() => import("../screens/EmailSMSScreen")),
        path: "/sms"
    },
    {
        component: lazy(() => import("../screens/NotificationsScreen")),
        path: "/notifications"
    },
    {
        component: lazy(() => import("../screens/ContactsScreen")),
        path: "/contacts"
    },
    {
        component: lazy(() => import("../screens/PrivacityScreen")),
        path: "/privacity"
    },
    {
        component: lazy(() => import("../screens/ActivityScreen")),
        path: "/activity"
    },
    {
        component: lazy(() => import("../screens/ThemeInstagramScreen")),
        path: "/theme"
    },
]

export default function Routers() {
    return (
       <Suspense fallback={<LoadingScreenContent />}>
          <Router basepath="/account">
             {routesTree.map(({ path, component: RouteComponent }, key) => (
                <RouteComponent path={path} key={key} />
                ))}
          </Router>
       </Suspense>
    )
}
