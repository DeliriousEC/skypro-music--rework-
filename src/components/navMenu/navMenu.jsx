import { Burger } from '../burger/burger' 
import * as S from './navMenu.styles'

export function NavMenu() {
    return (
        <S.MainNav>
          <S.NavLogo >
            <S.LogoImage src="img/logo.png" alt="logo" />
          </S.NavLogo>

          <Burger />

      </S.MainNav>
    )
}

export default NavMenu