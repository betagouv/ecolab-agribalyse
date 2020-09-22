import React from 'react'
import styled from 'styled-components'

import Card from 'components/Card'
import Button from 'components/Button'

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`
export default function ExplanationsCard() {
  return (
    <Card width='33%'>
      <Card.Top>
        <Card.Title>Comment comprendre ces données ?</Card.Title>
        <p>
          Ces chiffres ont été établis en suivant la méthode du d’analyse du
          cycle de vie (ACV). Une ACV se fonde sur plusieurs critères d’analyse
          des flux entrants et sortants. On appelle « flux » tout ce qui entre
          dans la fabrication du produit et tout ce qui sort en matière de
          pollution. Pour comprendre les valeurs présentées et les modes
          d’analyse, vous pouvez consulter notre documentation.
        </p>
      </Card.Top>
      <Card.Bottom>
        <Flex>
          <Button noMargin>Documentation</Button>
          <Button noMargin hollow>
            Télécharger la base
          </Button>
        </Flex>
      </Card.Bottom>
    </Card>
  )
}