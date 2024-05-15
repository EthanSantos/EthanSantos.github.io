import ProfileCard from './components/ProfileCard'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <ProfileCard />
        <NavigationBar />
      </div>
      <Footer />
    </div>
  );
}

export default App
