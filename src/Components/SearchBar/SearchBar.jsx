import React, {useState} from 'react'
import { Container, WrapperFlex } from '../../styledComponentsCommon/CommonStyled';
import { useSelector } from 'react-redux';
import {
    SearchBarInput,
    SearchBarLink,
    Dropdown,
    SearchDropdownLink,
    SearchDropdownImg,
    SearchBarMainFlex
} from "./SearchBarStyled"




const SearchBar = () => {

    const state = useSelector(state => state.getItems);
    const [searchBarValue, setSearchBarValue] = useState("");

    const onChangeSearchInput = (event) => {
        setSearchBarValue(event.target.value)
    };


    return (
        <Container>
            <SearchBarMainFlex>
                <WrapperFlex>
                    <SearchBarLink to={`/maleElements`} padding="20px 0" margin="0 40px 0 0">Чоловікам</SearchBarLink>
                    <SearchBarLink to={`/femaleElements`} padding="20px 0">Жінкам</SearchBarLink>
                </WrapperFlex>
                <form>
                    <SearchBarInput value={searchBarValue} onChange={(e) => { onChangeSearchInput(e) }} />
                </form>
                <Dropdown fd="column" align="start">
                    {
                        state.items.filter((item) => {
                            const searchTerm = searchBarValue.toLowerCase();
                            const fullName = item.fullName.toLowerCase()
                            return searchTerm && fullName.startsWith(searchTerm)
                        })
                            .map((item) => {
                                return <SearchDropdownLink key={item.id} to={`/${item.id}`}>
                                    <WrapperFlex>
                                        <SearchDropdownImg src={item.img} ></SearchDropdownImg>
                                        {item.fullName}
                                    </WrapperFlex>
                                </SearchDropdownLink>
                            })
                    }
                </Dropdown>


            </SearchBarMainFlex>
        </Container>
    )
}

export default SearchBar
