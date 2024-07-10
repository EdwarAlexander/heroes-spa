
export const CharactersByHero = ({ alter_ego, characters }) => {
    if( alter_ego === characters) return (<></>);

    return <p>{ characters }</p>
}