import Card from './Card'
function Pgs({pgs, removePgs}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Available PGs</h2>
            </div>
            <div className='cards'>
                {
                    pgs.map( (pg) => {
                        return <Card key={pg.name} {...pg} removePgs={removePgs}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Pgs;