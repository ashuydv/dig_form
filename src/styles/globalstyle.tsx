import {
    globalCss,
} from '@nextui-org/react'

const GlobalStyle = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    'input': {
        padding: '10px 16px',
        borderRadius: '4px',
        border: '1px solid #131313',
        boxShadow: '4px 4px 0px #111111',
        mb: '4px',
        '&:focus': {
            backgroundColor: '#f2f2f2',
            outline: 'none',

        }
    },
    'textarea': {
        padding: '10px 16px',
        borderRadius: '4px',
        border: '1px solid #131313',
        boxShadow: '4px 4px 0px #111111',
        mb: '4px',
        minWidth: '720px',
        minHeight: '100px',
        '&:focus': {
            backgroundColor: '#f2f2f2',
            outline: 'none',
        }
    },
    'button': {
        padding: '10px 16px',
        borderRadius: '4px',
        border: '2px solid #131313',
        minHeight: '45px',
        margin: '0px 5px',
        maxHeight: '45px',
        boxShadow: '4px 4px 0px #111111',
    }
})

export default GlobalStyle