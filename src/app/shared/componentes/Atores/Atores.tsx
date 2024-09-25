import '../../../../styles/styles.css'


function Atores(){
    return(
        <section className="atores">
           <div className="alinhar__atores">
            <h1 className="title bold">Atores</h1>

                <ul className="atores__items">
                    <li>
                        <img src="/assets/images/Joaquin.jpg" alt="" />
                       <div>
                            <h1 className="title--small">Joaquin Phoenix</h1>

                            <p className='text'>Joaquin Rafael Phoenix, nascido Joaquin Rafael Bottom é um ator, produtor e ativista norte-americano. Por seu trabalho como ator, Phoenix recebeu um Grammy, dois Globo de Ouro e quatro indicações ao Óscar, vencendo como melhor ator na cerimônia de 2020 por sua atuação em Joker.</p>
                       </div>
                    </li>
                    <li>
                        <img src="/assets/images/robert.jpg" alt="" />
                       <div>
                            <h1 className="title--small">Robert De Niro</h1>

                            <p className='text'>Robert Anthony De Niro é um ator, produtor e cineasta ítalo-americano. Conhecido por suas parcerias com o cineasta Martin Scorsese, ele já recebeu diversos prêmios, incluindo dois Oscars, um Globo de Ouro, o Prêmio Cecil B. DeMille e um prêmio Screen Actors Guild Life Achievement.</p>
                       </div>
                    </li>
                    <li>
                        <img src="/assets/images/Zazie.png" alt="" />
                       <div>
                            <h1 className="title--small">Zazie Beetz</h1>

                            <p className='text'>Zazie Olivia Beetz é uma atriz teuto-americana, mais conhecida por seu papel como Vanessa "Van" Keefer no FX série de comédia dramática Atlanta, que a rendeu uma indicação para o Primetime Emmy Award de Melhor Atriz Coadjuvante em série de comédia. Ela também esteve no elenco de Easy, série da Netflix.</p>
                       </div>
                    </li>
                </ul>
           </div>
        </section>
    )
}

export default Atores