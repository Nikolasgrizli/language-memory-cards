import Header from "./components/Header"
import SectionList from "./components/SectionList.tsx";
import SectionTabs from "./components/SectionTabs.tsx";



function App() {

  return (
    <>
      <Header></Header>
      <main>
        <h1>Title</h1>
        <SectionList></SectionList>
        <SectionTabs></SectionTabs>
      </main>
    </>
  )
}

export default App
