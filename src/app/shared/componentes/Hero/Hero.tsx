import '../../../../styles/styles.css'



function Hero(){
    return(
        <section className='hero'>
           <div className="hero__alinhar">
           <div className="hero__content">
                <h1>
                <span className='title--big'> 
                <span className="bold">Prepare-se!</span> O Coringa estreia em <span className="text--gradient bold">todos</span>  os cinemas, trazendo uma nova dimensão de <span className="text--gradient bold">loucura e emoção. Não perca!</span> 
                </span>
                    <p className='text'>
                    Tem alguma dúvida ou precisa de ajuda? Entre em contato estamos prontos para oferecer o suporte que você precisa!
                    </p>
                    
                </h1>

                <div className="hero__content__buttons">
                    <button className='button button--gradiente'>
                    CINEMAS
                    </button>

                    <button className='button button--dark'>
                        TRAILER
                    </button>
                </div>
            </div>

            <div className="hero__imagem">
            <img src="./assets/images/coringa1.png" alt="" />
            </div>
           </div>
        </section>
    )
}

export default Hero