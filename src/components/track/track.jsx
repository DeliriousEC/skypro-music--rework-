import * as S from './track.styles'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux'
import {
  allTracksSelector,
  currentTrackSelector,
  isPlayingSelector,
} from '../../store/selectors/indexSelectors'
import { BarControlsItem } from '../audioPlayer/barControls'
import { useState } from 'react'
import { useSetDislikeMutation, useSetLikeMutation } from '../../serviceQuery/tracks'
import { useEffect } from 'react'

export function Track({ isLoading, track, isFavorites = false }) {
  const currentTrack = useSelector(currentTrackSelector)
  const isPlaying = useSelector(isPlayingSelector)

  const tracks = useSelector(allTracksSelector)

  const [setLike] = useSetLikeMutation();
  const [setDislike] = useSetDislikeMutation();

  const { id } = JSON.stringify((localStorage.getItem("auth")))

  const auth = JSON.stringify((localStorage.getItem("user")));

  const isUserLike = Boolean(track?.stared_user?.find((user) => user.id === id)
  );
  const [isLiked, setIsLiked] = useState(isUserLike);


  useEffect(() => {
    if (isFavorites) {
      setIsLiked(isFavorites);
    } else {
      setIsLiked(isUserLike);
    }
  }, [isUserLike, isFavorites]);


  return (
    <S.PlaylistTrack className="track">
      <S.TrackTittle>
        <S.TrackTittleImage>
          {currentTrack && currentTrack.id === track.id ? (
            <S.PointPlaying $playing={isPlaying} />
          ) : (
            <S.TrackTittleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.TrackTittleSvg>
          )}
        </S.TrackTittleImage>
        <div className="track__title-text">
          {!isLoading ? (
            <S.TrackTittleLink>
              {track.name}
              {track.remix ? (
                <S.TrackTittleSpan>{track.remix}</S.TrackTittleSpan>
              ) : (
                ''
              )}
            </S.TrackTittleLink>
          ) : (
            <Skeleton baseColor='#696969' count={1} width={250} />
          )}
        </div>
      </S.TrackTittle>
      <S.TrackAuthor>
        {!isLoading ? (
          <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
        ) : (
          <Skeleton baseColor='#696969' count={1} width={250} />
        )}
      </S.TrackAuthor>
      <S.TrackAlbum>
        {!isLoading ? (
          <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
        ) : (
          <Skeleton baseColor='#696969' count={1} width={250} />
        )}
      </S.TrackAlbum>

      {!isLoading ? (
        <S.Tracktime className="track__time">
          <BarControlsItem 
           alt="like"
           click={() => {
            //  функция пока не добавлена
           }}
           isActive={isLiked}
           />

          <S.TrackTimeSvg alt="time">
            <use xlinkHref="/musical_service/src/fonts and style/img/icon/sprite.svg#icon-like" />
          </S.TrackTimeSvg>
          <S.TrackTimeText>{track.duration_in_seconds}</S.TrackTimeText>
        </S.Tracktime>
      ) : (
        <Skeleton count={1} />
      )}
    </S.PlaylistTrack>
  )
}

export default Track
