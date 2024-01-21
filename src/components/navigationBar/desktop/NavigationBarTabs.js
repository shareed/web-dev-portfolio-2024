import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBarTabs = ({navLinks}) => {
    const [value, setValue] = useState()
    return (

            <Tabs indicatorColor='secondary' textColor='inherit' value={value ? value : 0} onChange={(e, val) => setValue(val)}>
                {navLinks.map((link, index) => (
                    <Tab key={index} label={link.name} component={NavLink} to={link.path} />))}
            </Tabs>
    )
}

export default NavigationBarTabs;