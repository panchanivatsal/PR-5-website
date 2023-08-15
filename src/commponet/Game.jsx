const Game = () => {
    return (
        <>
            <section className="featured-game">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="section-heading">
                                <h5 className="subtitle">
                                    Try to check out our
                                </h5>
                                <h2 className="title">
                                    featured games
                                </h2>
                                <p className="text">
                                    Check out our latest featured game! To meet today's challenges & earn cryptocurrency. Top 10
                                    players receive prizes every hour!

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="game-slider row">
                                <div className="item col-4">
                                    <div className="single-game">
                                        <img src="assets/images/game/icon1.png" alt=""/>
                                            <a href="#" className="mybtn2">PLay NoW !</a>
                                    </div>
                                </div>
                                <div className="item col-4">
                                    <div className="single-game">
                                        <img src="assets/images/game/icon2.png" alt=""/>
                                            <a href="#" className="mybtn2">PLay NoW !</a>
                                    </div>
                                </div>
                                <div className="item col-4">
                                    <div className="single-game">
                                        <img src="assets/images/game/icon3.png" alt=""/>
                                            <a href="#" className="mybtn2">PLay NoW !</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Game;