export default function validateInfo(values){
    let erros = {};

    if (!values.evName.trim()) {
        erros.evName = 'Digite o nome do evento. ';
      }
  
    if(!values.evState || values.evState == 'defaultState'){
        erros.evState = 'Selecione um estado.'
    }
     
    if (!values.evLocal) {
        erros.evLocal = 'Informe o local do evento. ';
    } 
    
    if (!values.evDate) {
        erros.evDate = 'Selecione uma data. ';
    } 

    if (!values.evYear || values.evYear == 'defaultYear') {
        erros.evYear = 'Selecione uma idade.';
    } 

    if (!values.evType || values.evType == 'defaultType') {
        erros.evType = 'Selecione um tipo para o evento.';
      } 

    return erros;

}