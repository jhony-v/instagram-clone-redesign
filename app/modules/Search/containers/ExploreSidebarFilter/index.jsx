import React from 'react'
import { BsBookmark, BsPeople } from 'react-icons/bs'
import { FiPlayCircle, FiUserPlus } from 'react-icons/fi'
import { RiHome2Line } from 'react-icons/ri'
import ExploreTitle from './components/ExploreTitle'
import ExploreWrapper from './components/ExploreWrapper'
import ItemFilterSiderbar from './components/ItemFilterSidebar'
import SearchEngineInputResult from './components/SearchEngineInputResult'

export default function ExploreSidebarFilter() {

    return (
       <ExploreWrapper>
          <ExploreTitle text="Search people" />
          <SearchEngineInputResult/>
          <ItemFilterSiderbar selected icon={BsPeople}>People</ItemFilterSiderbar>
          <ItemFilterSiderbar  icon={FiPlayCircle}>Videos</ItemFilterSiderbar>
          <ItemFilterSiderbar  icon={FiUserPlus}>Friends</ItemFilterSiderbar>
          <ItemFilterSiderbar  icon={RiHome2Line}>Posts</ItemFilterSiderbar>
          <ItemFilterSiderbar  icon={BsBookmark}>Saved</ItemFilterSiderbar>
       </ExploreWrapper>
    )
}
