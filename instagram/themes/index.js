import {extendTheme} from '@chakra-ui/react';
import {ColorPalette} from './color';
import {Typography} from './typography';
import {theme} from '@chakra-ui/react';


const OverrideTheme = {
    ...theme,
    ...ColorPalette,
    ...Typography,
    styles:{
        ...theme.styles,
        global:{
            ...theme.styles.global,
            body:{
                color: "#0e0e0d",
                bg: "#fafafa",
            }
        }
    }
} 

export const instagramTheme = extendTheme(OverrideTheme);