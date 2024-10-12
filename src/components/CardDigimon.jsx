export const CardDigimon = ({ digimon }) => {

    return (
        <div className="card">
            <div className="card__header">
                <img src={digimon.image} alt={`foto de ${digimon.name}`}></img>
            </div>
            <div className="card__body">
                <h2 className="card__title">{digimon.name}</h2>
                <h2 className="card__id">ID: {digimon.id}</h2>
            </div>
        </div>
    )
}