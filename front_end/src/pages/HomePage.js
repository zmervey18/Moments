import Header from '../components/Header/Header'
import ImageTile from '../components/Image/ImageTile'
import wandering_mind from '../static/wandering_mind.svg'
import ideas from '../static/ideas.svg'
import my_universe from '../static/my_universe.svg'
import AlternatingList from '../components/AlternatingLists/AlternatingList'

import FeatureList from '../components/FeaturesList/FeatureList'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'


const HomePage = () => {
    return (
        <div>
            <Header />
            <ImageTile
            image={ideas}
            title="Reflect with us"
            alt="Man with thought bubbles around him"
            />
            
            <AlternatingList />
           
            
            
            <FeatureList />

            <ImageTile 
            image={my_universe}
            title="Document your world"
            alt="Woman pointing at a globe"
            />
            <h3>Ready to start journalling?</h3>
            <Button 
            buttonStyle="btn--red" 
            text= "Get Journalling" 
            />
            <Footer /> 
        </div>
    )
}

export default HomePage
