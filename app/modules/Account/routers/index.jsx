import React from 'react'
import { Router } from "@reach/router"
import dynamic from 'next/dynamic'


const routesTree = [
    {
        component: dynamic(() => import("../screens/AccountScreen")),
        path: "/"
    },
    {
        component: dynamic(() => import("../screens/PasswordScreen")),
        path: "/password"
    },
    {
        component: dynamic(() => import("../screens/AppsScreen")),
        path: "/apps"
    },
    {
        component: dynamic(() => import("../screens/EmailSMSScreen")),
        path: "/sms"
    },
    {
        component: dynamic(() => import("../screens/NotificationsScreen")),
        path: "/notifications"
    },
    {
        component: dynamic(() => import("../screens/ContactsScreen")),
        path: "/contacts"
    },
    {
        component: dynamic(() => import("../screens/PrivacityScreen")),
        path: "/privacity"
    },
    {
        component: dynamic(() => import("../screens/ActivityScreen")),
        path: "/activity"
    },
    {
        component: dynamic(() => import("../screens/ThemeInstagramScreen")),
        path: "/theme"
    },
]

export default function Routers() {
    return (
       <Router basepath="/account">
          {routesTree.map(({path,component:RouteComponent},key)=>(
             <RouteComponent path={path} key={key} />
            ))}
       </Router>
    )
}
