import { Grid, ListItemIcon } from "@mui/material"
import { SocialIconsContainerDesktop, SocialIconsContainerMobile, SocialIconsList } from "../../styles/socialIcons"
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material"


const NavigationBarSocialIcons = ({matches}) => {
  const Component = matches ? SocialIconsContainerMobile : SocialIconsContainerDesktop;
  return (
    <Component>
      <SocialIconsList type= 'row'>
          <ListItemIcon>
            <LinkedIn />
          </ListItemIcon>
        
          <ListItemIcon>
            <GitHub />
          </ListItemIcon>
      
          <ListItemIcon>
            <Instagram />
          </ListItemIcon>
      
          <ListItemIcon>
            <Twitter />
          </ListItemIcon>
      
      </SocialIconsList>
      </Component>
  )
}

export default NavigationBarSocialIcons