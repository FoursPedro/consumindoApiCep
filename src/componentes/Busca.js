import styles from './Busca.module.css'

function Busca({setCep}){

    let conteudoInput;

    function limpaPesquisa(){ 
        document.getElementById('cep').value=("");
        conteudoInput = "";
    }

    return(
        <div className={styles.busca}>
            <div> <h1>Buscar CEP</h1> </div>

            <div>
                <form>
                    <input 
                        name="cep" 
                        id="cep" 
                        placeholder="cep" 
                        maxLength={9} 
                        onChange={(e) => {conteudoInput = e.target.value}}
                    />

                    <button onClick={(e) => { 
                        e.preventDefault();
                        setCep(conteudoInput);
                        console.log("saiu do busca " + conteudoInput);
                        limpaPesquisa();
                    }}>
                        Buscar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Busca;