import styled, {css} from 'styled-components';

const generalStyles = css`
    margin-bottom: 15px;
    font-family: OpenSans;
    line-height: 30px;
`
const setNumberColumns = props => `grid-template-columns: repeat(${props.numberColumns}, 1fr)`;

const setPositionIcon = positionIcon => {
    switch(positionIcon){
        case 'center':
            return `
                text-align: center;
            `
        case 'left': 
            return `
                display: flex;
            `
        default: 
            return `
                text-align: inherit;
            `
    }

}

export const ContentContainer = styled.div`
    ${props => setPositionIcon(props.positionIcon)};
`

export const GridContainer = styled.div`
    display: grid;
    grid-column-gap: 20px;
    ${setNumberColumns};
    ${props => setColorText(props.colorText)};
`
export const Title = styled.h2`
    ${generalStyles}
    font-size: 18px;
    font-weight: 600;
    color: #333333;
`

export const Text = styled.p`
      ${generalStyles}
      font-size: 14px;
      font-weight: 400;
      color: #575757;
`

const setColorText = colorText => {
    switch(colorText) {
        case 'white':
            return `
                color: #fff;
            `
        case 'gradient':
            return `
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            background-image: linear-gradient(48deg, #00f0ff -21%, #ebacfd 121%);
            `
        default:
            return `
                color: #000;
            `
    }
}

const circleIcon = css`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #69d2e7;
    background-image: linear-gradient(48deg, #00f0ff -22%, #ebacfd 122%);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
` 
export const Icon = styled.i`
    ${generalStyles}
    font-family: themify;
    font-weight: 400;
    font-size: ${props => props.bigFontSize ? '44px' : '36px'}; 

    ${props => setColorText(props.colorText)};

    ${props => props.circleIcon ? circleIcon : ''};
`


