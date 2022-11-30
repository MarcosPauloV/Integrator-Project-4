import React from 'react'
import {Container} from '../../Components/Container/styled'
import Input from '../../Components/Input'
import { ErrMsg, PromoLabel, SubmitBtn} from '../beaPromoter/styled'
import {AiOutlineDownload as DownloadIcon} from 'react-icons/ai'
import {
    EvForm,
    LEv,
    InInfo,
    RTicket,
    FileLabel,
    FileInput,
    PreviewDiv,
    PreviewImg,
    StySelect,
    StyOpt,
    StyText
} from './styled'
import { useState, useRef, useEffect} from 'react'
import logForm from './logForm'
import validateInfo from './validateInfo'

const NewEvent = () => {

    const{handleChange, values, handleSubmit, erros} = logForm(validateInfo);

    const [image, setImage] = useState();
    const fileInputRef = useRef();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if(image){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result)
            };
            reader.readAsDataURL(image);
        
        } else {
            setPreview(null);
        }
    }, [image])

  return (
    <Container>
        <EvForm>
            <LEv encType='multipart/form-data' onSubmit={handleSubmit}>
                <InInfo>Preencha todos os campos marcados com " * "</InInfo>
                <PromoLabel>Escolha uma imagem para ser a capa.</PromoLabel>
                <PreviewDiv>
                    <PreviewImg src={preview}></PreviewImg>
                </PreviewDiv>
                
                <FileLabel
                htmlFor='input-file'
                onClick={(e) => {
                    e.preventDefault();
                    fileInputRef.current.click();
                }}>
                Escolha o arquivo
                <DownloadIcon style={{width: '20px', height: '20px' ,float: 'right'}}/>
                </FileLabel>

                <FileInput 
                name='evFile'
                type='file' 
                accept='image/*'
                id='input-file' 
                ref={fileInputRef} 
                onChange={(e) => {
                    const file = e.target.files[0];
                    if(file && file.type.substring(0, 5) == "image"){
                        setImage(file);
                    } else {
                        setImage(null);
                    }
                    
                }}
                >
                </FileInput>
                <PromoLabel>Qual o nome do evento? *</PromoLabel>
                <Input name='evName' type='text' placeholder='Ex: Bloco do Leão' onChange={handleChange}></Input>
                {erros.evName && <ErrMsg>{erros.evName}</ErrMsg>}
                <h1>{values.evName}</h1>
                <PromoLabel>É originário de qual estado? *</PromoLabel>
                <StySelect name='evState' onChange={handleChange}>
                    <StyOpt name='defaulState' defaultValue='Selecionar' >--Estado--</StyOpt>
                    <StyOpt>AC</StyOpt>
                    <StyOpt>AL</StyOpt>
                    <StyOpt>AP</StyOpt>
                    <StyOpt>AM</StyOpt>
                    <StyOpt>BA</StyOpt>
                    <StyOpt>CE</StyOpt>
                    <StyOpt>DF</StyOpt>
                    <StyOpt>ES</StyOpt>
                    <StyOpt>GO</StyOpt>
                    <StyOpt>MG</StyOpt>
                    <StyOpt>MA</StyOpt>
                    <StyOpt>MT</StyOpt>
                    <StyOpt>MS</StyOpt>
                    <StyOpt>MG</StyOpt>
                    <StyOpt>PA</StyOpt>
                    <StyOpt>PB</StyOpt>
                    <StyOpt>PE</StyOpt>
                    <StyOpt>PR</StyOpt>
                    <StyOpt>PI</StyOpt>
                    <StyOpt>RJ</StyOpt>
                    <StyOpt>RN</StyOpt>
                    <StyOpt>RS</StyOpt>
                    <StyOpt>RO</StyOpt>
                    <StyOpt>RR</StyOpt>
                    <StyOpt>SC</StyOpt>
                    <StyOpt>SP</StyOpt>
                    <StyOpt>SE</StyOpt>
                    <StyOpt>TO</StyOpt>
                </StySelect>
                {erros.evState && <ErrMsg>{erros.evState}</ErrMsg>}

                <PromoLabel>Em qual endereço acontecerá? *</PromoLabel>
                <Input name='evLocal' type='text' placeholder='Ex: Rua... - 100' onChange={handleChange}></Input>
                {erros.evLocal && <ErrMsg>{erros.evLocal}</ErrMsg>}

                <PromoLabel>Em qual data ele ocorre? *</PromoLabel>
                <Input name='evDate' type='date' onChange={handleChange}></Input>
                {erros.evDate && <ErrMsg>{erros.evDate}</ErrMsg>}

                <PromoLabel>Há idade mínima para entrar? Se sim, qual? *</PromoLabel>
                <StySelect name='evYear' onChange={handleChange}>
                    <StyOpt name='defaultYear' defaultValue='Selecionar'>--Idade mínima--</StyOpt>
                    <StyOpt>Sem idade mínima</StyOpt>
                    <StyOpt>+18</StyOpt>
                    <StyOpt>+16</StyOpt>
                    <StyOpt>+14</StyOpt>
                    <StyOpt>+12</StyOpt>
                    <StyOpt>+10</StyOpt>
                </StySelect>
                {erros.evYear && <ErrMsg>{erros.evYear}</ErrMsg>}

                <PromoLabel>Qual o tipo do evento? *</PromoLabel>
                <StySelect name='evType' onChange={handleChange}>
                    <StyOpt name='defaultType' defaultValue='Selecionar'>--Tipo de evento--</StyOpt>
                    <StyOpt >Festa</StyOpt>
                    <StyOpt >Humor</StyOpt>
                    <StyOpt >Teatro</StyOpt>
                    <StyOpt >Esporte</StyOpt>
                    <StyOpt>Geek</StyOpt>
                </StySelect>
                {erros.evType && <ErrMsg>{erros.evType}</ErrMsg>}

                <PromoLabel>Informe uma descrição.</PromoLabel>
                <StyText name='evOverview' placeholder='Ex: Presente há mais de 15 anos na região, o Encontro de Viola de Piacatuba...' onChange={handleChange}></StyText>
                <SubmitBtn type='submit'></SubmitBtn>
            </LEv>
            
        </EvForm>
    </Container> 
  )
}

export default NewEvent