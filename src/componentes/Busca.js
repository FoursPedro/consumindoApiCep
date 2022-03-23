import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styles from './Busca.module.css'

function Busca(){
    return(
        <div className={styles.busca}>
            <h1>Buscar CEP</h1>
            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}>
                <TextField id="outlined-basic" label="Cep" variant="outlined" type="number"/>
                <Button variant="contained">Buscar</Button>
            </Box>
        </div>
    )
}

export default Busca;