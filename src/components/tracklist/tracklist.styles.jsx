import styled from "styled-components";

export const MainCenterblock = styled.div`
width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;`

export const CenterblockH2 = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;`

export const CenterblockContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
`

export const ContentTittle = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: flex-start;
margin-bottom: 24px;`

export const ContentPlaylist = styled.ul`
height: calc(100vh - 350px);
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
overflow-y: scroll;`

export const ContentTittleCol = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;`

export const Col01 = styled(ContentTittleCol)`
width: 447px;`

export const Col02 = styled(ContentTittleCol)`
width: 321px;`

export const Col03 = styled(ContentTittleCol)`
width: 245px;`

export const Col04 = styled(ContentTittleCol)`
width: 85px;
text-align: end;`

export const ContentTittleSvg = styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;`

export const PlaylistItem = styled.div`
width: 100%;
display: block;
margin-bottom: 12px;
padding-right: 20px
`

