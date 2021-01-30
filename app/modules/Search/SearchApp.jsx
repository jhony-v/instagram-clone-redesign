import React from 'react'
import SearchLayout from './components/SearchLayout'
import SuggestedListExploreWrapper from './components/SuggestedListExploreWrapper'
import ExploreListPeople from './containers/ExploreListPeople'
import ExploreSidebarFilter from './containers/ExploreSidebarFilter'

const SearchApp = () => {
    return (
       <SearchLayout.Root>
          <SearchLayout.SidebarOverlay>
             <SearchLayout.Sidebar>
                <ExploreSidebarFilter/>
             </SearchLayout.Sidebar>
          </SearchLayout.SidebarOverlay>
          <SearchLayout.Main>
             <SuggestedListExploreWrapper>
                <ExploreListPeople />
             </SuggestedListExploreWrapper>
          </SearchLayout.Main>
       </SearchLayout.Root>
    )
}

export default SearchApp
