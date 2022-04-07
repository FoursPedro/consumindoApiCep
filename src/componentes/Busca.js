import styles from './Busca.module.css'

function Busca({setCep}){

    let conteudoInput;

    function limpaPesquisa(){ 
        document.getElementById('cep').value=("");
        conteudoInput = "";
    }

    // var teste = "97590000"
    // var formatado = teste.replace(/^(\d{2})(\d{3})(\d{3})/, "$1.$2-$3")
    // /^(\d{2})(\d{3})(\d{3})/
    // "$1.$2-$3"

    function mascara(){
        var teste = conteudoInput.replace(/^(\d{2})(\d{3})(\d{3})/, "$1.$2-$3");
        document.getElementById('cep').value = teste;
    }

    return(
        <div className={styles.busca}>
            <div> <h1>Buscar CEP</h1> </div>

            <div>
                <form>
                    <input
                        id="cep"
                        placeholder="CEP"
                        maxLength={8}
                        onChange={(e) => {
                            conteudoInput = e.target.value;
                            mascara();
                        }}
                    />

                    <button onClick={(e) => { 
                        e.preventDefault();
                        setCep(conteudoInput);
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