// styles
import * as S from './style';

const Navbar = () => {
    return (
        <>
            <S.Navbar>
                <S.Logo>DaysEnglish</S.Logo>
                <S.Ul>
                    <S.Li>
                        DarkMode
                    </S.Li>
                    <S.Li>
                        Portfolio
                    </S.Li>
                    <S.Li>
                        Share
                    </S.Li>
                </S.Ul>
            </S.Navbar>
        </>
    )
}

export default Navbar;