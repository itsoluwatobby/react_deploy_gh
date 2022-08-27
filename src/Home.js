import Feed from './Feed'
import { Link } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

const Home = ({ isLoading, fetchError }) => {
   const searchResults = useStoreState(state => state.searchResults)
  
   return (
    <main className='Home'>
         {isLoading && <p style={ loadingPage }>Fetching data from source...</p>}
         {fetchError && <p style={ errorStyle }>{fetchError}</p>}
         {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> :
            <>
               <p style={{marginTop: '2rem'}}>No posts to display</p>
               <p style={{marginTop: '2rem'}}>Would you like to make a post? <Link to='/post'>Make a post</Link></p>
            </>
         )}
    </main>
  );
}

export default Home;

const errorStyle = {
   textAlign: 'center',
   color: 'red'
}

const loadingPage = { 
   textAlign: 'center',
   color: 'blue',
   marginTop: '10px',
   fontSize: '20px',
   fontFamily: 'cursive' 
}
