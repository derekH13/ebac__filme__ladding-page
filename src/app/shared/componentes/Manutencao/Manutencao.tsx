import '../../../../styles/styles.css'



function Manutencao(){
    return(
<section className="manutencao">
    
    <div className="manutencao__content">
        <h1 className='title--big'>
        Introduza um pouco de <span className="text--gradient bold">anarquia</span>. Revolucione a <span className="bold">ordem</span> estabelecida e <span className="text--gradient bold">tudo se torna caos.</span>
           
        </h1>

        <p className="text">
        Em "Coringa", Arthur Fleck é um aspirante a comediante que luta contra a solidão e o desprezo em uma Gotham City em decadência. Diagnosticado com problemas mentais e vivendo sob o peso do abandono social, ele se torna cada vez mais alienado. Após uma série de eventos trágicos e humilhantes, Arthur embarca em uma jornada sombria de transformação, assumindo a identidade do Coringa. O filme explora sua descida à loucura e como ele se torna um símbolo de revolta em um mundo que o ignorou, desafiando as normas sociais e mergulhando na anarquia. Uma narrativa poderosa sobre dor, rejeição e a busca desesperada por identidade.
        </p>

       
        <ul  className="manutencao__content__info">
            <li className="manutencao__content__info__item">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0,0,256,256">
                <g fill="#cb0303" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.703,0 -23,10.297 -23,23c0,12.703 10.297,23 23,23c12.703,0 23,-10.297 23,-23c0,-12.703 -10.297,-23 -23,-23zM25,11c1.657,0 3,1.343 3,3c0,1.657 -1.343,3 -3,3c-1.657,0 -3,-1.343 -3,-3c0,-1.657 1.343,-3 3,-3zM29,38h-2h-4h-2v-2h2v-13h-2v-2h2h4v2v13h2z"></path></g></g>
                </svg>

                <p className="text">click caso queira saber mais sobre a historia do coringa</p>
            </li>
         </ul>
     
    </div>
    <img src="./assets/images/fundo-coringa.jpg" alt="" />
</section>
    )
}

export default Manutencao