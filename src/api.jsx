const APIHOST = 'https://skypro-music-api.skyeng.tech/'

export async function getTracksAll() {
  const response = await fetch(`${APIHOST}catalog/track/all/`, {
    headers: { Authorization: ``, 'Content-Type': 'application/json' },
  })

  const tracks = await response.json()

  if (!response.ok) {
    throw new Error(`Не удалось загрузить плейлист, попробуйте позже!`)
  }

  return tracks
}

export async function registrationUserApi(email, password) {
  return fetch(`${APIHOST}user/signup/`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      username: email,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => {
    if (response.status === 400) {
      return response.json().then((errorResponse) => {
        if (errorResponse.username) {
          throw new Error(errorResponse.username)
        }
        if (errorResponse.email) {
          throw new Error(errorResponse.email)
        }
        if (errorResponse.password) {
          throw new Error(errorResponse.password)
        }
      })
    }
    if (response.status === 500) {
      throw new Error('Сервер сломался')
    }
    return response.json()
  })
}

export async function loginUserApi(email, password) {
  const [loginRes, tokenRes] = await Promise.all([
    fetch(`${APIHOST}user/token/`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }),

    fetch(`${APIHOST}user/login/`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }),
  ])
  const loginJSONdata = await loginRes.json()
  const tokenJSONdata = await tokenRes.json()

  if(!loginRes.ok) {
    throw new Error(loginJSONdata.details ?? "Server Error")
  }
  if(!tokenRes.ok) {
    throw new Error(tokenJSONdata.details ?? "Server Error")
  }

  return{
    ...loginJSONdata,
    ...tokenJSONdata
  }
}

export async function getToken(email, password) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/token/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }
  )


  const data = await response.json()

  if (!response.ok) {
    throw new Error('Ошибка получения токена')
  } else {
    return data
  }
}
