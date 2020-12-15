import React from 'react'
import { useChangeTabsNavigationValue } from '@modules/Profile/hooks/useChangeTabsNavigation'
import dynamic from "next/dynamic";

const sections = {
    POSTS: dynamic(() => import("./sections/PostsSections"), { ssr: false }),
    TAGED: dynamic(() => import("./sections/TagedSections"), { ssr: false }),
    SAVED: dynamic(() => import("./sections/SavedSections"), { ssr: false })
};

const PreviewOfTabNavigation = () => {
    const tabName = useChangeTabsNavigationValue();
    const SectionOfComponent = sections[tabName];
    return <SectionOfComponent />;
}

export default PreviewOfTabNavigation
