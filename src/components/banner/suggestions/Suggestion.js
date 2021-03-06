import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors, mq } from 'utils/styles'

const Wrapper = styled(Link)`
  display: block;
  margin: 0 0.5vw 1vw;
  padding: 0.8em 1.6em;
  font-size: 0.8vw;
  font-weight: 700;
  color: ${colors.main};
  text-align: center;
  background-color: ${colors.white};
  border: 1px solid ${colors.white};
  border-radius: 1em;
  cursor: pointer;
  text-decoration: none;
  transition: all 300ms ease-out;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.main};
  }

  ${mq.medium} {
    font-size: 1vw;
  }
  ${mq.mediumPortrait} {
    font-size: 1.5vw;
  }
  ${mq.small} {
    font-size: 3vw;
    margin: 1vw;
  }
  ${mq.large} {
    font-size: 0.6vw;
  }
`

export default function Suggestion(props) {
  return (
    <Wrapper
      to={`/app/aliments/${props.aliment['Code_AGB']}#${props.aliment[
        'Nom_du_Produit_en_Français'
      ].replace(/ /g, '_')}`}
    >
      {props.aliment['Nom_du_Produit_en_Français']}
    </Wrapper>
  )
}
