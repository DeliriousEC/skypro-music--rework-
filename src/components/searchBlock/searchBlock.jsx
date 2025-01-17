import * as S from './searchBlock.styles'


export function SearchBlock() {
    return(
        <S.CenterblockSearch className="search">
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search" />
      </S.CenterblockSearch>
    )
}

export default SearchBlock
