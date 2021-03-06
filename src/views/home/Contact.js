import React, { useContext } from 'react'
import styled from 'styled-components'

import I18nContext from 'utils/i18nContext'

import Button from 'components/Button'

const Wrapper = styled.div``
const Sizer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4em 2em;
`
const Title = styled.h2`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2em;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export default function Video() {
  const { translate } = useContext(I18nContext)

  return (
    <Wrapper>
      <Sizer>
        <Title>
          {translate(`Vous avez des questions sur le programme Agribalyse ?`)}
        </Title>
        <ButtonWrapper>
          <Button
            href={translate(
              'https://doc.agribalyse.fr/documentation/nous-contactez/contact'
            )}
          >
            {translate(`Contactez-nous`)}
          </Button>
        </ButtonWrapper>
      </Sizer>
    </Wrapper>
  )
}
