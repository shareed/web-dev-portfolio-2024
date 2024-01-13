import { useTheme, useMediaQuery } from "@mui/material";
import HomeMobile from "./HomeMobile";
import HomeDesktop from "./HomeDesktop";


const Home = () => {
    const theme = useTheme();
     const isMatch = useMediaQuery(theme.breakpoints.down('md')); //less than md
//<HomeMobile /> when true
//<HomeDesktop/> when false
  return (
      <>
          {isMatch
              ?
              <HomeMobile />
              :
              <HomeDesktop/>
                }
      </>
  )
}

export default Home;