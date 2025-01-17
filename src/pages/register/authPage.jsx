import { Link, useNavigate } from 'react-router-dom'
import * as S from './authPage.styles'
import { useEffect, useState } from 'react'
import { getToken, loginUserApi, registrationUserApi } from '../../api'
import { useUserContext } from '../../context/userContext'
import { useDispatch } from 'react-redux'
import { useAccessTokenUserMutation } from '../../serviceQuery/token'
import { setAuth } from '../../store/slices/AuthorizationSlice'

export default function AuthPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [error, setError] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const [offButton, setOffButton] = useState(false)

  const [isLoginMode, setIsLoginMode] = useState(false)

  const [postToken] = useAccessTokenUserMutation()

  const handleLogin = async () => {
  
    try {
      const response = await loginUserApi(email, password)

      dispatch(setAuth(response))

      setOffButton(true)
      navigate('/')
    } catch (currentError) {
      setError(currentError.message)
      console.log(currentError)
    } finally {
      setOffButton(false)
    }
  }

  const handleRegister = async () => {

    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
    } else {
      try {
        const response = await registrationUserApi(email, password)
        setOffButton(true)

        handleLogin()

        navigate('/')
      } catch (currentError) {
        setError(currentError.message)
        console.log(error)
      } finally {
        setOffButton(false)
      }
    }
  }

  const handleIsLoginMode = () => {
    setIsLoginMode(true)
  }

  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/Auth">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister} disabled={offButton}>
                {offButton ? 'Загружаем информацию...' : 'Зарегистрироваться'}
              </S.PrimaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleLogin} disabled={offButton}>
                {offButton ? 'Загружаем информацию...' : 'Войти'}
              </S.PrimaryButton>
              <Link to="/auth">
                <S.ButtonTwo onClick={handleIsLoginMode}>
                  Зарегистрироваться
                </S.ButtonTwo>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
