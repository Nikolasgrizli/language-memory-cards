import Header from "./components/Header/Header.tsx"
import SectionList from "./components/SectionList/SectionList.tsx";
import SectionTabs from "./components/SectionTabs.tsx";
import IntroSection from "./components/IntroSection/IntroSection.tsx";
import PageNav from "./components/PageNav/PageNav.tsx";
import Feedback from "./components/Feedback/Feedback.tsx";
import { useState } from "react";

import { ThemeProvider } from "@material-tailwind/react";
import { DefaultAccordion } from "./components/DefaultAccordion/DefaultAccordion.tsx";


type PageType = 'main' | 'second';

function App() {
  const [pageVisible, setPageVisible] = useState('main');


  return (
    <ThemeProvider>
      <Header></Header>

      <main>
        <IntroSection></IntroSection>
        {/* <DefaultAccordion></DefaultAccordion> */}

        <PageNav active={pageVisible} onPageChange={(current: PageType)=> setPageVisible(current)}></PageNav>

        {pageVisible === 'main' && (
          <>
            <SectionList></SectionList>
            <SectionTabs></SectionTabs>
          </>
        )}

        {pageVisible === 'second' && <Feedback message={'Hi'}></Feedback>}

      </main>
    </ThemeProvider>
  )
}

export default App
