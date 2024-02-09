import { useState } from 'react';
import './style.css';
import { Button, InputAdornment, TextField } from '@mui/material';

function App() {
  const [salario, setSalario] = useState<number>(0);
  const [percentualAumento, setPercentualAumento] = useState<number>(0);

  const calcularSalario = () => {
    const valorAumento = (salario / 100) * percentualAumento;
    console.log(">>>", valorAumento);

    let mensagem = `Aumento de salario permitido. Salario com aumento: ${salario + valorAumento} Valor do aumento: ${valorAumento}`;

    if(valorAumento >= 5000){
      mensagem = `Aumento de salario não permitido. Salario com aumento: ${salario + valorAumento} Valor do aumento: ${valorAumento}`;
    }

    if(valorAumento >= 2000 && valorAumento < 5000 ){
      mensagem = `Aumento permito porem está muito proximo da faixa limite, verifique. Salario com aumento: ${salario + valorAumento} Valor do aumento: ${valorAumento}`;
    }

    alert(mensagem);
  }

  return (
    <div className="app">
      <div className='colunas'>
        <TextField 
          fullWidth 
          label="Salario"
          type='number'
          onChange={(event) => {
            if(event){
              setSalario(Number(event.target.value));
            }
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          }} />
      </div>
      <div className='colunas'>
        <TextField 
          fullWidth 
          label="Percentual de Aumento"
          type='number'
          onChange={(event) => {
            if(event){
              setPercentualAumento(Number(event.target.value));
            }
          }} 
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }} />
      </div>
      <div className='colunas'>
        <Button 
          variant='contained'
          onClick={() => {
            calcularSalario();
          }}>Calcular</Button>
      </div>
    </div>
  );
}

export default App;
