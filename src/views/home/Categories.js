import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/searchContext'
import I18nContext from 'utils/i18nContext'

import boissons from 'assets/groupes/boissons.jpg'
import condiments from 'assets/groupes/condiments.jpg'
import confiseries from 'assets/groupes/confiseries.jpg'
import desserts from 'assets/groupes/desserts.jpg'
import fruitslegumes from 'assets/groupes/fruitslegumes.jpg'
import laitoeuf from 'assets/groupes/laitoeuf.jpg'
import platscomposes from 'assets/groupes/platscomposes.jpg'
import viandespoissons from 'assets/groupes/viandespoissons.jpg'
import Card from 'components/Card'

const Wrapper = styled.div``
const Sizer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4em 2em;
`
const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -1em;
`
export default function Categories() {
  const { setCategories, setSubCategories } = useContext(SearchContext)

  const { translate } = useContext(I18nContext)

  return (
    <Wrapper>
      <Sizer>
        <CategoryWrapper>
          <Card
            small
            to={`/app/aliments`}
            onClick={() => {
              setCategories(['entrées et plats composés'])
              setSubCategories(['plats composés'])
            }}
          >
            <Card.Image src={platscomposes} />
            <Card.Legend>{translate(`Plats composés`)}</Card.Legend>
          </Card>
          <Card
            small
            to={`/app/aliments`}
            onClick={() => {
              setCategories(['fruits, légumes, légumineuses et oléagineux'])
              setSubCategories([])
            }}
          >
            <Card.Image src={fruitslegumes} />
            <Card.Legend>{translate(`Fruits et légumes`)}</Card.Legend>
          </Card>
          <Card
            small
            to={`/app/aliments`}
            onClick={() => {
              setCategories(['viandes, œufs, poissons'])
              setSubCategories([])
            }}
          >
            <Card.Image src={viandespoissons} />
            <Card.Legend>{translate(`Viandes et poissons`)}</Card.Legend>
          </Card>
          <Card
            small
            to={`/app/aliments`}
            onClick={() => {
              setCategories(['produits sucrés'])
              setSubCategories([])
            }}
          >
            <Card.Image src={confiseries} />
            <Card.Legend>{translate(`Confiseries`)}</Card.Legend>
          </Card>
          <Card
            small
            to={`/app/aliments`}
            onClick={() => {
              setCategories(['aides culinaires et ingrédients divers'])
              setSubCategories(['condiments'])
            }}
          >
            <Card.Image src={condiments} />
            <Card.Legend>{translate(`Condiments`)}</Card.Legend>
          </Card>
          <Card
            small
            to={`/app/aliments`}
            onClick={() => {
              setCategories(['boissons'])
              setSubCategories([])
            }}
          >
            <Card.Image src={boissons} />
            <Card.Legend>{translate(`Boissons`)}</Card.Legend>
          </Card>
          <Card
            small
            to={`/app/aliments`}
            onClick={() => {
              setCategories(['produits céréaliers'])
              setSubCategories(['gâteaux et pâtisseries'])
            }}
          >
            <Card.Image src={desserts} />
            <Card.Legend>{translate(`Desserts`)}</Card.Legend>
          </Card>
          <Card
            small
            to={`/app/aliments`}
            onClick={() => {
              setCategories(['lait et produits laitiers'])
              setSubCategories([])
            }}
          >
            <Card.Image src={laitoeuf} />
            <Card.Legend>{translate(`Produits laitiers`)}</Card.Legend>
          </Card>
        </CategoryWrapper>
      </Sizer>
    </Wrapper>
  )
}
