import React from 'react'
import { LogoContainer, LogoImage } from '../../styles/navigationBar'
import logoS from '../../logo-s.svg'
import logoS2 from '../../logo-s2.svg'
import logoS3 from '../../logo-s3.svg'
import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'

const NavigationBarLogo = () => {
  return (
      <LogoContainer>
          <NavLink to={'/'}>
                <Box>
                    <LogoImage src={logoS3} />
                </Box>
                <Box mt={'-4.5rem'}>
                    <LogoImage src={logoS2} />
                </Box>

                <Box mt={'-4.5rem'}>
                    <LogoImage src={logoS} />
                </Box>
            </NavLink>
    </LogoContainer>
  )
}

export default NavigationBarLogo