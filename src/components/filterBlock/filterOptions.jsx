import * as S from './filterBlock.styles'

export function FilterOptions() {
    return (
        <div>
            <S.FilterOptions>
                <li><S.DropdownItems href="http://">Фильтр 1</S.DropdownItems></li>
                <li><S.DropdownItems href="http://">Фильтр 2</S.DropdownItems></li>
                <li><S.DropdownItems href="http://">Фильтр 3</S.DropdownItems></li>
                <li><S.DropdownItems href="http://">Фильтр 4</S.DropdownItems></li>
                <li><S.DropdownItems href="http://">Фильтр 5</S.DropdownItems></li>
                <li><S.DropdownItems href="http://">Фильтр 6</S.DropdownItems></li>
            </S.FilterOptions>
        </div>
    );
  };

export default FilterOptions;