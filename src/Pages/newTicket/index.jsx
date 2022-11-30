import React, { useState, useRef, useEffect } from 'react'
import { Container } from '../../Components/Container/styled'
import {AiOutlineDownload as DownloadIcon} from 'react-icons/ai'
import {
    OptDiv,
    OptInfo,
    OptTitle,
    LinkBtn,
    BtnDiv,
    TickForm,
    LinkForm,
    Warning,
    LinkTo,
    SubmitLink
} from './styled'
import { 
    PreviewDiv,
    PreviewImg,
    FileLabel,
    FileInput,
    StySelect,
    StyOpt,
} from '../newEvent/styled'
import { RefDiv } from '../../Components/PromoterContent/styled'
import Title from '../../Components/Title/Title'
import { FormTitle, PromoLabel, SubmitBtn } from '../beaPromoter/styled'
import Input from '../../Components/Input'

const NewTicket = () => {
    const[optSelect, setOptSelect] = useState(false);
    const[linkSelect, setLinkSelect] = useState(false);



    const tickRef = useRef(null);
    const linkRef = useRef(null)

    const scrollToEl = (e) => {
        window.scrollTo({
            top: e.current.offsetTop,
            behavior: 'smooth'
        })
    };

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
    <>
        <OptInfo>
            <OptTitle>Info... ou coloque o Link da sua plataforma responsável pelo gerenciamento e pagamento dos ingressos!</OptTitle>
            
            {!optSelect ? 
            <BtnDiv>
                <LinkBtn
                onClick={() => {
                    scrollToEl(tickRef);
                }}>Cadastrar ingresso
                </LinkBtn>


                <LinkBtn
                onClick={() => {
                    setOptSelect(true);
                    setLinkSelect(true);
                }}>Linkar plataforma
                </LinkBtn>
                <Warning>Esta escolha não poderá ser desfeita depois. </Warning>
            </BtnDiv>
            : <Warning></Warning>}
        </OptInfo>
        <RefDiv ref={tickRef}></RefDiv>
        <Container>
            <OptDiv>
                
                {!linkSelect ? 
                <TickForm>
                        <FormTitle>Cadastre aqui o seu ingresso</FormTitle>
                        <PromoLabel>Informe o preço atual. Esta informação poderá ser editada posteriormente, caso haja troca de lote.</PromoLabel>
                        <Input type='number'></Input>
                        <PromoLabel>Quantas unidades ao total estarão disponíveis para venda? Independente do lote.</PromoLabel>
                        <Input type='text'></Input>
                        <PromoLabel>Selecione a data de término das vendas deste ingresso</PromoLabel>
                        <Input type='date'></Input>
                        <PromoLabel>Especifique a classificação</PromoLabel>
                        <Input type='text' placeholder='Ex: Ingresso... - Vip/Premium'></Input>
                        <PromoLabel>Há separação por gênero?</PromoLabel>
                        <StySelect>
                            <StyOpt>Sim</StyOpt>
                            <StyOpt>Não</StyOpt>
                        </StySelect>
                        <PromoLabel>Key do banco de dados responsável pelo armazenamento dos seus ingressos.</PromoLabel>
                        <Input type='text' ></Input>
                        <SubmitBtn type='submit'></SubmitBtn>
                    </TickForm>
                    : 
                    
                    <LinkForm>
                        <LinkTo type='text' placeholder='Coloque aqui o link da sua plataforma.'></LinkTo>
                        <SubmitLink type='submit'>Salvar</SubmitLink>
                    </LinkForm>
                    }
                </OptDiv>
        </Container>
    </>
  )
}

export default NewTicket